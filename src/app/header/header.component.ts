import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedClient : any = "Client A"
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    localStorage.clear();
    document.body.classList.add("client-a".replace(' ', '-').toLowerCase());
    this.clientService.changeClient("Client A");
   }

  onClientChange(event: any): void {
    document.body.className = '';
    document.body.classList.add(event.value.replace(' ', '-').toLowerCase());
    this.clientService.changeClient(event.value);
  }
}
