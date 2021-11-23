import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./card";
import { Flex, Box } from "@chakra-ui/react";
const index = (props) => {
  const movies = props.movies.data;
  console.log(movies.data, "in movie card");
  const responsive = {
    superLargeDesktop: {
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
    <Carousel responsive={responsive}>
      {/* <div>soso</div> */}
      {movies.map((movie) => (
        <Card movie={movie} />
      ))}
    </Carousel>
  );
};

export default index;
