import { GlobalStyle } from './styles/GlobalStyle'

import { Greetings } from './components/Greetings'
import { Button } from './components/Button'

export function App() {

  const callWebhook = async () => {
    await window.Main.discordWebhook('')
  }
  return (
    <>
      <GlobalStyle />
      <Button onClick={() => callWebhook()} children={undefined}></Button>
      <Greetings />
    </>
  )
}