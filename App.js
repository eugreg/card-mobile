import React, { useState, useEffect } from "react";
import { FlatList, Image } from "react-native";
import FilmeApi from "./src/api/Filmes";
const filmeapi = new FilmeApi();

export default function renderItem({ item }) {
    const [filmes, setFilmes] = useState([]);
    const fetchFilmes = async () => {
      const items = await filmeapi.BuscaTodosOsFilmes();
      setFilmes(items)
    };

    useEffect(() => {
      fetchFilmes()
    }, []);
  

  return (
    <FlatList
      data={filmes}
      renderItem={({ item }) => {
        const url = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
        return <Image style={{ height: 200 }} source={{ uri: url }} />;
      }}
      keyExtractor={(item) => item.id}
    />
  );
}
