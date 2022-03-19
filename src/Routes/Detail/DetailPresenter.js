import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "Components/Section"
import Loader from "Components/Loader"

const Container = styled.div`
    position: relative;
    height: 100%;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.bgUrl});
    height: 100%;
    background-size: cover;
    filter: blur(2px);
    opacity: 0.3;
`;

const Content = styled.div`
    display: flex;
    padding: 20px;
    height: 100%;
`;

const PosterArea = styled.div`
    display: inline-block;
`;
const Poster = styled.img`
    vertical-align: top;
    border-radius: 5px;
`;


const DetailPresenter = ({result, loading, error}) => loading ? <Loader /> : 
<Container>
    <Backdrop bgUrl={result ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` : null}></Backdrop>
    <Content>
        <PosterArea>
            <Poster src={result ? `https://image.tmdb.org/t/p/w300${result.poster_path}` : null}></Poster>
        </PosterArea>
        
    </Content>
</Container>


DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;

