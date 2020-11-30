import TextInput from "./TextInput";
import { render, screen } from '@testing-library/react';

test('Renderização de label', () => {
  render(<TextInput label="informe seu nome" />);
  const textLabel = screen.getByText(/informe seu nome/i);
  expect(textLabel).toBeInTheDocument();
});
