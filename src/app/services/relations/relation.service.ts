import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelationService {
  private urlRelation = 'http://185.216.27.78:8000/api/relations/';

  constructor(private http: HttpClient) {}

  deleteRelation(userId: number, ami: number): Observable<void> {
    const urlDelete = `${this.urlRelation}${userId}/ami/${ami}`;
    return this.http.delete<void>(urlDelete);
  }
}
