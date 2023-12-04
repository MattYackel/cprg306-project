import React from "react";
import Tooltip from "./tooltip";

export default function Item({ item }) {
  const [showTooltip, setShowToolTip] = React.useState(false);

  const itemUrl = `https://www.wowhead.com/wotlk/item=${item.media.id}/${item.name}`;
  const iconUrl = item.media.assets[0].value;

  const handleMouseEnter = () => {
    setShowToolTip(true);
  };

  const handleMouseLeave = () => {
    setShowToolTip(false);
  };
  return (
    <div
      onMouseEnter={() => handleMouseEnter(true)}
      onMouseLeave={() => handleMouseLeave(false)}
      className="flex bg-slate-900 rounded-sm mx-1 mb-1"
    >
      <a className="w-16 h-16" href={itemUrl} target="_blank">
        <img
          className="w-full h-full rounded-md"
          src={iconUrl}
          alt={item.name}
        />
      </a>
      <p className="w-30 h-16 mx-2">{item.name}</p>
      {showTooltip && <Tooltip item={item} />}
    </div>
  );
}
