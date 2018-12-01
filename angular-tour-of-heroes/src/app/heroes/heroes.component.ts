import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService} from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;
  selectedHeroName: string;

  constructor(private heroService: HeroService, public messageService: MessageService) {
    // Constructora eklenen bu parametre aynı anda özel bir heroService
    // değişkeni tanımlar ve bu değişkeni class içinde kullanmamızı sağlar
   }
   /**
    getHeroes(): void {
     this.heroes = this.heroService.getHeroes();
   } 
    */

    getHeroes(): void {
      this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
      // bazı durumlarda herService, hero dizisini tam anlamıyla sağlayamayabilir
      // bu yüzden bu kod Observable 'ın heroes dizisini yayınlamasını bekleyecek
      // bu biraz zaman alabilir, ama subscribe metodu ile yayınlanan hero dizisi çekilecek
      // Bu asenkron yapı, heroServiceten hero dizisi istedğinde çalışacak
    }
   

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.selectedHeroName = hero.name;
  }

}
