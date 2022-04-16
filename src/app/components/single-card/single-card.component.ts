import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements OnInit {

  pokemon: any;
  pokemonTypes: any[] = [];
  pokemonColor: any;
  pokemonId: any;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.pokemonId = params['id']
      await this.getPokemon(this.pokemonId)
    });
  }

  async getPokemon(pokemonId: any) {
    this.pokemonService.getSinglePokemonDataById(pokemonId).subscribe((resp: any) => {
      this.pokemon = resp
      resp.types.forEach((type: any) => {
        this.pokemonTypes.push(type)
      })
    })
  }

  func(pokemon: any) {
    console.log(pokemon)
  }
}
