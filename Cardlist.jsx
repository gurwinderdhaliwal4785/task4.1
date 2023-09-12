import React from 'react';
import Card from './ReactangularCard'

import './RectangularCard.css'
import ArticleList from './ArticleList';

function cardComponent (staff, i){
    return  <Card
    key = {staff.key}
    avatar = {staff.avatar}
    name = {staff.name}
    position = {staff.position}

    />
}


const CardList = () => {

    return <div className="row">  
    {ArticleList.map( (staff ) => 
    <Card
    key = {staff.key}
    avatar = {staff.avatar}
    name = {staff.name}
    position = {staff.position}
    rating = {staff.rating}
    />
)}

    </div>

}

export default CardList