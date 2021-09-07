import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './dashboard';

describe("Test dashboard component", () => {

it('should contain header with expected input elements',() => {
    const {getByTestId} = render(<Dashboard/>);
    const add = getByTestId('add');
    const logout = getByTestId('logout');

    expect(add).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
})

it("should give correct title when dashboard rendered", () => {
    const { getByTestId } = render(<Dashboard/>);
    const title = getByTestId("title");
    expect(title).toHaveTextContent("Employee Payroll Application");
  });

  it("should check title when wrong title is given", () => {
    const { getByTestId } = render(<Dashboard/>);
    const title = getByTestId("title");
    expect(title).not.toHaveTextContent("Employee Payroll app");
  });
})