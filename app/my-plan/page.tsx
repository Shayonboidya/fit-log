"use client"
import React from 'react';

const MyPlanPage = () => {
    return (

        <div className="mx-auto w-full max-w-7xl px-3 py-6 sm:px-5 sm:py-8 lg:px-8">

            {/* Header */}
            <div className="mb-7 flex flex-col gap-3 border-b border-slate-700/70 pb-6 sm:mb-9 sm:pb-7">
                <div>

                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        MY <span className="text-green-400">PLAN</span>
                    </h2>

                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>
            </div>



            {/* children */}

            {/* Tabs and Sorting */}
            <div>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift">
                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Today&apos;s Plan" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">

                        Today&apos;s Plan

                    </div>

                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Saved" defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6">


                        Saved


                    </div>

                </div>
            </div>

        </div>

    );
};

export default MyPlanPage;