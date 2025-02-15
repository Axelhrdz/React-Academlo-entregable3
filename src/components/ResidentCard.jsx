import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import axios from 'axios';
import "./styles/residentCard.css";

const ResidentCard = ({url}) => {

    const [resident, getResident] = useFetch();

    useEffect(() => {
        getResident(url)
    }, [])
    
    console.log(resident);



  return (
    <article className='resident'>
      <figure className='resident__img'>
            <img src={resident?.image} alt="resident photo" />
            <figcaption className='resident__status'>
                <div className={`resident__circle ${resident?.status}`}></div>
                <span>{resident?.status}</span>
            </figcaption>
      </figure>
      <h3 className='resident__name'>{resident?.name}</h3>
      <ul className='resident__list'>
        <li className='resident__item'><span>Specie </span><span>{resident?.species}</span></li>
        <li className='resident__item'><span>Origin </span><span>{resident?.origin.name}</span></li>
        <li className='resident__item'><span>Episodes where appear </span>{resident?.episode.length}<span></span></li>
      </ul>
      {/* <hr className='resident__line' /> */}
    </article>
  )
}

export default ResidentCard;
