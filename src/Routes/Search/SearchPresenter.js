import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
    padding: 20px;
`;
const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`;

const SearchPresenter = ({
    movieResults,
    tvResults,
    loading,
    searchTerm,
    handleSubmit,
    updateTerm,
    error
}) => <Container >
    <Form onSubmit={handleSubmit}>
        <Input placeholder="Search Movies or TV Shows..." value={searchTerm} onChange={updateTerm}></Input>
    </Form>

    {loading ? <Loader /> : (<>
        {movieResults && movieResults.length > 0 && (
            <Section title="Movie Search Result">
                {movieResults.map(movie => (
                        <Poster key={movie.id} id={movie.id} imageUrl={movie.poster_path} title={movie.original_title} rating={movie.vote_average} year={movie.release_date.substring(0, 4)} isMovie={true}></Poster>
                    )
                )}
            </Section>
        )}
        {tvResults && tvResults.length > 0 && (
            <Section title="TV Show Search Result">
                {tvResults.map(show => (
                        <Poster key={show.id} id={show.id} imageUrl={show.poster_path} title={show.name} rating={show.vote_average} year={show.first_air_date.substring(0, 4)}></Poster>
                    )
                )}
            </Section>
        )}
        {error && <Message color="#e74c3c" text={error}></Message> }
        {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && (<Message color="#95a5a6" text="검색결과가 없습니다"></Message>)}
    </>)}

</Container>;

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    error: PropTypes.string,
    searchTerm: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;