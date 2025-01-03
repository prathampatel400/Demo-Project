import React from 'react';
import Button from '../Button/Button';

export default{
    title:'Button',
    component:Button
}

export const Primary = ()=><Button variant='Primary'>Primary</Button>
export const Secondary =()=><Button variant='secondary'>Secondary</Button>
export const Success =()=><Button variant='success'>Success</Button>
export const Danger  =()=><Button variant='danger'>Danger</Button>

