import React from 'react';
import { IWork } from '../Type';
import Image from 'next/image';

const WorkCardLarge = ({work}:{work:IWork}) => {
    return (
        <div className='p-4 m-8 bg-slate-500 rounded-2xl flex'>
           
           <div>
                <Image src={work.image}
                    width={600}
                    height={600}
                    alt={work.name}
                    className='rounded-2xl'
                ></Image>
           </div>

           <div>
                <h2>{work.name}</h2>
                <p>{work.description}</p>
           </div>
        </div>
    );
};

export default WorkCardLarge;