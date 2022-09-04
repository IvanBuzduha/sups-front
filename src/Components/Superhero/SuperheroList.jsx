import React from 'react';
import SuperheroItem from "./SuperheroItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const SuperheroList = ({heros, title, remove}) => {
   if(!heros.length){
       return(
           <h1 className="font-bold text-center text-green-500 text-xl my-5">
               Superhero not found</h1>
       )
   } 
   
   
   return (
   <>
        <h1 className="font-bold text-center text-green-500 text-xl my-5 ">{title}</h1>
        <ul className='columns-sm p-1 '>
           <TransitionGroup>
                {heros.map((hero, index )=> 
                    <CSSTransition
                    key={hero.id}
                    timeout={500}
                    classNames="item"
                    >
                    <SuperheroItem remove={remove} number={index+1} hero={hero} key={hero.id}/> 
                </CSSTransition>
            )}</TransitionGroup>
        </ul>
    </>
    );
}

export default SuperheroList;