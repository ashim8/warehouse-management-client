import React from 'react';

import worker1 from '../../../images/worker/worker1.jpg';
import worker2 from '../../../images/worker/worker2.jpg'
import worker3 from '../../../images/worker/worker3.jpg';
import Worker from '../Worker/Worker';

const workers = [
    {id: 1, name: 'Miller', img: worker1},
    {id: 2, name: 'Tim', img: worker2},
    {id: 3, name: 'Fabien', img: worker3},
    
]

const Workers = () => {
    return (
        <div  className='container'>
            <h2 className='text-primary text-center mt-5'>Know Our Experts</h2>
            <div className="row">
                {
                    workers.map(worker => <Worker
                        key={worker.id}
                        worker= {worker}
                    ></Worker>)
                }
            </div>
        </div>
    );
};

export default Workers;