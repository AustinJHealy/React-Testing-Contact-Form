import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("Changing firstName input values", () => {
  const { getByLabelText } = render(<ContactForm />);
  const firstNameInput = getByLabelText(/First Name*/i);
  act(() => {
    fireEvent.change(firstNameInput, { target: { value: "Austin" } });
  });
  expect(firstNameInput.value).toBe("Austin");
});

test("Change email value", () => {
  const { getByLabelText } = render(<ContactForm />);
  const emailInput = getByLabelText(/email/i);
  act(() => {
    fireEvent.change(emailInput, {
      target: { value: "austinjohnhealy@gmail.com" },
    });
  });
  expect(emailInput.value).toBe("austinjohnhealy@gmail.com");
});

test("Submit form test", () => {
  const { getByLabelText, getByText, getByTestId } = render(<ContactForm />);

  const firstNameInput = getByLabelText(/First Name*/i);
  const lastNameInput = getByLabelText(/Last Name*/i);
  const emailInput = getByLabelText(/email/i);
  const message = getByLabelText(/message/i);
  const submitButton = getByTestId(/submit/i);
  fireEvent.click(submitButton);

  expect(firstNameInput).toBeVisible();
  expect(lastNameInput).toBeVisible();
  expect(emailInput).toBeVisible();
  expect(message).toBeVisible();
});
