import {    
    Button,
} from "@chakra-ui/react"

interface CustombuttonProp {
    ButtonName: string;
}

const Custombutton: React.FC<CustombuttonProp> = ({
    ButtonName
}) => {
    return(
        <Button backgroundColor="#FFFFFF" borderRadius="50px"
        width="274px" height="54px" fontSize="23px"  color="#0A070C">
            {ButtonName}
        </Button>
    );
}

export default Custombutton;