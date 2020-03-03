import { Component } from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styleUrls: ['./server.component.scss']
})

//@Component => Class decorator, It is a typescript feature which allow us to enhance our classes.

// Export keyword is used to acces this class globally.
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'Offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'OFFLINE' : 'ONLINE'
    }
    
    getServerDetails() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'ONLINE' ? 'green' : 'red';
    }
}