
// import { MdHome,  } from "react-icons/md";
// import { VscFolderLibrary } from "react-icons/vsc";
// import { HiFire } from "react-icons/hi";
// import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
// import { MdHistoryEdu } from "react-icons/md";
// import AlarmOnIcon from '@mui/icons-material/AlarmOn';
// import { CiStar } from "react-icons/ci";
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { LuMusic4 } from "react-icons/lu";
// import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// const Navbar = () => {
// let [show,setShow]=useState(false);

// let HandleClick=()=>{
//     setShow(!show)
// }


//   return (
//     <div >
//          <main className="Navbars">
//     <section>
//         <div className="container">
//             <div className="You__tube__left__navbar">
//              <ul className="Navbar__list">
//                 <li className="Navbar__list__item">
//                 <NavLink to='/' className="links">
//                    <MdHome/><li onClick={HandleClick} className={show?'black':'red'}>Home</li>
//                 </NavLink>
//                 </li>
//                 <li className="Navbar__list__item">
//                 <NavLink to='/Trening' className="links">
//                    <HiFire/><li>Trending</li>
//                 </NavLink>
//                 </li>
//                 <li className="Navbar__list__item">
//                 <NavLink to='/Subscriptions' className="links">
//                    <SubscriptionsIcon/><li>Subscriptions</li>
//                 </NavLink>
//                 </li>
//              </ul>
           
//             </div>
//         </div>
//     </section>
//     <section>
//         <div className="container">
//             <div className="You__tube__Servicess__blog">
//                 <ul className="You__tube__Servicess__blog_list" >
//                     <li className="You__tube__Servicess__blog__item">
//                         <NavLink to='/Library' className="links">
//                                  <VscFolderLibrary/><li>Library</li>
//                         </NavLink>
//                     </li>
//                     <li className="You__tube__Servicess__blog__item">
//                         <NavLink to='/History' className="links">
//                                  <MdHistoryEdu/><li>History</li>
//                         </NavLink>
//                     </li>
//                     <li className="You__tube__Servicess__blog__item">
//                         <NavLink to='/Watchlater' className="links">
//                                  <AlarmOnIcon/><li>Watch later</li>
//                         </NavLink>
//                     </li>
//                     <li className="You__tube__Servicess__blog__item">
//                         <NavLink to='/Favourites' className="links">
//                                  <CiStar/><li>Favourites</li>
//                         </NavLink>
//                     </li>
//                     <li className="You__tube__Servicess__blog__item">
//                         <NavLink to='/Likedvideos' className="links">
//                                  <FavoriteBorderIcon/><li>Liked videos</li>
//                         </NavLink>
//                     </li>
//                     <li className="You__tube__Servicess__blog__item">
//                         <NavLink to='/Music' className="links">
//                                  <LuMusic4/><li>Music</li>
//                         </NavLink>
//                     </li>
//                     <li className="You__tube__Servicess__blog__item">
//                         <NavLink to='/Games' className="links">
//                                  < SportsEsportsIcon/><li>Games</li>
//                         </NavLink>
//                     </li>
//                     <li className="You__tube__Servicess__blog__item">
//                         <NavLink to='/More' className="links">
//                                  <ExpandMoreIcon/><li>Show More</li>
//                         </NavLink>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </section>
//     <section>
      
//     </section>
//   </main>
//     </div>
//   )
// }

// export default Navbar