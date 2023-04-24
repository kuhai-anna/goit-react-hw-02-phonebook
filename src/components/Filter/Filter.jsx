import PropTypes from 'prop-types';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <label>
      <span>Find contacts by name</span>{' '}
      <input type="text" value={value} onChange={onChangeFilter}></input>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
