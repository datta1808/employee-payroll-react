import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import List from './listEmployee'

it('should contain header with expected input elements',() => {
    const { getByTestId } = render(<List />);
    const name = getByTestId('fullName');
    const emailInput = getByTestId('email');
    const department = getByTestId('department');
    const salary = getByTestId('salary');

    expect(name).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(department).toBeInTheDocument(); 
    expect(salary).toBeInTheDocument();
})