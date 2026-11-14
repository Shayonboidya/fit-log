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

            {/* Sort By */}
            <div className="mb-5 flex w-full justify-end">
                <select
                    defaultValue="sort"
                    className="select h-11 min-h-11 w-full max-w-xs rounded-xl border border-slate-700 bg-slate-900 px-4 text-sm font-semibold text-slate-300 shadow-lg outline-none transition-all hover:border-green-400/50 focus:border-green-400 focus:outline-none"
                >
                    <option value="sort" disabled>
                        Sort By
                    </option>
                    <option value="Crimson">Crimson</option>
                    <option value="Amber">Amber</option>
                    <option value="Velvet">Velvet</option>
                </select>
            </div>

            {/* Tabs */}
            {/* <div className="w-full min-w-0"> */}
                <div className="tabs tabs-lift w-full">

                    {/* Today's Plan */}
                    <input
                        type="radio"
                        name="my_tabs_3"
                        className="tab min-w-0 flex-1 whitespace-nowrap px-2 text-xs font-bold text-slate-400 transition-colors checked:text-green-400 sm:flex-none sm:px-7 sm:text-sm"
                        aria-label="Today's Plan"
                        defaultChecked
                    />

                    <div className="tab-content min-w-0 rounded-b-2xl rounded-tr-2xl border border-slate-700 bg-slate-900 p-3 shadow-xl sm:p-5 md:p-6">

                        <TodaysPlanBody />

                    </div>

                    {/* Saved */}
                    <input
                        type="radio"
                        name="my_tabs_3"
                        className="tab min-w-0 flex-1 whitespace-nowrap px-2 text-xs font-bold text-slate-400 transition-colors checked:text-green-400 sm:flex-none sm:px-7 sm:text-sm"
                        aria-label="Saved"
                    />

                    <div className="tab-content min-w-0 rounded-b-2xl rounded-tr-2xl border border-slate-700 bg-slate-900 p-3 shadow-xl sm:p-5 md:p-6">

                        <SavedCardBody />

                    </div>

                {/* </div> */}
            </div>


        </div>

    );
};

export default MyPlanPage;