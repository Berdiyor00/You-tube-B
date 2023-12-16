import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Subscriptions from "./Components/Subscriptions/Subscriptions.jsx";
import Trening from "./Components/Trending/Trening.jsx";
import Library from "./Components/Library/Library.jsx";
import History from "./Components/History/History.jsx";
import Watchlater from "./Components/Watchlater/Watchlater.jsx";

import Games from "./Components/Games/Games.jsx";
import Header from './Components/Header/Header.jsx'
// import Layout from "./Components/Layout/Layout.jsx";
function App() {
  return (
 <BrowserRouter>
 <Fragment>
     <Routes>
    
          <Route path="/"element={<Header/>}/>
         <Route path="/Trening" element={<Trening/>}/>
         <Route path="/Subscriptions" element={<Subscriptions/>}/>
         <Route path="/Library" element={<Library/>}/>
         <Route path="/History" element={<History/>}/>
         <Route path="/Watchlater" element={<Watchlater/>}/>
     
         <Route path="/Games" element={<Games/>}/>
        
     </Routes>
 </Fragment>
 </BrowserRouter>
  )
}

export default App
