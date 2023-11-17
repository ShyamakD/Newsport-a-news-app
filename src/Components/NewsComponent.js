import React, { Component } from 'react'

export class NewsComponent extends Component {
  render() {
    let {title,description,imageUrl,newsurl,author, date} = this.props
    return (
      <div>
        <div className="card" style={{width: "25rem"}}>
            <img src={!imageUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">By {!author?'Unknown':author} {new Date(date).toGMTString()}</small></p>
                <a href={newsurl} target='_blank' className="btn btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsComponent