import { Envelope, Lock } from 'phosphor-react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Logo } from './Logo'
import storybookLogo from './assets/storybook.svg'
import './styles/global.css'
import './App.css'

function App() {
  return (
    <div className="w-full h-screen bg-gray-900 flex items-center flex-col justify-center text-gray-100">


      <header className='flex flex-col items-center'>
        <Logo className='App-logo' />
        <Heading size='lg' className="mt-4">
          Ignite Lab
        </Heading>
        <Text size='lg' className='text-gray-400 mt-1' >
          Faça login e comece a usar!
        </Text>
      </header>


      <form className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'>

        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" autoComplete='off' autoFocus id="email" placeholder='Digite seu e-mail' />
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" id="password" placeholder='*******' />
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id="remember" />
          <Text size='sm' className='selection:bg-none'>
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className='mt-4' >Entrar na plataforma</Button>

      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChield size='sm'>
          <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
        </Text>
        <Text asChield size='sm'>
          <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>

      <a href="./storybook" target='_blank' className='mt-6 flex flex-col items-center justify-center bg-white py-1 px-2 rounded'>
        <Text size='sm' className='text-black font-bold' >
          View
        </Text>
        <img src={storybookLogo} className="h-[30px]" />
      </a>

    </div>
  )
}

export default App
