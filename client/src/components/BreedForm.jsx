import React from "react";
import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { AiFillPicture } from "react-icons/ai";

const BreedForm = ({ onSubmit, loading, breed, setBreed }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(breed);
  };

  return (
    <form className="mb-6" onSubmit={handleSubmit}>
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <Label
          htmlFor="breed"
          value="Select the dog breed"
          className="sr-only"
        />
        <TextInput
          id="breed"
          type="text"
          icon={AiFillPicture}
          placeholder="labrador"
          required
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
      </div>
      <div className="flex flex-row gap-3">
        <Button
          type="submit"
          className="items-center py-1 px-3 text-xs font-medium text-center text-white bg-primary-700 rounded-md focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          disabled={loading}
        >
          {loading && <Spinner aria-label="Spinner button example" size="sm" />}
          <span className="pl-3">Search</span>
        </Button>
      </div>
    </form>
  );
};

export default BreedForm;
