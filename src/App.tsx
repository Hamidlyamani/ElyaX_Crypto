
import './App.css'
import Layout from './dashboard/Layout'
import { CoinProvider } from "@/contextes/coinDataContext"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <CoinProvider>
      <ToastContainer position="top-right" autoClose={3000} />
      <Layout />

    </CoinProvider>

  )
}

export default App
