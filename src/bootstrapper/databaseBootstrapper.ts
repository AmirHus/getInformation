// IMPORTS GOES HERE

export class DatabaseBootstrapper {
  datastore?: DataBase;

  // LOAD DATABASE ENV VARIABLES

  getEnvVariable() {
    return process.env.DATABASE_VARIABLE;
  }

  getDabaseInstance() {
    if (!this.datastore) this.datastore = new Database();
    return this.datastore;
  }

  getTokenDatastoreKey() {
    // CODE TO GEENERATE KEY
      return key;
  }

  getDataBaseDataLoader(): (
    request: IDatabaseeDataloaderRequest
  ) => Promise<unknown[]> {
    return async (request: IDatabaseDataloaderRequest): Promise<unknown[]> => {
      // CODE TO QUERY THE DATABASE 
      return queriedDated;
    };
  }
}
