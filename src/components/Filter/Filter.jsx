import PropTypes from 'prop-types';
import { LabelFilter, InputFilter } from './Filter.styled';

export function Filter({ handleInputValue, filterValue }) {
  return (
    <LabelFilter htmlFor="">
      Finde Contact by Name
      <InputFilter
        type="text"
        name="filter"
        onChange={handleInputValue}
        value={filterValue}
      />
    </LabelFilter>
  );
}

Filter.propTypes = {
  handleInputValue: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
