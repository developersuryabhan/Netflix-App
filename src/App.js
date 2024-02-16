import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';

// console.log(Sdata[0].sname);
// custom Attrtibutes
const App = () => (
    <>
        <h1 className='heading_style'>List of top 8 Netfilx Series in 2024</h1>
        {Sdata.map((val) => {
            return (
                <Card
                    key={val.id}
                    imgscr={val.imgscr}
                    title={val.title}
                    sname={val.sname}
                    links={val.links}
                />
            );
        })}
    </>
);
export default App