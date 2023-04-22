import { nanoid } from 'nanoid';
import { Component } from 'react';
import { GlobalStyle } from 'GlobalStyle';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  nameId = nanoid();

  entryContactName = e => {
    this.setState({ name: e.target.value });
  };

  addContactName = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;

    // Кожен контакт повинен бути об'єктом з властивостями name та id.

    this.setState(prevState => {
      prevState.contacts.push({ name: name, id: this.nameId });
    });

    console.log(this.state.contacts);
    form.reset();
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <>
        <Section mainTitle="Phonebook">
          <ContactForm
            name={name}
            onEntryContactName={this.entryContactName}
            onAddContactName={this.addContactName}
          />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList contacts={contacts} />
        </Section>
        <GlobalStyle />
      </>
    );
  }
}
