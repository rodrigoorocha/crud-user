import React from 'react'
import { useNavigate } from 'react-router-dom'

function ContactList({contacts, removeContact}) {

 const navigate = useNavigate()

  return (
     <table class="table">
  <thead>
    <tr>
    
      <th scope="col" className='col-4'>nome</th>
      <th scope="col" className='col-6'>phone</th>
      <th scope="col" className='col-1'></th>
      <th scope="col" className='col-1'><button onClick={()=> navigate("/create")} className='btn btn-success'>Criar</button></th>
    </tr>
  </thead>
  <tbody>
  {contacts.map(c => (
    <tr>
      <td>{c.name}</td>
      <td>{c.phone}</td>
      <td> <button  onClick={()=> navigate(`/update/${c.id}`)} className='btn btn-primary'>Editar</button></td>
      <td> <button onClick={()=> removeContact(c.id)} className='btn btn-danger'>Remover</button></td>
    </tr>
  ))}
  </tbody>
</table>


    
  )
}

export default ContactList