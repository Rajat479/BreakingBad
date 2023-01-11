import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      // const result = await axios(
      //   `https://www.breakingbadapi.com/api/characters?name=${query}`
      // )
      var pseudoResult=[];
      pseudoResult[0] = {
        char_id: 1,
        name: "Walter White",
        birthday: "09-07-1958",
        occupation: [
            "High School Chemistry Teacher",
            "Meth King Pin"
        ],
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png",
        status: "Deceased",
        appearance: [1, 2, 3, 4, 5],
        nickname: "Heisenberg",
        portrayed: "Bryan Cranston",
        better_call_saul_appearance: [ ]
    }
    pseudoResult[1]={
        char_id: 4,
        name: "Walter White Jr.",
        birthday: "07-08-1993",
        occupation: [
            "Teenager"
        ],
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Walter_White_Jr_S5B.png/220px-Walter_White_Jr_S5B.png",
        status: "Alive",
        nickname: "Flynn",
        appearance: [ 1, 2, 3, 4, 5 ],
        portrayed: "RJ Mitte",
        category: "Breaking Bad",
        better_call_saul_appearance: [ ]
    }
      // console.log(result.data)
      console.log("pseudoResult",pseudoResult)
      // setItems(result.data)
      setItems(pseudoResult)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
      <Footer />
    </div>
  )
}

export default App
