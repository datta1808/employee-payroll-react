import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import List from "./listEmployee";

describe("Test listEmployee component", () => {

  let getByTestId;
  beforeEach(() => {
    ({ getByTestId } = render(<List employees={[]} />));
  });

  it("should contain the given elements in dashboard component", () => {
    const name = getByTestId("fullName");
    const emailInput = getByTestId("email");
    const phoneNumber = getByTestId("phoneNumber");
    const department = getByTestId("department");
    const salary = getByTestId("salary");
    const company = getByTestId("company");
    const actions = getByTestId("actions");

    expect(name).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneNumber).toBeInTheDocument();
    expect(department).toBeInTheDocument();
    expect(salary).toBeInTheDocument();
    expect(company).toBeInTheDocument();
    expect(actions).toBeInTheDocument();
  });

  it("should contain the given text content in listEmployee Component", () => {
    const name = getByTestId("fullName");
    const emailInput = getByTestId("email");
    const phoneNumber = getByTestId("phoneNumber");
    const department = getByTestId("department");
    const salary = getByTestId("salary");
    const company = getByTestId("company");
    const actions = getByTestId("actions");

    expect(name).toHaveTextContent("Name");
    expect(emailInput).toHaveTextContent("Email");
    expect(phoneNumber).toHaveTextContent("Phone Number");
    expect(department).toHaveTextContent("Department");
    expect(salary).toHaveTextContent("Salary");
    expect(company).toHaveTextContent("Company");
    expect(actions).toHaveTextContent("Actions");
  });
});
