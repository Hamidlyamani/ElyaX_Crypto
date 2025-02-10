
import './App.css'
import Layout from './dashboard/Layout'
import { CoinProvider } from "@/contextes/coinDataContext"

function App() {
  console.log('hhhhhhhhhhhhhhhhh')
  return (
    <>  <CoinProvider>
      <Layout />
    </CoinProvider>
    </>
  )
}

export default App
