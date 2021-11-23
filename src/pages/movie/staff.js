import { Box, HStack, Text } from "@chakra-ui/layout";
//import { Avatar } from "@chakra-ui/react";
import Card from "../../components/explorCard/card.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieCast } from "../../Store/reducers/MovieCast";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { imageUrl } from "../../Store/reducers/config";
import Avatar from "./avatar.js";
function Index(props) {
  const movie = props?.movie;
  const { id } = useParams();
  const dispatch = useDispatch();
  const cast = useSelector((state) => state?.movieCast?.data);
  useEffect(() => {
    dispatch(fetchMovieCast(id));
  }, [dispatch, id]);
  console.log(cast, "cas");
  return (
    <Box>
      <Card movie={movie} />
      <Text noOfLines={[1]} color="white" pt="3px">
        {movie.title}
      </Text>
      <Text color="#909296" pt="10px" noOfLines={[1, 2, 3, 4, 5]}>
        {movie.overview}
      </Text>
      <HStack py="10px">
        <Avatar cast={cast} />
      </HStack>
    </Box>
  );
}
export default Index;
