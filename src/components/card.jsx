import React from 'react';

const Card = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://images.pexels.com/photos/20456864/pexels-photo-20456864/free-photo-of-a-yellow-taxi-is-parked-on-a-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    website
                    <div className="badge badge-primary">Content Type</div>
                </h2>
                <p>This is a description of the website.</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default Card;
