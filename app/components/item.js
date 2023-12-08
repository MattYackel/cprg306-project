import React, { useEffect } from "react";
import Tooltip from "./tooltip";

export default function Item({ item }) {
  const [showTooltip, setShowToolTip] = React.useState(false);
  const [image, setImage] = React.useState("");

  const locale = "en_US";
  const access_token = "USE1xu6e8gSs1fukAqib0S5bBs6Z04sFcU";

  const fetchIcon = async (href) => {
    const url = `${href}&locale=${locale}&access_token=${access_token}`;
    const response = await fetch(url);
    return await response.json();
  };

  const fetchItemMedia = async () => {
    try {
      if (item && item.media && item.media.key) {
        const itemMedia = await fetchIcon(item.media.key.href);
        const [asset] = itemMedia.assets;
        const itemImageUrl = asset.value;
        const iconName = itemImageUrl.split("/").pop();
        const iconUrl = `https://wow.zamimg.com/images/wow/icons/large/${iconName}`;
        setImage(iconUrl);
      }
    } catch (error) {
      console.error("Error fetching more item data:", error);
    }
  };

  const handleMouseEnter = () => {
    setShowToolTip(true);
  };

  const handleMouseLeave = () => {
    setShowToolTip(false);
  };

  useEffect(() => {
    fetchItemMedia();
  }, [item]);

  if (!item || !item.media || !item.media.key) {
    return null;
  }
  const itemUrl = `https://www.wowhead.com/wotlk/item=${item.media.id}/${item.name}`;
  return (
    <div
      onMouseEnter={() => handleMouseEnter(true)}
      onMouseLeave={() => handleMouseLeave(false)}
      className="flex bg-slate-900 rounded-sm mx-1 mb-1"
    >
      {showTooltip && <Tooltip item={item} />}
      <a className="w-16 h-16" href={itemUrl} target="_blank">
        <img
          className="w-full h-full rounded-md"
          src={image}
          alt={item.inventory_type.name}
        />
      </a>
      <p className="w-30 h-16 mx-2">{item.name}</p>
    </div>
  );
}
