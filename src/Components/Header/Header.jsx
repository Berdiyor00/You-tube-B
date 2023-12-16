import { Fragment, useState } from "react"
import '../Header/Header.css'
import { GiHamburgerMenu } from "react-icons/gi";

import {  MdHome, MdSearch } from "react-icons/md";
import { NavLink } from "react-router-dom";

import UserPic from "../../assets/imgs/img/Userpic.png"
import { VscFolderLibrary } from "react-icons/vsc";
import { HiFire } from "react-icons/hi";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { MdHistoryEdu } from "react-icons/md";
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import { CiStar } from "react-icons/ci";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { LuMusic4 } from "react-icons/lu";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useFetchHeader from "./useFetchHeader";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { LuMoonStar } from "react-icons/lu";
import { MdWbSunny } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

const header = (props) => {
    const { data} = useFetchHeader(props.data);
    console.log(data?.id);
    let [click ,setClick]=useState(false) 
    let HandleClick=()=>{
        setClick(!click);
    };
    let [inputclick,setInputClick]=useState(false)
    let HandleInputclick=()=>{
        setInputClick(!inputclick)
    };
    const [more,SetMore]=useState(false)
    let HandleMore=()=>{
      SetMore(!more);
    }

    const [Moon,SetMoon]=useState(false)

    let HandleMoonAndSoon=()=>{
      SetMoon(!Moon)
    }

    
      return (
    <Fragment>
      <body className={`${Moon?"sun":"mon"}`}>
        
    
  <header>
    <nav className={`${Moon?"sun":"mon"}`}>
        <div className={`container${Moon?"sun":"mon"}`}>
           <div className={`You__tube__navbar__wrapp ${Moon?"sun":"mon"}`}>
               <div className="You__tube__navbar__item">
                <button onClick={HandleClick}className={`youbtn ${Moon?"sun":"mon"}`} >
               <GiHamburgerMenu/>
                 </button>
                 <div className="You__tube__logo__wrap">
                    <NavLink to='/' className={'youicons'}>
                    <FaYoutube className={` youlogo ${inputclick?'':'input'}`} />
                    <h3 className={` youlogo ${inputclick?'':'input'}`}>YouTube</h3>
                     </NavLink>
                     <div className="input__wrapp">
                     <input
  type="text"
  placeholder="Search"
  className={`Search__input ${inputclick ? 'input' : ''}`}

/>
<li onClick={HandleInputclick} className="">
            <MdSearch className="Search__icon" />
          </li>
                     </div>
                     </div>
                </div>
                   <div className="You__tube__navbar__user">

                 
                        <button onClick={HandleMoonAndSoon} className="monsunbtn">
                       {Moon?<MdWbSunny  className="mons"/>:<LuMoonStar className="sons"/>} 
                        </button>
                          <img src={UserPic} alt=""  />
                   </div>
           </div>
        </div>
    </nav>
  </header>
<div className="youwrappapi">
  <main className="Navbars">
    <section>
        <div className="container">
            <div className="You__tube__left__navbar">
             <ul className="Navbar__list">
                <li className="Navbar__list__item">
                <NavLink to='/' className="links">
                   <MdHome/><span className={click?'none':'block'}> Home</span>
                </NavLink>
                </li>
                <li className="Navbar__list__item">
                <NavLink to='/Trening' className="links">
                   <HiFire/><span className={click?'none':'block'}>Trending</span>
                </NavLink>
                </li>
                <li className="Navbar__list__item">
                <NavLink to='/Subscriptions' className="links">
                   <SubscriptionsIcon/><span className={click?'none':'block'}>Subscriptions</span>
                </NavLink>
                </li>
                <li className="Navbar__list__items svip">
                        <NavLink to='/Library' className="links">
                                 <VscFolderLibrary/><span className={click?'none':'block'}>Library</span>
                        </NavLink>
                    </li>
             </ul>
           
            </div>
        </div>
    </section>
    <section className="Bottomlist__you__tube">
        <div className="container">
            <div className="You__tube__Servicess__blog">
                <ul className={`You__tube__Servicess__blog_list ${more?'':'absalute'}` }>
                    <li className="You__tube__Servicess__blog__item">
                        <NavLink to='/Library' className="links">
                                 <VscFolderLibrary/><span className={click?'none':'block'}>Library</span>
                        </NavLink>
                    </li>
                    <li className="You__tube__Servicess__blog__item">
                        <NavLink to='/History' className="links">
                                 <MdHistoryEdu/><span className={click?'none':'block'}>History</span>
                        </NavLink>
                    </li>
                    <li className="You__tube__Servicess__blog__item">
                        <NavLink to='/Watchlater' className="links">
                                 <AlarmOnIcon/><span className={click?'none':'block'}>Watch later</span>
                        </NavLink>
                    </li>
                    <li className="You__tube__Servicess__blog__item">
                        <NavLink to='/Favourites' className="links">
                                 <CiStar/><span className={click?'none':'block'}>Favourites</span>
                        </NavLink>
                    </li>
                    <li className="You__tube__Servicess__blog__item">
                        <NavLink to='/Likedvideos' className="links">
                                 <FavoriteBorderIcon/><span className={click?'none':'block'}>Liked videos</span>
                        </NavLink>
                    </li>
                    <li className="You__tube__Servicess__blog__item">
                        <NavLink to='/Music' className="links">
                                 <LuMusic4/><span className={click?'none':'block'}>Music</span>
                        </NavLink>
                    </li>
                    <li className="You__tube__Servicess__blog__item">
                        <NavLink to='/Games' className="links">
                                 < SportsEsportsIcon/><span className={click?'none':'block'}>Games</span>
                        </NavLink>
                    </li>
                  
                </ul>
                <ul>
                    <button className="more__btn" onClick={HandleMore}>
                    <li className="You__tube__Servicess__blog__item">
                        <NavLink  className={`links ` }>
                                { more?<ExpandLessIcon/>: <ExpandMoreIcon/>}
                                 <span  className={click?'none':'block'}>Show More</span>
                        </NavLink>
                    </li>
                    </button>
                </ul>
            </div>
        </div>
    </section>

  </main>
  <main className="main">
  <div className="container">
    <div className="main">
      {data && data.items && (
        <div className="ApiWrapps">
          {data.items.map((item, index) => (
            <div key={item.id} className="Vedios__wrappers">
              <div className="img__wrap">
                <NavLink to="/Trening">
                  <img
                    src={item.snippet.thumbnails.medium.url}
                    alt={item.snippet.title}
                    className="imgs__you"
                  />
                  <p className="Imgtime">{item.snippet.publishTime}</p>
                </NavLink>
              </div>
              <h1 key={index} className="vedio__title__h1">
                {item.snippet.title.slice(1, 10)}
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
</main>;

  </div>

  </body>
</Fragment>
  )
}

export default header

