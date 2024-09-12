import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private http: HttpClient, private router: Router) {
  }
  ressources:any

  ionViewWillEnter() {
    this.http.get('https://185.216.27.78:8000/api/ressources')
      .subscribe((data) => {
        this.ressources = data
    });
  }
}
