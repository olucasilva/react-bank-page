import { Flex } from '@chakra-ui/react'

interface IObservationLabel {
  text: string
  textColor?: string
}

export const ObservationLabel = ({ text, textColor = 'white' }: IObservationLabel) => {
  return (
    <Flex position='relative' top="0" paddingY='3' width="max-content" height="min-content" color={textColor} justifyContent="center">
        {text}
    </Flex>
  );
};
