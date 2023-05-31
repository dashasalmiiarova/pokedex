import { labels } from "../consts/Labels.const";
import { XMarkIcon } from "@heroicons/react/24/solid";

type PokemonFilteredList = {
  pokemon_v2_type: [
    pokemon_v2_pokemontypes: [
      {
        name: string;
      }
    ]
  ];
};

export const LabelFilter = ({
  currentType,
  setCurrentType,
}: {
  data: PokemonFilteredList;
  currentType: string;
  setCurrentType: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="my-10 w-4/5">
      <p className="text-base text-gray-700 mb-1">
        Press the label to see all pokemons of that type.
      </p>
      {currentType !== "" && (
        <p className="text-gray-700 mb-5">
          *To remove filter press on button again.
        </p>
      )}
      <div className="gap-3 grid lg:grid-rows-2 lg:grid-cols-10 sm:grid-cols-3">
        {labels.map((item) => (
          <button
            key={item.name}
            className={`text-white ${item.color} px-3 py-1 rounded-[3px] flex justify-between`}
            onClick={() =>
              currentType === item.name
                ? setCurrentType("")
                : setCurrentType(item.name)
            }
          >
            {item.name}
            {currentType === item.name && <XMarkIcon className="h-6 w-6" />}
          </button>
        ))}
      </div>
    </div>
  );
};
