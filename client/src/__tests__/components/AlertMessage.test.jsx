import React from "react";
import { render } from "@testing-library/react";
import AlertMessage from "../../components/AlertMessage";

describe("AlertMessage Component", () => {
  it("renders with the correct message and color", () => {
    const color = "success";
    const message = "This is a success message";
    const { getByText } = render(
      <AlertMessage color={color} message={message} />
    );

    expect(getByText("Info alert!")).toBeInTheDocument();
    expect(getByText(message)).toBeInTheDocument();
  });

  it("renders with the correct icon", () => {
    const color = "warning";
    const message = "This is a warning message";
    const { container } = render(
      <AlertMessage color={color} message={message} />
    );

    const icon = container.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });
});
