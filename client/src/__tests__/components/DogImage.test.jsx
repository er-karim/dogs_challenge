import React from "react";
import { render } from "@testing-library/react";
import DogImage from "../../components/DogImage";

describe("DogImage Component", () => {
  it("renders with the correct imageUrl and breed", () => {
    const imageUrl = "https://example.com/dog.jpg";
    const breed = "Labrador";
    const { getByAltText, getByText } = render(
      <DogImage imageUrl={imageUrl} breed={breed} />
    );

    const image = getByAltText(`Dog breed: ${breed}`);
    expect(image).toHaveAttribute("src", imageUrl);

    const breedText = getByText(breed);
    expect(breedText).toBeInTheDocument();
  });

  it("renders with the correct fallback text if imageUrl is missing", () => {
    const breed = "Labrador";
    const { getByAltText, getByText } = render(<DogImage breed={breed} />);

    const image = getByAltText(`Dog breed: ${breed}`);
    expect(image).toBeInTheDocument();

    const breedText = getByText(breed);
    expect(breedText).toBeInTheDocument();
  });
});
