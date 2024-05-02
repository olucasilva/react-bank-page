import { Button, Spinner } from "@chakra-ui/react";

export const MyButton = ({ loading }: { loading: number }) => {
  return (
    <Button
      colorScheme="teal"
      size="md"
      width="40%"
      right="30%"
      transform="translateX(50%)"
      alignSelf="center"
      type="submit"
    >
      Entrar &nbsp; {loading === 1 && <Spinner size='sm' />}
    </Button>
  );
};
