import React, { useEffect, useState }from 'react'
import GifList from './GifList'

function GifListContainer({ searchTerm }) {
    const [gifs, setGifs] = useState([])
    console.log(searchTerm)

    useEffect(() => {

        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(r => r.json())
            .then(data => {
                //console.log(data.data.splice(0,3))
                const queryResp = data.data.splice(0,3)
                setGifs(queryResp)

            })
        console.log(gifs)
    }, [searchTerm])

    

    return (
        <div>
            <GifList gifs={gifs}/>
        </div>
    )
}

export default GifListContainer