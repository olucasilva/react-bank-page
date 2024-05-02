import { Box, Skeleton, Text } from "@chakra-ui/react"

interface ICardInfo {
    title: string
    content: any[]
}

export const CardInfo = ({ title, content }: ICardInfo) => {
    return (
        <Box
            bg="#d1d1d9"
            color="black"
            minHeight="10vh"
            padding="10px"
            borderRadius="5px"
            width="25vw"
        >
            <Text fontSize='xl' fontWeight='bold'>
                {title}
            </Text>
            {
                content.map((value) => {
                    return (<Text fontSize='l'>{value}</Text>)
                })
            }
        </Box>
    )
}

export const SkeletonCardInfo = () => {
    return (
        <Box
            bg="#d1d1d9"
            color="black"
            minHeight="10vh"
            padding="10px"
            borderRadius="5px"
            width="25vw"
        >
            <Skeleton height="3vh" width="50%" />
            <Skeleton height="3vh" marginTop="5px" />
        </Box>
    )
}