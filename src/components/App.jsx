import { GlobalStyle } from 'GlobalStyle';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <>
      <Section mainTitle="Phonebook"></Section>
      <Section title="Contacts"></Section>
      <GlobalStyle />
    </>
  );
};
