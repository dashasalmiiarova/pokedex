import { gql } from "@apollo/client";

export const GET_POKEMON_DATA = gql`
  query ($offset: Int) {
    pokemon_v2_pokemon(limit: $offset) {
      name
      id
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;
