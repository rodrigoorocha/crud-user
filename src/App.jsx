import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './pages/create/Create'
import Home from './pages/home/Home'
import Update from './pages/update/Update'


function App() {

const [contacts,setContacts]= useState([]) 

const createContact = (contact) =>{
  setContacts(prev =>[ ...prev,contact])

}
const removeContact = (contactId) =>{
  setContacts(prev => prev.filter(c => c.id != contactId ) )
}

const updateContact =(contact) =>{
  setContacts(prev => prev.map( c => {
    if(c.id === contact.id){
      return contact
    }else{
      return c
    }
    
  }))

  
}



  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home contacts={contacts} removeContact={removeContact} />}/>
      <Route path="/update/:id" element={<Update updateContact={updateContact} contacts={contacts}  />}/>
      <Route path="/create" element={<Create createContact={createContact} />}/>
    </Routes>
  </BrowserRouter>
   
  )
}

export default App
