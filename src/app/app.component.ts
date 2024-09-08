import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadcomponentComponent } from './headcomponent/headcomponent.component';
import { ResentComponent } from './resent/resent.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule,
     HeadcomponentComponent,
     ResentComponent,
     FooterComponent,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'my-angular-app';
}
