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
  constructor(private charactersDataService: CharactersDataService, private router: Router) {
  }
  ngOnInit(): void {
    this.charactersDataService.getCharactersList().pipe(take(1)).subscribe((data: any) => {
      console.log(data.data.results);
      this.charactersList = data.data.results;
    }); 
  }
  selectEvent(item: any) {
    // do something with selected item
    console.log(item);
    this.router.navigate(['/character', item.id]);
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: any) {
    // do something
  }

}
