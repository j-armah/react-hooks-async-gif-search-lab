import React, {useState} from 'react'

function GifSearch( { onSearch }) {
    const [search, setSearch] = useState("")

    function handleChange(event) {
        setSearch(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        onSearch(search)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Search for a gif: 
                <input
                    type="text"
                    name="gifSearch"
                    value={search}
                    onChange={handleChange}
                />
                <button type="submit">Find Gif</button>
            </label>
        </form>

    )
}

export default GifSearch