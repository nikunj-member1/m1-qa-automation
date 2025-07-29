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

  getUsername(): string {
    return faker.internet.userName();
  }

  getPhoneNumber(): string {
    return faker.phone.number();
  }

  getAddress(): string {
    return `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.country()}`;
  }

  getBirthDate(): string {
    return faker.date.birthdate().toISOString().split('T')[0]; // e.g., "1995-03-25"
  }

  getPostalCode(): string {
    return faker.address.zipCode('#####')
  }
}
