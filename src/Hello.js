import React from "react"

export default function Hello(params){
  console.log(params);
  return (
    <h3 className="font-semibold">Olá, {params.name +" "+ params.lastname}! </h3>
  )
}