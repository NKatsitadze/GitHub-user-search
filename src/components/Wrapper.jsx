import styled from "styled-components";

const Wrapper = function (props) {
    return (
        <StyledScreenBox>
            <MainBox>
                {props.children}
            </MainBox>
        </StyledScreenBox>
    )
}

export default Wrapper;

const StyledScreenBox = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    background: ${(props) => props.theme.primaryBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
`

const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 45.625rem;

    // Below 768px //
    @media (max-width: 48em) {
        width: 35.81rem;
    }

    //Below 550px //
    @media (max-width: 34.375em) {
        width: 20.43rem;
    }
`

