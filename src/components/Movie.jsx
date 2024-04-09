import './Movie.css';

import heartOutline from '../assets/svg/heart-outline.svg';
import heartFilled from '../assets/svg/heart-filled.svg';
import svgCelebrate from '../assets/svg/celebrate.svg';
import trashIcon from '../assets/svg/trash-icon.svg';

import img1 from '../assets/movie-1.png';
import img2 from '../assets/movie-2.png';
import img3 from '../assets/movie-3.png';
import img4 from '../assets/movie-4.png';
import img5 from '../assets/movie-5.png';
import img6 from '../assets/movie-6.png';
import img7 from '../assets/movie-7.png';
import img8 from '../assets/movie-8.png';

const movieImages = {
    'Sonic the Hedgehog 2': img1,
    Morbius: img2,
    'The Adam Project': img3,
    'Free Guy': img4,
    'The Batman': img5,
    Uncharted: img6,
    'Death on the Nile': img7,
    "The King's Man": img8,
};

export default function Movie({ movies, toggleFavorite }) {
    return (
        <>
            <ul className="movies-list">
                {movies.map((movie) => (
                    <li key={movie.index}>
                        <div className="movie-card">
                            <div className="favorite">
                                <div className="heart-container">
                                    <input type="checkbox" className="checkbox" id={`fav-${movie.index}`} checked={movie.favorite} onChange={() => toggleFavorite(movie.index)} />
                                    <div className="svg-container">
                                        <img src={movie.favorite ? heartFilled : heartOutline} alt="Favorite" className="svg-outline" />
                                        {movie.favorite && <img src={svgCelebrate} alt="" className="svg-celebrate" />}
                                        <span className="tooltip">Favorite</span>
                                    </div>
                                </div>
                            </div>
                            <div className="remove">
                                <button className="deleteButton">
                                    <img src={trashIcon} alt="" className="trash-icon" />
                                    <span className="tooltip">Delete</span>
                                </button>
                            </div>
                            <figure className="card-banner">
                                <img src={movieImages[movie.title]} alt={`${movie.title} movie poster`} />
                            </figure>
                            <div className="title-wrapper">
                                <h3 className="card-title">{movie.title}</h3>
                                <span>{movie.released}</span>
                            </div>
                            <div className="card-meta">
                                <div className="badge badge-outline">{movie.resolution}</div>
                                <div className="duration">
                                    <span>{movie.duration} min</span>
                                </div>
                                <div className="rating">
                                    <time>{movie.rating}</time>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
