import { Text, Box, Flex, Container } from "@chakra-ui/layout";
import { movie } from "../../Store/reducers/config";
//const Gener = ["comedy", "romantic", "action", "comedy", "romantic", "action"];
const index = (props) => {
  const genres = props.genres;
  console.log(genres, "geeeeeee");
  return (
    <Container maxW="container.xl">
      <Text color="#909296" m="0px" p="0px">
        {/* {props} */}
      </Text>
      <Flex py="30px" flexWrap="wrap">
        {genres?.map((item) => (
          <Box borderRadius="30px" m="5px" py="5px" px="8px" bg="#36383c">
            <Text color="#909296">{item.name}</Text>
          </Box>
        ))}
      </Flex>
      <Text pb="10px" px="30px" color="white">
        Simialr to {props.title}
      </Text>
    </Container>
  );
};
export default index;
