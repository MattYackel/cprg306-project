"use client";

import { useState, useEffect } from "react";
import Armory from "./components/armory";
import { refreshToken } from "./_utils/refreshToken";

export async function fetchCharacter(formData, setErrorMessage) {
  const accessToken = await refreshToken();
  if (!accessToken) return null;

  const region = formData.region;
  const realm = formData.realm;
  const characterName = formData.name;
  const namespace = formData.namespace;
  const locale = formData.locale;

  const url = `https://${region}.api.blizzard.com/profile/wow/character/${realm}/${characterName}?namespace=${namespace}&locale=${locale}&access_token=${accessToken}`;

  const response = await fetch(url);

  if (!response.ok) {
    const errorMessage = await response.json();
    if (errorMessage.code === 401) {
      setErrorMessage(errorMessage.detail);
      throw new Error(errorMessage.detail);
    } else if (errorMessage.code === 404) {
      setErrorMessage(errorMessage.detail);
      throw new Error(errorMessage.detail);
    } else {
      setErrorMessage(errorMessage.error);
      throw new Error(errorMessage.error);
    }
  }

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
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  async function loadData() {
    try {
      setLoading(true);
      const character = await fetchCharacter(formData, setErrorMessage);
      setCharacter(character);
      setErrorMessage(null);
    } catch (error) {
      setCharacter(null);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (formData) {
      loadData();
    }
  }, [formData]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center mt-8">
          <p className="text-3xl font-bold">Loading character...</p>
        </div>
      ) : errorMessage && errorMessage.includes("Error 404") ? (
        <div className="flex justify-center mt-8">
          <p className="text-3xl font-bold text-red-500">
            Error 404: Character not found.
          </p>
        </div>
      ) : errorMessage ? (
        <div className="flex justify-center mt-8">
          <p className="text-3xl font-bold text-red-500">{errorMessage}</p>
        </div>
      ) : character ? (
        <div>
          <Armory character={character} region={formData.region} />
        </div>
      ) : (
        <div className="flex justify-center mt-8">
          <p className="text-3xl font-bold">Loading character...</p>
        </div>
      )}
    </div>
  );
}
