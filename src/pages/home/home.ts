import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
    movies: Array<any>;
 
    constructor(public navCtrl: NavController, private remoteServiceProvider: RemoteServiceProvider) {
 
    }
 
    searchForMovie(event, key) {
        if(event.target.value.length > 2) {
            this.remoteServiceProvider.searchMovies(event.target.value).subscribe(
                data => {
                    this.movies = data.results; 
                    console.log(data);
                },
                err => {
                    console.log(err);
                },
                () => console.log('Movie Search Complete')
            );
        }
    }  
     
    selectMovie(event, movie) {
        console.log(movie);  
        this.navCtrl.push(HomePage, {
            movie: movie
        });
    }    
}

  

