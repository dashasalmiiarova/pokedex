export const Label = ({ labelType }: { labelType: string }) => {
  const getLabelColor = (name: string) => {
    switch (name) {
      case "normal":
        return "bg-red-500";
      case "fighting":
        return "bg-pink-500";
      case "flying":
        return "bg-purple-500";
      case "poison":
        return "bg-indigo-500";
      case "ground":
        return "bg-blue-500";
      case "rock":
        return "bg-teal-500";
      case "bug":
        return "bg-green-500";
      case "ghost":
        return "bg-yellow-500";
      case "steel":
        return "bg-orange-500";
      case "fire":
        return "bg-red-600";
      case "water":
        return "bg-blue-600";
      case "grass":
        return "bg-green-600";
      case "electric":
        return "bg-yellow-600";
      case "psychic":
        return "bg-purple-600";
      case "ice":
        return "bg-cyan-500";
      case "dragon":
        return "bg-indigo-600";
      case "dark":
        return "bg-gray-700";
      case "fairy":
        return "bg-pink-600";
      case "unknown":
        return "bg-gray-400";
      case "shadow":
        return "bg-gray-500";
      default:
        return "bg-gray-800";
    }
  };
  return (
    <div>
      <p
        className={`text-white ${getLabelColor(
          labelType
        )} px-3 py-1 rounded-[3px]`}
      >
        {labelType}
      </p>
    </div>
  );
};
