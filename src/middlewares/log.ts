import _ from 'lodash';
import moment from 'moment';
import { RouterCtx, MiddleNext } from '@/typing';
import { createLogger } from '@/utils/log';

// 创建一个 access 的 log，并存储在 ./logs/access.log 中
const accessLogger = createLogger('access');

export default async (ctx: RouterCtx, next: MiddleNext) => {
  const now = moment().format('lll');
  const msg = `${ctx.req.method} ${ctx.req.url}`;
  if (
    // 如果是 Options 及健康检查或不重要 API，则跳过日志
    ctx.req.method === 'OPTIONS' ||
    ['/healthCheck', '/otherApi'].includes(ctx.req.url || '')
  ) {
    await next();
  } else {
    await next();
    accessLogger.info(msg, {
      req: {
        time: now,
        ..._.pick(ctx.request, ['url', 'method', 'httpVersion', 'length']),
        // body/query 进行序列化，避免索引过多
        body: JSON.stringify(ctx.request.body),
        query: JSON.stringify(ctx.request.query),
      },
      res: _.pick(ctx.response, ['status']),
    });
  }

};
