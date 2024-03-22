import React, { Component } from 'react'

export class Item extends Component {
    render() {
        let { title, desc, urlToImage, url } = this.props;
        return (
            <div>
                <div className="card" style={{ width: "auto" }}>
                    <img src={!urlToImage ? "https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7879.jpg?w=740&t=st=1687259083~exp=1687259683~hmac=da5f31523c66e9728eaa652d75a5821e8214c8381f08cda5c92f8e5997285086" : urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}...</p>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-warning text-light rounded-0">Read Article</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item
