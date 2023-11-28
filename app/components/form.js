"use client";

import React from "react";

const Form = () => {
  const [formData, setFormData] = React.useState({
    region: "us",
    realm: "atiesh",
    characterName: "whisperz",
    namespace: "profile-classic-us",
    locale: "en_US",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    // send formData to API
    //console.log(formData);
  };

  return (
    <div>
      <h2 className="text-2xl text-center font-bold">Search for a Character</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-8 p-4 bg-gray-800 rounded-md"
      >
        <label className="block mb-2">
          <span className="text-orange-400">Region:</span>
          <select
            name="region"
            value={formData.region}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md text-black"
          >
            <option value="us">US</option>
            <option value="eu">EU</option>
            <option value="kr">KR</option>
            <option value="tw">TW</option>
          </select>
        </label>

        <label className="block mb-2">
          <span className="text-orange-400">Realm:</span>
          <input
            type="text"
            name="realm"
            value={formData.realm}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </label>

        <label className="block mb-2">
          <span className="text-orange-400">Character Name:</span>
          <input
            type="text"
            name="characterName"
            value={formData.characterName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </label>

        <label className="block mb-2">
          <span className="text-orange-400">Namespace:</span>
          <input
            type="text"
            name="namespace"
            value={formData.namespace}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </label>

        <label className="block mb-2">
          <span className="text-orange-400">Locale:</span>
          <input
            type="text"
            name="locale"
            value={formData.locale}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
