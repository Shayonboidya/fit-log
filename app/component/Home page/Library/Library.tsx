import React from 'react';

const Library = () => {
    return (

        <div className=" w-full px-4 sm:px-6 lg:px-8">

            <div className="mb-7 gap-2 border-b border-slate-700/70 pb-5 sm:mb-9 sm:gap-3">

                {/* Heading */}
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    THE <span className="text-green-400">LIBRARY</span>
                </h2>

                {/* Description */}
                <p className="max-w-lg text-sm  text-slate-400 sm:text-base">
                    Twelve lifts covering every major muscle group.
                </p>

            </div>

        </div>

    );
};

export default Library;