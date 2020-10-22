import React, { useState } from 'react'

function getId() {
  return (5999 - Math.round(Math.random() * 392))
}

export default function ContactForm(props) {
  const [data, setData] = useState({ name:'', email: '', empresa: '', cargo: '' })
  
  const change_field = (field) => {
    return (evt) => setData({...data, [field]: evt.target.value})
  }

  const handle_submit = (evt) => {
    evt.preventDefault();
    if(valid_contact(data))
      props.save({...data, id: getId()});
  }

  return (
    <form onSubmit={handle_submit} className="p-2 flex flex-col">
      <div className="p-2 flex flex-col">
        <div className="flex flex-row items-stretch mb-2 justify-between">
          <label className="text-lg">Nome</label>
          <input type="text" className="p-2 rounded text-gray-600 text-lg" maxLength={35} onChange={change_field("name")} />
        </div>

        <div className="flex flex-row mb-2 items-stretch justify-between">
          <label className="text-lg">E-mail</label>
          <input type="text" className="p-2 rounded text-gray-600 text-lg " maxLength={50} onChange={change_field("email")} />
        </div>

        <div className="flex flex-row items-stretch mb-2 justify-between">
          <label className="text-lg">Empresa</label>
          <input type="text" className="p-2 rounded text-gray-600 text-lg" maxLength={35} onChange={change_field("empresa")} />
        </div>

        <div className="flex flex-row mb-2 items-stretch justify-between">
          <label className="text-lg">Cargo</label>
          <input type="text" className="p-2 rounded text-gray-600 text-lg " maxLength={50} onChange={change_field("cargo")} />
        </div>

        <div>
          <button onClick={() => handle_submit}>Adicionar</button>
        </div>
      </div>
    </form>
  )
}

function valid_contact(data){
  if(data.name === ""){
    alert("SEM NOME");
    return false
  }
  if(data.empresa === ""){
    alert("SEM NOME DA EMPRESA");
    return false
  }
  return true
}
