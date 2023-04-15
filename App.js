import React, { useState, useEffect,  } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';





export default function renderItem({ item }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=a37701b7a0845f3785cd83eb23add599&language=en-US&page=1')
    .then(function (response) {
      setData(response.data.results);
    })
    .catch(function (error) {
          console.log(error);
        });

        
      },
   [], );
      function getPosterUrl(posterPath) {
        return `https://image.tmdb.org/t/p/w500${posterPath}`;
      }
      const renderItem = ({ item }) => (
        <Image source={{ getPosterUrl }} style={{ width: 200, height: 200 }} />
      );
  return (
<FlatList
  data={data}
  renderItem={getPosterUrl}
  keyExtractor={item => item.id}
/>
  );
}

