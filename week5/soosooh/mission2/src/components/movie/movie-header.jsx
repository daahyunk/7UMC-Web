import styled from "styled-components";

const BackgroundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: calc(100vw - 180px);
  height: 400px;
  background-image: ${({ background }) => `url(${background})`};
  background-size: 100% 100%;
  background-position: center;
  position: relative;
  color: white;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Content = styled.div`
  margin-top: 30px;
  margin-left: 50px;
  position: relative;
  text-align: left;
`;

const StyledTitle = styled.p`
  font-size: 3em;
  font-weight: bold;
  margin: 0;
`;
const StyledP = styled.p`
  font-size: 1em;
`;

const StyledTagline = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  font-style: italic;
  margin: 5px;
`;

const StyledOverview = styled.p`
  font-size: 1em;
  white-space: normal; /* 줄바꿈이 가능하도록 설정 */
  max-width: 1230px;
  word-break: break-word;
`;

const MovieHeader = ({ movie }) => {
  const releaseYear = movie.release_date.substring(0, 4);

  return (
    <BackgroundContainer
      background={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
    >
      <Overlay />
      <Content>
        <StyledTitle>{movie.title}</StyledTitle>
        <StyledP>
          평균: {movie.vote_average}
          <br />
          {releaseYear}
          <br />
          {movie.runtime}분
        </StyledP>

        <StyledTagline>{movie.tagline}</StyledTagline>
        <StyledOverview>{movie.overview}</StyledOverview>
      </Content>
    </BackgroundContainer>
  );
};

export default MovieHeader;
