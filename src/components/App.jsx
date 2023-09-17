import React, { Component } from 'react';
import { nanoid } from 'nanoid';





export class App extends Component {

  state = {
    contacts: [],
    name: ''
  };

  render() {

    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >

        <form>
          <label htmlFor='name'>Name</label>

          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id='name'
            />
            
          <button type='submit'>Add contact</button>
        </form>
        
        
      </div>
    );
  };
};