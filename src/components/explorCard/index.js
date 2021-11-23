import Carousel from "react-multi-carousel";
import { useEffect } from "react";
import { Box, Text, Container } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import Card from "./card";
import { useSelector, useDispatch } from "react-redux";
import { fetchUpComingMovies } from "../../Store/reducers/UpComingReducer";
function Index() {
  const upComingMovies = useSelector((state) => state.upComingMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUpComingMovies());
  }, [dispatch]);
  const data = upComingMovies.data;
  console.log(data, "up coming");
  // console.log(data, "you got what you ask ");

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container maxW="container.xl">
      <Box py="30px">
        <Text color="white" py="10px">
          Up Coming
        </Text>
        <Carousel responsive={responsive}>
          {data.map((movie) => (
            <Card movie={movie} />
          ))}
        </Carousel>
      </Box>
    </Container>
  );
}

export default Index;
