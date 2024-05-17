import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";

// Mocking fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ message: "https://example.com/dog.jpg" }),
  })
);

describe("App Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders BreedForm and displays DogImage on successful form submission", async () => {
    const { getByLabelText, getByRole, getByAltText } = render(<App />);

    const input = getByLabelText(/Select the dog breed/i);
    fireEvent.change(input, { target: { value: "labrador" } });

    const button = getByRole("button", { name: /Search/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:3001/api/v1/dogs/img_by_breed?breed=labrador"
      );

      const image = getByAltText("Dog breed: labrador");
      expect(image).toBeInTheDocument();
    });
  });

  it("displays error message on form submission failure", async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ message: "Failed to fetch image." }),
      })
    );

    const { getByLabelText, getByRole, getByText } = render(<App />);

    const input = getByLabelText(/Select the dog breed/i);
    fireEvent.change(input, { target: { value: "labrador" } });

    const button = getByRole("button", { name: /Search/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:3001/api/v1/dogs/img_by_breed?breed=labrador"
      );

      const error = getByText("Failed to fetch image.");
      expect(error).toBeInTheDocument();
    });
  });

  it("displays error message if an error occurs while fetching data", async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject("Network Error"));

    const { getByLabelText, getByRole, getByText } = render(<App />);

    const input = getByLabelText(/Select the dog breed/i);
    fireEvent.change(input, { target: { value: "labrador" } });

    const button = getByRole("button", { name: /Search/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:3001/api/v1/dogs/img_by_breed?breed=labrador"
      );

      const error = getByText("An error occurred while fetching data.");
      expect(error).toBeInTheDocument();
    });
  });
});
