import Todo from '@/models/TodoModel';
import { RouterCtx, IBaseResponse } from '@/typing';
import { NoFindException } from '@/utils/ErrorModel';
import { IUpdateRequest } from '@/validator/TodoValidator';

class TodoController {
  async getAll(ctx: RouterCtx) {
    try {
      const data = await Todo.findAll();
      ctx.body = { success: true, data } as IBaseResponse;
    } catch (error) {
      throw error;
    }
  }

  async create(ctx: RouterCtx) {
    try {
      const { title } = ctx.request.body;
      title.map((item: any) => item)
      const data = await Todo.create({ title, finished: false })
      ctx.body = { success: true, data } as IBaseResponse;
    } catch (error) {
      throw error;
    }
  }

  async update(ctx: RouterCtx) {
    try {
      const { id } = ctx.params;
      const { finished, title } = <IUpdateRequest>ctx.request.body;
      const item = await Todo.findByPk(id);
      if (!item) {
        throw new NoFindException();
      }
      await item.update({
        title,
        finished,
      });
      ctx.body = { success: true, data: item } as IBaseResponse;
    } catch (error) {
      throw error;
    }
  }

  async delete(ctx: RouterCtx) {
    try {
      const { id } = ctx.params;
      const item = await Todo.findByPk(id);
      if (!item) {
        throw new NoFindException();
      }
      await Todo.destroy()
      ctx.body = { success: true, data: Number(id) } as IBaseResponse;
    } catch (error) {
      throw error;
    }
  }
}

export default new TodoController();
