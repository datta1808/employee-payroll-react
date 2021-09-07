import { shallow } from "enzyme";
import Login from "./Login";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Login Headers Tag test", () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it("should check for correct header when login page rendered", () => {
    expect(wrapper.find("h2").text()).toContain("Login");
  });

  it("should check header when wrong header is given", () => {
    expect(wrapper.find("h2").text()).not.toContain("Logind");
  });
});

describe("Login Elements availabity test", () => {

  let getByTestId;
  beforeEach(() => {
    ({ getByTestId } = render(<Login />));
  });

  it("should contain the given elements in login page", () => {
    const logo = getByTestId("avatar");
    const form = getByTestId("form");
    const email = getByTestId("email");
    const password = getByTestId("password");
    const button = getByTestId("button");

    expect(logo).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it("should contain the given text content in login page", () => {
    const email = getByTestId("email");
    const password = getByTestId("password");
    const button = getByTestId("button");

    expect(email).toHaveTextContent("Email");
    expect(password).toHaveTextContent("Password");
    expect(button).toHaveTextContent("Sign In");
  });
});