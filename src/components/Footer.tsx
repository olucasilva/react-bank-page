import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react"

export const Footer = () => {
    return (
        <Box position='fixed' bottom="0" paddingY='3' width="100%" height="fit-content" bg='white'>
            <Divider />
            <AbsoluteCenter bg='white' fontSize="s" px='4' color='black'>
                <i>
                    By Lucas Oliveira
                </i>
            </AbsoluteCenter>
        </Box>
    )
}