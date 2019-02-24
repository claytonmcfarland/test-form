export class person {
  private name: string;
  private email: string;
  private number: string;

  constructor(data) {
    Object.assign(this, data);
  }

  get Name() {
    return this.name;
  }

  get Email() {
    return this.email;
  }
}
