import styled from "styled-components";
import { Title } from "../atomos/Title";
import { InputText2 } from "../organismo/forms/InpuText2";
import { Btnsave } from "../moleculas/Btnsave";
import { Device } from "../../styles/breakpoints";
import { v } from "../../styles/variables";
import { useAuthStore } from "../../store/AuthStore"

export function LoginTemplate()  {
  
    const { loginGoogle } = useAuthStore();
  return (
    <Container> 
        <div className="card">
          <Title $paddingbottom="50px" >Ingresar</Title>
          <form>
            <InputText2>
              <input 
              className="form__field"
              placeholder="email" type="text"
              />
            </InputText2>

            <InputText2>
              <input 
              className="form__field"
              placeholder="Contraseña" type="password"
              />
            </InputText2>
                                           <Btnsave titulo="Ingresar" 
              bgcolor="#1CB0F6"
              color="255,255,255"
              width="100%"
            />

          </form>

        <Btnsave  funcion={loginGoogle}
        titulo="Google" 
        bgcolor="#fff"
        color="0,0,0"
        icono={ <v.iconogoogle/> }
        />

        </div>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
    
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 100%;
      margin:20px;
      @media ${ Device.tablet } {
        width: 400px;
      }

    }
`
