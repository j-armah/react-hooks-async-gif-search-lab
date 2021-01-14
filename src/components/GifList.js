import React from 'react' 
import GifListContainer from './GifListContainer'

function GifList ({ gifs }) {

    const gifList = gifs.map(gif => {
        return gif.images.original.url
    })
    console.log(gifList)


    return (
        <ul>
            <li>
                <img src={gifList[0]}/>
            </li>
            <li>
                <img src={gifList[1]}/>
            </li>
            <li>
                <img src={gifList[2]}/>
            </li>
        </ul>
    )
}

export default GifList