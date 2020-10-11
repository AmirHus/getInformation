// IMPORTS GOES HERE

export class MainBootstrapper {
  requestClient?: HttpClient;
  databaseBootstrapper: DatabaseInterface;

  constructor(options?: IMainBootstrapperOptions) {
    this.databaseBootstrapper =
      options?.databaseBootstrapper || new DatabaseBootstrapper();
  }

  // LOAD ENV VARIABLES

  getRequestClient(): HttpClient {
    // CHECK IF CLIENTS IS CREATED THEN RETURN IT
    return this.requestClient;
  }

  getHttpErrorResponseGenerator() {
    return new HttpErrorResponsesGenerator();
  }

  // OTHER CLASSES GET INITIALISED HERE AND INJECTED 

  getDependancyA() {
    return new DependancyA();
  }

  getInformationLoader(): ILoader<InputGeneric, Promise<OutputGeneric>> {
    return new InformationLoader({
      dependancyA: this.getDependancyA(),
      dependancyB: this.databaseBootstrapper.getDataBaseDataLoader(),
      dependancyC: this.databaseBootstrapper.getEnvVariable(),
    });
  }

  getGetInformationProcessor() {
    return new GetInformationProcessor({
      informationLoader: this.getInformationLoader(),
    });
  }
}
