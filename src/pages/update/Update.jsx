import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./Update.css"

function Update({ updateContact, contacts }) {

  const params = useParams()

  const [name, setName] = useState(contacts.find((c) => c.id == params.id).name)
  const [phone, setPhone] = useState(contacts.find((c) => c.id == params.id).phone)

  const navigate = useNavigate()

  // useEffect(() => {
  //   const contact = contacts.find((c) => c.id == params.id)
  //   console.log(contact)
  //   setName(contact.name)
  //   setPhone(contact.phone)

  // }, [])


  const handleSubmit = (e) => {

    e.preventDefault()
    updateContact({
      id: params.id,
      name,
      phone
    })

    navigate("/")

  }



  return (
    <div className='container flex-contact'>
      <form className='' onSubmit={handleSubmit}>
        <div class="mb-3">
          <label class="form-label">nome</label>
          <input  class="form-control" onChange={(e) => setName(e.target.value)} value ={name}/>
        </div>
        <div class="mb-3">
          <label class="form-label">phone</label>
          <input class="form-control" onChange={(e) => setPhone(e.target.value)} value ={phone} />
        </div>

        <button type='submit' class="btn btn-primary">Editar</button>
      </form>

    </div>
  )
}

export default Update