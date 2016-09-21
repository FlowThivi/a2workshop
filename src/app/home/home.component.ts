import { Component, OnInit } from '@angular/core';
import { HorizonService } from '../horizon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HorizonService]
})
export class HomeComponent implements OnInit {

  constructor(private _hz: HorizonService) { }

  ngOnInit() {
    this._hz.connect()
      .subscribe();
  }

}
