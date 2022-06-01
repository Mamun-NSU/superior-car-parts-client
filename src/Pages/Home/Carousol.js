import React from "react";


const Carousol = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-primary text-center my-5">
                Our some products
            </h1>
            <div className="carousel carousel-center rounded-box">
                <div className="carousel-item">
                    <img className="h-96" src="https://i.ibb.co/WKtw0fT/seat.jpg" alt="Seat" />
                </div>
                <div className="carousel-item">
                    <img className="h-96" src="https://i.ibb.co/85Q0Svc/steering.jpg" alt="Steering" />
                </div>
                <div className="carousel-item">
                    <img className="h-96" src="https://i.ibb.co/yBPmJJB/engine.jpg" alt="Engine" />
                </div>
                <div className="carousel-item">
                    <img className="h-96" src="https://i.ibb.co/bL0W0xf/gear.jpg" alt="Gear" />
                </div>
                <div className="carousel-item">
                    <img className="h-96" src="https://i.ibb.co/4SqdfVh/battery.jpg" alt="Battery" />
                </div>
                <div className="carousel-item">
                    <img className="h-96" src="https://i.ibb.co/P6HSqfd/tire.jpg" alt="Tire" />
                </div>
            </div>
        </div>
    );
};

export default Carousol;
