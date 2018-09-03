import React from 'react'

export default function Horse({match, horses}){
  console.log(match)
  console.log(horses)
  const horse = horses.find(horse => {
    return horse.name === match.params.name
  })

  console.log(horse)

  return <section>
    <h1>Horse Details</h1>
    <p>{horse.name}</p>
    <p>{horse.country}</p>
    <p>{horse.yearOfBirth}</p>

  </section>
}