import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Signup from "../pages/Signup";

describe("Login test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Signup />);
  });

  it("given(h2)Element_WhenRegisterPageShallowed_ShouldContainExpectedValues", () => {
    expect(wrapper.find("h2").text()).toContain("Registration Form");
  });

  it("given(h2)Element_WhenRegisterPageShallowed_ShouldContainExpectedValues", () => {
    expect(wrapper.find("h2").text()).not.toContain("Registrationd");
  });
});

describe("Register Page Elements availabity test", () => {
  it("givenTestIdElement_WhenRegisterPageRendered_ShouldContainThoseElements", () => {
    const { getByTestId } = render(<Signup />);
    const logo = getByTestId("avatar");
    const form = getByTestId("form");
    const firstName = getByTestId("firstName");
    const lastName = getByTestId("lastName");
    const email = getByTestId("email");
    const password = getByTestId("password");
    const button = getByTestId("submitButton");

    expect(logo).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it("givenTestIdElement_WhenLoginPageRendered_ShouldContainExpectedElementValue", () => {
    const { getByTestId } = render(<Signup />);
    const firstName = getByTestId("firstName");
    const lastName = getByTestId("lastName");
    const email = getByTestId("email");
    const password = getByTestId("password");
    const button = getByTestId("submitButton");

    expect(firstName).toHaveTextContent("First Name");
    expect(lastName).toHaveTextContent("Last Name");
    expect(email).toHaveTextContent("Email");
    expect(password).toHaveTextContent("Password");
    expect(button).toHaveTextContent("Sign Up");
  });
});