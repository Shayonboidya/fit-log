"use client"
import React, { useContext } from 'react';
import SaveCard from './SaveCard';
import { IWork } from '@/app/Type';
import { WorksContext } from '@/Context/WorksProvider';

const SavedCardBody = () => {

    const {saved} = useContext(WorksContext) as { saved: IWork[] };

    const works: IWork[] = [...saved];
    // console.log(saved);
    return (
        <div>
            {
                works.map((work: IWork) => <SaveCard
                    key={work.id}
                    work={work}
                />)
            }
        </div>
    );
};

export default SavedCardBody;