import Joi from 'joi';
import { RouterCtx, MiddleNext } from '@/typing';
import { ParameterException } from '@/utils/ErrorModel';

export default (method: string, schema: Joi.Schema) => {
  async function validateParams(ctx: RouterCtx, next: MiddleNext) {
    let data: any;
    if (method === 'get') {
      data = ctx.request.query;
    } else {
      data = ctx.request.body;
    }
    const { error } = schema.validate(data);
    if (error) {
      throw new ParameterException(error.message);
    }
    await next();
  }
  return validateParams;
};
