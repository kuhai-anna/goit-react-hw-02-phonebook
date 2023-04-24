import PropTypes from 'prop-types';

export const ContactListItem = ({ name, number }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
