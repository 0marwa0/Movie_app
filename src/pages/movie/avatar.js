import { Box, HStack, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";
import Card from "../../components/explorCard/card.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieCast } from "../../Store/reducers/MovieCast";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { imageUrl } from "../../Store/reducers/config";
function Index(props) {
  return (
    <Box>
      <Text color="white"> Cast</Text>
      {props.cast.map((cast) => (
        <Avatar
          name={cast.original_name}
          size="sm"
          m="5px"
          src={`${imageUrl}${cast.profile_path}`}
        />
      ))}
    </Box>
  );
}
export default Index;
