import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  pokemons: any[] = []

  pokemonColor: any;

  constructor(private pokemonService: PokemonService, private router: Router) {
  }

  ngOnInit() {
    this.pokemonService.getAllPokemon().subscribe((resp: any) => {
      resp.results.map((pokemon: any) => {
        this.pokemonService.getSinglePokemonData(pokemon.url).subscribe((response: any) => {
          if(response.types[0].type.name === 'fire') {
            response.backgroundPokemonColor = "background: #e35353"
          }
          this.pokemons.push(response)
        })
      })
    })
  }

  viewSinglePokemon(pokemon: any) {
    this.router.navigate([`/pokemon/${pokemon.id}`])
  }

}
