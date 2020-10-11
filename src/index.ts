//IMPORT GOES HERE

const bootstrapper = new MainBootstrapper();
const processor = bootstrapper.getInformationLoader();
const errorGenerator = bootstrapper.getHttpErrorResponseGenerator();

export async function getInformation(req: Request, res: Response) {
  try {
    const informaiton = await processor.process(req);
    return res.status(200).json(informaiton).end();
  } catch (error) {
    console.error((error as Error).message);
    const generatedError = errorGenerator.generate(error as Error);
    return res.status(generatedError.status).json(generatedError.message).end();
  }
}
