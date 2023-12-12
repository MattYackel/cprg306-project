import React from "react";

const Examples = ({ updateFormData }) => {
  const examples = [
    {
      region: "US",
      realm: "Atiesh",
      name: "Whisperz",
      namespace: "WOTLK Classic",
      locale: "en_US",
    },
    {
      region: "US",
      realm: "Atiesh",
      name: "Toppywoppy",
      region: "US",
      namespace: "WOTLK Classic",
      locale: "en_US",
    },
    {
      region: "EU",
      realm: "Gehennas",
      name: "Tomson",
      namespace: "WOTLK Classic",
      locale: "en_US",
    },
    {
      region: "US",
      realm: "Whitemane",
      name: "Aetherium",
      namespace: "Classic Era",
      locale: "en_US",
    },
  ];

  const handleExampleClick = (example) => () => {
    const updatedData = {
      region: example.region.toLowerCase(),
      realm: example.realm.toLowerCase(),
      name: example.name.toLowerCase(),
      namespace:
        example.namespace === "WOTLK Classic"
          ? `profile-classic-${example.region.toLowerCase()}`
          : `profile-classic1x-${example.region.toLowerCase()}`,
      locale: example.locale,
    };
    updateFormData(updatedData);
  };

  return (
    <div className="max-w-screen-sm mx-auto">
      <h2 className="text-2xl text-center text-white font-bold">
        Search for a Character.
      </h2>
      <p className="text-center text-white">
        It can be any character from WOTLK or Classic Era servers.
      </p>
      <p className="text-center text-white">
        Here are some example characters to seach for:
      </p>
      <div className="flex flex-wrap justify-center">
        {examples.map((example, index) => (
          <div
            key={index}
            className="grid grid-cols-2 w-72 bg-slate-700 rounded-md p-2 m-1 cursor-pointer hover:bg-slate-600"
            onClick={handleExampleClick(example)}
          >
            <p className="text-right text-white">Character Name:&nbsp;</p>
            <p className="text-orange-500 font-bold">{example.name}</p>
            <p className="text-right text-white">Realm:&nbsp;</p>
            <p className="text-orange-500 font-bold">{example.realm}</p>
            <p className="text-right text-white">Region:&nbsp;</p>
            <p className="text-orange-500 font-bold">{example.region}</p>
            <p className="text-right text-white">Namespace:&nbsp;</p>
            <p className="text-orange-500 font-bold">{example.namespace}</p>
            <p className="text-right text-white">Locale:&nbsp;</p>
            <p className="text-orange-500 font-bold">{example.locale}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Examples;
