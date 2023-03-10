import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {
      console.log("items",items)}{
      items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  )
}

export default CharacterGrid
