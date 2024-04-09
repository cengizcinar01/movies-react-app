import { useState } from 'react';
import './App.css';
import Movie from './components/Movie';
import initialMovies from './data/initialMoviesData';

function App() {
    const [movies, setMovies] = useState(initialMovies);
    const [animatedFavorites, setAnimatedFavorites] = useState([]);
    const [filter, setFilter] = useState('All');

    const initialFavoriteCount = movies.filter((movie) => movie.favorite).length;
    const [favoriteCount, setFavoriteCount] = useState(initialFavoriteCount);

    const toggleFavorite = (index) => {
        const newMovies = movies.map((movie) => {
            if (movie.index === index) {
                const isNowFavorite = !movie.favorite;
                if (isNowFavorite) {
                    if (!animatedFavorites.includes(index)) {
                        setAnimatedFavorites([...animatedFavorites, index]);
                    }
                }
                return { ...movie, favorite: isNowFavorite };
            }
            return movie;
        });
        setMovies(newMovies);
        setFavoriteCount(newMovies.filter((movie) => movie.favorite).length);
    };

    const genres = [...new Set(movies.map((movie) => movie.genre))].sort();
    const uniqueGenres = ['All', ...genres];
    if (!uniqueGenres.includes('Favorite')) {
        uniqueGenres.push('Favorite');
    }

    const filteredMovies = movies.filter((movie) => {
        if (filter === 'All') return true;
        if (filter === 'Favorite') return movie.favorite;
        return movie.genre === filter;
    });

    return (
        <>
            <div className="container">
                <h2 className="h2 section-title">Top Rated Movies</h2>
                <ul className="filter-list">
                    {uniqueGenres.map((genre) => (
                        <li key={genre} className={genre === 'Favorite' ? 'favorite-btn' : ''}>
                            <button className="filter-btn" onClick={() => setFilter(genre)}>
                                {genre === 'Favorite' ? `Favorite (${favoriteCount})` : genre}
                            </button>
                        </li>
                    ))}
                </ul>
                <Movie movies={filteredMovies} toggleFavorite={toggleFavorite} />
            </div>
        </>
    );
}

export default App;
