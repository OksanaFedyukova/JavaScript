import { render, fireEvent } from '@testing-library/react';
import ButtonGroup from '../brokenComponents/ButtonGroup';

describe('ButtonGroup', () => {
  it('renders the default paragraph with left alignment', () => {
    const { getByText } = render(<ButtonGroup />);
    const paragraph = getByText(/Lorem ipsum/i);
    expect(paragraph).toHaveStyle('text-align: left');
  });

  it('changes paragraph alignment based on selected option', () => {
    const { getByText, getByLabelText } = render(<ButtonGroup />);
    const paragraph = getByText(/Lorem ipsum/i);

    fireEvent.click(getByLabelText(/center/i));
    expect(paragraph).toHaveStyle('text-align: center');

    fireEvent.click(getByLabelText(/right/i));
    expect(paragraph).toHaveStyle('text-align: right');

    fireEvent.click(getByLabelText(/left/i));
    expect(paragraph).toHaveStyle('text-align: left');
  });
});
