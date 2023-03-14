import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v1 } from 'uuid'
import "./Create.css"

function Create({ createContact }) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const navigate = useNavigate()


  const handleClick = (e) => {

    e.preventDefault()

    const newContact = {
      id: v1(),
      name,
      phone
    }

    createContact(newContact)
    navigate("/")

  }

  return (

    <div className='container flex-contact'>
      <form className='' onSubmit={handleClick}>
        <div class="mb-3">
          <label class="form-label">nome</label>
          <input class="form-control" onChange={(e) => setName(e.target.value)} />
        </div>
        <div class="mb-3">
          <label class="form-label">phone</label>
          <input class="form-control" onChange={(e) => setPhone(e.target.value)} />
        </div>

        <button type='submit' class="btn btn-primary">Criar</button>
      </form>

    </div>


  )
}

export default Create