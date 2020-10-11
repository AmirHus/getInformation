// IMPORT GOES HERE

export class GetInformationProcessor {
  informationLoader: ILoader<InputGeneric, Promise<OutputGeneric>>;

  constructor(options: IGetInformationProcessorOptions) {
    this.informationLoader = options.informationLoader;
  }

  async process(request: Request) {
    // security check

    // GET PARAMS

    if (!params) {
      // THORW CUSTOME ERROR
      throw new MissingParamsError('x param missing');
    }

    // VERIFY TOKEN AND USER PERMISSIONS

    return await this.informationLoader.load();
  }
}
