import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],  // Add FormsModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgUrl = 'assets/Logo.png';
  userName: string = '';
  errorMessage: string = '';

  openBridgeLabz() {
    window.open('https://www.bridgelabz.com', '_blank');
  }

  validateUserName() {
    console.log("User entered:", this.userName);  // Check if input is detected
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/;  

    if (!this.userName.match(namePattern)) {
      this.errorMessage = 'Name must start with a capital letter and have at least 3 letters.';
      console.log("Validation failed:", this.errorMessage);
    } else {
      this.errorMessage = '';
      console.log("Validation passed! Name:", this.userName);
    }
  }
}
