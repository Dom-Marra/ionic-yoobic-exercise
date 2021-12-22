import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private readonly TMDB_API: string = 'https://api.themoviedb.org/3/movie/'
  private readonly HTTP_HEADERS = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmQ3NDU2N2RhY2IwNDc2MmIyNGI5Njk2YjE4MGI4OCIsInN1YiI6IjYxMWJlNjYzMmRjNDRlMDAyYzQzYzI1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cy_3dpCublqFFqIavnf6CKqewZusOQvKsGHX08UY8zY'
    })
  }

  constructor(private httpClient: HttpClient) { }

  public getMovies(sort: string = 'popular'): Observable<any> {
    return this.httpClient.get(this.TMDB_API + sort, this.HTTP_HEADERS);
  }

  public getMovie(id: string): Observable<any> {
    return this.httpClient.get(this.TMDB_API + id, this.HTTP_HEADERS);
  }
}
