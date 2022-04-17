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
  pokemonsFiltered: any[] = []

  pokemonColor: any;

  pokemonName!: string;

  constructor(private pokemonService: PokemonService, private router: Router) {
  }

  ngOnInit() {
    this.getPokemons();
  }

  private getPokemons() {
    this.pokemonService.getAllPokemon().subscribe((resp: any) => {
      resp.results.map((pokemon: any) => {
        this.pokemonService.getSinglePokemonData(pokemon.url).subscribe((response: any) => {
          if (response.types[0].type.name === 'fire') {
            response.backgroundPokemonColor = "background: #e35353"
          } else if (response.types[0].type.name === 'grass') {
            response.backgroundPokemonColor = "background: #5fcc1a"
          } else if (response.types[0].type.name === 'poison') {
            response.backgroundPokemonColor = "background: #a44dec"
          } else if (response.types[0].type.name === 'water') {
            response.backgroundPokemonColor = "background: #39d0e8"
          } else if (response.types[0].type.name === 'normal') {
            response.backgroundPokemonColor = "background: #c4c4c4"
          } else if (response.types[0].type.name === 'bug') {
            response.backgroundPokemonColor = "background: #c1faa1"
          } else if (response.types[0].type.name === 'fairy') {
            response.backgroundPokemonColor = "background: #fc8dff"
          } else if (response.types[0].type.name === 'electric') {
            response.backgroundPokemonColor = "background: #f6d344"
          } else if (response.types[0].type.name === 'ground') {
            response.backgroundPokemonColor = "background: #8a5a3b"
          } else if (response.types[0].type.name === 'psychic') {
            response.backgroundPokemonColor = "background: #FD22D4FF"
          } else if (response.types[0].type.name === 'fighting') {
            response.backgroundPokemonColor = "background: #FF0000F4"
          } else if (response.types[0].type.name === 'ghost') {
            response.backgroundPokemonColor = "background: #5C2D9FF4"
          } else if (response.types[0].type.name === 'rock') {
            response.backgroundPokemonColor = "background: #646464F4"
          } else if (response.types[0].type.name === 'dark') {
            response.backgroundPokemonColor = "background: #646464F4"
          } else if (response.types[0].type.name === 'dragon') {
            response.backgroundPokemonColor = "background: #93D4FF99"
          } else if (response.types[0].type.name === 'ice') {
            response.backgroundPokemonColor = "background: #87F1FFFF"
          } else if (response.types[0].type.name === 'steel') {
            response.backgroundPokemonColor = "background: #D9D9D9FF"
          } else {
            response.backgroundPokemonColor = "background: white"
          }

          this.pokemons.push(response)
          this.pokemonsFiltered.push(response)
        })
      })
    })
  }

  viewSinglePokemon(pokemon: any) {
    this.router.navigate([`/pokemon/${pokemon.id}`])
  }

  findPokemon(event: Event) {
    if(this.pokemonName !== '') {
      this.pokemonsFiltered = this.pokemons.filter((pokemon: any) => pokemon.name.toLowerCase().indexOf(this.pokemonName.toLowerCase()) > -1)
    } else {
      this.pokemonsFiltered = this.pokemons
    }
  }

}
