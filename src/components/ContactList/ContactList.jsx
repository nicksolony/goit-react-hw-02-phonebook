import React from "react";
import { List } from './ContactList.sytyled';

export const ContactList = ({ contacts }) => {
    return (
        <List>
          {contacts.map((contact) =>
            {return (
            <li key={contact.id}>{contact.name} {contact.number}</li>
            )}
          )}
        </List>
    );
};
