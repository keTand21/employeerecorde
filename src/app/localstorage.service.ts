import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private storageKey = 'employeeData';

  constructor() {}

  getEmployees(client: string): any[] {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      const parsedData = JSON.parse(data);
      return parsedData[client] || [];
    }
    return [];
  }

  setEmployees(client: string, employees: any[]): void {
    const data = localStorage.getItem(this.storageKey);
    let parsedData : any = {};
    if (data) {
      parsedData = JSON.parse(data);
    }
    parsedData[client] = employees;
    localStorage.setItem(this.storageKey, JSON.stringify(parsedData));
  }
}