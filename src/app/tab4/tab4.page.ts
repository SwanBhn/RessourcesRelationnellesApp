import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  isLoginFormVisible: boolean = true;
  showPassword: boolean = false;

  constructor() {}

  toggleForm() {
    this.isLoginFormVisible = !this.isLoginFormVisible;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
