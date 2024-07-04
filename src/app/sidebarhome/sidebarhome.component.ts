import { Component, OnInit } from '@angular/core';
import { DosageDataService } from '../pages/test-page/dosage-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebarhome',
  templateUrl: './sidebarhome.component.html',
  styleUrls: ['./sidebarhome.component.scss'],
})
export class SidebarhomeComponent implements OnInit {
  dosageSubscription!: Subscription;
  dosage_data: any;

  constructor(public dosageDetails: DosageDataService) {}

  ngOnInit(): void {
    // console.log('code is working=========>');
    // this.dosageSubscription = this.dosageDetails
    //   .dosageObservable()
    //   .subscribe((data: any) => {
    //     console.log(data);
    //   });
    // console.log(this.dosageDetails.dosage_details, 'testing for data ==>');
  }
}
