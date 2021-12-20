import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TMDB_IMG_URL } from 'src/app/globals/constants';
import { Movie } from 'src/app/models/movie';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public tmdbImgURL: string = TMDB_IMG_URL;
  public movie: Movie = null;
  public movieRelease: string = null;

  constructor(private masterService: MasterService, private router: ActivatedRoute) { }

  ngOnInit() {
    const movieId = this.router.snapshot.paramMap.get('id');

    this.masterService.getMovie(movieId).subscribe(movie => {
      this.movie = movie;
      this.movieRelease = this.parseDate(movie.release_date);
    });
  }

  /**
   * Parses the date string from movie objects
   * 
   * @param date 
   *        string: format yyyy-mm-dd. example 2021-01-01
   * @returns 
   *        string: format month day, year. example: January 1, 2021
   */
  private parseDate(date): string {
    const MONTHS = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let dateParts = date.split('-');
    const year = dateParts[0];
    let month = MONTHS[parseInt(dateParts[1]) - 1];
    let day = dateParts[2];

    return `${month} ${day}, ${year}`;
  }

}
