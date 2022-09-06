import { BigDecimal, BigInt, Address, dataSource } from "@graphprotocol/graph-ts";

export let ZERO = BigInt.fromI32(0);
export let ZERO_BD = BigDecimal.fromString("0");
export let ONE_BD = BigDecimal.fromString("1");

export let ZERO_ADDRESS = Address.fromString("0x0000000000000000000000000000000000000000");

export let MIN_POOL_LIQUIDITY = BigDecimal.fromString("0.01");

export enum TokenBalanceEvent {
  SWAP_IN,
  SWAP_OUT,
  JOIN,
  EXIT,
}

export class AddressByNetwork {
  public mainnet: string;
  public kovan: string;
  public goerli: string;
  public rinkeby: string;
  public polygon: string;
  public arbitrum: string;
  public dev: string;
  public bsc: string;
}

let network: string = dataSource.network();

let vaultAddressByNetwork: AddressByNetwork = {
  mainnet: "0xEE1c8DbfBf958484c6a4571F5FB7b99B74A54AA7",
  kovan: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
  goerli: "0x1795Dd984eA50ca5Dc251A1fC38191ae76E8Acd6",
  rinkeby: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
  polygon: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
  arbitrum: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
  dev: "0xa0B05b20e511B1612E908dFCeE0E407E22B76028",
  bsc: "0xEE1c8DbfBf958484c6a4571F5FB7b99B74A54AA7",
};

let wethAddressByNetwork: AddressByNetwork = {
  mainnet: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", // WBNB
  kovan: "0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1",
  goerli: "0xeFA07706B07934157c0dA4c6e91ac251bd36095a", // Fake WBNB
  rinkeby: "0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1",
  polygon: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
  arbitrum: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  dev: "0x4CDDb3505Cf09ee0Fa0877061eB654839959B9cd",
  bsc: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", // WBNB
};

let wbtcAddressByNetwork: AddressByNetwork = {
  mainnet: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
  kovan: "0x1C8E3Bcb3378a443CC591f154c5CE0EBb4dA9648",
  goerli: "0xc44101175e573760F3d1c27396550F110efD88Cb",
  rinkeby: "0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8",
  polygon: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
  arbitrum: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
  dev: "0xcD80986f08d776CE41698c47f705CDc99dDBfB0A",
  bsc: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
};

// let usdAddressByNetwork: AddressByNetwork = {
//   mainnet: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", // BUSD
//   kovan: "0xc2569dd7d0fd715B054fBf16E75B001E5c0C1115",
//   goerli: "0xCDCc86CfA84dc6808F87eE997d96C5F8eE5549F4", // Fake BUSD
//   rinkeby: "0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8",
//   polygon: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
//   arbitrum: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
//   dev: "0x1528f3fcc26d13f7079325fb78d9442607781c8c",
//   bsc: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", // BUSD
// };

let busdAddressByNetwork: AddressByNetwork = {
  mainnet: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", // BUSD
  kovan: "0xc2569dd7d0fd715B054fBf16E75B001E5c0C1115",
  goerli: "0xCDCc86CfA84dc6808F87eE997d96C5F8eE5549F4",
  rinkeby: "0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8",
  polygon: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
  arbitrum: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
  dev: "0x7c0c5AdA758cf764EcD6bAC05b63b2482f90bBB2",
  bsc: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", // BUSD
};

let usdcAddressByNetwork: AddressByNetwork = {
  mainnet: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
  kovan: "0xc2569dd7d0fd715B054fBf16E75B001E5c0C1115",
  goerli: "0x1c0b84a4DF2bfeA7A2b4F30E33D6EA1CfEf8373B",
  rinkeby: "0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8",
  polygon: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
  arbitrum: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
  dev: "0x7c0c5AdA758cf764EcD6bAC05b63b2482f90bBB2",
  bsc: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
};

let usdtAddressByNetwork: AddressByNetwork = {
  mainnet: "0x55d398326f99059fF775485246999027B3197955",
  kovan: "0xcC08220af469192C53295fDd34CFb8DF29aa17AB",
  goerli: "0x72a96214DBFfD17385e6eF68885df4fffFC0ADf3",
  rinkeby: "0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8",
  polygon: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
  arbitrum: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
  dev: "0x7c0c5AdA758cf764EcD6bAC05b63b2482f90bBB2",
  bsc: "0x55d398326f99059fF775485246999027B3197955",
};

let balAddressByNetwork: AddressByNetwork = {
  mainnet: "0x0dDef12012eD645f12AEb1B845Cb5ad61C7423F5",
  kovan: "0x41286Bb1D3E870f3F750eB7E1C25d7E48c8A1Ac7",
  goerli: "0x875cf904E113470F039c5C5f1B85DD17837AD254",
  rinkeby: "0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8",
  polygon: "0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3",
  arbitrum: "0x040d1EdC9569d4Bab2D15287Dc5A4F10F56a56B8",
  dev: "0xf702269193081364E355f862f2CFbFCdC5DB738C",
  bsc: "0x0dDef12012eD645f12AEb1B845Cb5ad61C7423F5",
};

