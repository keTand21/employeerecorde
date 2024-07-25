import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clientSubject = new BehaviorSubject<string>('');
  currentClient = this.clientSubject.asObservable();

  changeClient(client: string): void {
    this.clientSubject.next(client);
  }
}