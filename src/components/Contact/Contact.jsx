import React from "react";
import { ContactItem } from './Contact.styled';

export const Contact = ({ contact }) => {
    return (
        <ContactItem key={contact.id}>
            {contact.name} {contact.number}
        </ContactItem>
    );
};