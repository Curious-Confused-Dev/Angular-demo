import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-servers',
  // template: `<app-server></app-server>
  // <app-server></app-server>`,
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!!!!!";
  serverName = 'Test Server';
  isServer = false;
  servers = ['Test Server 1', 'Test Server 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }
onServerCreation() {
  this.isServer = true;
  this.serverCreationStatus = "Server ======> " + this.serverName + " has been created";
  this.servers.push(this.serverName)
}
// onUpdateServerName(event: Event){
//   this.serverName = (<HTMLInputElement>event.target).value;
// }
}
