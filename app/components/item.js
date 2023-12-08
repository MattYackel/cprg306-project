import React, { useEffect } from "react";
import Tooltip from "./tooltip";

export default function Item({ item }) {
  const [showTooltip, setShowToolTip] = React.useState(false);

  const handleMouseEnter = () => {
    setShowToolTip(true);
  };

  const handleMouseLeave = () => {
    setShowToolTip(false);
  };

  useEffect(() => {}, [item]);

  if (!item || !item.media) {
    return null;
  }
  const itemUrl = `https://www.wowhead.com/wotlk/item=${item.item.id}/${item.name}`;
  return (
    <div
      onMouseEnter={() => handleMouseEnter(true)}
      onMouseLeave={() => handleMouseLeave(false)}
      className="bg-slate-800 hover:bg-slate-900 rounded-sm mx-1 mb-1"
    >
      {showTooltip && <Tooltip item={item} />}
      <a className="flex w-72" href={itemUrl} target="_blank">
        <img
          className="w-16 h-16 rounded-md p-1"
          src={item.media}
          alt={item.inventory_type.name}
        />
        <p className="mt-1 mx-2">{item.name}</p>
      </a>
    </div>
  );
}
