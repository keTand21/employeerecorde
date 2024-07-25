import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationMessages } from '../shared/validation_message';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from '../client.service';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  public validationMessage = ValidationMessages;
  public submittedData = new MatTableDataSource<any>([]);
  editingIndex: number | null = null;
  displayedColumns = ['firstName','lastName','email', 'phoneNumber','address','position', 'dateOfJoining','action'];
  public currentClient : any = "Client A";
  public editCondition : boolean = false;

  position: any[] = [
    {Id: 0, Value: 'Manager'},
    {Id: 1, Value: 'Developer'},
    {Id: 2, Value: 'Designer'},
    {Id: 3, Value: 'HR'},
  ]

  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalstorageService,
    private clientService: ClientService)
   {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(35)]],
      position: [ '', [Validators.required]],
      dateOfJoining: ['', [Validators.required]]
    });

    this.clientService.currentClient.subscribe((client: any) => {
      this.employeeForm.reset();
      this.currentClient = client ;
      this.editCondition = false;
      this.loadEmployees();
    })
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.employeeForm.valid) {
      if (this.editingIndex !== null) {
        this.submittedData.data[this.editingIndex] = this.employeeForm.value;
        this.editingIndex = null;
      } else {
        this.submittedData.data = [... this.submittedData.data ,this.employeeForm.value];
      }
      this.submittedData._updateChangeSubscription();
      const employees = this.localStorageService.getEmployees(this.currentClient) || [];
      employees.push(this.employeeForm.value);
      this.localStorageService.setEmployees(this.currentClient, employees);
      this.employeeForm.reset();
      console.log(this.submittedData);
      this.employeeForm.reset();
      this.editCondition = false;
    }
  }

  onReset(): void {
    this.employeeForm.reset();
    this.editingIndex = null;
  }

  onEdit(index: number): void {
    this.editCondition = true;
    this.editingIndex = index;
    this.employeeForm.patchValue(this.submittedData.data[index]);
  }

  loadEmployees(): void {
    if (this.currentClient) {
      this.submittedData.data = this.localStorageService.getEmployees(this.currentClient);
    } else {
      this.submittedData.data = [];
    }
  }
}
