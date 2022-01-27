import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



export class NewsComponent extends Component {

    static defaultProps = {
        pageSize: '6',
        category: 'general'
    }

    static propTypes = {
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitilizeFunc = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // handleClickNext = async () => {
    //     if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    //     } else {
    //         document.documentElement.scrollTop = 0;
    //         let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    //         this.setState({ loading: true })
    //         let data = await fetch(url);
    //         let parsedData = await data.json();
    //         console.log(parsedData);
    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: parsedData.articles,
    //             loading: false
    //         })
    //     }
    // }


    // handleClickPrevious = async () => {
    //     document.documentElement.scrollTop = 0;
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    //     this.setState({ loading: true })
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     })

    // }

    fetchMoreData = async () =>{
        this.setState({page: this.state.page + 1})
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults : 0
        }
        document.title = `${this.capitilizeFunc(this.props.category)} - FreshNews`;
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&category=${this.props.category}&page=1&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    render() {
        return <div>
            <h2 className="my-4 text-center">FreshNews - India Top Headlines</h2>
            <h5 className="text-center">Created by Tohid</h5>
            {this.state.loading && <Spinner />}
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<Spinner/>}
            >
               <div className="container">

                <div className="row d-flex ">
                    {this.state.articles.map((element) => {
                        
                        return <div className="col-md-4 my-3 d-flex justify-content-center" key={element.url}>
                            <NewsItems title={element.title} description={element.description ? element.description.slice(0, 120) : element.title.slice(0, 120)} imageUrl={element.urlToImage ? element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADPzrYm_hQg2XMNc_9KTr9Axmn35s0DbsIQ&usqp=CAU"} newsUrl={element.url}
                                author={element.author} date={element.publishedAt} name={element.source.name} />
                        </div>
                    })}

                    </div>

                </div>
            </InfiniteScroll>


            {/* <div id='n-p' className="container d-flex justify-content-between">

                    <button type="button" disabled={this.state.page <= 1} onClick={this.handleClickPrevious} className="btn btn-primary">&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleClickNext} className="btn btn-primary">Next &rarr; </button>

                </div> */}

        </div>

    }
}

export default NewsComponent;
