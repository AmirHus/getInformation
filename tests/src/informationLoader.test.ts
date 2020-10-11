// IMPORTS GOES HERE

const dataloaderMock = jest.fn(
  async (_request: GenericInterface) => {
    return [
      {
        information: 'infomration'
      },
    ] as unknown[];
  }
);

test('some test', async () => {
  // TEST CODE GOES HERE
});
