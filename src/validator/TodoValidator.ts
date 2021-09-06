import Joi from 'joi';

export interface ICreateRequest {
  title: string;
}

export interface IUpdateRequest extends ICreateRequest {
  finished: boolean;
}

export const createSchema = Joi.object<ICreateRequest>({
  title: Joi.string().required(),
})

export const updateSchema = Joi.object<IUpdateRequest>({
  title: Joi.string().required(),
  finished: Joi.boolean().required(),
})
