import {    
  Input,
} from "@chakra-ui/react"

interface CustomwithvalueinputProp {
  InputValue: string;
}

const Customwithvalueinput: React.FC<CustomwithvalueinputProp> = ({
  InputValue
}) => {
  return(
     <Input type='text' placeholder={InputValue} _placeholder={{ color: '#0B070C', fontFamily:'Proxima Nova', fontStyle: 'normal', fontWeight: '700', fontSize: '50px' }} width="65px" height="65px" background = "#FFFFFF" pt="20px" borderRadius="10px" mr="23px"/>
  );
}

export default Customwithvalueinput;