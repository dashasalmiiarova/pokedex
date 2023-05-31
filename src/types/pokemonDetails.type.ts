type PokemonType = {
  name: string;
};

type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

type PokemonMoveAggregate = {
  aggregate: {
    count: number;
  };
};

type Pokemon = {
  name: string;
  types: PokemonType[];
  stats: PokemonStat[];
  weight: number;
  moves: PokemonMoveAggregate;
};

export type Query = {
  pokemon(name: string): Pokemon;
};
