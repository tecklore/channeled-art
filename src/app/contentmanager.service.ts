import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentMap } from './contentMap';
import { CONTENTLAYOUTS } from './contentlayouts';

@Injectable({
  providedIn: 'root'
})
export class ContentmanagerService {

  constructor() { }

  getContents(): Observable<ContentMap[]> {
    return of(CONTENTLAYOUTS);
  }

  getContent(id: string): Observable<ContentMap> {
    return of(CONTENTLAYOUTS.find(contentMap => contentMap.id === id));
  }
}
