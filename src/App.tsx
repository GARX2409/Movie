import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";

// Definir una interfaz para las películas
interface Movie {
  id: number;
  title: string;
  genre: string;
  image: string;
}

const App: React.FC = () => {
  const [movies] = useState<Movie[]>([
    {
      id: 1,
      title: "Split",
      genre: "Terror psicológico, suspenso",
      image: "Split.png",
    },
    {
      id: 2,
      title: "Unbreakable",
      genre: "Suspenso psicológico",
      image: "Unbreakable.png",
    },
    {
      id: 3,
      title: "Glass",
      genre: "Suspenso",
      image: "Glass.png",
    },
    {
      id: 4,
      title: "Cars",
      genre: "Animación, Aventura, Familiar",
      image: "Cars.JPG",
    },
    {
      id: 5,
      title: "La era de Hielo",
      genre: "Comedia, Ciencia ficción animada",
      image: "LaEraDeHielo.webp",
    },
    {
      id: 6,
      title: "Toy Story",
      genre: "Aventura, Comedia, Familiar",
      image: "ToyStory.jpeg",
    },
    {
      id: 7,
      title: "Yo Antes de ti",
      genre: "Drama, Romance",
      image: "YoAntesDeTi.jpg",
    },
    {
      id: 8,
      title: "Bajo la Misma Estrella",
      genre: "Drama, Adolescentes",
      image: "BajoLaMismaEstrella.jpg",
    },
    {
      id: 9,
      title: "Cada Día",
      genre: "Drama, Romance, Fantasía",
      image: "CadaDia.jpeg",
    },
  ]);

  return (
    <div className="app-container">
      <h1 className="app-title">🎬 Movie List</h1>
      <MovieList movies={movies} />
      <footer className="footer">
        © 2024 MovieApp | Diseñado por{" "}
        <a href="">mildred</a>
        <br />
      </footer>
    </div>
  );
};

export default App;
