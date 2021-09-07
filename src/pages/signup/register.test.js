import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Signup from "./Signup";

describe("Signup test", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Signup />);
  });

  it("should check for correct header when signup page rendered", () => {
    expect(wrapper.find("h2").text()).toContain("Registration Form");
  });

  it("should check header when wrong header is given", () => {
    expect(wrapper.find("h2").text()).not.toContain("Registrationd");
  });
});

describe("Register Page Elements availabity test", () => {
  it("should contain the given elements in signup page", () => {
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

  it("should contain the given text content in signup page", () => {
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