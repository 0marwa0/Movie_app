import {
  Spacer,
  Text,
  Box,
  HStack,
  Circle,
  Container,
  VStack,
  Square,
  Flex,
} from "@chakra-ui/layout";
import { IoBookmarkSharp } from "react-icons/io5";
import { useHistory } from "react-router-dom";

import { imageUrl } from "../../Store/reducers/config";
import User from "../../images/happy.png";
function Index({ movie }) {
  const history = useHistory();
  return (
    <Flex alignItems="center" justifyContent="center" display="flex">
      <Box
        cursor="pointer"
        border="2px"
        // borderColor="#f84b4a"
        w={["200px", "250px", "300px"]}
        h={["250px", "350px"]}
        pos="relative"
        bgSize="cover"
        px="3px"
        bgImage={`url(${imageUrl}${movie.poster_path})`}
        _before={{
          content: `""`,
          backgroundColor: " rgba(0,0,0,0.25)",
          pos: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        onClick={() => history.replace(`/movie/${movie.id}`)}>
        <Flex flexDirection={"column"} justifyContent="space-between">
          <HStack w="100%" py="0">
            <Text color="white" pl="20px" fontWeight="bold" pt="20px">
              55
            </Text>
            <Spacer />
            <Square bg="#1c1d21 " p="10px">
              <IoBookmarkSharp color="#f84b4a" size={25} />
            </Square>
          </HStack>
          <VStack pb="20px">
            <Text color="white" fontSize="30px">
              {movie.title}
            </Text>
            {/* <Text color="gray"></Text> */}
          </VStack>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Index;
