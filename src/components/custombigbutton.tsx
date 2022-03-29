import {    
  Button,
} from "@chakra-ui/react"

interface CustombigbuttonProp {
  ButtonName: string;
}

const Custombigbutton: React.FC<CustombigbuttonProp> = ({
  ButtonName
}) => {
  return(
      <Button backgroundColor="#FFFFFF" borderRadius="50px"
      width="100%" height="80px" fontSize="23px"  color="#0A070C">
        {ButtonName}
      </Button>
  );
}

export default Custombigbutton;