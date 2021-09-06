export const HTTP_ERROR_code: { [code: number]: string } = {
  1000: '服务器异常',
  1001: '参数错误',
  1002: '操作资源不存在',
};

export class HttpError extends Error {
  code: number;
  statusCode: number;
  name: string;

  constructor(message = HTTP_ERROR_code[1000], code = 1002, statusCode = 500) {
    super(message)
    this.statusCode = statusCode;
    this.code = code;
    this.name = 'HttpError';
  }
}

export class ParameterException extends HttpError {
  constructor(message?: string) {
    super();
    this.statusCode = 200;
    this.message = message || HTTP_ERROR_code[1001];
    this.code = 1001;
  }
}

export class NoFindException extends HttpError {
  constructor(message?: string) {
    super();
    this.statusCode = 200;
    this.message = message || HTTP_ERROR_code[1002];
    this.code = 1002;
  }
}
