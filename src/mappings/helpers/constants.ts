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
  kovan: "",
  goerli: "0x1795Dd984eA50ca5Dc251A1fC38191ae76E8Acd6",
  rinkeby: "",
  polygon: "",
  arbitrum: "",
  dev: "",
  bsc: "0xEE1c8DbfBf958484c6a4571F5FB7b99B74A54AA7",
};

let wethAddressByNetwork: AddressByNetwork = {
  mainnet: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", // WBNB
  kovan: "",
  goerli: "0xeFA07706B07934157c0dA4c6e91ac251bd36095a", // Fake WBNB
  rinkeby: "",
  polygon: "",
  arbitrum: "",
  dev: "",
  bsc: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", // WBNB
};

let wbtcAddressByNetwork: AddressByNetwork = {
  mainnet: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
  kovan: "",
  goerli: "0xc44101175e573760F3d1c27396550F110efD88Cb",
  rinkeby: "",
  polygon: "",
  arbitrum: "",
  dev: "",
  bsc: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
};

let busdAddressByNetwork: AddressByNetwork = {
  mainnet: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", // BUSD
  kovan: "",
  goerli: "0xCDCc86CfA84dc6808F87eE997d96C5F8eE5549F4",
  rinkeby: "",
  polygon: "",
  arbitrum: "",
  dev: "",
  bsc: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", // BUSD
};

let usdcAddressByNetwork: AddressByNetwork = {
  mainnet: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
  kovan: "",
  goerli: "0x1c0b84a4DF2bfeA7A2b4F30E33D6EA1CfEf8373B",
  rinkeby: "",
  polygon: "",
  arbitrum: "",
  dev: "",
  bsc: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
};

let usdtAddressByNetwork: AddressByNetwork = {
  mainnet: "0x55d398326f99059fF775485246999027B3197955",
  kovan: "",
  goerli: "0x72a96214DBFfD17385e6eF68885df4fffFC0ADf3",
  rinkeby: "",
  polygon: "",
  arbitrum: "",
  dev: "",
  bsc: "0x55d398326f99059fF775485246999027B3197955",
};

let balAddressByNetwork: AddressByNetwork = {
  mainnet: "0x0dDef12012eD645f12AEb1B845Cb5ad61C7423F5",
  kovan: "",
  goerli: "0x875cf904E113470F039c5C5f1B85DD17837AD254",
  rinkeby: "",
  polygon: "",
  arbitrum: "",
  dev: "",
  bsc: "0x0dDef12012eD645f12AEb1B845Cb5ad61C7423F5",
};

let daiAddressByNetwork: AddressByNetwork = {
  mainnet: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
  kovan: "",
  goerli: "0x72a96214DBFfD17385e6eF68885df4fffFC0ADf3",
  rinkeby: "",
  polygon: "",
  arbitrum: "",
  dev: "",
  bsc: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
};

let balBptAddressByNetwork: AddressByNetwork = {
  mainnet: "0x7a09ddF458FdA6e324A97D1a8E4304856fb3e702",
  kovan: "",
  goerli: "0x3a103f8614a9616af0706a729949fec8a81df05b",
  rinkeby: "",
  polygon: "",
  arbitrum: "",
  dev: "",
  bsc: "0x7a09ddF458FdA6e324A97D1a8E4304856fb3e702",
};

let amesAddressByNetwork: AddressByNetwork = {
  mainnet: "0xb9E05B4C168B56F73940980aE6EF366354357009",
  kovan: "",
  goerli: "0x7B6C1CBa7040338079e25693287034589d04a6b6",
  rinkeby: "",
  polygon: "",
  arbitrum: "",
  dev: "",
  bsc: "0xb9E05B4C168B56F73940980aE6EF366354357009",
};

let ethAddressByNetwork: AddressByNetwork = {
  mainnet: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
  kovan: "",
  goerli: "0xBd0be709AbE750641524fDECA1F49544440B7C0d",
  rinkeby: "",
  polygon: "",
  arbitrum: "",
  dev: "",
  bsc: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
};

let wUsdPlusByNetwork: AddressByNetwork = {
  mainnet: "0x800637a2704FE0104a3a41AdaF54f54aaF37d628",
  kovan: "",
  goerli: "",
  rinkeby: "",
  polygon: "",
  arbitrum: "",
  dev: "",
  bsc: "0x800637a2704FE0104a3a41AdaF54f54aaF37d628",
};

let wcUsdPlusByNetwork: AddressByNetwork = {
  mainnet: "0x1b224a294920C8c7C534115D3Dcb02dc9fB7C0A6",
  kovan: "",
  goerli: "",
  rinkeby: "",
  polygon: "",
  arbitrum: "",
  dev: "",
  bsc: "0x1b224a294920C8c7C534115D3Dcb02dc9fB7C0A6",
};

let wtUsdPlusByNetwork: AddressByNetwork = {
  mainnet: "0x12137868aA17d31586F2444e3Cd602279FabE6E8",
  kovan: "",
  goerli: "",
  rinkeby: "",
  polygon: "",
  arbitrum: "",
  dev: "",
  bsc: "0x12137868aA17d31586F2444e3Cd602279FabE6E8",
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
export let wUSDPlus: Address = forNetwork(wUsdPlusByNetwork, network);
export let wcUSDPlus: Address = forNetwork(wcUsdPlusByNetwork, network);
export let wtUSDPlus: Address = forNetwork(wtUsdPlusByNetwork, network);

export let AEQ_BPT: Address = forNetwork(balBptAddressByNetwork, network);

export let USD_STABLE_ASSETS: Address[] = [BUSD, USDC, USDT, DAI];
// PRICING_ASSETS must be sorted by order of preference
export let PRICING_ASSETS: Address[] = USD_STABLE_ASSETS.concat([
  WETH,
  wUSDPlus,
  wcUSDPlus,
  wtUSDPlus,
  WBTC,
  AEQ_BPT,
  AEQ,
  AMES,
  ETH,
]);
