import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { take } from 'rxjs';
import { CharactersDataService } from '../../services/characters-data.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {
  characterDetails: any = {};
  isLoaded = false;
  constructor(private route: ActivatedRoute, private charactersDataService: CharactersDataService, private router: Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      // TODO: handle error if id is not found and redirect to home page
      if (id) {
        this.charactersDataService.getCharacterDetails(id).pipe(take(1)).subscribe((data: any) => {
          this.characterDetails = data.data.results[0];
          this.isLoaded = true;
        });
      }
    });
  }
  goBack() {
    this.router.navigate(['/']);
  }
}
