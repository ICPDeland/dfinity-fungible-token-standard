import type { Principal } from '@dfinity/principal';
export interface Block {
  'transaction' : Transaction,
  'timestamp' : bigint,
  'parentHash' : Array<number>,
}
export type BlockListResult = { 'Ok' : Array<Block> } |
  { 'Err' : ErrorInfo };
export type BlockResult = { 'Ok' : Block } |
  { 'Err' : ErrorInfo } |
  { 'Forward' : Principal };
export type BooleanResult = { 'Ok' : boolean } |
  { 'Err' : ErrorInfo };
export interface ErrorInfo { 'code' : number, 'message' : string }
export type Operation = {
    'FeeToModify' : { 'newFeeTo' : string, 'caller' : Principal }
  } |
  {
    'Approve' : {
      'fee' : bigint,
      'value' : bigint,
      'owner' : string,
      'caller' : Principal,
      'spender' : string,
    }
  } |
  { 'RemoveMinter' : { 'minter' : Principal, 'caller' : Principal } } |
  { 'FeeModify' : { 'newFee' : TokenFee, 'caller' : Principal } } |
  { 'AddMinter' : { 'minter' : Principal, 'caller' : Principal } } |
  {
    'Transfer' : {
      'to' : string,
      'fee' : bigint,
      'value' : bigint,
      'from' : string,
      'caller' : string,
    }
  } |
  { 'OwnerModify' : { 'newOwner' : Principal, 'caller' : Principal } };
export interface StorageInfo {
  'tokenId' : Principal,
  'totalBlocksCount' : bigint,
  'cycles' : bigint,
  'totalBlockSizeBytes' : bigint,
  'blockHeightOffset' : bigint,
}
export interface TokenFee {
  'rate' : number,
  'minimum' : bigint,
  'rateDecimals' : number,
}
export interface Transaction { 'createdAt' : bigint, 'operation' : Operation }
export interface _SERVICE {
  'batchAppend' : (arg_0: Array<Array<number>>) => Promise<BooleanResult>,
  'blockByHeight' : (arg_0: bigint) => Promise<BlockResult>,
  'blocksByQuery' : (arg_0: bigint, arg_1: bigint) => Promise<BlockListResult>,
  'storageInfo' : () => Promise<StorageInfo>,
}
