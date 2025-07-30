import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Device } from "./styles/breakpoints"
import { MyRoutes } from "./routers/routes";
import { Sidebar } from "./components/organismo/sidebar/Sidebar";
import { useThemeStore } from "./store/ThemeStore";
import { useState } from "react";
function App() {
  const [ sidebarOpen, setSidebarOpen ] = useState(false);
  const {  themeStyle } = useThemeStore();
  return (
    <ThemeProvider theme={ themeStyle }>
    <Container className={ sidebarOpen ? "active" : "" }>
      <GlobalStyles />

      <section className="contentSidebar"> 
        <Sidebar 
        state={ sidebarOpen } 
      setState={()=> setSidebarOpen(!sidebarOpen)} />
       </section>
      <section className="contentMenu">Menu</section>

      <section className="contentRouters"> <MyRoutes/> </section>


    </Container>
    </ThemeProvider>

  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  transition: 0.1s ease-in-out;
  color: ${({ theme })=> theme.text};
  
  

  .contentSidebar {
    display: none;
    /* background-color: rgba(220, 195, 33, 0.5); */
  }
  
  .contentMenu {
    /* display: block; */
    position: absolute;
    /* background-color: rgba(193, 45, 193, 0.5); */
  }
  
  .contentRouters {
    /* background-color: rgba(11, 142, 198, 0.5); */
    grid-column: 1;
    width: 100%;
    /* min-height: 100vh; */
  }
  
  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    &.active{
    grid-template-columns: 260px 1fr;
    }
    
    .contentSidebar {
      display: initial;
    }
    
    .contentMenu {
      display: none; /* oculto en tablet y escritorio */
    }
    
    .contentRouters {
      grid-column: 2;
      width: 100%;
    }
  }
  
  .contentMenuambur {
    display: none;
  }
`
export default App;
