
import React from "react";

const SpecialOffer = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-primary text-center my-5">
                Special offer comes in:
            </h1>
            <div class="grid grid-flow-col gap-5 text-center auto-cols-max flex justify-center items-center">
                <div class="flex flex-col">
                    <span class="countdown font-mono text-5xl">
                        <span style={{ value: 15 }}></span>
                    </span>
                    days
                </div>
                <div class="flex flex-col">
                    <span class="countdown font-mono text-5xl">
                        <span style={{ value: 10 }}></span>
                    </span>
                    hours
                </div>
                <div class="flex flex-col">
                    <span class="countdown font-mono text-5xl">
                        <span style={{ value: 24 }}></span>
                    </span>
                    min
                </div>
                <div class="flex flex-col">
                    <span class="countdown font-mono text-5xl">
                        <span style={{ value: 15 }}></span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;
