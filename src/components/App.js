import React, {useState} from "react";
import GifListContainer from './GifListContainer'
import GifSearch from './GifSearch'

import NavBar from "./NavBar";

// the App component should render out the GifListContainer component

function App() {
  const [searchTerm, setSearchTerm] = useState("code")

  const handleSearch = (search) => {
    console.log(search)
    setSearchTerm(search)
  }
  
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifSearch searchTerm={searchTerm} onSearch={handleSearch}/>
      <GifListContainer searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
