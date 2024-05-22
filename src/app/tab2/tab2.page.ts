import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  //TODO: prendre les données de l'API
  Amis : any[] = [
      { id: 1, firstName: "truc", lastName: "bidule", photo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg" },
      { id: 2, firstName: "truc2", lastName: "bidule2", photo: null },
      { id: 3, firstName: "truc3", lastName: "bidule3", photo: null },
      { id: 4, firstName: "truc4", lastName: "bidule4", photo: null },
      { id: 5, firstName: "truc5", lastName: "bidule5", photo: null },
      { id: 6, firstName: "truc6", lastName: "bidule6", photo: null },
      { id: 7, firstName: "truc7", lastName: "bidule7", photo: null },
      { id: 8, firstName: "truc8", lastName: "bidule8", photo: null },
      { id: 9, firstName: "truc9", lastName: "bidule9", photo: null },
      { id: 10, firstName: "truc10", lastName: "bidule10", photo: null }
  ]
}
