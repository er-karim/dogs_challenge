import React from "react";

const DogImage = ({ imageUrl, breed }) => {
  return (
    <figure className="max-w-lg">
      <img
        className="h-auto max-w-full rounded-lg"
        src={imageUrl}
        alt={`Dog breed: ${breed}`}
      />
      <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
        {breed}
      </figcaption>
    </figure>
  );
};

export default DogImage;
