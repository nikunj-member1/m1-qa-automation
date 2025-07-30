// utils/fakerUtils.ts
import { faker } from '@faker-js/faker';

export class FakerUtils {
  getFirstName(): string {
    return faker.person.firstName();
  }

  getLastName(): string {
    return faker.person.lastName();
  }
  
  getFullName(): string {
    return this.getFirstName() + " " + this.getLastName();
  }

  getEmail(name): string {
    return "AT_"+name+faker.number.int({min: 1000, max: 9999})+"@maildrop.cc";
  }

  getPassword(): string {
    return "Welcome1*";
  }

  getPhoneNumber(): string {
    return faker.phone.number({ style: 'national' });
  }

  getAddress(): string {
    return `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`;
  }

  getBirthDate(): string {
    return faker.date.birthdate().toISOString().split('T')[0]; // e.g., "1995-03-25"
  }

  getPostalCode(): string {
    return faker.location.zipCode('#####')
  }

  getDescription(): string {
    return faker.lorem.paragraphs({ min: 1, max: 3 });
  }
}
