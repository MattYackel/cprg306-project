// Form.js
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
        className="max-w-screen-sm mx-auto px-3 pt-2 pb-1 bg-slate-800 rounded-md"
      >
        {/* Second row: Realm and Character Name */}
        <div className="flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 px-2 mb-2">
            <label className="block text-md text-orange-500 font-bold mb-1">
              Character Name:
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
              className="p-1 w-full bg-slate-700 rounded-md capitalize"
            />
          </div>
          <div className="w-full sm:w-1/2 px-2 mb-2">
            <label className="block text-md text-orange-500 font-bold mb-1">
              Realm:
            </label>
            <input
              type="text"
              name="realm"
              value={realm}
              onChange={handleRealmChange}
              className="p-1 w-full bg-slate-700 rounded-md capitalize"
            />
          </div>
        </div>

        {/* First row: Region, Namespace, and Locale */}
        <div className="flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/6 px-2 mb-2">
            <label className="block text-md text-orange-500 font-bold mb-1">
              Region:
            </label>
            <select
              name="region"
              value={region}
              onChange={handleRegionChange}
              className="p-1 w-full bg-slate-700 rounded-md"
            >
              <option value="us">US</option>
              <option value="eu">EU</option>
              <option value="kr">KR</option>
              <option value="tw">TW</option>
            </select>
          </div>

          <div className="w-full sm:w-2/6 px-2 mb-2">
            <label className="block text-md text-orange-500 font-bold mb-1">
              Namespace:
            </label>
            <select
              name="namespace"
              value={namespace}
              onChange={handleNamespaceChange}
              className="p-1 w-full bg-slate-700 rounded-md"
            >
              <option value={`profile-classic-${region}`}>WOTLK Classic</option>
              <option value={`profile-classic1x-${region}`}>Classic Era</option>
            </select>
          </div>

          <div className="w-full sm:w-2/6 px-2 mb-2">
            <label className="block text-md text-orange-500 font-bold mb-1">
              Locale:
            </label>
            <input
              type="text"
              name="locale"
              value={locale}
              onChange={handleLocaleChange}
              className="p-1 w-full bg-slate-700 rounded-md"
            />
          </div>
          <div className="w-full sm:w-1/6 px-2 mb-2 flex items-end">
            <button
              type="submit"
              className="w-full bg-slate-700 text-lg text-orange-500 p-3 rounded-md hover:bg-slate-900"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
