import styled from "styled-components";
import { Title } from "../atomos/Title";
import { InputText2 } from "../organismo/forms/InpuText2";
import { Btnsave } from "../moleculas/Btnsave";

export function LoginTemplate()  {
  return (
    <Container> 
      <section className="contentCard">
        <div className="card">
          <Title>Ingresar</Title>
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
        </div>
      </section>
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
  
`
