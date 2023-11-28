import API from "./api";
import Form from "./components/form";
import Armory from "./components/armory";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl text-center font-bold">WoW Classic Armory</h1>
      <div className="">
        <Form />
        <API />
      </div>
    </main>
  );
}

/*
API Response Body Example
{
  "_links": {
    "self": {
      "href": "https://us.api.blizzard.com/profile/wow/character/atiesh/whisperz/equipment?namespace=profile-classic-us"
    }
  },
  "character": {
    "key": {
      "href": "https://us.api.blizzard.com/profile/wow/character/atiesh/whisperz?namespace=profile-classic-us"
    },
    "name": "Whisperz",
    "id": 52239576,
    "realm": {
      "key": {
        "href": "https://us.api.blizzard.com/data/wow/realm/4372?namespace=dynamic-classic-us"
      },
      "name": "Atiesh",
      "id": 4372,
      "slug": "atiesh"
    }
  },
  "equipped_items": [
    {
      "item": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item/32461?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 32461
      },
      "enchantments": [
        {
          "display_string": "Enchanted: +34 Attack Power and +16 Hit Rating",
          "source_item": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/item/29192?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Arcanum of Ferocity",
            "id": 29192
          },
          "enchantment_id": 3003,
          "enchantment_slot": {
            "id": 0,
            "type": "PERMANENT"
          }
        },
        {
          "display_string": "+12 Critical Strike Rating and 3% Increased Critical Damage",
          "source_item": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/item/34220?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Chaotic Skyfire Diamond",
            "id": 34220
          },
          "enchantment_id": 3261,
          "enchantment_slot": {
            "id": 2
          }
        },
        {
          "display_string": "+6 Strength and +9 Stamina",
          "source_item": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/item/39934?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Sovereign Shadow Crystal",
            "id": 39934
          },
          "enchantment_id": 3392,
          "enchantment_slot": {
            "id": 3
          }
        },
        {
          "display_string": "+4 Critical Strike Rating",
          "enchantment_id": 2874,
          "enchantment_slot": {
            "id": 5
          }
        }
      ],
      "slot": {
        "type": "HEAD",
        "name": "Head"
      },
      "quantity": 1,
      "quality": {
        "type": "EPIC",
        "name": "Epic"
      },
      "name": "Furious Gizmatic Goggles",
      "media": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/media/item/32461?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 32461
      },
      "item_class": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Armor",
        "id": 4
      },
      "item_subclass": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Plate",
        "id": 4
      },
      "inventory_type": {
        "type": "HEAD",
        "name": "Head"
      },
      "binding": {
        "type": "ON_ACQUIRE",
        "name": "Binds when picked up"
      },
      "armor": {
        "value": 1296,
        "display": {
          "display_string": "1,296 Armor",
          "color": {
            "r": 255,
            "g": 255,
            "b": 255,
            "a": 1
          }
        }
      },
      "stats": [
        {
          "type": {
            "type": "STRENGTH",
            "name": "Strength"
          },
          "value": 48,
          "display": {
            "display_string": "+48 Strength",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "STAMINA",
            "name": "Stamina"
          },
          "value": 28,
          "display": {
            "display_string": "+28 Stamina",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "HIT_RATING",
            "name": "Improves hit rating by %s."
          },
          "value": 13,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Improves hit rating by 13.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "CRIT_RATING",
            "name": "Improves critical strike rating by %s."
          },
          "value": 38,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Improves critical strike rating by 38.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        }
      ],
      "spells": [
        {
          "spell": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/spell/12883?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Longsight",
            "id": 12883
          },
          "description": "Use: Allows you to look far into the distance. (3 Sec Cooldown)"
        }
      ],
      "sell_price": {
        "value": 69205,
        "display_strings": {
          "header": "Sell Price:",
          "gold": "6",
          "silver": "92",
          "copper": "5"
        }
      },
      "requirements": {
        "level": {
          "value": 62,
          "display_string": "Requires Level 62"
        },
        "skill": {
          "profession": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/profession/202?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Engineering",
            "id": 202
          },
          "level": 350,
          "display_string": "Requires Engineering (350)"
        }
      },
      "durability": {
        "value": 100,
        "display_string": "Durability 100 / 100"
      }
    },
    {
      "item": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item/50647?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 50647
      },
      "enchantments": [
        {
          "display_string": "+20 Strength",
          "source_item": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/item/40111?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Bold Cardinal Ruby",
            "id": 40111
          },
          "enchantment_id": 3518,
          "enchantment_slot": {
            "id": 2
          }
        }
      ],
      "slot": {
        "type": "NECK",
        "name": "Neck"
      },
      "quantity": 1,
      "quality": {
        "type": "EPIC",
        "name": "Epic"
      },
      "name": "Ahn'kahar Onyx Neckguard",
      "media": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/media/item/50647?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 50647
      },
      "item_class": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Armor",
        "id": 4
      },
      "item_subclass": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/0?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Miscellaneous",
        "id": 0
      },
      "inventory_type": {
        "type": "NECK",
        "name": "Neck"
      },
      "binding": {
        "type": "ON_ACQUIRE",
        "name": "Binds when picked up"
      },
      "stats": [
        {
          "type": {
            "type": "STRENGTH",
            "name": "Strength"
          },
          "value": 108,
          "display": {
            "display_string": "+108 Strength",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "STAMINA",
            "name": "Stamina"
          },
          "value": 116,
          "display": {
            "display_string": "+116 Stamina",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "HIT_RATING",
            "name": "Improves hit rating by %s."
          },
          "value": 60,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Improves hit rating by 60.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "CRIT_RATING",
            "name": "Improves critical strike rating by %s."
          },
          "value": 68,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Improves critical strike rating by 68.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        }
      ],
      "sell_price": {
        "value": 75623,
        "display_strings": {
          "header": "Sell Price:",
          "gold": "7",
          "silver": "56",
          "copper": "23"
        }
      },
      "requirements": {
        "level": {
          "value": 80,
          "display_string": "Requires Level 80"
        }
      },
      "is_subclass_hidden": true
    },
    {
      "item": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item/50674?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 50674
      },
      "slot": {
        "type": "SHOULDER",
        "name": "Shoulders"
      },
      "quantity": 1,
      "quality": {
        "type": "EPIC",
        "name": "Epic"
      },
      "name": "Raging Behemoth's Shoulderplates",
      "media": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/media/item/50674?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 50674
      },
      "item_class": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Armor",
        "id": 4
      },
      "item_subclass": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Plate",
        "id": 4
      },
      "inventory_type": {
        "type": "SHOULDER",
        "name": "Shoulder"
      },
      "binding": {
        "type": "ON_ACQUIRE",
        "name": "Binds when picked up"
      },
      "armor": {
        "value": 2067,
        "display": {
          "display_string": "2,067 Armor",
          "color": {
            "r": 255,
            "g": 255,
            "b": 255,
            "a": 1
          }
        }
      },
      "stats": [
        {
          "type": {
            "type": "STRENGTH",
            "name": "Strength"
          },
          "value": 139,
          "display": {
            "display_string": "+139 Strength",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "STAMINA",
            "name": "Stamina"
          },
          "value": 155,
          "display": {
            "display_string": "+155 Stamina",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "HIT_RATING",
            "name": "Improves hit rating by %s."
          },
          "value": 74,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Improves hit rating by 74.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "CRIT_RATING",
            "name": "Improves critical strike rating by %s."
          },
          "value": 90,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Improves critical strike rating by 90.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        }
      ],
      "sell_price": {
        "value": 134597,
        "display_strings": {
          "header": "Sell Price:",
          "gold": "13",
          "silver": "45",
          "copper": "97"
        }
      },
      "requirements": {
        "level": {
          "value": 80,
          "display_string": "Requires Level 80"
        }
      },
      "durability": {
        "value": 100,
        "display_string": "Durability 100 / 100"
      }
    },
    {
      "item": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item/50606?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 50606
      },
      "slot": {
        "type": "CHEST",
        "name": "Chest"
      },
      "quantity": 1,
      "quality": {
        "type": "EPIC",
        "name": "Epic"
      },
      "name": "Gendarme's Cuirass",
      "media": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/media/item/50606?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 50606
      },
      "item_class": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Armor",
        "id": 4
      },
      "item_subclass": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Plate",
        "id": 4
      },
      "inventory_type": {
        "type": "CHEST",
        "name": "Chest"
      },
      "binding": {
        "type": "ON_ACQUIRE",
        "name": "Binds when picked up"
      },
      "armor": {
        "value": 2756,
        "display": {
          "display_string": "2,756 Armor",
          "color": {
            "r": 255,
            "g": 255,
            "b": 255,
            "a": 1
          }
        }
      },
      "stats": [
        {
          "type": {
            "type": "STRENGTH",
            "name": "Strength"
          },
          "value": 185,
          "display": {
            "display_string": "+185 Strength",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "STAMINA",
            "name": "Stamina"
          },
          "value": 209,
          "display": {
            "display_string": "+209 Stamina",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "HIT_RATING",
            "name": "Improves hit rating by %s."
          },
          "value": 106,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Improves hit rating by 106.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "CRIT_RATING",
            "name": "Improves critical strike rating by %s."
          },
          "value": 114,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Improves critical strike rating by 114.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        }
      ],
      "sell_price": {
        "value": 188156,
        "display_strings": {
          "header": "Sell Price:",
          "gold": "18",
          "silver": "81",
          "copper": "56"
        }
      },
      "requirements": {
        "level": {
          "value": 80,
          "display_string": "Requires Level 80"
        }
      },
      "durability": {
        "value": 165,
        "display_string": "Durability 165 / 165"
      }
    },
    {
      "item": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item/50620?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 50620
      },
      "enchantments": [
        {
          "display_string": "Enchanted: Frag Belt",
          "enchantment_id": 3601,
          "enchantment_slot": {
            "id": 0,
            "type": "PERMANENT"
          }
        },
        {
          "display_string": "+10 Strength and +10 Haste Rating",
          "source_item": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/item/40146?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Fierce Ametrine",
            "id": 40146
          },
          "enchantment_id": 3553,
          "enchantment_slot": {
            "id": 2
          }
        },
        {
          "display_string": "+20 Strength",
          "source_item": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/item/40111?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Bold Cardinal Ruby",
            "id": 40111
          },
          "enchantment_id": 3518,
          "enchantment_slot": {
            "id": 3
          }
        },
        {
          "display_string": "+20 Strength",
          "source_item": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/item/40111?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Bold Cardinal Ruby",
            "id": 40111
          },
          "enchantment_id": 3518,
          "enchantment_slot": {
            "id": 4
          }
        },
        {
          "display_string": "+6 Strength",
          "enchantment_id": 3357,
          "enchantment_slot": {
            "id": 5
          }
        },
        {
          "source_item": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/item/41611?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Eternal Belt Buckle",
            "id": 41611
          },
          "enchantment_id": 3729,
          "enchantment_slot": {
            "id": 6,
            "type": "BONUS_SOCKETS"
          }
        }
      ],
      "slot": {
        "type": "WAIST",
        "name": "Waist"
      },
      "quantity": 1,
      "quality": {
        "type": "EPIC",
        "name": "Epic"
      },
      "name": "Coldwraith Links",
      "media": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/media/item/50620?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 50620
      },
      "item_class": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Armor",
        "id": 4
      },
      "item_subclass": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Plate",
        "id": 4
      },
      "inventory_type": {
        "type": "WAIST",
        "name": "Waist"
      },
      "binding": {
        "type": "ON_ACQUIRE",
        "name": "Binds when picked up"
      },
      "armor": {
        "value": 1550,
        "display": {
          "display_string": "1,550 Armor",
          "color": {
            "r": 255,
            "g": 255,
            "b": 255,
            "a": 1
          }
        }
      },
      "stats": [
        {
          "type": {
            "type": "STRENGTH",
            "name": "Strength"
          },
          "value": 139,
          "display": {
            "display_string": "+139 Strength",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "STAMINA",
            "name": "Stamina"
          },
          "value": 155,
          "display": {
            "display_string": "+155 Stamina",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "CRIT_RATING",
            "name": "Improves critical strike rating by %s."
          },
          "value": 85,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Improves critical strike rating by 85.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "ARMOR_PENETRATION_RATING",
            "name": "Armor Penetration Rating"
          },
          "value": 78,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Armor Penetration Rating",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        }
      ],
      "sell_price": {
        "value": 92525,
        "display_strings": {
          "header": "Sell Price:",
          "gold": "9",
          "silver": "25",
          "copper": "25"
        }
      },
      "requirements": {
        "level": {
          "value": 80,
          "display_string": "Requires Level 80"
        }
      },
      "durability": {
        "value": 55,
        "display_string": "Durability 55 / 55"
      }
    },
    {
      "item": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item/50624?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 50624
      },
      "enchantments": [
        {
          "display_string": "Enchanted: +75 Attack Power and +22 Critical Strike Rating",
          "source_item": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/item/38374?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Icescale Leg Armor",
            "id": 38374
          },
          "enchantment_id": 3823,
          "enchantment_slot": {
            "id": 0,
            "type": "PERMANENT"
          }
        },
        {
          "display_string": "+10 Strength and +10 Haste Rating",
          "source_item": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/item/40146?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Fierce Ametrine",
            "id": 40146
          },
          "enchantment_id": 3553,
          "enchantment_slot": {
            "id": 2
          }
        },
        {
          "display_string": "+20 Strength",
          "source_item": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/item/40111?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Bold Cardinal Ruby",
            "id": 40111
          },
          "enchantment_id": 3518,
          "enchantment_slot": {
            "id": 3
          }
        },
        {
          "display_string": "+10 All Stats",
          "source_item": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/item/49110?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Nightmare Tear",
            "id": 49110
          },
          "enchantment_id": 3879,
          "enchantment_slot": {
            "id": 4
          }
        },
        {
          "display_string": "+8 Strength",
          "enchantment_id": 3312,
          "enchantment_slot": {
            "id": 5
          }
        }
      ],
      "slot": {
        "type": "LEGS",
        "name": "Legs"
      },
      "quantity": 1,
      "quality": {
        "type": "EPIC",
        "name": "Epic"
      },
      "name": "Scourge Reaver's Legplates",
      "media": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/media/item/50624?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 50624
      },
      "item_class": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Armor",
        "id": 4
      },
      "item_subclass": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Plate",
        "id": 4
      },
      "inventory_type": {
        "type": "LEGS",
        "name": "Legs"
      },
      "binding": {
        "type": "ON_ACQUIRE",
        "name": "Binds when picked up"
      },
      "armor": {
        "value": 2412,
        "display": {
          "display_string": "2,412 Armor",
          "color": {
            "r": 255,
            "g": 255,
            "b": 255,
            "a": 1
          }
        }
      },
      "stats": [
        {
          "type": {
            "type": "STRENGTH",
            "name": "Strength"
          },
          "value": 185,
          "display": {
            "display_string": "+185 Strength",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "STAMINA",
            "name": "Stamina"
          },
          "value": 209,
          "display": {
            "display_string": "+209 Stamina",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "CRIT_RATING",
            "name": "Improves critical strike rating by %s."
          },
          "value": 122,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Improves critical strike rating by 122.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "HASTE_RATING",
            "name": "Improves haste rating by %s."
          },
          "value": 98,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Improves haste rating by 98.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        }
      ],
      "sell_price": {
        "value": 186752,
        "display_strings": {
          "header": "Sell Price:",
          "gold": "18",
          "silver": "67",
          "copper": "52"
        }
      },
      "requirements": {
        "level": {
          "value": 80,
          "display_string": "Requires Level 80"
        }
      },
      "durability": {
        "value": 120,
        "display_string": "Durability 120 / 120"
      }
    },
    {
      "item": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item/50625?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 50625
      },
      "slot": {
        "type": "FEET",
        "name": "Feet"
      },
      "quantity": 1,
      "quality": {
        "type": "EPIC",
        "name": "Epic"
      },
      "name": "Grinning Skull Greatboots",
      "media": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/media/item/50625?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 50625
      },
      "item_class": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Armor",
        "id": 4
      },
      "item_subclass": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Plate",
        "id": 4
      },
      "inventory_type": {
        "type": "FEET",
        "name": "Feet"
      },
      "binding": {
        "type": "ON_ACQUIRE",
        "name": "Binds when picked up"
      },
      "armor": {
        "value": 1895,
        "display": {
          "display_string": "1,895 Armor",
          "color": {
            "r": 255,
            "g": 255,
            "b": 255,
            "a": 1
          }
        }
      },
      "stats": [
        {
          "type": {
            "type": "STRENGTH",
            "name": "Strength"
          },
          "value": 103,
          "display": {
            "display_string": "+103 Strength",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "STAMINA",
            "name": "Stamina"
          },
          "value": 180,
          "display": {
            "display_string": "+180 Stamina",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "DEFENSE_SKILL_RATING",
            "name": "Increases defense rating by %s."
          },
          "value": 90,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Increases defense rating by 90.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "DODGE_RATING",
            "name": "Increases your dodge rating by %s."
          },
          "value": 82,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Increases your dodge rating by 82.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "EXPERTISE_RATING",
            "name": "Increases your expertise rating by %s."
          },
          "value": 61,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Increases your expertise rating by 61.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        }
      ],
      "sell_price": {
        "value": 140315,
        "display_strings": {
          "header": "Sell Price:",
          "gold": "14",
          "silver": "3",
          "copper": "15"
        }
      },
      "requirements": {
        "level": {
          "value": 80,
          "display_string": "Requires Level 80"
        }
      },
      "durability": {
        "value": 75,
        "display_string": "Durability 75 / 75"
      }
    },
    {
      "item": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item/51832?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 51832
      },
      "enchantments": [
        {
          "display_string": "Enchanted: +50 Attack Power",
          "source_item": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/item/44815?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Scroll of Enchant Bracers - Greater Assault",
            "id": 44815
          },
          "enchantment_id": 3845,
          "enchantment_slot": {
            "id": 0,
            "type": "PERMANENT"
          }
        },
        {
          "display_string": "+34 Strength",
          "source_item": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/item/42142?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Bold Dragon's Eye",
            "id": 42142
          },
          "enchantment_id": 3732,
          "enchantment_slot": {
            "id": 2
          }
        },
        {
          "display_string": "+4 Strength",
          "enchantment_id": 2892,
          "enchantment_slot": {
            "id": 5
          }
        }
      ],
      "slot": {
        "type": "WRIST",
        "name": "Wrist"
      },
      "quantity": 1,
      "quality": {
        "type": "EPIC",
        "name": "Epic"
      },
      "name": "Taiga Bindings",
      "media": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/media/item/51832?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 51832
      },
      "item_class": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Armor",
        "id": 4
      },
      "item_subclass": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Plate",
        "id": 4
      },
      "inventory_type": {
        "type": "WRIST",
        "name": "Wrist"
      },
      "binding": {
        "type": "ON_ACQUIRE",
        "name": "Binds when picked up"
      },
      "armor": {
        "value": 1155,
        "display": {
          "display_string": "1,155 Armor",
          "color": {
            "r": 255,
            "g": 255,
            "b": 255,
            "a": 1
          }
        }
      },
      "stats": [
        {
          "type": {
            "type": "STRENGTH",
            "name": "Strength"
          },
          "value": 95,
          "display": {
            "display_string": "+95 Strength",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "STAMINA",
            "name": "Stamina"
          },
          "value": 103,
          "display": {
            "display_string": "+103 Stamina",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "CRIT_RATING",
            "name": "Improves critical strike rating by %s."
          },
          "value": 52,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Improves critical strike rating by 52.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "HASTE_RATING",
            "name": "Improves haste rating by %s."
          },
          "value": 60,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Improves haste rating by 60.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        }
      ],
      "sell_price": {
        "value": 91360,
        "display_strings": {
          "header": "Sell Price:",
          "gold": "9",
          "silver": "13",
          "copper": "60"
        }
      },
      "requirements": {
        "level": {
          "value": 80,
          "display_string": "Requires Level 80"
        }
      },
      "durability": {
        "value": 55,
        "display_string": "Durability 55 / 55"
      }
    },
    {
      "item": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item/50716?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 50716
      },
      "slot": {
        "type": "HANDS",
        "name": "Hands"
      },
      "quantity": 1,
      "quality": {
        "type": "EPIC",
        "name": "Epic"
      },
      "name": "Taldaram's Plated Fists",
      "media": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/media/item/50716?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 50716
      },
      "item_class": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Armor",
        "id": 4
      },
      "item_subclass": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Plate",
        "id": 4
      },
      "inventory_type": {
        "type": "HAND",
        "name": "Hands"
      },
      "binding": {
        "type": "ON_ACQUIRE",
        "name": "Binds when picked up"
      },
      "armor": {
        "value": 1723,
        "display": {
          "display_string": "1,723 Armor",
          "color": {
            "r": 255,
            "g": 255,
            "b": 255,
            "a": 1
          }
        }
      },
      "stats": [
        {
          "type": {
            "type": "STRENGTH",
            "name": "Strength"
          },
          "value": 136,
          "display": {
            "display_string": "+136 Strength",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "STAMINA",
            "name": "Stamina"
          },
          "value": 180,
          "display": {
            "display_string": "+180 Stamina",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "DEFENSE_SKILL_RATING",
            "name": "Increases defense rating by %s."
          },
          "value": 71,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Increases defense rating by 71.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "DODGE_RATING",
            "name": "Increases your dodge rating by %s."
          },
          "value": 55,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Increases your dodge rating by 55.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "PARRY_RATING",
            "name": "Increases your parry rating by %s."
          },
          "value": 71,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Increases your parry rating by 71.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        }
      ],
      "sell_price": {
        "value": 93580,
        "display_strings": {
          "header": "Sell Price:",
          "gold": "9",
          "silver": "35",
          "copper": "80"
        }
      },
      "requirements": {
        "level": {
          "value": 80,
          "display_string": "Requires Level 80"
        },
        "playable_races": {
          "links": [
            {
              "key": {
                "href": "https://us.api.blizzard.com/data/wow/playable-race/1?namespace=static-3.4.3_51505-classic-us"
              },
              "name": "Human",
              "id": 1
            },
            {
              "key": {
                "href": "https://us.api.blizzard.com/data/wow/playable-race/2?namespace=static-3.4.3_51505-classic-us"
              },
              "name": "Orc",
              "id": 2
            },
            {
              "key": {
                "href": "https://us.api.blizzard.com/data/wow/playable-race/3?namespace=static-3.4.3_51505-classic-us"
              },
              "name": "Dwarf",
              "id": 3
            },
            {
              "key": {
                "href": "https://us.api.blizzard.com/data/wow/playable-race/4?namespace=static-3.4.3_51505-classic-us"
              },
              "name": "Night Elf",
              "id": 4
            },
            {
              "key": {
                "href": "https://us.api.blizzard.com/data/wow/playable-race/5?namespace=static-3.4.3_51505-classic-us"
              },
              "name": "Undead",
              "id": 5
            },
            {
              "key": {
                "href": "https://us.api.blizzard.com/data/wow/playable-race/6?namespace=static-3.4.3_51505-classic-us"
              },
              "name": "Tauren",
              "id": 6
            },
            {
              "key": {
                "href": "https://us.api.blizzard.com/data/wow/playable-race/7?namespace=static-3.4.3_51505-classic-us"
              },
              "name": "Gnome",
              "id": 7
            },
            {
              "key": {
                "href": "https://us.api.blizzard.com/data/wow/playable-race/8?namespace=static-3.4.3_51505-classic-us"
              },
              "name": "Troll",
              "id": 8
            },
            {
              "key": {
                "href": "https://us.api.blizzard.com/data/wow/playable-race/10?namespace=static-3.4.3_51505-classic-us"
              },
              "name": "Blood Elf",
              "id": 10
            },
            {
              "key": {
                "href": "https://us.api.blizzard.com/data/wow/playable-race/11?namespace=static-3.4.3_51505-classic-us"
              },
              "name": "Draenei",
              "id": 11
            }
          ],
          "display_string": "Races: Human, Orc, Dwarf, Night Elf, Undead, Tauren, Gnome, Troll, Blood Elf, Draenei"
        }
      },
      "durability": {
        "value": 55,
        "display_string": "Durability 55 / 55"
      }
    },
    {
      "item": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item/52572?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 52572
      },
      "enchantments": [
        {
          "display_string": "+10 Strength and +10 Haste Rating",
          "source_item": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/item/40146?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Fierce Ametrine",
            "id": 40146
          },
          "enchantment_id": 3553,
          "enchantment_slot": {
            "id": 2
          }
        },
        {
          "display_string": "+4 Strength",
          "enchantment_id": 2927,
          "enchantment_slot": {
            "id": 5
          }
        }
      ],
      "slot": {
        "type": "FINGER_1",
        "name": "Ring 1"
      },
      "quantity": 1,
      "quality": {
        "type": "EPIC",
        "name": "Epic"
      },
      "name": "Ashen Band of Endless Might",
      "media": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/media/item/52572?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 52572
      },
      "item_class": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Armor",
        "id": 4
      },
      "item_subclass": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/0?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Miscellaneous",
        "id": 0
      },
      "inventory_type": {
        "type": "FINGER",
        "name": "Finger"
      },
      "binding": {
        "type": "ON_ACQUIRE",
        "name": "Binds when picked up"
      },
      "unique_equipped": "Unique",
      "limit_category": "Unique-Equipped: Ashen Verdict Band (1)",
      "stats": [
        {
          "type": {
            "type": "STRENGTH",
            "name": "Strength"
          },
          "value": 99,
          "display": {
            "display_string": "+99 Strength",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "STAMINA",
            "name": "Stamina"
          },
          "value": 107,
          "display": {
            "display_string": "+107 Stamina",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "HIT_RATING",
            "name": "Improves hit rating by %s."
          },
          "value": 59,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Improves hit rating by 59.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "CRIT_RATING",
            "name": "Improves critical strike rating by %s."
          },
          "value": 59,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Improves critical strike rating by 59.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        }
      ],
      "spells": [
        {
          "spell": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/spell/72413?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Item - Icecrown Reputation Ring Melee",
            "id": 72413
          },
          "description": "Equip: Chance on hit to increase your attack power by 480 for 10 sec."
        }
      ],
      "requirements": {
        "reputation": {
          "faction": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/reputation-faction/1156?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "The Ashen Verdict",
            "id": 1156
          },
          "min_reputation_level": 7,
          "display_string": "Requires The Ashen Verdict - Exalted"
        }
      },
      "is_subclass_hidden": true
    },
    {
      "item": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item/50657?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 50657
      },
      "enchantments": [
        {
          "display_string": "+10 Strength and +10 Haste Rating",
          "source_item": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/item/40146?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Fierce Ametrine",
            "id": 40146
          },
          "enchantment_id": 3553,
          "enchantment_slot": {
            "id": 2
          }
        },
        {
          "display_string": "+4 Strength",
          "enchantment_id": 2927,
          "enchantment_slot": {
            "id": 5
          }
        }
      ],
      "slot": {
        "type": "FINGER_2",
        "name": "Ring 2"
      },
      "quantity": 1,
      "quality": {
        "type": "EPIC",
        "name": "Epic"
      },
      "name": "Skeleton Lord's Circle",
      "media": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/media/item/50657?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 50657
      },
      "item_class": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Armor",
        "id": 4
      },
      "item_subclass": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/0?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Miscellaneous",
        "id": 0
      },
      "inventory_type": {
        "type": "FINGER",
        "name": "Finger"
      },
      "binding": {
        "type": "ON_ACQUIRE",
        "name": "Binds when picked up"
      },
      "unique_equipped": "Unique-Equipped",
      "limit_category": "Unique-Equipped: Skeleton Lord's Circle (1)",
      "stats": [
        {
          "type": {
            "type": "STRENGTH",
            "name": "Strength"
          },
          "value": 108,
          "display": {
            "display_string": "+108 Strength",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "STAMINA",
            "name": "Stamina"
          },
          "value": 116,
          "display": {
            "display_string": "+116 Stamina",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "CRIT_RATING",
            "name": "Improves critical strike rating by %s."
          },
          "value": 68,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Improves critical strike rating by 68.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "EXPERTISE_RATING",
            "name": "Increases your expertise rating by %s."
          },
          "value": 60,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Increases your expertise rating by 60.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        }
      ],
      "sell_price": {
        "value": 75623,
        "display_strings": {
          "header": "Sell Price:",
          "gold": "7",
          "silver": "56",
          "copper": "23"
        }
      },
      "requirements": {
        "level": {
          "value": 80,
          "display_string": "Requires Level 80"
        }
      },
      "is_subclass_hidden": true
    },
    {
      "item": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item/10725?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 10725
      },
      "slot": {
        "type": "TRINKET_1",
        "name": "Trinket 1"
      },
      "quantity": 1,
      "quality": {
        "type": "COMMON",
        "name": "Common"
      },
      "name": "Gnomish Battle Chicken",
      "media": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/media/item/10725?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 10725
      },
      "item_class": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Armor",
        "id": 4
      },
      "item_subclass": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/0?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Miscellaneous",
        "id": 0
      },
      "inventory_type": {
        "type": "TRINKET",
        "name": "Trinket"
      },
      "binding": {
        "type": "ON_ACQUIRE",
        "name": "Binds when picked up"
      },
      "spells": [
        {
          "spell": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/spell/23133?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Gnomish Battle Chicken",
            "id": 23133
          },
          "description": "Use: Creates a Battle Chicken that will fight for you for 1.50 min or until it is destroyed. (20 Min Cooldown)"
        }
      ],
      "sell_price": {
        "value": 1500,
        "display_strings": {
          "header": "Sell Price:",
          "gold": "0",
          "silver": "15",
          "copper": "0"
        }
      },
      "requirements": {
        "skill": {
          "profession": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/profession/202?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Engineering",
            "id": 202
          },
          "level": 230,
          "display_string": "Requires Engineering (230)"
        }
      },
      "is_subclass_hidden": true
    },
    {
      "item": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item/46312?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 46312
      },
      "slot": {
        "type": "TRINKET_2",
        "name": "Trinket 2"
      },
      "quantity": 1,
      "quality": {
        "type": "EPIC",
        "name": "Epic"
      },
      "name": "Vanquished Clutches of Yogg-Saron",
      "media": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/media/item/46312?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 46312
      },
      "item_class": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Armor",
        "id": 4
      },
      "item_subclass": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/0?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Miscellaneous",
        "id": 0
      },
      "inventory_type": {
        "type": "TRINKET",
        "name": "Trinket"
      },
      "binding": {
        "type": "ON_ACQUIRE",
        "name": "Binds when picked up"
      },
      "unique_equipped": "Unique",
      "stats": [
        {
          "type": {
            "type": "CRIT_RATING",
            "name": "Improves critical strike rating by %s."
          },
          "value": 154,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Improves critical strike rating by 154.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        }
      ],
      "spells": [
        {
          "spell": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/spell/64981?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Summon Random Vanquished Tentacle",
            "id": 64981
          },
          "description": "Use: Calls forth a Vanquished Tentacle of Yogg-Saron to serve you. (2 Min Cooldown)"
        }
      ],
      "sell_price": {
        "value": 113940,
        "display_strings": {
          "header": "Sell Price:",
          "gold": "11",
          "silver": "39",
          "copper": "40"
        }
      },
      "requirements": {
        "level": {
          "value": 80,
          "display_string": "Requires Level 80"
        }
      },
      "is_subclass_hidden": true
    },
    {
      "item": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item/50677?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 50677
      },
      "enchantments": [
        {
          "display_string": "Enchanted: +23 Haste Rating",
          "source_item": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/item/39003?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Scroll of Enchant Cloak - Greater Speed",
            "id": 39003
          },
          "enchantment_id": 3831,
          "enchantment_slot": {
            "id": 0,
            "type": "PERMANENT"
          }
        },
        {
          "display_string": "+10 Strength and +10 Haste Rating",
          "source_item": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/item/40146?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Fierce Ametrine",
            "id": 40146
          },
          "enchantment_id": 3553,
          "enchantment_slot": {
            "id": 2
          }
        },
        {
          "display_string": "+4 Strength",
          "enchantment_id": 2927,
          "enchantment_slot": {
            "id": 5
          }
        }
      ],
      "slot": {
        "type": "BACK",
        "name": "Back"
      },
      "quantity": 1,
      "quality": {
        "type": "EPIC",
        "name": "Epic"
      },
      "name": "Winding Sheet",
      "media": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/media/item/50677?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 50677
      },
      "item_class": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Armor",
        "id": 4
      },
      "item_subclass": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/1?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Cloth",
        "id": 1
      },
      "inventory_type": {
        "type": "CLOAK",
        "name": "Back"
      },
      "binding": {
        "type": "ON_ACQUIRE",
        "name": "Binds when picked up"
      },
      "armor": {
        "value": 185,
        "display": {
          "display_string": "185 Armor",
          "color": {
            "r": 255,
            "g": 255,
            "b": 255,
            "a": 1
          }
        }
      },
      "stats": [
        {
          "type": {
            "type": "STRENGTH",
            "name": "Strength"
          },
          "value": 108,
          "display": {
            "display_string": "+108 Strength",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "STAMINA",
            "name": "Stamina"
          },
          "value": 116,
          "display": {
            "display_string": "+116 Stamina",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "CRIT_RATING",
            "name": "Improves critical strike rating by %s."
          },
          "value": 68,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Improves critical strike rating by 68.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "HASTE_RATING",
            "name": "Improves haste rating by %s."
          },
          "value": 60,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Improves haste rating by 60.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        }
      ],
      "sell_price": {
        "value": 77942,
        "display_strings": {
          "header": "Sell Price:",
          "gold": "7",
          "silver": "79",
          "copper": "42"
        }
      },
      "requirements": {
        "level": {
          "value": 80,
          "display_string": "Requires Level 80"
        }
      },
      "is_subclass_hidden": true
    },
    {
      "item": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item/39769?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 39769
      },
      "slot": {
        "type": "MAIN_HAND",
        "name": "Main Hand"
      },
      "quantity": 1,
      "quality": {
        "type": "EPIC",
        "name": "Epic"
      },
      "name": "Arcanite Ripper",
      "media": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/media/item/39769?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 39769
      },
      "item_class": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/2?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Weapon",
        "id": 2
      },
      "item_subclass": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/2/item-subclass/1?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Axe",
        "id": 1
      },
      "inventory_type": {
        "type": "TWOHWEAPON",
        "name": "Two-Hand"
      },
      "binding": {
        "type": "ON_ACQUIRE",
        "name": "Binds when picked up"
      },
      "unique_equipped": "Unique",
      "weapon": {
        "damage": {
          "min_value": 325,
          "max_value": 542,
          "display_string": "325 - 542 Damage",
          "damage_class": {
            "type": "PHYSICAL",
            "name": "Physical"
          }
        },
        "attack_speed": {
          "value": 3800,
          "display_string": "Speed 3.80"
        },
        "dps": {
          "value": 114.07894,
          "display_string": "(114.1 damage per second)"
        }
      },
      "stats": [
        {
          "type": {
            "type": "STAMINA",
            "name": "Stamina"
          },
          "value": 48,
          "display": {
            "display_string": "+48 Stamina",
            "color": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "CRIT_RATING",
            "name": "Improves critical strike rating by %s."
          },
          "value": 24,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Improves critical strike rating by 24.",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        },
        {
          "type": {
            "type": "ATTACK_POWER",
            "name": "Attack Power"
          },
          "value": 112,
          "is_equip_bonus": true,
          "display": {
            "display_string": "Equip: Attack Power",
            "color": {
              "r": 0,
              "g": 255,
              "b": 0,
              "a": 1
            }
          }
        }
      ],
      "spells": [
        {
          "spell": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/spell/53440?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Arcanite Ripper",
            "id": 53440
          },
          "description": "Use: Bust out a face melter. (1 Min Cooldown)"
        }
      ],
      "sell_price": {
        "value": 145527,
        "display_strings": {
          "header": "Sell Price:",
          "gold": "14",
          "silver": "55",
          "copper": "27"
        }
      },
      "requirements": {
        "level": {
          "value": 70,
          "display_string": "Requires Level 70"
        }
      },
      "durability": {
        "value": 120,
        "display_string": "Durability 120 / 120"
      }
    },
    {
      "item": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item/47672?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 47672
      },
      "slot": {
        "type": "RANGED",
        "name": "Ranged"
      },
      "quantity": 1,
      "quality": {
        "type": "EPIC",
        "name": "Epic"
      },
      "name": "Sigil of Insolence",
      "media": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/media/item/47672?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 47672
      },
      "item_class": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Armor",
        "id": 4
      },
      "item_subclass": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/10?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Sigil",
        "id": 10
      },
      "inventory_type": {
        "type": "RELIC",
        "name": "Relic"
      },
      "binding": {
        "type": "ON_ACQUIRE",
        "name": "Binds when picked up"
      },
      "unique_equipped": "Unique",
      "spells": [
        {
          "spell": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/spell/67381?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Item - Death Knight T9 Tank Relic (Rune Strike)",
            "id": 67381
          },
          "description": "Equip: Each time you use your Rune Strike ability, you have a chance to gain 200 dodge rating for 20 sec."
        }
      ],
      "requirements": {
        "level": {
          "value": 80,
          "display_string": "Requires Level 80"
        }
      }
    },
    {
      "item": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item/52252?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 52252
      },
      "slot": {
        "type": "TABARD",
        "name": "Tabard"
      },
      "quantity": 1,
      "quality": {
        "type": "EPIC",
        "name": "Epic"
      },
      "name": "Tabard of the Lightbringer",
      "media": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/media/item/52252?namespace=static-3.4.3_51505-classic-us"
        },
        "id": 52252
      },
      "item_class": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Armor",
        "id": 4
      },
      "item_subclass": {
        "key": {
          "href": "https://us.api.blizzard.com/data/wow/item-class/4/item-subclass/0?namespace=static-3.4.3_51505-classic-us"
        },
        "name": "Miscellaneous",
        "id": 0
      },
      "inventory_type": {
        "type": "TABARD",
        "name": "Tabard"
      },
      "binding": {
        "type": "ON_EQUIP",
        "name": "Binds when equipped"
      },
      "unique_equipped": "Unique",
      "spells": [
        {
          "spell": {
            "key": {
              "href": "https://us.api.blizzard.com/data/wow/spell/73326?namespace=static-3.4.3_51505-classic-us"
            },
            "name": "Tabard of the Lightbringer",
            "id": 73326
          },
          "description": "Use: Suffuses the wearer with the Light. (30 Min Cooldown)"
        }
      ],
      "requirements": {
        "level": {
          "value": 80,
          "display_string": "Requires Level 80"
        }
      },
      "description": "May you always bring light into dark places.",
      "is_subclass_hidden": true
    }
  ],
  "equipped_item_sets": [
    {}
  ]
}
*/
