import AppLayout from './components/layout/AppLayout'
import { CryptoContextProvider } from './context/crypto-context'

export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  )
}
