export default function Tooltip({ item }) {
  return (
    <div className="absolute pointer-events-none">
      {item ? (
        <div className="bg-black p-4 max-w-xs rounded">
          <p className="text-lg font-bold mb-2">{item.name}</p>
          <p>{item.slot?.name}</p>
          <p>{item.binding?.name}</p>
          <p>{item.armor?.display.display_string}</p>
          {item.stats?.map((stat, index) => (
            <p key={index}>{stat.display.display_string}</p>
          ))}
          <p></p>
        </div>
      ) : (
        <>loading...</>
      )}
    </div>
  );
}
