import { render, fireEvent } from '@testing-library/react';
import App from '../components/App';

describe('App component', () => {
  test('displays ImageCard when first tab is selected', () => {
    const { getByText } = render(<App />);
    const pictureTab = getByText('Picture');

    fireEvent.click(pictureTab);

    expect(getByText('ImageCard')).toBeInTheDocument();
  });

  test('displays Calculations when second tab is selected', () => {
    const { getByText } = render(<App />);
    const calculationsTab = getByText('Calculations');

    fireEvent.click(calculationsTab);

    expect(getByText('Calculations')).toBeInTheDocument();
  });

  test('displays ButtonGroup when third tab is selected', () => {
    const { getByText } = render(<App />);
    const groupTab = getByText('Group');

    fireEvent.click(groupTab);

    expect(getByText('ButtonGroup')).toBeInTheDocument();
  });

  test('does not display ImageCard when second or third tab is selected', () => {
    const { getByText, queryByText } = render(<App />);
    const calculationsTab = getByText('Calculations');
    const groupTab = getByText('Group');

    fireEvent.click(calculationsTab);

    expect(queryByText('ImageCard')).toBeNull();

    fireEvent.click(groupTab);

    expect(queryByText('ImageCard')).toBeNull();
  });

  test('does not display Calculations when first or third tab is selected', () => {
    const { getByText, queryByText } = render(<App />);
    const pictureTab = getByText('Picture');
    const groupTab = getByText('Group');

    fireEvent.click(pictureTab);

    expect(queryByText('Calculations')).toBeNull();

    fireEvent.click(groupTab);

    expect(queryByText('Calculations')).toBeNull();
  });

  test('does not display ButtonGroup when first or second tab is selected', () => {
    const { getByText, queryByText } = render(<App />);
    const pictureTab = getByText('Picture');
    const calculationsTab = getByText('Calculations');

    fireEvent.click(pictureTab);

    expect(queryByText('ButtonGroup')).toBeNull();

    fireEvent.click(calculationsTab);

    expect(queryByText('ButtonGroup')).toBeNull();
  });
});
