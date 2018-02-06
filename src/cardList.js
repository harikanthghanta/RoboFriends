import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	const list = robots.map((index) => {
		return <Card key={index.id}id={index.id} name={index.name} email={index.email}/>;
	});
			

	return <div>{list} </div>;

}

export default CardList; 