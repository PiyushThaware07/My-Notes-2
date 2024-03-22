import React, { Component } from 'react'
import Item from './Item'
// Json
// import jsonData from './sampleData.json';


export class Items extends Component {
    // articles = jsonData["articles"];
    constructor() {
        super();
        console.log("Constructor is running...");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }


    // componentDidMount() ---> this will run after the render finish
    async componentDidMount() {
        console.log("componentDidMount is running...");
        let url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=2c3171958b52495588f9fefb8f547135";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles
        })
    }

    // Pagination
    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7”&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }
    handleNextClick = async () => {
        console.log("Next");
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }

    render() {
        return (
            <div>
                <div className="container-fluid p-5">
                    <h2 className='text-uppercase text-center my-3'><b>Top Headlines</b></h2>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4 my-3" key={element.url}>
                                <Item title={element.title.slice(0, 80)} desc={element.description && element.description.length > 0 ? element.description.slice(0, 100) : "No Description Available"}
                                    urlToImage={element.urlToImage} url={element.url} />
                            </div>
                        })}

                    </div>
                </div>
                <div className="container d-flex justify-content-between my-5">
                    <button disabled={this.state.page <= 1} className='btn btn-sm btn-primary' onClick={this.handlePrevClick}>Previous</button>
                    <button className='btn btn-sm btn-primary ms-auto' onClick={this.handleNextClick}>Next</button>
                </div>
            </div>
        )
    }
}

export default Items
