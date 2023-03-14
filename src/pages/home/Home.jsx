import React from 'react'
import ContactList from '../../components/contact/ContactList'
import "./Home.css"

export default function Home({ contacts, removeContact }) {
  return (
    <div className='flex-contact container'>
        <ContactList contacts={contacts} removeContact={removeContact} />
    </div>
  )
}
