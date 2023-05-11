import React from 'react';
import photo from '../cls.gif';
import '../style.css';
import 'animate.css';
import {add,subs,mult} from '../components/CalcApp';
class  MyApp extends React.Component
{
    render()
    {
    return(
        <>
        <section id="clc-app">
        <div className='myapp'>
        <h1>My first calc app Events</h1>
        <p>Just aplied events in react js</p>
        <img src={photo} alt="myimg" title='hello images' />
        </div>

        <div className='clc-btn'>
            <button type='button' onClick={add}>Additions</button>
            <button type='button' onClick={subs}>Substractions</button>
            <button type='button' onClick={mult}>Multiplications</button>
        </div>
        </section>
        </>
    )
}  
}
export default MyApp;