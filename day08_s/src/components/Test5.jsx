import { Box, Button, ConBox } from './style';

const Test5 = () => {
    return (
        <ConBox ww='600px' bg='pink'>
            <Box width='120px' bg='yellow'>
                test
            </Box>
            <Box bg='red'>test</Box>
            <Box width='150px' bg='green'>
                test
            </Box>
            <Box width='160px'>test</Box>
            <Button bg='lightgreen'>확인</Button>
            <Button primary>확인</Button>
        </ConBox>
    );
};

export default Test5;
