import Page from "./page"
import { CoinApi } from '@/Api/CoinApi'
import { coinContext } from '@/contextes/coinContext.ts'
import { CoinProvider } from "@/contextes/coinDataContext"


const Layout = () => {

  return (
    <>
      <CoinProvider>
        <Page />
      </CoinProvider>
    </>

  )
}

export default Layout

