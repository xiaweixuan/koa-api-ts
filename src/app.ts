import Koa from 'koa';
import koaBody from 'koa-body';
import TodoRouter from './routers/TodoRouter';
import catchError from './middlewares/exception';
import cors from './middlewares/cors';
import log from './middlewares/log';

const app = new Koa();

app.use(log);
app.use(cors);
app.use(catchError);
app.use(koaBody());
app.use(TodoRouter);

export default app;
