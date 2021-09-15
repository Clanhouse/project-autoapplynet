import React from "react";
import { render, screen } from "@testing-library/react";
import Auth from "../components/Auth/Auth";

test("renders form", () => {
  render(<Auth />);
  const form = screen.getByTestId("test-form");
  expect(form).toBeInTheDocument();
});
