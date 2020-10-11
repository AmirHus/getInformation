export class CustomErrorA extends Error {
  constructor(message?: string) {
    super(message);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, CustomErrorA.prototype);
  }
}
