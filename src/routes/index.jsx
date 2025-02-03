import Layout from "../components/layout/Layout";
import HomePage from "../pages/home-page/HomePage";
import MovieDetailPage from "../pages/movie-detail-page/MovieDetailPage";
import MoviesPage from "../pages/movies-page/MoviesPage";  
import TvShowsPage from "../pages/tv-shows-page/TvShowsPage"

export const menu = [
    {
        name: "Главная",
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/movie-detail/:movieId",
                element: <MovieDetailPage/>
            },
            {
                path: "/movies", 
                element: <MoviesPage /> 
            },
            {
                path: "/tv shows",
                element: <TvShowsPage />
            },
        ]
    },
]
