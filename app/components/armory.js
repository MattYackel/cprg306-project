import Item from "./item";

export default function Armory({ character }) {
  //console.log(character);

  return (
    <div className="w-80">
      <p>Character Name: {character && character.character.name}</p>
      <p>Server: {character && character.character.realm.name}</p>
      <div className="grid grid-cols-6 gap-2  border-2">
        <div className="grid grid-cols-1 gap-2 border-2">
          {character.equipped_items.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </div>
        <div className="col-span-4 border-2">
          <p>character model area</p>
        </div>
        <div className="grid grid-cols-1 gap-2  border-2"></div>
      </div>
    </div>
  );
}
