//IMPORTS GOES HERE

export class InformationLoader
  implements ILoader<InputGeneric, Promise<OutputGeneric>> {
  //INJECTED DEPENDANCIES
  dependancyA: ILoader<
    {
      input: InputGeneric,
    },
    Promise<{
      output: OutputGeneric;
    }>
  >;
  dependancyB: (input: inputGeneric) => Promise<unknown[]>;
  dependancyC: string;

  constructor(options: IInformationLoaderOptions) {
    this.dependancyA = options.dependancyA;
    this.dependancyB = options.dependancyB;
    this.dependancyC = options.dependancyC;
  }

  async load(request: InputGeneric) {
    // CODE GET PART OF THE INFORMATION
    try {
      //CODE TO LOAD OTHER PART OF THE INFORMATION
    } catch (error) {
      //CHECK CUSTOM ERROR
      if (error instanceof OtherPartNotFoundError) {
        return { configs: [] } as IFoundInformation;
      }
      throw error;
    }
    return loadedInformation;
  }
}
