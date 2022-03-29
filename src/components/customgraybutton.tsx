import {    
  Button,
} from "@chakra-ui/react"

interface CustomgraybuttonProp {
  ButtonName: string;
}

const Customgraybutton: React.FC<CustomgraybuttonProp> = ({
  ButtonName
}) => {
  return(
      <Button backgroundColor="rgba(196, 196, 196, 0.1)" borderRadius="50px" border="1px solid #FFFFFF"
      width="274px" height="54px" fontSize="23px" opacity="0.31">
          {ButtonName}
      </Button>
  );
}

export default Customgraybutton;