import styled from "styled-components";
import { Icono } from "../atomos/Icono";
export function Btnsave({
  funcion,
  titulo,
  bgcolor,
  icono,
  url,
  color,
  disabled,width
}) {
  return (
    <Container $width={width}
      disabled={disabled}
      $color={color}
      type="submit"
      $bgcolor={bgcolor}
      onClick={funcion} 
    >
      <section className="content">
        <Icono $color={color}>{icono}</Icono>
        {titulo && (
          <span className="btn">
            {url ? (
              <a href={url} target="_blank">
                {titulo}
              </a>
            ) : (
              titulo
            )}
          </span>
        )}
      </section>
    </Container>
  );
}
const Container = styled.button`
  font-weight: 700;
  display: flex;
  font-size: 15px;
  padding: 10px 25px;
  border-radius: 16px;
  background-color: ${(props) => props.$bgcolor};
  border: 2px solid rgba(50, 50, 50, 0.2);
  border-bottom: 5px solid rgba(50, 50, 50, 0.2);
  transform: translate(0, -3px);
  cursor: pointer;
  transition: 0.2s;
  transition-timing-function: linear;
  color: rgb(${(props) => props.$color});
  align-items: center;
  justify-content: center;
 width:${(props)=>props.$width};
  .content {
    display: flex;
    gap: 12px;
  }
  
  .btn {
    color: rgb(${(props) => props.$color});
  }
  
  .btn a {
    color: rgb(${(props) => props.$color});
    text-decoration: none;
  }
  &:active {
    transform: translate(0, 0);
    border-bottom: 2px solid rgba(246, 239, 239, 0.96);
  }
  &[disabled] {
    background-color:rgb(253, 239, 239);
    cursor: no-drop;
    box-shadow: none;
  }
`;