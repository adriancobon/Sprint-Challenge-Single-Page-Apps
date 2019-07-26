import React, { useEffect, useState } from 'react';
import axios from "axios"
import LocationCard from "./LocationCard"

export default function LocationsList() {



    const [locations, setLocations] = useState([])






    useEffect(() => {
      // TODO: Add AJAX/API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

      axios
        .get(`https://rickandmortyapi.com/api/location/`)
        .then(response => setLocations(response.data.results))
        .catch(error => console.log(error, "opps"))

   }, [])

   console.log(locations)

    return (
        <section className='location-list grid-view'>


        {locations.map(location => {
            return <LocationCard location={location}/>
        })}

    </section>
    )
}
