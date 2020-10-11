// IMPORT GOES HERE

export class HttpErrorResponsesGenerator
  implements IGenerator<Error, IHttpErrorResponse> {
  generate(error: Error) {
    if (
      error instanceof CustomeErrorA ||
      error instanceof CustomeErrorB ||
      error instanceof CustomeErrorC ||
      error instanceof CustomeErrorD
    ) {
      return {
        status: 400,
        message: error.message,
      };
    }

    if (
      error instanceof CustomeErrorE ||
      error instanceof CustomeErrorF ||
      error instanceof CustomeErrorG
    ) {
      return {
        status: 401,
        message: error.message,
      };
    }

    if (
      error instanceof CustomeErrorH ||
      error instanceof CustomeErrorI
    ) {
      return {
        status: 403,
        message: error.message,
      };
    }

    return {
      status: 500,
      message: 'internal server error',
    };
  }
}
