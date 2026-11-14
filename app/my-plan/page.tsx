import React from 'react';
import TodaysPlanBody from '../component/MyPlan/TodaysPlanCardBody';
import SavedCardBody from '../component/MyPlan/SavedCardBody';

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
            {/* it will be left side */}
            <select defaultValue="Pick a color" className="select">
                <option disabled={true}>Sort By</option>
                <option>Crimson</option>
                <option>Amber</option>
                <option>Velvet</option>
            </select>


            <div>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift">
                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Today&apos;s Plan" defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6">

                        <TodaysPlanBody />

                    </div>

                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Saved" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">

                        <SavedCardBody></SavedCardBody>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default MyPlanPage;