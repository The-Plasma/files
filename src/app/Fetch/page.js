"use client"
import React, { useState, useEffect } from 'react';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/movies');
        const { movies } = await response.json();
        setMovies(movies);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Movies from Database</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie._id}</td>
              <td>{movie.name}</td>
              <td>{movie.price}</td>
              <td>{movie.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoviesPage;
