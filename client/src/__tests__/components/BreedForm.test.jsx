import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BreedForm from "../../components/BreedForm";

describe("BreedForm", () => {
  const onSubmit = jest.fn();
  const breed = "labrador";
  const setBreed = jest.fn();
  const loading = false;

  it("renders BreedForm component with input and button", () => {
    render(
      <BreedForm
        onSubmit={onSubmit}
        breed={breed}
        setBreed={setBreed}
        loading={loading}
      />
    );

    expect(screen.getByLabelText(/Select the dog breed/i)).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });

  it("calls onSubmit handler with breed when form is submitted", () => {
    render(
      <BreedForm
        onSubmit={onSubmit}
        breed={breed}
        setBreed={setBreed}
        loading={loading}
      />
    );

    const button = screen.getByRole("button", { name: /Search/i });
    fireEvent.click(button);

    expect(onSubmit).toHaveBeenCalledWith(breed);
  });

  it("updates breed value when input value changes", () => {
    render(
      <BreedForm
        onSubmit={onSubmit}
        breed={breed}
        setBreed={setBreed}
        loading={loading}
      />
    );

    const input = screen.getByLabelText(/Select the dog breed/i);
    fireEvent.change(input, { target: { value: "bulldog" } });

    expect(setBreed).toHaveBeenCalledWith("bulldog");
  });

  it("disables the button when loading", () => {
    render(
      <BreedForm
        onSubmit={onSubmit}
        breed={breed}
        setBreed={setBreed}
        loading={true}
      />
    );

    const button = screen.getByRole("button", { name: /Search/i });
    fireEvent.click(button);

    expect(button).toBeDisabled();
  });
});
