import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Device } from "./styles/breakpoints"
import { MyRoutes } from "./routers/routes";
import { Sidebar } from "./components/organismo/sidebar/Sidebar";

function App() {
  return (
    <Container>
      <GlobalStyles />

      <section className="contentSidebar"> <Sidebar/> </section>
      <section className="contentMenu">Menu</section>

      <section className="contentRouters"> <MyRoutes/> </section>


    </Container>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;

  .contentSidebar{
  display: none;
  background-color:rgba(220, 195, 33, 0.5);

  }
  .contentMenu{
  display: block;
    position: absolute;
  background-color:rgba(193, 45, 193, 0.5);

  }
  .contentRouters {
  background-color:rgba(11, 142, 198, 0.5);
  grid-column:1;
  width:100%;


   
  }
  @media ${Device.tablet}{
  grid-template-columns: 88px 1fr;
  .contentSidebar{
  display:initial;
  }
  .contentMenu {
    display: none; /* oculto en tablet y escritorio */
  }

  }
  .contentMenuambur{
    display: none;
  }
  .contentRouters{
    grid-column:2;
  }

`
export default App;
