import React from 'react';

const Worker = ({ worker }) => {
    const { name, img } = worker;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"> The way tehy took the lead in a situation when their team needed them was a phenomenal display of our company values. We're so fortunate to have them on our team!</p>
                    <button className="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>

    );
};

export default Worker;