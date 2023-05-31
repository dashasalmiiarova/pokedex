import { gql } from "@apollo/client";

export const GET_POKEMON_DETAILS = gql`
  query GetPokemonData($selectedPokemon: String!) {
    pokemon_v2_pokemon(where: { name: { _eq: $selectedPokemon } }) {
      name
      id
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      weight
      pokemon_v2_pokemonmoves_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;
