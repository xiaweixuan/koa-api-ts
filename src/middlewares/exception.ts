import { RouterCtx, MiddleNext } from '@/typing';
import { HttpError } from '@/utils/ErrorModel';

export default async (ctx: RouterCtx, next: MiddleNext) => {
  try {
    await next();
  } catch (error) {
    if(error instanceof Error){
      if (error instanceof HttpError) {
        if(error.statusCode !== 200) {
          ctx.response.status = error.statusCode;
        }
        ctx.body = {
          code: error.code,
          message: error.message,
        };
        return;
      }
    }
    ctx.body = {
      message: 'Sometimes， mistakes are inevitable'
    };
  }
};
