import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseurl: string  = environment.baseUrl

  constructor(private http:HttpClient) { }

  getData(){
    let url = `${this.baseurl}/api/Hero`
    return this.http.get(url);
  }
}
