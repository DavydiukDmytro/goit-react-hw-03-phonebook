import PropTypes from 'prop-types';
import { Label, Input } from 'components/Form/Form.styled';

export const Filter = ({ filter, onKeyClick }) => {
  return (
    <>
      <Label className="margin-top30">
        Find contacts by name
        <Input
          className="margin-bottom0"
          value={filter}
          type="text"
          name="filter"
          onChange={onKeyClick}
        />
      </Label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onKeyClick: PropTypes.func.isRequired,
};
