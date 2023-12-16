import useFetchHeader from "../Header/useFetchHeader";
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Header/Header.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { NavLink } from "react-router-dom";
import UserPic from "../../assets/imgs/img/Userpic.png";
import { LuMoonStar } from "react-icons/lu";
import { MdWbSunny } from "react-icons/md";

const Trening = () => {
  const [click, setClick] = useState(false);
  const [inputClick, setInputClick] = useState(false);
  const [Moon, setMoon] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { data: headerData } = useFetchHeader({ data: { q: searchTerm } });
  const videoId = headerData?.items?.[4]?.id.videoId;
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          q: 'music',
          part: 'snippet,id',
          regionCode: 'US',
          maxResults: '50',
          order: 'date'
        },
        headers: {
          'X-RapidAPI-Key': '9f573245e8msh98d8b92209920b4p1e9989jsn8c93d213ff4f',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };
      

      try {
        const response = await axios.request(options);
        setApiData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApi();
  }, [searchTerm]);

  const handleSearch = async () => {
    setSearchTerm(searchTerm);
  };

  return (
    <body className={`${Moon ? "sun" : "mon"}`}>
      <div className="data">
        <header>
          <nav className={`${Moon ? "sun" : "mon"}`}>
            <div className={`container${Moon ? "sun" : "mon"}`}>
              <div className={`You__tube__navbar__wrapp ${Moon ? "sun" : "mon"}`}>
                <div className="You__tube__navbar__item">
                  <button onClick={() => setClick(!click)} className="youbtn">
                    <GiHamburgerMenu />
                  </button>
                  <div className="You__tube__logo__wrap">
                    <NavLink to='/' className={'youicons'}>
                      <FaYoutube className={` youlogo ${inputClick ? 'input' : ''}`} />
                      <h3 className={` youlogo ${inputClick ? 'input' : ''}`}>YouTube</h3>
                    </NavLink>
                    <div className="input__wrapp">
                      <input
                        type="text"
                        placeholder="Search"
                        className={`Search__input ${inputClick ? '' : 'input'}`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <li onClick={() => { setInputClick(!inputClick); handleSearch(); }} className="">
                        <MdSearch className="Search__icon" />
                      </li>
                    </div>
                  </div>
                </div>
                <div className="You__tube__navbar__user">
                  <button onClick={() => setMoon(!Moon)} className="monsunbtn">
                    {Moon ? <MdWbSunny className="mons" /> : <LuMoonStar className="sons" />}
                  </button>
                  <img src={UserPic} alt="" />
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="container">
          <div className="allwrapp">
            <div className="vediosapp">
              {videoId && (
                <iframe
                  width="880"
                  height="612"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="Featured Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="vediose">
                </iframe>
              )}
              <NavLink to='/'>
                <button className="Btns">
                  Home Ga qaytish
                </button>
              </NavLink>
            </div>

            <div className="vediolar">
              {apiData && apiData.items.map((item, index) => (
                <div key={index} className="vedio">
                  <iframe
                    width="360"
                    height="215"
                    src={`https://www.youtube.com/embed/${item.id.videoId}`}
                    title={item.snippet.title}
                    className="video__iframe"
                    allowFullScreen
                  ></iframe>
                  <h1 className="video__titlea">{item.snippet.title.slice(1, 15)}</h1>
                  <p className="Imgtimel">{item.snippet.publishTime}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Trening;
