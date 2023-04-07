import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { BaseResponse } from '../models/base-response'
import { API_URL } from '../tokens/api-url.token'

@Injectable({ providedIn: 'root' })
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json, text/plain',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      Accept: '*',
      tenant: 'root'
    })
  }

  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {}

  get<T>(url: string, params: HttpParams = new HttpParams()): Observable<BaseResponse<T>> {
    return this.http.get<BaseResponse<T>>(`${this.apiUrl}${url}`, {
      ...params,
      headers: this.httpOptions.headers
    })
  }

  post<T, D>(url: string, data?: D): Observable<BaseResponse<T>> {
    return this.http.post<BaseResponse<T>>(`${this.apiUrl}${url}`, data, this.httpOptions)
  }

  put<T, D>(url: string, data: D): Observable<BaseResponse<T>> {
    return this.http.put<BaseResponse<T>>(`${this.apiUrl}${url}`, data, this.httpOptions)
  }

  delete<T>(url: string): Observable<BaseResponse<T>> {
    return this.http.delete<BaseResponse<T>>(`${this.apiUrl}${url}`, this.httpOptions)
  }
}
