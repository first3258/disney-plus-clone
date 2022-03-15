import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4 >Recommended for You</h4>
            <Content>
                <Wrap>
                    <img src='http://comicsagogo.files.wordpress.com/2011/11/tintin-movie-poster-horizontal.jpg' />
                </Wrap>

                <Wrap>
                    <img src='http://comicsagogo.files.wordpress.com/2011/11/tintin-movie-poster-horizontal.jpg' />
                </Wrap>

                <Wrap>
                    <img src='http://comicsagogo.files.wordpress.com/2011/11/tintin-movie-poster-horizontal.jpg' />
                </Wrap>

                <Wrap>
                    <img src='http://comicsagogo.files.wordpress.com/2011/11/tintin-movie-poster-horizontal.jpg' />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
้   
    h4 {
        font-size:8vw;
    }

`
const Content = styled.div`
    display: grid;
    grid-gap : 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: 300ms;
    cursor: pointer;

    img {
        width: 100%;    
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border: 3px solid rgba(249, 249, 249, 0.8);
    }
`