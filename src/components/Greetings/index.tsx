import { Button } from '../Button'
import { Container, Image, Text } from './styles'
import magicMint from '../../../assets/magicMint.png'

export function Greetings() {
  function handleSayHello() {
    window.Main.sendMessage('Hello World')

    console.log('Message sent! Check main process log in terminal.')
  }

  return (
    <Container>
      <Image src={magicMint} draggable="false" />

      <Text>
        An Electron boilerplate including TypeScript, React, Jest and ESLint.
      </Text>
      <Button onClick={handleSayHello}>Send message to main process</Button>
    </Container>
  )
}
