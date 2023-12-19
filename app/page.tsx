import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Container, Flex } from '@chakra-ui/react'

export default function Page() {
  return (
    <Container py="5">
      <Flex align="center" justify="center">
        <ConnectButton />
      </Flex>
    </Container>
  )
}
