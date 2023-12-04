"use client";

import React from "react";
import { useState } from "react";

const Form = ({ onSearch }) => {
  const [region, setRegion] = useState("us");
  const [realm, setRealm] = useState("atiesh");
  const [name, setName] = useState("whisperz");
  const [namespace, setNamespace] = useState("profile-classic-us");
  const [locale, setLocale] = useState("en_US");

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };
  const handleRealmChange = (event) => {
    setRealm(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleNamespaceChange = (event) => {
    setNamespace(event.target.value);
  };
  const handleLocaleChange = (event) => {
    setLocale(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const character = {
      region,
      realm,
      name,
      namespace,
      locale,
    };
    onSearch(character);
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
            value={region}
            onChange={handleRegionChange}
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
            value={realm}
            onChange={handleRealmChange}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </label>

        <label className="block mb-2">
          <span className="text-orange-400">Character Name:</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </label>

        <label className="block mb-2">
          <span className="text-orange-400">Namespace:</span>
          <input
            type="text"
            name="namespace"
            value={namespace}
            onChange={handleNamespaceChange}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </label>

        <label className="block mb-2">
          <span className="text-orange-400">Locale:</span>
          <input
            type="text"
            name="locale"
            value={locale}
            onChange={handleLocaleChange}
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
