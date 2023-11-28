"use client";

// npm i node-libcurl

// Client ID: 76f3d782a8ef4a4886c8a2e1d80b2eda
// Client Secret: cCIvt41oLiOCKU5LjztlmO9jhFMxSvqz
// https://oauth.battle.net/oauth/authorize?response_type=code&client_id=76f3d782a8ef4a4886c8a2e1d80b2eda&scope=wow.profile%20sc2.profile&redirect_uri=https://develop.battle.net/documentation/world-of-warcraft-classic/profile-apis&state=%27%27
// https://develop.battle.net/documentation/world-of-warcraft-classic/profile-apis

// const url2 = `https://${region}.api.blizzard.com/profile/wow/character/${realm}/${characterName}?namespace=${namespace}&locale=${locale}&access_token=${accessToken}`;

// curl -u {client_id}:{client_secret} -d grant_type=client_credentials https://oauth.battle.net/token

import { useState, useEffect } from "react";
import Tooltip from "./components/tooltip";
import Armory from "./components/armory";
import Form from "./components/form";

export async function fetchData() {
  const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

  const region = "us";
  const realm = "atiesh";
  const characterName = "whisperz";
  const namespace = "profile-classic-us";
  const locale = "en_US";

  const url = `https://${region}.api.blizzard.com/profile/wow/character/${realm}/${characterName}/equipment?namespace=${namespace}&locale=${locale}&access_token=${accessToken}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

export default function API({}) {
  const [data, setData] = useState();

  async function loadData() {
    try {
      const data = await fetchData();
      setData(data);
    } catch (error) {
      console.log("error");
    }
  }
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <Armory character={data} />
          <Tooltip items={data.equipped_items} />
        </div>
      ) : (
        <div>
          <p>loading...</p>
        </div>
      )}
    </div>
  );
}
