import { PersonModule } from './person.module';

describe('PersonModule', () => {
  let personModule: PersonModule;

  beforeEach(() => {
    personModule = new PersonModule();
  });

  it('should create an instance', () => {
    expect(personModule).toBeTruthy();
  });
});
