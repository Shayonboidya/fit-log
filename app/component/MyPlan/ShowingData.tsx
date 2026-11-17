import { IWork } from '@/app/Type';
import React from 'react';

const ShowingData = ({ works }: { works: IWork[] }) => {
    return (
        <div className='text-white'>
            <div>{works.length}</div>
        </div>
    );
};

export default ShowingData;