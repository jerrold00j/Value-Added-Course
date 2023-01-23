export class EmployeeDetailsComponent {
  employee = {
    name: '',
    email: '',
    phone: '',
    position: ''
  };

  onSubmit() {
    console.log(this.employee);
    // You can also send the employee data to a server using a service or a http call here.
  }
}
