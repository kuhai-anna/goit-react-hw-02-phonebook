import PropTypes from 'prop-types';

export const ContactForm = ({ name, onEntryContactName, onAddContactName }) => {
  return (
    <form onSubmit={onAddContactName}>
      <label htmlFor="name">
        <span>Name</span>
      </label>
      <input
        value={name}
        onChange={onEntryContactName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  onEntryContactName: PropTypes.func.isRequired,
  onAddContactName: PropTypes.func.isRequired,
};
