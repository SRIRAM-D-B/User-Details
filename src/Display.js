import React from 'react'
let Display = ({info}) => {
    return (
        <div>
            {
                <div>
                {
                    (info.length > 0) && info.map((details, index) => (
                        <div key={index}>
                            <img src={details.picture.large} />
                            <div >
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