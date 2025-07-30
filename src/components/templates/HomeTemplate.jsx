import styled from 'styled-components';
export function HomeTemplate(){
    return ( <Container>
        <span> component</span>
    </Container>
      );
}
const Container = styled.div`
height: 100vh;
width: 100%;
background-color:  ${(props)=> props.theme.bgtotal};
`
