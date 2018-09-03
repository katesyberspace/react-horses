import React from 'react'
import { Link } from 'react-router-dom'

export default function Horses(props){
  return <section>
    <h1>Horses</h1>
    <ul>
    {props.horses.map(horse=>
      <Link key={horse.name} to={`/horses/${horse.name}`}>
        <li key={horse.name}>{horse.name}</li>
      </Link>
    )}
    </ul>

  </section>


}