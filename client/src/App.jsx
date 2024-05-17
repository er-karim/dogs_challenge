import React, { useState } from "react";
import BreedForm from "./components/BreedForm";
import AlertMessage from "./components/AlertMessage";
import DogImage from "./components/DogImage";

import "./App.css";

function App() {
  const [breed, setBreed] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (breed) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/dogs/img_by_breed?breed=${breed}`
      );
      const data = await response.json();

      if (response.ok) {
        setImageUrl(data.message);
      } else {
        setImageUrl("");
        setError(data.message || "Failed to fetch image.");
      }
    } catch (error) {
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Enter your dog breed
          </h2>
        </div>

        <BreedForm
          onSubmit={handleSubmit}
          loading={loading}
          breed={breed}
          setBreed={setBreed}
        />

        {error && <AlertMessage color="failure" message={error} />}

        {imageUrl && <DogImage imageUrl={imageUrl} breed={breed} />}
      </div>
    </section>
  );
}

export default App;
