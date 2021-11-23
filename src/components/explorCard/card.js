import { Spacer, Text, Box, HStack, Circle, Flex } from "@chakra-ui/layout";
import { IoTriangle } from "react-icons/io5";
import User from "../../images/happy.png";
import { imageUrl } from "../../Store/reducers/config";

import { useHistory } from "react-router-dom";
function Index({ movie }) {
  // console.log(movie, "what happen ");

  const history = useHistory();
  return (
    <Flex>
      <Box
        cursor="pointer"
        onClick={() => history.replace(`/movie/${movie.id}`)}
        p="10px"
        w={["200px", "250px", "300px"]}
        h={["120px", "170px", "220px"]}
        pos="relative"
        bgSize="cover"
        bgImage={`url(${imageUrl}${movie.poster_path})`}
        _before={{
          content: `""`,
          backgroundColor: " rgba(0,0,0,0.25)",
          pos: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}>
        <HStack w="100%" py="0">
          <Flex alignItems="center" gridGap="5px">
            <Circle bg="#f84b4a" p="10px">
              <IoTriangle
                color="white"
                size={20}
                style={{
                  transform: "rotate(90deg)",
                }}
              />
            </Circle>
            <Text color="#909296">{movie.vote_count}</Text>
          </Flex>
          <Spacer />
          <Text color="white" fontWeight="bold" pt="20px">
            {movie.popularity}
          </Text>
        </HStack>
      </Box>
    </Flex>
  );
}

export default Index;
