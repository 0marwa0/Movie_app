import {
  Stack,
  AspectRatio,
  Container,
  Text,
  Box,
  Flex,
} from "@chakra-ui/layout";
import Staff from "./staff";
import MovieCard from "../../components/movieCard";
import Gener from "./genreWidget";
import { fetchSimialrMovies } from "../../Store/reducers/SimilarMoviesReducer";
import { fetchTopRatedMovies } from "../../Store/reducers/TopRatedReducer";
import { fetchMovie } from "../../Store/reducers/MovieReducer";
import { fetchVideo } from "../../Store/reducers/VideoReducer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import VideoPlayer from "react-video-js-player";
import { Player, ControlBar } from "video-react";
import { Image } from "@chakra-ui/image";

import ReactPlayer from "react-player";
function Index() {
  const dispatch = useDispatch();
  const simialrMovies = useSelector((state) => state.simialrMovies);
  const movie = useSelector((state) => state.movie.data);
  const topRatedMovies = useSelector((state) => state.topRatedMovies);
  const video = useSelector((state) => state.video);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSimialrMovies(id));
    dispatch(fetchTopRatedMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchMovie(id));
    dispatch(fetchVideo(id));
  }, [dispatch, id]);

  const genres = movie.genres;
  const key = `https://www.youtube.com/watch?v=${video?.data[0]?.key}`;
  return (
    <Box>
      <Gener genres={genres} title={movie.title} />
      <MovieCard movies={simialrMovies} />
      <Container maxW="container.xl" p="30px">
        <Flex direction={["column", "column", "row"]}>
          <Box p="50px" flex="60%">
            <ReactPlayer
              playing
              loop
              onProgress={() => <div>loading</div>}
              style={{ borderRadius: "30px", overflow: "hidden" }}
              width="100%"
              controls
              forceAudiio
              url={key}
            />
          </Box>
          <Box p="50px" flex="40%">
            <Staff movie={movie} />
          </Box>
        </Flex>
      </Container>
      <MovieCard movies={topRatedMovies} />
    </Box>
  );
}
export default Index;
