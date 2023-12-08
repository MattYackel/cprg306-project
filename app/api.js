"use client";

import { useState, useEffect } from "react";
import Armory from "./components/armory";
import { refreshToken } from "./_utils/refreshToken";

export async function fetchCharacter(formData) {
  const accessToken = await refreshToken();
  if (!accessToken) return null;

  const region = formData.region;
  const realm = formData.realm;
  const characterName = formData.name;
  const namespace = formData.namespace;
  const locale = formData.locale;

  const url = `https://${region}.api.blizzard.com/profile/wow/character/${realm}/${characterName}?namespace=${namespace}&locale=${locale}&access_token=${accessToken}`;

  const response = await fetch(url);
  const character = await response.json();

  const fetchMore = async (href) => {
    const url = `${href}&locale=${locale}&access_token=${accessToken}`;
    const response = await fetch(url);
    const moreData = await response.json();
    return moreData;
  };

  if (!character) return null;
  if (character.equipment) {
    character.equipment = await fetchMore(character.equipment.href);
    if (character.equipment.equipped_items)
      for (const item of character.equipment.equipped_items) {
        const itemMedia = await fetchMore(item.media.key.href);
        const [mediaAssets] = itemMedia.assets;
        const dirtyUrl = mediaAssets.value;
        const iconName = dirtyUrl.split("/").pop();
        const iconUrl = `https://wow.zamimg.com/images/wow/icons/large/${iconName}`;
        item.media = iconUrl;
      }
  }
  character.media = await fetchMore(character.media.href);

  console.log(character);
  return character;
}

export default function API({ formData }) {
  const [character, setCharacter] = useState();

  async function loadData() {
    try {
      const character = await fetchCharacter(formData);
      setCharacter(character);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (formData) {
      loadData();
    }
  }, [formData]);

  return (
    <div>
      {character ? (
        <div>
          <Armory character={character} />
        </div>
      ) : (
        <div className="flex justify-center mt-8">
          <p className="text-3xl font-bold">Loading character...</p>
        </div>
      )}
    </div>
  );
}
