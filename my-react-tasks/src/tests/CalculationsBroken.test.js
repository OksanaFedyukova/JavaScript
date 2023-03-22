import { render, fireEvent } from '@testing-library/react';
import Calculations from '../brokenComponents/Calculations';

describe('Calculations', () => {
  test('should evaluate the result correctly', () => {
    const { getByText, getByLabelText } = render(<Calculations />);
    
    const firstInput = getByLabelText('First number');
    fireEvent.change(firstInput, { target: { value: '10' } });
    
    const secondInput = getByLabelText('Second number');
    fireEvent.change(secondInput, { target: { value: '5' } });
    
    const addButton = getByText('Add');
    fireEvent.click(addButton);
    
    const result = getByText('Result: 15');
    expect(result).toBeInTheDocument();
  });
});
