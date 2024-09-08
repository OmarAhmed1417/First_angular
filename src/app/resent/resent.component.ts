import { CommonModule } from '@angular/common';
import { Component, ElementRef, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-resent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resent.component.html',
  styleUrls: ['./resent.component.css']
})
export class ResentComponent implements AfterViewInit {
  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;

  cards: string = 'cards';
  cardup: string = 'cardup';
  carddown: string = 'carddown';
  img1: string = 'img1';
  btn: string = 'btn';

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
        }
      });
    }, { threshold: 0.1 });

    this.animatedElements.forEach(element => {
      observer.observe(element.nativeElement);
    });
  }

  animateElement(element: any) {
    gsap.from(element, {
      opacity: 0,
      x: 10,
      duration: 1,
      ease:'power2.in'
    });
  }
}
