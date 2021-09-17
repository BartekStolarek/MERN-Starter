class CustomError extends Error {
  status: number;
  message: string;
  stack: any;

  constructor (status: number, message: string, stack?: string) {
    super();
    this.status = status;
    this.message = message;
    this.stack = stack || null;
  }
}

export { CustomError };
