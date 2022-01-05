import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = "no server was created"
  serverName='';
  serverName1='two way data binding';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "server was created! Name is" + this.serverName1;
  }

  onUpdateServerName(event:Event){
     console.log(event);
     this.serverName = (<HTMLInputElement>event.target).value;
  }

}
