import React from 'react' 
import GifListContainer from './GifListContainer'

function GifList ({ gifs }) {

    const gifList = gifs.map(gif => {
        return <li><img src={gif.images.original.url}/></li>
        
    })

    return (
        <ul>
            {gifList}
            {/* <li>
                <img src={gifList[0]}/>
            </li>
            <li>
                <img src={gifList[1]}/>
            </li>
            <li>
                <img src={gifList[2]}/>
            </li> */}
        </ul>
    )
}

export default GifList