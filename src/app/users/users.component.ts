import { Component, OnInit } from '@angular/core';
import { FetchService } from '../services/fetch.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public data: Array<RootObject> = [];
  constructor(private fetchService: FetchService) {}

  ngOnInit() {
    this.fetchService.sendGetRequest().subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface RootObject {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
