import { Component, Input, OnInit } from '@angular/core';
import { Client } from './services/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Client]
})

export class AppComponent implements OnInit {

  constructor(private client: Client) {

  }

  getInventory(): void {
    this.client.getInventory().toPromise().then(inventory => console.log(inventory))
  }

  ngOnInit(): void {
    debugger;
    this.getInventory();
  }
}
