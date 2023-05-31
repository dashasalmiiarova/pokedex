import { gql } from "@apollo/client";

export const GET_POKEMONS_BY_TYPE = gql`
  query ($currentType: String) {
    pokemon_v2_type(where: { name: { _eq: $currentType } }) {
      pokemon_v2_pokemontypes {
        pokemon_v2_pokemon {
          name
          id
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
        }
      }
    }
  }
`;
