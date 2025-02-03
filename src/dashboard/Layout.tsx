import Page from "./page"
import { CoinApi } from '@/Api/CoinApi'
import { coinContext } from '@/contextes/coinContext.ts'


const Layout = () => {

  return (
    <>
      <coinContext.Provider value={CoinApi}>
        <Page />
      </coinContext.Provider>
    </>

  )
}

export default Layout

