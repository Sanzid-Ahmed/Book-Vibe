import './App.css'
import React from 'react'
import { Suspense } from 'react'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Navbar from './Components/Navbar/Navbar'
import SelectedPlayes from './Components/SelectedPlayes/SelectedPlayes'


const fetchPlayers = fetch("/playesrs.json").then(res => res.json());

/*
Another way to fetch: 
const fetchplayers = asunc () => {
      const res = await fetch("/players.json");
      return res.json()
  }
*/


function App() {

  // const playersPromise = fetchplayers();

  //then sent it playersPromise = {playersPromise}

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>
}>
              <AvailablePlayers fetchPlayers={fetchPlayers}></AvailablePlayers>
      </Suspense>
      {/* <SelectedPlayes></SelectedPlayes> */}
    </>
  )
}

export default App
