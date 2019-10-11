import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/internal/operators';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  private future: Date;
  private futureString: string;
  private counter$: Observable<number>;
  private subscription: Subscription;
  private message: string;
  days: string | number;
  hours: string | number;
  minutes: string | number;
  seconds: string | number;



  constructor(elm: ElementRef) {
    this.futureString = elm.nativeElement.getAttribute('inputDate');
  }

  dhms(t: number) {
    this.days = Math.floor(t / 86400);
    t -= this.days * 86400;
    this.hours = Math.floor(t / 3600) % 24;
    t -= this.hours * 3600;
    this.minutes = Math.floor(t / 60) % 60;
    t -= this.minutes * 60;
    this.seconds = t % 60;

    return [
      this.days + 'd',
      this.hours + 'h',
      this.minutes + 'm',
      this.seconds + 's'
    ].join(' ');
  }


  ngOnInit() {
    this.future = new Date(this.futureString);
    this.counter$ = interval(1000).pipe(map((x: any) => {
      return Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
    }));

    // this.subscription = this.counter$.subscribe((x) => this.message = this.dhms(x));
    this.subscription = this.counter$.subscribe((x: any) => this.message = this.dhms(x));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
