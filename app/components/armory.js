import Item from "./item";

export default function Armory({ character }) {
  // Class Color
  let classColor = "text-white";
  if (character && character.character_class) {
    switch (character.character_class.name) {
      case "Death Knight":
        classColor = "text-red-600";
        break;
      case "Priest":
        classColor = "text-white";
        break;
      case "Mage":
        classColor = "text-blue-300";
        break;
      case "Warrior":
        classColor = "text-yellow-800";
        break;
      case "Paladin":
        classColor = "text-pink-500";
        break;
      case "Shaman":
        classColor = "text-blue-700";
        break;
      case "Druid":
        classColor = "text-yellow-600";
        break;
      case "Rogue":
        classColor = "text-yellow-300";
        break;
      case "Hunter":
        classColor = "text-green-600";
        break;
      case "Warlock":
        classColor = "text-purple-600";
        break;
    }
  }
  return (
    <div className="w-90 mx-auto">
      <div className="flex mb-4 justify-center bg-slate-900 rounded-sm">
        <div className="p-2">
          <img
            src={character.media.assets[0].value}
            alt={character.name}
            className="w-24 h-24 rounded-md"
          />
        </div>
        <div className="p-2 flex flex-col justify-center items-center">
          <p className={`text-3xl font-bold ${classColor}`}>
            {character && character.name}
          </p>
          <p className="text-center">
            {character && <>{"<" + character.guild.name + ">"}</>}
          </p>
        </div>
        <div className="p-2 flex flex-col justify-center">
          <p>{character && character.average_item_level} ilvl </p>
          <p>{character && character.achievement_points} Achievement Points</p>
        </div>
      </div>
      <div className="flex mx-4 justify-center">
        <div className="flex flex-col">
          <Item item={character.equipment.equipped_items[0]} />
          <Item item={character.equipment.equipped_items[1]} />
          <Item item={character.equipment.equipped_items[2]} />
          <Item item={character.equipment.equipped_items[3]} />
          <Item item={character.equipment.equipped_items[13]} />
          <Item item={character.equipment.equipped_items[17]} />
          <Item item={character.equipment.equipped_items[7]} />
          <Item item={character.equipment.equipped_items[16]} />
        </div>
        <div className="flex flex-col">
          <Item item={character.equipment.equipped_items[8]} />
          <Item item={character.equipment.equipped_items[4]} />
          <Item item={character.equipment.equipped_items[5]} />
          <Item item={character.equipment.equipped_items[6]} />
          <Item item={character.equipment.equipped_items[9]} />
          <Item item={character.equipment.equipped_items[10]} />
          <Item item={character.equipment.equipped_items[11]} />
          <Item item={character.equipment.equipped_items[12]} />
        </div>
      </div>
      <div className="flex mt-4 justify-center">
        <Item item={character.equipment.equipped_items[14]} />
        <Item item={character.equipment.equipped_items[15]} />
      </div>
    </div>
  );
}
