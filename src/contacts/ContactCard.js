import React from "react"

export default function ContactCard({data}){
  let { id, name, email, empresa, cargo } = {...data}

  const remove_contact = (contact) => document.getElementById("contact_"+contact.target.id).remove();
  return (
    <div id={"contact_"+id} className="mb-2 flex flex-col p-4 bg-white itens-start text-gray-600 rounded-lg w-full">
      <div>
        <span className="block text-2xl font-semibold">{name}</span>
        <span className="block text-base text-gray-500">{email}</span>
        <span className="block text-2xl font-semibold">Empresa {empresa}</span>
        <span className="block text-base text-gray-500">{cargo}</span>
      </div>
      <div id={id} className="cursor_pointer" onClick={remove_contact}>REMOVER CONTATO</div>
    </div>
  )
}