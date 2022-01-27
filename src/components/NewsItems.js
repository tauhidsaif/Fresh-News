import React, { Component } from 'react';

export class NewsItems extends Component {




    render() {
        let { title, description, imageUrl, newsUrl, author, date, name } = this.props;
        return <div>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={imageUrl} alt="Card image cap" />
                <div className="card-body">
                    <button type="button"  className=" myBadge btn my-3 btn-light border border-primary">
                        {name}
                    </button>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By <b>{author ? author : 'Unknown'}</b> on <b>{new Date(date).toUTCString()}</b></small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>;
    }
}

export default NewsItems;
