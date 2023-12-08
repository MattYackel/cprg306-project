export default function Tooltip({ item }) {
  const qualityColors = {
    Poor: "gray-500",
    Common: "white",
    Uncommon: "green-500",
    Rare: "blue-500",
    Epic: "purple-500",
    Legendary: "orange-500",
    Artifact: "gold-500",
    Heirloom: "yellow-500",
  };
  const qualityColor = qualityColors[item?.quality?.name];

  return (
    <div className="absolute pointer-events-none">
      {item ? (
        <div
          className={`bg-black bg-opacity-80 p-4 max-w-xs min-w-xs rounded border-2 border-${qualityColor}`}
        >
          <p className={`text-xl font-bold mb-2 text-${qualityColor}`}>
            {item.name}
          </p>
          <p>{item.slot?.name}</p>
          <p>{item.binding?.name}</p>
          <p>{item.armor?.display.display_string}</p>
          {item.stats?.map((stat, index) => (
            <p key={index}>{stat.display.display_string}</p>
          ))}
          {item.spells?.map((spell, index) => (
            <p key={index}>{spell.description}</p>
          ))}
          <p>{item.weapon?.attack_speed.display_string}</p>
          <p>{item.weapon?.damage.display_string}</p>
          <p>{item.weapon?.dps.display_string}</p>
        </div>
      ) : (
        <>loading...</>
      )}
    </div>
  );
}
