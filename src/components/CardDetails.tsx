export const CartDetails = ({
  data,
}: {
  data: {
    name: string;
    id: number;
    weight: number;
    pokemon_v2_pokemonstats: [
      { base_stat: number; pokemon_v2_stat: { name: string } }
    ];
    pokemon_v2_pokemontypes: [{ pokemon_v2_type: { name: string } }];
    pokemon_v2_pokemonmoves_aggregate: {
      aggregate: {
        count: number;
      };
    };
  };
}) => (
  <div className="border-2 border-black p-2 h-fit flex justify-center items-center flex-col sm:w-fit justify-self-center">
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
    />
    <h3 className="capitalize font-semibold ">
      {data.name} #{data.id}
    </h3>
    <table>
      <tbody className="border-2 border-black text-center">
        <tr className="border-2 border-black">
          <td className="border-e-2 border-black p-2">Types</td>
          <td className="p-2">
            {data.pokemon_v2_pokemontypes
              .map((type) => type.pokemon_v2_type.name)
              .join(", ")}
          </td>
        </tr>
        <tr className="border-2 border-black">
          <td className="border-e-2 border-black p-2">Attack Sum</td>
          <td className="p-2">
            {
              data.pokemon_v2_pokemonstats.find(
                (stat) => stat.pokemon_v2_stat.name === "attack"
              )?.base_stat
            }
          </td>
        </tr>
        <tr className="border-2 border-black">
          <td className="border-e-2 border-black p-2">Defense Sum</td>
          <td className="p-2">
            {
              data.pokemon_v2_pokemonstats.find(
                (stat) => stat.pokemon_v2_stat.name === "defense"
              )?.base_stat
            }
          </td>
        </tr>
        <tr className="border-2 border-black">
          <td className="border-e-2 border-black p-2">HP Sum</td>
          <td className="p-2">
            {
              data.pokemon_v2_pokemonstats.find(
                (stat) => stat.pokemon_v2_stat.name === "hp"
              )?.base_stat
            }
          </td>
        </tr>
        <tr className="border-2 border-black">
          <td className="border-e-2 border-black p-2"> Special Attack Sum</td>
          <td className="p-2">
            {
              data.pokemon_v2_pokemonstats.find(
                (stat) => stat.pokemon_v2_stat.name === "special-attack"
              )?.base_stat
            }
          </td>
        </tr>
        <tr className="border-2 border-black">
          <td className="border-e-2 border-black p-2">Special Defense Sum</td>
          <td className="p-2">
            {
              data.pokemon_v2_pokemonstats.find(
                (stat) => stat.pokemon_v2_stat.name === "special-defense"
              )?.base_stat
            }
          </td>
        </tr>
        <tr className="border-2 border-black">
          <td className="border-e-2 border-black p-2">Speed</td>
          <td className="p-2">
            {
              data.pokemon_v2_pokemonstats.find(
                (stat) => stat.pokemon_v2_stat.name === "speed"
              )?.base_stat
            }
          </td>
        </tr>
        <tr className="border-2 border-black">
          <td className="border-e-2 border-black p-2">Weight</td>
          <td className="p-2">{data.weight}</td>
        </tr>
        <tr className="border-2 border-black">
          <td className="border-e-2 border-black p-2">Total Moves</td>
          <td className="p-2">
            {data.pokemon_v2_pokemonmoves_aggregate.aggregate.count}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
