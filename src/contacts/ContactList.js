import React, { useState } from "react"
import ContactCard from "./ContactCard";
import { get_contacts } from "./Contacts"
import ContactForm from "./ContactForm"

export default function ContactList(){

  let [list, set_list] = useState(get_contacts());

  let cards = list.map(contact => (
    <ContactCard key={contact.id} data={contact}/>
  ));
  
  const add_item = (item) => set_list([...list,item]);

  return (
    
    <div className="w-6/12">
      <ContactForm save={add_item}/>
      {cards}
    </div>
  )
}