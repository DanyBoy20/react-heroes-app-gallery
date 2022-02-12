import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
  
  /* const heroes = getHeroesByPublisher(publisher); */

  // si el [publisher] cambia, se ejecuta otra vez getHeroesByPublisher. 
  // no tiene caso cargar nuevamente el mismo publisher si nbo hemos cambiado de heroe de otro publisher
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]); 

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 animate__animated animate__fadeIn">
        {
          heroes.map( hero => (
            <HeroCard 
              key={hero.id}
              {...hero}
              />
          ))
        }
    </div>
  );
};


