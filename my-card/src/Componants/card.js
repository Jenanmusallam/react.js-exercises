import React, { Component } from "react"
import img from '../Images/bakeground.jpg'

function Person(props) {
    return (
        <div className="card-info">
            <div className='bakegroundCard'>
                <img src={img} alt="Image bakeground in star" className="bakeground-Img" />
                <button><i className="far fa-edit"></i></button>
            </div>
            <img key={props.key} src={props.image} alt="jenan-imge" className="user-img" />
            <div className="information-User">
                <h2>{props.name}</h2>
                <h4>{props.specialty}</h4>
                <p>{props.summary}</p>
                <div className="soctal">
                    <a href={props.facebook} target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a href={props.linkedIn} target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href={props.gitHup} target="_blank"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    );
}
export default Person;
