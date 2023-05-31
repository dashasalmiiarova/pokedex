import { Card } from "./components/Card";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { LabelFilter } from "./components/LabelFilter";
import { CartDetails } from "./components/CardDetails";
import { GET_POKEMON_DATA } from "./queries/getPokemonData.query";
import { GET_POKEMONS_BY_TYPE } from "./queries/getPokemonByType.query";
import { PokemonData } from "./types/pokemonData.type";
import { GET_POKEMON_DETAILS } from "./queries/getPokemonDetails.query";
import { Loader } from "./components/Loader";

export const App = () => {
  const [offset, setOffset] = useState<number>(12);
  const [currentType, setCurrentType] = useState<string>("");
  const [selectedPokemon, setSelectedPokemon] = useState<string>();

  const {
    loading,
    error: pokemonError,
    data: pokemonList,
  } = useQuery(GET_POKEMON_DATA, {
    variables: {
      offset,
    },
  });
  const {
    loading: filterLoading,
    error,
    data: filteredPokemonList,
  } = useQuery(GET_POKEMONS_BY_TYPE, {
    variables: {
      currentType,
    },
  });
  const {
    loading: cardDetailsLoading,
    error: cardDetailsError,
    data: cardDetailsData,
  } = useQuery(GET_POKEMON_DETAILS, {
    variables: {
      selectedPokemon,
    },
    skip: !selectedPokemon,
  });

  const currentArray =
    currentType !== ""
      ? filteredPokemonList?.pokemon_v2_type[0]?.pokemon_v2_pokemontypes.map(
          (item: { pokemon_v2_pokemon: PokemonData }) =>
            item?.pokemon_v2_pokemon
        )
      : pokemonList?.pokemon_v2_pokemon;

  if (loading || filterLoading)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loader />
      </div>
    );

  if (error || pokemonError || cardDetailsError)
    return (
      <p className="text-red-500">
        Error:
        {error
          ? error.message
          : pokemonError
          ? pokemonError.message
          : cardDetailsError?.message}
      </p>
    );

  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="flex w-4/5 mt-10 justify-center items-center text-[28px] border-4 border-black">
        Pokedex
      </h1>
      <LabelFilter
        setCurrentType={setCurrentType}
        currentType={currentType}
        data={filteredPokemonList}
      />
      <div className="flex lg:flex-row justify-between gap-10 w-4/5 sm:flex-col">
        <div className={`${selectedPokemon ? "lg:w-4/6" : "lg:w-full"}`}>
          <div className="mx-auto grid lg:grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2">
            {currentArray.map((item: PokemonData) => (
              <Card
                key={item.name}
                {...item}
                setSelectedPokemon={setSelectedPokemon}
              />
            ))}
          </div>
        </div>
        <div className={`${selectedPokemon ? "lg:w-3/12" : "lg:w-0"}`}>
          {selectedPokemon && cardDetailsData && (
            <CartDetails data={cardDetailsData?.pokemon_v2_pokemon[0]} />
          )}
          {cardDetailsLoading && <Loader />}
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <button
          className="bg-[#0052FF] my-20 text-white px-20 py-3 rounded-[5px]"
          onClick={() => {
            setSelectedPokemon("");
            setOffset(offset + 12);
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
};
