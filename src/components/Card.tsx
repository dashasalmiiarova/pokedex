import { PokemonData } from "../types/pokemonData.type";
import { Label } from "./Label";

export const Card = ({
  name,
  pokemon_v2_pokemontypes: type,
  id,
  setSelectedPokemon,
}: PokemonData & {
  setSelectedPokemon: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const types = type.map((item) => item.pokemon_v2_type.name);

  return (
    <div
      className="flex flex-col items-center border-2 border-black pb-16 cursor-pointer sm:w-full"
      onClick={() => setSelectedPokemon(name)}
    >
      <img
        src={` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <h3 className="capitalize font-semibold">{name}</h3>
      <div className="flex gap-3 sm:flex-col mt-5">
        {types.map((item) => (
          <Label key={item} labelType={item} />
        ))}
      </div>
    </div>
  );
};
