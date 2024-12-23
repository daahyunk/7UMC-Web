import MovieCard from '../../components/movies/MovieCard';
import SkeletonCard from '../../components/movies/SkeletonCard';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

const UpcomingContainer = styled.div`
  width: 100%; 
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  overflow-y: auto;
`;

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const fetchUpcomingMovies = async () => {
  const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
  const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=ko-KR', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }

  return response.json();
};

const Upcoming = () => {
  const { data: movies, isLoading, error } = useQuery({
    queryKey: ['upcomingMovies'],
    queryFn: fetchUpcomingMovies,
  });

  if (isLoading) {
    return (
      <UpcomingContainer>
        <MoviesContainer>
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </MoviesContainer>
      </UpcomingContainer>
    );
  }

  if (error) {
    return <UpcomingContainer>{error.message}</UpcomingContainer>;
  }

  if (!movies || movies.results.length === 0) {
    return <UpcomingContainer>영화 데이터가 없습니다.</UpcomingContainer>;
  }

  return (
    <UpcomingContainer>
      <MoviesContainer>
        {movies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesContainer>
    </UpcomingContainer>
  );
};

export default Upcoming;
