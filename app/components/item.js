import React, { useEffect } from "react";
import Tooltip from "./tooltip";

export default function Item({ item }) {
  const [showTooltip, setShowToolTip] = React.useState(false);
  const [image, setImage] = React.useState("");
  const itemUrl = `https://www.wowhead.com/wotlk/item=${item.media.id}/${item.name}`;

  const handleMouseEnter = () => {
    setShowToolTip(true);
  };

  const handleMouseLeave = () => {
    setShowToolTip(false);
  };

  const locale = "en_US";
  const access_token = "USkpKkJgQtyNM4vtAAy0tDmdj6dP5hA9Wj";
  useEffect(() => {
    const fetchIcon = async () => {
      try {
        const fetchIcon = (href) => {
          const url = `${href}&locale=${locale}&access_token=${access_token}`;
          return fetch(url).then((response) => response.json());
        };
        const itemMedia = await fetchIcon(item.media.key.href);
        const [asset] = itemMedia.assets;
        const itemImageUrl = asset.value;
        const iconName = itemImageUrl.split("/").pop();
        const iconUrl = `https://wow.zamimg.com/images/wow/icons/large/${iconName}`;
        setImage(iconUrl);
      } catch (error) {
        console.error("Error fetching more item data:", error);
      }
    };
    fetchIcon();
  }, [item]);

  return (
    <div
      onMouseEnter={() => handleMouseEnter(true)}
      onMouseLeave={() => handleMouseLeave(false)}
      className="flex bg-slate-900 rounded-sm mx-1 mb-1"
    >
      <a className="w-16 h-16" href={itemUrl} target="_blank">
        <img
          className="w-full h-full rounded-md"
          src={image}
          alt={item.inventory_type.name}
        />
      </a>
      <p className="w-30 h-16 mx-2">{item.name}</p>
      {showTooltip && <Tooltip item={item} />}
    </div>
  );
}
