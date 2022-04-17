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
      if (resp.types[0].type.name === 'fire') {
        resp.backgroundPokemonColor = "background: #e35353"
      } else if (resp.types[0].type.name === 'grass') {
        resp.backgroundPokemonColor = "background: #5fcc1a"
      } else if (resp.types[0].type.name === 'poison') {
        resp.backgroundPokemonColor = "background: #a44dec"
      } else if (resp.types[0].type.name === 'water') {
        resp.backgroundPokemonColor = "background: #39d0e8"
      } else if (resp.types[0].type.name === 'normal') {
        resp.backgroundPokemonColor = "background: #c4c4c4"
      } else if (resp.types[0].type.name === 'bug') {
        resp.backgroundPokemonColor = "background: #c1faa1"
      } else if (resp.types[0].type.name === 'fairy') {
        resp.backgroundPokemonColor = "background: #fc8dff"
      } else if (resp.types[0].type.name === 'electric') {
        resp.backgroundPokemonColor = "background: #f6d344"
      } else if (resp.types[0].type.name === 'ground') {
        resp.backgroundPokemonColor = "background: #8a5a3b"
      } else if (resp.types[0].type.name === 'psychic') {
        resp.backgroundPokemonColor = "background: #FD22D4FF"
      } else if (resp.types[0].type.name === 'fighting') {
        resp.backgroundPokemonColor = "background: #FF0000F4"
      } else if (resp.types[0].type.name === 'ghost') {
        resp.backgroundPokemonColor = "background: #5C2D9FF4"
      } else if (resp.types[0].type.name === 'rock') {
        resp.backgroundPokemonColor = "background: #646464F4"
      } else if (resp.types[0].type.name === 'dark') {
        resp.backgroundPokemonColor = "background: #646464F4"
      } else if (resp.types[0].type.name === 'dragon') {
        resp.backgroundPokemonColor = "background: #93D4FF99"
      } else if (resp.types[0].type.name === 'ice') {
        resp.backgroundPokemonColor = "background: #87F1FFFF"
      } else if (resp.types[0].type.name === 'steel') {
        resp.backgroundPokemonColor = "background: #D9D9D9FF"
      } else {
        resp.backgroundPokemonColor = "background: white"
      }
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
