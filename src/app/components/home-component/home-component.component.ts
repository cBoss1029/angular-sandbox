import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { CharactersDataService } from 'src/app/services/characters-data.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {

  keyword = 'name';
  charactersList: any;
  debounceTime = 500;
  constructor(private charactersDataService: CharactersDataService, private router: Router) {
  }
  ngOnInit(): void {
    this.charactersDataService.getCharactersList().pipe(take(1)).subscribe((data: any) => {
      this.charactersList = data.data.results;
    }); 
  }
  selectEvent(item: any) {
    // do something with selected item
    this.router.navigate(['/character', item.id]);
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    this.charactersDataService.getFilteredCharactersList(search).pipe(take(1)).subscribe((data: any) => {
      this.charactersList = data.data.results;
    });
  }
}
