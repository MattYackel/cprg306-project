"use client";

import { useState, useEffect } from "react";
import Armory from "./components/armory";
import { refreshToken } from "./refreshToken";

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

  if (!character || character.code === 404) return null;
  if (character.equipment) {
    character.equipment = await fetchMore(character.equipment.href);
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
        <div>
          <p>loading...</p>
          <button className="bg-blue-500" onClick={refreshToken}>
            Refresh Token
          </button>
        </div>
      )}
    </div>
  );
}
