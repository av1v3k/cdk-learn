import { Component, Inject, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddress } from './interface/address';
import { DataService } from './data.service';


const LOADER_TIMEOUT = 0;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cdk-explore';
  items = Array.from({ length: 1000 }).map((_, i) => `Item #${i}`);
  listItemsData$: Observable<IAddress[]>;
  showLoader: boolean = false;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
      this.listItemsData$ = this.dataService.getUsers();
    }, LOADER_TIMEOUT)
  }

}
