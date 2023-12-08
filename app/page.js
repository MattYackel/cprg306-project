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
      <h1 className="text-4xl text-center font-bold mt-6">
        WoW Classic Armory
      </h1>
      <div>
        <Form onSearch={handleSubmit} />
        <API formData={formData} />
      </div>
    </main>
  );
}