let daiAddressByNetwork: AddressByNetwork = {
  mainnet: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
  kovan: "0x04DF6e4121c27713ED22341E7c7Df330F56f289B",
  goerli: "0x72a96214DBFfD17385e6eF68885df4fffFC0ADf3",
  rinkeby: "0xc3dbf84Abb494ce5199D5d4D815b10EC29529ff8",
  polygon: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
  arbitrum: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
  dev: "0x5C0E66606eAbEC1df45E2ADd26C5DF8C0895a397",
  bsc: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
};

let balBptAddressByNetwork: AddressByNetwork = {
  mainnet: "0x7a09ddF458FdA6e324A97D1a8E4304856fb3e702",
  kovan: "0x61d5dc44849c9c87b0856a2a311536205c96c7fd",
  goerli: "0x3a103f8614a9616af0706a729949fec8a81df05b",
  rinkeby: "0x0000000000000000000000000000000000000000",
  polygon: "0x3d468AB2329F296e1b9d8476Bb54Dd77D8c2320f",
  arbitrum: "0x0000000000000000000000000000000000000000",
  dev: "0x0000000000000000000000000000000000000000",
  bsc: "0x7a09ddF458FdA6e324A97D1a8E4304856fb3e702",
};

let amesAddressByNetwork: AddressByNetwork = {
  mainnet: "0xb9E05B4C168B56F73940980aE6EF366354357009",
  kovan: "0x61d5dc44849c9c87b0856a2a311536205c96c7fd",
  goerli: "0x7B6C1CBa7040338079e25693287034589d04a6b6",
  rinkeby: "0x0000000000000000000000000000000000000000",
  polygon: "0x3d468AB2329F296e1b9d8476Bb54Dd77D8c2320f",
  arbitrum: "0x0000000000000000000000000000000000000000",
  dev: "0x0000000000000000000000000000000000000000",
  bsc: "0xb9E05B4C168B56F73940980aE6EF366354357009",
};

let ethAddressByNetwork: AddressByNetwork = {
  mainnet: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
  kovan: "0x61d5dc44849c9c87b0856a2a311536205c96c7fd",
  goerli: "0xBd0be709AbE750641524fDECA1F49544440B7C0d",
  rinkeby: "0x0000000000000000000000000000000000000000",
  polygon: "0x3d468AB2329F296e1b9d8476Bb54Dd77D8c2320f",
  arbitrum: "0x0000000000000000000000000000000000000000",
  dev: "0x0000000000000000000000000000000000000000",
  bsc: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
};

function forNetwork(addressByNetwork: AddressByNetwork, network: string): Address {
  if (network == "mainnet") {
    return Address.fromString(addressByNetwork.mainnet);
  } else if (network == "kovan") {
    return Address.fromString(addressByNetwork.kovan);
  } else if (network == "goerli") {
    return Address.fromString(addressByNetwork.goerli);
  } else if (network == "rinkeby") {
    return Address.fromString(addressByNetwork.rinkeby);
  } else if (network == "matic") {
    return Address.fromString(addressByNetwork.polygon);
  } else if (network == "bsc") {
    return Address.fromString(addressByNetwork.bsc);
  } else if (network == "arbitrum-one") {
    return Address.fromString(addressByNetwork.arbitrum);
  } else {
    return Address.fromString(addressByNetwork.dev);
  }
}

export let VAULT_ADDRESS = forNetwork(vaultAddressByNetwork, network);
export let WETH: Address = forNetwork(wethAddressByNetwork, network); // WBNB
export let WBTC: Address = forNetwork(wbtcAddressByNetwork, network);
export let BUSD: Address = forNetwork(busdAddressByNetwork, network); // BUSD
export let USDC: Address = forNetwork(usdcAddressByNetwork, network);
export let USDT: Address = forNetwork(usdtAddressByNetwork, network);
export let AEQ: Address = forNetwork(balAddressByNetwork, network);
export let AMES: Address = forNetwork(amesAddressByNetwork, network);
export let ETH: Address = forNetwork(ethAddressByNetwork, network);
export let DAI: Address = forNetwork(daiAddressByNetwork, network);

export let AEQ_BPT: Address = forNetwork(balBptAddressByNetwork, network);

// PRICING_ASSETS must be sorted by order of preference
export let PRICING_ASSETS: Address[] = [BUSD, WETH, USDC, USDT, DAI, WBTC, AEQ_BPT, AEQ, AMES, ETH];
export let USD_STABLE_ASSETS: Address[] = [BUSD, USDC, USDT, DAI];
