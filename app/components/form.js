// Form.js
import React from "react";
import { useState } from "react";
import Examples from "./examples";

const Form = ({ onSearch, hideSearch }) => {
  const [region, setRegion] = useState("us");
  const [realm, setRealm] = useState("");
  const [name, setName] = useState("");
  const [namespace, setNamespace] = useState("profile-classic-us");
  const [locale, handleLocaleChange] = useState("en_US");

  const [hideExamples, setHideExamples] = useState(false);

  const updateFormData = (formData) => {
    setRegion(formData.region);
    setRealm(formData.realm);
    setName(formData.name);
    setNamespace(formData.namespace);
    handleLocaleChange(formData.locale);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleRealmChange = (event) => {
    setRealm(event.target.value.toLowerCase());
  };

  const handleNameChange = (event) => {
    setName(event.target.value.toLowerCase());
  };

  const handleNamespaceChange = (event) => {
    setNamespace(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      region,
      realm,
      name,
      namespace,
      locale,
    };

    hideSearch();
    setHideExamples(false);
    onSearch(formData);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-screen-sm mx-auto px-3 pt-2 pb-1 bg-slate-800 rounded-md"
      >
        <div className="flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 px-2 mb-2">
            <label className="block text-md text-orange-500 font-bold mb-1">
              Character Name:
            </label>
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={handleNameChange}
              className="p-1 w-full bg-slate-700 hover:bg-slate-600 rounded-md capitalize"
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
              required
              onChange={handleRealmChange}
              className="p-1 w-full bg-slate-700 hover:bg-slate-600 rounded-md capitalize"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/6 px-2 mb-2">
            <label className="block text-md text-orange-500 font-bold mb-1">
              Region:
            </label>
            <select
              name="region"
              value={region}
              required
              onChange={handleRegionChange}
              className="p-1 w-full bg-slate-700 hover:bg-slate-600 rounded-md"
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
              required
              onChange={handleNamespaceChange}
              className="p-1 w-full bg-slate-700 hover:bg-slate-600 rounded-md"
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
              required
              onChange={handleLocaleChange}
              readOnly
              className="p-1 w-full bg-slate-700 rounded-md text-gray-400 cursor-not-allowed"
            />
          </div>
          <div className="w-full sm:w-1/6 px-2 mb-2 flex items-end">
            <button
              type="submit"
              className="w-full bg-slate-700 text-lg text-orange-500 p-3 rounded-md hover:bg-slate-600"
            >
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="flex items-center justify-center">
        {!hideExamples && <div className="text-lg mx-2 mt-2">Need help?</div>}
        <div className="">
          <button
            className="w-62 bg-slate-700 text-lg text-orange-500 font-bold py-2 px-4 mt-4 mb-2 rounded-md hover:bg-slate-600"
            onClick={() => setHideExamples(!hideExamples)}
          >
            {hideExamples ? "Hide Examples" : "Show Examples"}
          </button>
        </div>
      </div>
      {hideExamples ? <Examples updateFormData={updateFormData} /> : <></>}
    </div>
  );
};
export default Form;
