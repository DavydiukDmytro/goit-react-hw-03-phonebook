import { Component } from 'react';
import { ContactList } from 'components/ContactList';
import { Form } from 'components/Form';
import { Filter } from 'components/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Container, TitleH1, TitleH2, Text } from './App.styled';

const KEY_LOCAL_STORAGE = 'phone-book';

export class App extends Component {
  initState = {
    contacts: [],
    filter: '',
  };

  state = { ...this.initState };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));
    if (contacts)
      this.setState({
        contacts,
        filter: '',
      });
    else {
      this.setState({
        ...this.initState,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(contacts));
    }
  }

  addContact = newContact => {
    const isContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isContact) {
      Notify.warning(`${isContact.name} is contacts.`, {
        position: 'center-top',
      });
      return;
    }
    this.setState(state => ({
      contacts: [...state.contacts, newContact],
    }));
  };

  handleChangeValueInState = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterArr = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  render() {
    const { filter, contacts } = this.state;
    const { addContact, handleChangeValueInState, deleteContact, filterArr } =
      this;
    return (
      <Container>
        <TitleH1>Phonebook</TitleH1>
        <Form onSubmitAdd={addContact} />
        <Filter filter={filter} onKeyClick={handleChangeValueInState} />
        <TitleH2>Contacts</TitleH2>
        {contacts.length !== 0 ? (
          <ContactList onDelete={deleteContact} contactArr={filterArr()} />
        ) : (
          <Text>No contacts</Text>
        )}
      </Container>
    );
  }
}
