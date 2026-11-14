"use client"
import { IWork } from '@/app/Type';
import { WorksContext } from '@/Context/WorksProvider';
import React, { useContext } from 'react';
import TodaysPlanCard from './TodaysPlanCard';

const TodaysPlanBody = () => {
    const {todaysPlans} = useContext(WorksContext) as { todaysPlans: IWork[] };

    const works: IWork[] = [...todaysPlans];
    // console.log(todaysPlans);
    return (
        <div>
            {
                works.map((work: IWork) => <TodaysPlanCard
                    key={work.id}
                    work={work}
                />)
            }
        </div>
    );
};

export default TodaysPlanBody;