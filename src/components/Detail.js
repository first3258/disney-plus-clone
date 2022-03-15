import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src='https://i.pinimg.com/564x/ae/f8/b3/aef8b312c53d1e09f204d6a741b66ac8.jpg' />
            </Background>
        <Controls>

        </Controls>
            <PlayButton>
                <img src="/images/play-icon-black.png"></img>
                <span>PLAY</span>
            </PlayButton>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Controls = styled.div`
`

const PlayButton = styled.button`
    
`
