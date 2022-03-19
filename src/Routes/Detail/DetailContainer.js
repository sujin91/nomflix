import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi } from "../../api";

export default class extends React.Component {
    constructor (props) {
        super(props)
        const { location: { pathname } } = props;

        this.state = {
            result: null,
            error: null,
            loading: false,
            isMovie: pathname.includes('/movie/')
        };
    }
    
    async componentDidMount() {
        const { 
            match: {params : {id}},
            history: {push}
        } = this.props;

        const { isMovie } = this.state;
        const parsedId = parseInt(id);

        if(isNaN(parsedId)) {
            return push('/')
        }

        let result = null;

        try {
            if(isMovie) {
                ({data: result} = await moviesApi.movieDetail(parsedId));
            } else {
                ({data: result} = await moviesApi.showDetail(parsedId));
            }
            console.log(id + ": " + result.original_title)
            console.log(result)
        } catch {
            this.setState({error: "Can't find result"})
        } finally {
            this.setState({loading: false, result})
        }
        
    }

    render() {
        const { result, error, loading } = this.state;
        return <DetailPresenter result={result} error={error} loading={loading} />
    }
}