import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ContainerForm, Label, Input, Btn } from './Form.styled';

export class Form extends Component {
  initState = {
    name: '',
    number: '',
  };

  state = { ...this.initState };

  handleChangeValueInState = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      ...this.state,
      id: nanoid(10),
    };
    this.props.onSubmitAdd(newContact);
    this.setState({
      ...this.initState,
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <ContainerForm onSubmit={this.handleSubmit}>
          <Label>
            Name
            <Input
              value={name}
              type="text"
              name="name"
              onChange={this.handleChangeValueInState}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Number
            <Input
              value={number}
              type="tel"
              name="number"
              onChange={this.handleChangeValueInState}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Btn type="submit">Add contact</Btn>
        </ContainerForm>
      </>
    );
  }
}

Form.propTypes = { onSubmitAdd: PropTypes.func.isRequired };
