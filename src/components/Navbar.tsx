import { HStack, Image, } from "@chakra-ui/react";
import logo from "../assets/Logo.webp";
import { ColorModeButton } from "./ui/color-mode";
const Navbar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize="60px" />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
