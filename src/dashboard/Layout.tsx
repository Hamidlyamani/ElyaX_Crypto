import { MenuProvider } from "@/contextes/menuContext"
import Page from "./page"


const Layout = () => {

  return (

    <MenuProvider >,
      <Page />
    </MenuProvider>

  )
}

export default Layout

