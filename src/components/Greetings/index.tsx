import { Button } from '../Button'
import { Container, Image } from './styles'
import magicMint from '../../../assets/magicMint.png'
import { useEffect } from 'react'
import { moralisFunction } from '../../sharedFunctions/utils'

export function Greetings() {
  function handleSayHello() {
    window.Main.sendMessage('Hello World')

    console.log('Message sent! Check main process log in terminal.')
  }

  useEffect(() => {
    const callF = async () => {
      await moralisFunction()
    }
    callF()
  }, [])

  return (
    <Container>
      <Image src={magicMint} draggable="false" />

      <Button onClick={handleSayHello}>Send message to main process</Button>
    </Container>
  )
}
