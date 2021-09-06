import { Context, Next } from 'koa';

export type RouterCtx = Context;
export type MiddleNext = Next;

export interface IBaseResponse<T = any> {
  success: boolean;
  code: number;
  message?: string;
  data?: T;
}
 
export type FilterPick<T, U> = Pick<T, Exclude<keyof T, U>>;
