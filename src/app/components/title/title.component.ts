import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnDestroy {
  public title: string = '';
  public titleSubs$: Subscription;

  constructor(
    private router: Router
  ) { 
    this.titleSubs$ = this.getDataArgs().subscribe( ({ title }) => {
      this.title = title
    })
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getDataArgs() {
    return this.router.events
    .pipe(
      filter( (event: any) => event instanceof ActivationEnd ),
      filter( (event: any) => event.snapshot.firstChild === null ),
      map( (event: any) => event.snapshot.data )
    )
  }
}
