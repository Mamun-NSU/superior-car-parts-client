import React from "react";


const Carousol = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-primary text-center my-5">
                Our some products
            </h1>
            <div class="carousel carousel-center rounded-box">
                <div class="carousel-item">
                    <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=8B7BCDC2" alt="Pizza" />
                </div>
                <div class="carousel-item">
                    <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=500B67FB" alt="Pizza" />
                </div>
                <div class="carousel-item">
                    <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=A89D0DE6" alt="Pizza" />
                </div>
                <div class="carousel-item">
                    <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=225E6693" alt="Pizza" />
                </div>
                <div class="carousel-item">
                    <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=9D9539E7" alt="Pizza" />
                </div>
                <div class="carousel-item">
                    <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=BDC01094" alt="Pizza" />
                </div>
                <div class="carousel-item">
                    <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=7F5AE56A" alt="Pizza" />
                </div>
            </div>
        </div>
    );
};

export default Carousol;
