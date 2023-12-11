"use client";

import { useState } from "react";

import API from "./api";
import Form from "./components/form";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  const [formData, setFormData] = useState({});
  const [searchPressed, setSearchPressed] = useState(false);
  const [hideSearch, setHideSearch] = useState(true);

  const handleSubmit = (formData) => {
    setFormData(formData);
    setSearchPressed(true);
  };

  const handleHideSearch = () => {
    if (hideSearch === true) {
      setHideSearch(false);
    } else {
      setHideSearch(true);
    }
  };

  return (
    <div>
      <Header hideSearch={handleHideSearch} />
      <main>
        {hideSearch ? (
          <Form onSearch={handleSubmit} hideSearch={handleHideSearch} />
        ) : (
          <></>
        )}
        {searchPressed ? <API formData={formData} /> : <></>}
      </main>
      <Footer />
    </div>
  );
}
