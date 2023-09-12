import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { HttpMoviesService } from 'src/app/services/http-movies.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
})
export class HttpTestComponent {
  errorMessage: string;
  constructor(private http: HttpMoviesService) { }

  get() {
    this.http.getMovies().subscribe();
  }

  post() {
    // const movie: Movie = {
    //   country: 'Poland',
    //   director: 'Piotr Szulkin',
    //   category: 'Sci-fi',
    //   plot: 'Na Ziemię przybywają przedstawiciele bardziej rozwiniętej cywilizacji z Marsa. Marsjanie deklarują, że jedyne, czego pragną, to miłość (i jej najsłodszy wyraz – ludzka krew). Media i władze agresywnie współpracują z najeźdźcami – organizują aparat przymusowego oddawania krwi i zapewniania Marsjanom miłości przez pozbawienie ludzi tego, co kochali do tej pory. Po kilkunastu dniach Marsjanie odlatują, a media zaczynają ich przedstawiać jako krwawych najeźdźców.',
    //   poster: null,
    //   year: '1981',
    //   title: 'Wojna światów - następne stulecie',
    //   imdbRating: '7.2'
    // };
    const movie: Movie = {
      country: 'Poland',
      director: 'Olaf Lubaszenko',
      category: 'Comedy',
      plot: 'Głównym bohaterem filmu jest ambitny młody skrzypek Jakub Brenner (Maciej Stuhr). Mimo problemów na uczelni i porzucenia przez dziewczynę Weronikę (Magdalena Mazur) usiłuje pomóc swojemu nieśmiałemu przyjacielowi, Oskarowi (Wojciech Klata).',
      poster: null,
      year: '1999',
      title: 'Chłopaki nie płaczą',
      imdbRating: '6.9'
    };
    this.http.postMovie(movie).subscribe();
  }

  put() {
    const movie: Movie = {
      "country": "USA",
      "director": "Jonathan Mostow",
      "category": "Action, Sci-Fi",
      "plot": "Ten years after destroying Cyberdyne Systems,[b] John Connor has been living as a nomad following the death of his mother, Sarah, to hide from the malevolent artificial intelligence Skynet, despite a war between humans and machines not happening in 1997, as foretold.",
      "poster": "https://images.moviesanywhere.com/bcbdfdd384a29071cf1eded4ee931127/68df03b4-5e3f-4fda-95de-37c48216937b.webp?h=500&resize=fit&w=375",
      "year": "2003",
      "title": "Terminator 3: Rise of the Machines",
      "imdbRating": "6.3",
      "id": "50"
    }
    // const movie: Movie = {
    //   "country": "USA",
    //   "director": "James Cameron",
    //   "category": "Action, Sci-Fi",
    //   "plot": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
    //   "poster": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    //   "year": "1991",
    //   "title": "Terminator 2: Judgment Day",
    //   "imdbRating": "8.5",
    //   "id": 50
    // }

    this.http.putMovie(movie).subscribe();
  }

  patch() {
    const movie: Partial<Movie> = {
      "plot": "... Także kolejny bohater filmu, początkujący gangster Bolec (Michał Milowicz), ma pełno kłopotów.",
      "id": "55"
    }
    this.http.patchMovie(movie).subscribe();
  }

  delete() {
    this.http.deleteMovie('55').subscribe();
  }

  error() {
    this.http
      .makeError()
      .subscribe({ error: (err: string) => (this.errorMessage = err) });
  }

  headers() {
    this.http.headers().subscribe();
  }
}
