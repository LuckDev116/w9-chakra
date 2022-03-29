import {
  Box,
} from "@chakra-ui/react"

type Props = React.PropsWithChildren<{
  /* Details go here */
}>;

const Boxradius = (props: Props) => {
  return(
    <Box border="2px solid #FFFFFF" borderRadius="30px" textAlign="center">
      {props.children}
    </Box>
  );
};

export default Boxradius;