import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Device } from "./styles/breakpoints"
import { MyRoutes } from "./routers/routes";
import { Sidebar } from "./components/organismo/sidebar/Sidebar";
import { useThemeStore } from "./store/ThemeStore";
import { useState } from "react";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const [ sidebarOpen, setSidebarOpen ] = useState(false);
  const {  themeStyle } = useThemeStore();
  
  return (
    <ThemeProvider theme={ themeStyle }>
<AuthContextProvider>

      <Container className={ sidebarOpen ? "active" : "" }>
        <GlobalStyles />

        <section className="contentSidebar"> 
          <Sidebar 
            state={ sidebarOpen } 
            setState={()=> setSidebarOpen(!sidebarOpen)} 
          />
        </section>
        
        <section className="contentMenu">Menu</section>

        <section className="contentRouters"> 
          <MyRoutes/> 
        </section>
      </Container>

</AuthContextProvider>

    </ThemeProvider>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  min-height: 100vh;
  width: 100%;
  transition: 0.1s ease-in-out;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgtotal};
  
  .contentSidebar {
    display: none;
    grid-row: 1;
    grid-column: 1;
    height: 100%;
  }
  
  .contentMenu {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  
  .contentRouters {
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    grid-template-rows: 1fr;
    
    &.active {
      grid-template-columns: 260px 1fr;
    }
    
    .contentSidebar {
      display: block;
      grid-column: 1;
      grid-row: 1;
    }
    
    .contentMenu {
      display: none;
    }
    
    .contentRouters {
      grid-column: 2;
      grid-row: 1;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }
`;
export default App;
