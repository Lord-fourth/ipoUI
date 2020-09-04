import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IpoClass} from 'src/app/ipo-class';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpoServiceService {

  private ipoUrl: string;

  constructor(private http: HttpClient) { 
    this.ipoUrl = 'http://localhost:8082/stockexchanges';
  }
    public findAll(): Observable<IpoClass[]> {
      return this.http.get<IpoClass[]>(this.ipoUrl);
    }
  }
