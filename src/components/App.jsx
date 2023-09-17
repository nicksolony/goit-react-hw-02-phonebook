import React, { Component } from 'react';
import { nanoid } from 'nanoid';



//id = nanoid();

export class App extends Component {

  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}

  handleDataInput = (e) => {
    let { name, value } = e.target;
      this.setState({[name]:e.target.value})
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));

    this.setState({
      name: '',
      number: ''
    });
  };


  filterContacts = () => {
    let { filter, contacts } = this.state;
    let normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  
  
  

  render() {

    let {name,number,filter} = this.state;
    let filteredContacts = this.filterContacts();


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
            value={name}
            onChange={this.handleDataInput}
          />
          <label htmlFor='number'>Phone number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id='number'
            value={number}
            onChange={this.handleDataInput}
          />
          
          <button type='submit'>Add contact</button>
        </form>

        <h2>Contacts</h2>
        <label htmlFor='filter'>Find contacts by name</label>
          <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            id='filter'
            value={filter}
            onChange={this.handleDataInput}
          />
        <ul>
          {filteredContacts.map((contact) =>
            {return (
            <li key={contact.id}>{contact.name} {contact.number}</li>
            )}
          )}
        </ul>

      </div>
    );
  };
};