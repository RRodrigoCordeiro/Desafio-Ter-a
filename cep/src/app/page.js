"use client"
import { useEffect, useState } from "react";
import './globals.css'

export default function Home() {
  const [data, SetData, ] = useState("")

  async function getCEP() {
    fetch(`https://viacep.com.br/ws/${data}/json/`)
    .then ((response) => response.json())
    .then((data) => SetData(data))
    .catch((erro)=>console.log(erro))
  }

return (

  <main >
    <h1>Busca de CEP </h1>
    <input type="text" placeholder="DIGITE O CEP"  onChange={(ev) => SetData(ev.target.value)} value={data}/>
    <button onClick={getCEP}>clicar</button>
    <p>Bairro: {data.bairro}</p>
    <p>Logradouro: {data.logradouro}</p>
    <p>Localidade: {data.localidade}</p>
    <p>UF: {data.uf}</p>
    <p>DDD: {data.ddd}</p>
    <p>IBGE: {data.ibge}</p>
    <p>SIAFI: {data.siafi}</p>
    <p>GIA: {data.gia}</p>
    <p>Complemento: {data.complemento} </p>
  </main>
)}

