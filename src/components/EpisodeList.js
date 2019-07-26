import React, { useEffect, useState } from 'react';
import axios from "axios"
import EpisodeCard from "./EpisodeCard"

 export default function EpisodesList() {



     const [episodes, setEpisodes] = useState([])






     useEffect(() => {
      // TODO: Add AJAX/API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

       axios
        .get(`https://rickandmortyapi.com/api/episode/`)
        .then(response => setEpisodes(response.data.results))
        .catch(error => console.log(error, "opps"))

    }, [])

    console.log(episodes)

     return (
        <section className='location-list grid-view'>


         {episodes.map(episode => {
            return <EpisodeCard episode={episode}/>
        })}

     </section>
    )
}
