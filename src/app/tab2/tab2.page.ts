import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { RelationService } from '../services/relations/relation.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private http: HttpClient, private relationService: RelationService) {
  }

  amis:any;
  urlRelation:string = "http://185.216.27.78:8000/api/relations/";
  urlDelete:string = "";
  userId:number = 1;

  ionViewWillEnter() {
    this.http.get('http://185.216.27.78:8000/api/relations/'+this.userId)
      .subscribe((data) => {
        this.amis = data
    });
  }

  deleteRelation(ami: number): void {
    this.relationService.deleteRelation(this.userId, ami).subscribe(
      () => {
        console.log('Relation supprimée avec succès');
        window.location.reload();
      },
      error => {
        console.error('Une erreur et survenue lors de la suppression!', error);
      }
    );
  }
}
