import Item from "./item";

export default function Armory({ character }) {
  const classColors = {
    "Death Knight": "text-red-600",
    Priest: "text-white",
    Mage: "text-blue-300",
    Warrior: "text-yellow-800",
    Paladin: "text-pink-500",
    Shaman: "text-blue-700",
    Druid: "text-yellow-600",
    Rogue: "text-yellow-300",
    Hunter: "text-green-600",
    Warlock: "text-purple-600",
  };
  const classColor = classColors[character?.character_class?.name];

  const renderItems = (inventoryType) => {
    return (
      <Item
        item={character?.equipment?.equipped_items.find(
          (item) => item && item.slot.type === inventoryType
        )}
      />
    );
  };

  return (
    <div className="w-90 mx-auto">
      <div className="flex mb-4 justify-center bg-slate-900 rounded-sm">
        <div className="p-2">
          <img
            src={character.media?.assets[0].value}
            alt={character.name}
            className="w-24 h-24 rounded-md"
          />
        </div>
        <div className="p-2 flex flex-col justify-center items-center">
          <p className={`text-3xl font-bold ${classColor}`}>
            {character && character.name}
          </p>
          <p className="text-center">
            {character && <>{"<" + character.guild?.name + ">"}</>}
          </p>
        </div>
        <div className="p-2 flex flex-col justify-center">
          <p>{character && character.average_item_level} Item Level </p>
          <p>{character && character.achievement_points} Achievement Points</p>
        </div>
      </div>
      <div className="flex mx-4 justify-center">
        <div className="flex flex-col">
          {renderItems("HEAD")}
          {renderItems("NECK")}
          {renderItems("SHOULDER")}
          {renderItems("BACK")}
          {renderItems("CHEST")}
          {renderItems("TABARD")}
          {renderItems("WRIST")}
          {renderItems("RANGED")}
        </div>
        <div className="flex flex-col">
          {renderItems("HANDS")}
          {renderItems("WAIST")}
          {renderItems("LEGS")}
          {renderItems("FEET")}
          {renderItems("FINGER_1")}
          {renderItems("FINGER_2")}
          {renderItems("TRINKET_1")}
          {renderItems("TRINKET_2")}
        </div>
      </div>
      <div className="flex mt-4 justify-center">
        {renderItems("MAIN_HAND")}
        {renderItems("OFF_HAND")}
      </div>
    </div>
  );
}
