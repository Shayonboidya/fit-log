"use client"
import { WorksContext } from '@/Context/WorksProvider';
import { useContext } from 'react';
import { IWork } from '../Type';

export const NavLinksButton = () => {
    const { todaysPlans, saved } = useContext(WorksContext) as {
        todaysPlans: IWork[];
        saved: IWork[];
    };

    return ([
        { name: `Plan(${todaysPlans.length})`, link: "/" },
        { name: `Saved(${saved.length})`, link: "/" }
    ]);
};

