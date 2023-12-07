import React from 'react';
export default function Card({card}) {
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-o" style={{ width: "25rem", height: "30rem" }}>
                <img src={card.jpg} className="img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">
                        {card.desc}
                    </p>
                    <a href="https://www.google.com" className="card-link">
                        Read More »
                    </a><br /><br />
                    <span style={{ fontSize: '.9rem' }}>18 November 2023 | "No Comments"</span>
                </div>
            </div>
        </div>

    )
}
