import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Observable, BehaviorSubject } from 'rxjs';
import { IAddress } from './interface/address';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getUsers(): Observable<IAddress[]> {
    return new Observable((observer) => {
      observer.next(
        Array.from({ length: 5000 }).map((_, i) => {
          return {
            name: faker.name.fullName(),
            city: faker.address.city(),
            buildingNumber: faker.address.buildingNumber(),
            state: faker.address.state(),
            streetAddress: faker.address.streetAddress(),
            streetName: faker.address.streetName(),
            zipCode: faker.address.zipCode(),
            latitude: faker.address.latitude(),
            longitude: faker.address.longitude(),
            picture: faker.image.food(),
            phone: faker.phone.number(),
            email: faker.internet.email() 
          }
        })
      );
    })
  }
}
