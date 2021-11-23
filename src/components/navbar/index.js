import {
  Spacer,
  Text,
  Box,
  HStack,
  Circle,
  Container,
} from "@chakra-ui/layout";
import { Image, Avatar } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import User from "../../images/happy.png";
import { BiCameraMovie } from "react-icons/bi";
const index = () => {
  return (
    <Box>
      <Container maxW="container.xl">
        <HStack w="100%" py="5">
          <Circle bg="#36383c" p="5px">
            <BiCameraMovie color="#f84b4a" size="30" />
          </Circle>
          <Spacer />
          <HStack>
            <Box>
              <Link to="/coliction">
                <Text color="#909296">Coliction</Text>
              </Link>
            </Box>
            <Spacer />
            <Box>
              <Link to="/">
                <Text color="#909296">Home</Text>
              </Link>
            </Box>
            <Spacer />
          </HStack>
          <Spacer />
          <Circle bg="#36383c" p="5px">
            <FaSearch color="#909296" />
          </Circle>
          <Circle bg="#36383c" p="5px">
            <IoMdNotifications color="#909296" />
          </Circle>
          <Avatar name="Marwa" src={User} size="sm" />
          {/* <Image src={User} alt="user" borderRadius="full" w="35px" /> */}
        </HStack>
      </Container>
    </Box>
  );
};

export default index;
