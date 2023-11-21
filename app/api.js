"use client";

import { useState, useEffect } from "react";

async function fetchEquiptment() {
  const response = await fetch(
    "https://us.api.blizzard.com/profile/wow/character/atiesh/whisperz/equipment?namespace=profile-classic-us&locale=en_US&access_token=USDmCMGAppXfIIRWgMv8VBeSnLyk13JdEV"
  );
  const data = await response.json();
  console.log(data);
  return data;
}

export default function API({}) {
  const [equiptment, setEquiptment] = useState();

  async function loadEquiptment() {
    try {
      const data = await fetchEquiptment();
      setEquiptment(data);
      console.log(equiptment);
    } catch (error) {
      console.log("error");
    }
  }
  useEffect(() => {
    loadEquiptment();
  }, []);

  return (
    <div>
      <h1>API</h1>
      <p>Name: {equiptment && equiptment.character.name}</p>
    </div>
  );
}
