import winston, { format } from 'winston';
import os from 'os';

export function createLogger(label: string) {
  return winston.createLogger({
    defaultMeta: {
      serverName: os.hostname(),
      // 指定日志类型，如 SQL / Request / Access
      label,
    },
    format: format.combine(
      // 打印时间戳
      format.timestamp(),
      // 以 json 格式进行打印
      format.json(),
    ),
    transports: [
      // 存储在文件中
      new winston.transports.File({
        dirname: './logs',
        filename: `${label}.log`,
      }),
    ],
  });
}
