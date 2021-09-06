import Router from 'koa-router';
import { createSchema, updateSchema } from '@/validator/TodoValidator';
import validateParams from '@/middlewares/validateParams';
import TodoController from '@/controllers/TodoController';

const router = new Router({
  prefix: '/api/v1',
});

router.get(
  '/todos',
  TodoController.getAll.bind(TodoController),
);

router.post(
  '/todo',
  validateParams('post', createSchema),
  TodoController.create.bind(TodoController)
)

router.put(
  '/todo/:id',
  validateParams('put', updateSchema),
  TodoController.update.bind(TodoController)
)

router.delete(
  '/todo/:id',
  TodoController.delete.bind(TodoController)
)

export default router.routes();
