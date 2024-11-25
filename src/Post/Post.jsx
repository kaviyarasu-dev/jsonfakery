import React from 'react'
import bootstrap from 'bootstrap'
import './Post.module.css'

export const Post = () => {
  return (
    <div className="card w-50">
        <img src="https://placehold.co/400X600/png" className="card-img-top" alt="Place Holder" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}
