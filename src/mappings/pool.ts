import { BigInt, BigDecimal, Address, Bytes, ByteArray, log } from '@graphprotocol/graph-ts'
import { LOG_CALL } from '../types/templates/Pool/Pool'
import {
  Balancer,
  Pool,
  User,
  PoolToken,
  PoolShare,
  Transaction
} from '../types/schema'

/************************************
 ********** Helpers ***********
 ************************************/

function hexToDecimal(hexString: string): BigDecimal {
  let bytes = Bytes.fromHexString(hexString).reverse() as Bytes
  let bd = BigInt.fromUnsignedBytes(bytes).toBigDecimal()
  return bd.div(exponentToBigDecimal(18))
}

function exponentToBigDecimal(decimals: i32): BigDecimal {
  let bd = BigDecimal.fromString('1')
  for (let i = 0; i < decimals; i++) {
    bd = bd.times(BigDecimal.fromString('10'))
  }
  return bd
}

function createPoolShareEntity(id: string, pool: String, user: String): void {
  let poolShare = new PoolShare(id)
  poolShare.userAddress = user
  poolShare.poolId = pool
  poolShare.balance = BigDecimal.fromString('0')
  poolShare.save()
}

function createPoolTokenEntity(id: string, pool: String, address: String): void {
  let poolToken = new PoolToken(id)
  poolToken.poolId = pool
  poolToken.address = address
  poolToken.balance = BigDecimal.fromString('0')
  poolToken.weight = BigDecimal.fromString('0')
}


/************************************
 ********** Pool Controls ***********
 ************************************/

export function handleSetFees(event: LOG_CALL): void {
  let poolId = event.address.toHex()
  let pool = Pool.load(poolId)
  let swapFee = hexToDecimal(event.params.data.toHexString().slice(10,74))
  let exitFee = hexToDecimal(event.params.data.toHexString().slice(74))
  pool.swapFee = swapFee
  pool.exitFee = exitFee
  pool.save()
}

export function handleSetController(event: LOG_CALL): void {
  let poolId = event.address.toHex()
  let pool = Pool.load(poolId)
  let controller = Address.fromString(event.params.data.toHexString().slice(-40))
  pool.controller = controller
  pool.save()
}

export function handleSetPublicSwap(event: LOG_CALL): void {
  let poolId = event.address.toHex()
  let pool = Pool.load(poolId)
  let publicSwap = event.params.data.toHexString().slice(-1) == '1'
  pool.publicSwap = publicSwap
  pool.save()
}

export function handleSetPublicJoin(event: LOG_CALL): void {
  let poolId = event.address.toHex()
  let pool = Pool.load(poolId)
  let publicJoin = event.params.data.toHexString().slice(-1) == '1'
  pool.publicJoin = publicJoin
  pool.save()
}

export function handleSetPublicExit(event: LOG_CALL): void {
  let poolId = event.address.toHex()
  let pool = Pool.load(poolId)
  let publicExit = event.params.data.toHexString().slice(-1) == '1'
  pool.publicExit = publicExit
  pool.save()
}

export function handleFinalize(event: LOG_CALL): void {
  let poolId = event.address.toHex()
  let pool = Pool.load(poolId)
  let balance = hexToDecimal(event.params.data.toHexString().slice(-24))
  pool.finalized = true
  pool.publicSwap = true
  pool.publicJoin = true
  pool.publicExit = true
  pool.totalShares = balance
  pool.save()
  
  let userId = event.params.caller.toHex()
  let user = User.load(userId)
  if (user == null) {
    user = new User(userId)
    user.save()
  }

  let poolShareId = poolId.concat('-').concat(event.params.caller.toHex())
  let poolShare = PoolShare.load(poolShareId)
  if (poolShare == null) {
    createPoolShareEntity(poolShareId, poolId, event.params.caller.toHex())
    poolShare = PoolShare.load(poolShareId)
  }
  poolShare.balance = balance
  poolShare.save()
}

export function handleRebind(event: LOG_CALL): void {
  let poolId = event.address.toHex()
  let address = Address.fromString(event.params.data.toHexString().slice(10,74))
  let balance = hexToDecimal(event.params.data.toHexString().slice(74,138))
  let denorm = hexToDecimal(event.params.data.toHexString().slice(138))
  
  let poolTokenId = poolId.concat('-').concat(address.toString())
  let poolToken = PoolToken.load(poolTokenId)
  if (poolToken == null) {
    createPoolTokenEntity(poolTokenId, poolId, address.toString())
    poolToken = PoolToken.load(poolTokenId)
  }
  poolToken.balance = balance
  poolToken.weight = denorm
  poolToken.save()
}

export function handleUnbind(event: LOG_CALL): void {
  let poolId = event.address.toHex()
  let address = Address.fromString(event.params.data.toHexString().slice(-40))
  let poolTokenId = poolId.concat('-').concat(address.toString())
  let poolToken = PoolToken.load(poolTokenId)
  poolToken.balance = BigDecimal.fromString('0')
  poolToken.weight = BigDecimal.fromString('0')
  poolToken.save()
}

/************************************
 ********** JOINS & EXITS ***********
 ************************************/

export function handleJoinPool(event: LOG_CALL): void {

}