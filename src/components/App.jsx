import { Component } from 'react';
import { GlobalStyle } from 'GlobalStyle';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // додавання контактів
  formSubmitHandler = contact => {
    console.log(contact);
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  // фільтрація контактів
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section mainTitle="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChangeFilter={this.changeFilter} />
          <ContactList contacts={visibleContacts} />
        </Section>
        <GlobalStyle />
      </>
    );
  }
}
