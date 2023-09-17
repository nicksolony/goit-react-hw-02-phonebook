import React, { Component } from 'react';
import { nanoid } from 'nanoid';



//id = nanoid();

export class App extends Component {

  state = {
    contacts: [],
    name: ''
  };

  onNameInput = (e) => {
      this.setState({name:e.target.value})
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let contact = {
      id: nanoid(),
      name: this.state.name
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));

    this.setState({ name: '' });
  }
  
  

  render() {

    let contacts = this.state.contacts;

    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name</label>

          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id='name'
            value={this.state.name}
            onChange={this.onNameInput}
            />  
          <button type='submit'>Add contact</button>
        </form>

        <h2>Contacts</h2>
        
        <ul>
          {contacts.map((contact) =>
            {return (
            <li key={contact.id}>{contact.name}</li>
            )}
          )}
        </ul>

      </div>
    );
  };
};