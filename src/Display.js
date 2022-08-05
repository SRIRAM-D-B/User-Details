import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

let Display = ({info}) => {
    return (
        <div>
            {
                <div className="card-container justify-content-around d-flex flex-wrap ">
                {
                    (info.length > 0) && info.map((details, index) => (
                        <div className="d-flex gap-3 card" key={index}>
                            <img src={details.picture.large} className="m-2 border rounded-circle" />
                            <div className="d-flex flex-column p-5" >
                                <span>{details.name.title}{" "}{details.name.first}{" "}{details.name.last}</span>
                                <span>{details.email}</span>
                                <span>{details.location.country}</span>
                                <span>{details.amount.income}</span>
                            </div>
                        </div>
                    ))
                }
                {
                    (info.length === 0) && <span>No data</span>
                }
                </div>
            }
        </div>
    )
}

export default Display