
import axios from "axios";
import { useEffect, useState } from "react";

const useFetchHeader = () => {
  const [data, setData] = useState(null);

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
        setData(response.data); 
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApi();
  }, []); 


  return { data };
};

export default useFetchHeader;
