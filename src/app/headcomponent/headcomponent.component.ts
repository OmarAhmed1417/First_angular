import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-headcomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './headcomponent.component.html',
  styleUrl: './headcomponent.component.css'
})
export class HeadcomponentComponent {
  btn :string='btn';
  paragraph:string='text';
  title:string='title';
}
