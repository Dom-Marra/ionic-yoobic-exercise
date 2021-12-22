import { Component, OnInit } from '@angular/core';
import { TMDB_IMG_URL } from 'src/app/globals/constants';
import { Movie } from 'src/app/models/movie';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.page.html',
  styleUrls: ['./master-list.page.scss'],
})
export class MasterListPage implements OnInit {

  public movies: Array<Movie> = [];
  public tmdbImgURL: string = TMDB_IMG_URL;
  public error: boolean = false;

  constructor(private masterService: MasterService) { }

  ngOnInit() {
    this.masterService.getMovies().subscribe(
      res => this.movies = res.results,
      error => this.error = true
    )
  }

}
