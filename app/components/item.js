import React from "react";
import Tooltip from "./tooltip";

export default function Item({ item }) {
  const [showTooltip, setShowToolTip] = React.useState(false);

  const itemUrl = `https://www.wowhead.com/wotlk/item=${item.media.id}/${item.name}`;
  const iconUrl = `https://wow.zamimg.com/images/wow/icons/large/inv_gizmo_newgoggles.jpg`;

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
    >
      <a className="w-full h-16" href={itemUrl} target="_blank">
        <img className="w-full h-16" src={iconUrl} alt={item.name} />
      </a>
      {showTooltip && <Tooltip item={item} />}
    </div>
  );
}
