import {
  Spacer,
  Text,
  Box,
  HStack,
  Circle,
  Square,
  Container,
  VStack,
  Flex,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import User from "../../images/happy.png";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { IoTriangle } from "react-icons/io5";
import {
  fetchPopularMovies,
  getMovie,
} from "../../Store/reducers/PopularReducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageUrl } from "../../Store/reducers/config";
function Index() {
  const popularMovies = useSelector((state) => state.popularMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(getMovie());
  }, [dispatch]);
  const data = popularMovies.data;
  return (
    <Container maxW="container.xl" w="100%">
      <Box position="relative" bg="gray.200">
        <Text
          color="white"
          left={["15px", "25px", "65px"]}
          top={["50px", "70px", "110px"]}
          position="absolute"
          fontSize={{ base: "24px", md: "45px", lg: "56px" }}>
          {data.title}
        </Text>
      </Box>

      <Flex
        w="100%"
        justifyContent="center"
        h={["200px", "300px", "400px"]}
        alignItems="center">
        <BsArrowLeft color="white" size={50} />
        <Flex
          w="200px"
          h="100%"
          flexDirection="column"
          justifyContent="space-between">
          <Text color="#909296">Most popular</Text>
          <Spacer />
          <Spacer />
          <Spacer />
          <Text color="#f84b4a" fontSize="40px">
            {data.vote_average}
          </Text>

          <Text color="white" w="max-content">
            watch now
            <Square bg="#f84b4a" h="3px" />
          </Text>

          <Spacer />
        </Flex>
        <Box w={["500px", "700px", "900px"]} h="100%" bg="gray.500">
          <Image
            src={`${imageUrl}${data.poster_path}`}
            alt="movie"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
        <BsArrowRight color="white" size={50} />
      </Flex>
      <Container maxW="container.lg" py="10px">
        <Flex direction={["column", "row"]}>
          <Text color="#909296" flex="50%">
            {data.overview}
          </Text>
          <Spacer />
          <HStack>
            <Circle bg="#f84b4a" p="10px">
              <IoTriangle
                color="white"
                size={20}
                style={{
                  transform: "rotate(90deg)",
                }}
              />
            </Circle>
            <VStack>
              <Text color="white">Watch Tralir</Text>
              <Text color="#909296">{data.vote_count} English</Text>
            </VStack>
          </HStack>
        </Flex>
      </Container>
    </Container>
  );
}
export default Index;
