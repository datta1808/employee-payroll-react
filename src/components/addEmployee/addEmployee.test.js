import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddEmployee from './addEmployee';

it('givenTestIdElement_WhenRenderedAddEmployee_ShouldContainHeaderWithExpectedInputElements',() => {
    const {getByTestId} = render(<AddEmployee/>);
    const submit = getByTestId('submit');
    const fullName = getByTestId('fullName');
    const emailInput = getByTestId('email');
    const department = getByTestId('department');
    const salary = getByTestId('salary');

    expect(submit).toBeInTheDocument();
    expect(fullName).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(department).toBeInTheDocument();
    expect(salary).toBeInTheDocument();
    expect(emailInput).toHaveErrorMessage;
})


  it("should give correct header when add employee page is rendered", () => {
    const { getByTestId } = render(<AddEmployee/>);
    const header = getByTestId("add");
    expect(header).toHaveTextContent("Add Employee");
  });


  it("should check header when wrong header is given", () => {
    const { getByTestId } = render(<AddEmployee/>);
    const header = getByTestId("add");
    expect(header).not.toHaveTextContent("employee payroll app");
  });