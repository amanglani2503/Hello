import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  imgUrl = 'assets/Logo.png';
  userName: string = '';

  openBridgeLabz() {
    window.open('https://www.bridgelabz.com', '_blank');
  }
}
