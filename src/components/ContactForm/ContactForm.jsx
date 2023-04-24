import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import {
  Field,
  Form,
  FormButton,
  FormField,
  FormLabel,
} from './ContactForm.styled';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  // генерація унікальних id для кожного контакта
  nameInputId = nanoid();
  numberInputId = nanoid();

  // введення значень в інпут
  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  // додавання контакту
  addContact = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const nameId = nanoid();

    this.props.onSubmit({ id: nameId, name, number });
    this.reset();
  };

  // очищення форми
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.addContact}>
        {/* form field */}
        <FormField>
          <FormLabel htmlFor={this.nameInputId}>Name</FormLabel>
          <Field
            id={this.nameInputId}
            value={name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormField>
        <FormField>
          <FormLabel htmlFor={this.numberInputId}>Number</FormLabel>
          <Field
            id={this.numberInputId}
            value={number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormField>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    );
  }
}
