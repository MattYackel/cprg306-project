"use client";

import { useState } from "react";

import API from "./api";
import Form from "./components/form";

export default function Home() {
  const [formData, setFormData] = useState({
    region: "us",
    realm: "atiesh",
    name: "whisperz",
    namespace: "profile-classic-us",
    locale: "en_US",
  });
  const handleSubmit = (formData) => {
    console.log(formData);
    setFormData(formData);
  };

  return (
    <main>
      <h1 className="text-4xl text-center font-bold">WoW Classic Armory</h1>
      <div className="">
        <Form onSearch={handleSubmit} />
        <API formData={formData} />
      </div>
    </main>
  );
}

/*
Character Profile API Return
{
  "_links": {
    "self": {
      "href": "https://us.api.blizzard.com/profile/wow/character/atiesh/whisperz?namespace=profile-classic-us"
    }
  },
  "id": 52239576,
  "name": "Whisperz",
  "gender": {
    "type": "FEMALE",
    "name": "Female"
  },
  "faction": {
    "type": "ALLIANCE",
    "name": "Alliance"
  },
  "race": {
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/playable-race/1?namespace=static-3.4.3_51505-classic-us"
    },
    "name": "Human",
    "id": 1
  },
  "character_class": {
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/playable-class/6?namespace=static-3.4.3_51505-classic-us"
    },
    "name": "Death Knight",
    "id": 6
  },
  "active_spec": {
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/playable-specialization/0?namespace=static-3.4.3_51505-classic-us"
    },
    "id": 0
  },
  "realm": {
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/realm/4372?namespace=dynamic-classic-us"
    },
    "name": "Atiesh",
    "id": 4372,
    "slug": "atiesh"
  },
  "guild": {
    "key": {
      "href": "https://us.api.blizzard.com/data/wow/guild/atiesh/variance?namespace=profile-classic-us"
    },
    "name": "Variance",
    "id": 7083019,
    "realm": {
      "key": {
        "href": "https://us.api.blizzard.com/data/wow/realm/4372?namespace=dynamic-classic-us"
      },
      "name": "Atiesh",
      "id": 4372,
      "slug": "atiesh"
    },
    "faction": {
      "type": "ALLIANCE",
      "name": "Alliance"
    }
  },
  "level": 80,
  "experience": 0,
  "achievement_points": 6640,
  "achievements": {
    "href": "https://us.api.blizzard.com/profile/wow/character/atiesh/whisperz/achievements?namespace=profile-classic-us"
  },
  "titles": {
    "href": "https://us.api.blizzard.com/profile/wow/character/atiesh/whisperz/titles?namespace=profile-classic-us"
  },
  "pvp_summary": {
    "href": "https://us.api.blizzard.com/profile/wow/character/atiesh/whisperz/pvp-summary?namespace=profile-classic-us"
  },
  "media": {
    "href": "https://us.api.blizzard.com/profile/wow/character/atiesh/whisperz/character-media?namespace=profile-classic-us"
  },
  "last_login_timestamp": 1701359708000,
  "average_item_level": 272,
  "equipped_item_level": 270,
  "specializations": {
    "href": "https://us.api.blizzard.com/profile/wow/character/atiesh/whisperz/specializations?namespace=profile-classic-us"
  },
  "statistics": {
    "href": "https://us.api.blizzard.com/profile/wow/character/atiesh/whisperz/statistics?namespace=profile-classic-us"
  },
  "equipment": {
    "href": "https://us.api.blizzard.com/profile/wow/character/atiesh/whisperz/equipment?namespace=profile-classic-us"
  },
  "appearance": {
    "href": "https://us.api.blizzard.com/profile/wow/character/atiesh/whisperz/appearance?namespace=profile-classic-us"
  },
  "active_title": {
    "name": "%s the Light of Dawn"
  }
}
*/
