import React from 'react';


const Card = ({id,name,email}) => {

	return (
		<div className='bg-light-yellow dib br3 pa3 ma2 grow '>
			<img alt='robot' src={`https://robohash.org/${id}`}/>
			 <div>
			 	<h2>{name}</h2>
				<p> {email}</p>
			</div>
		</div>
		
			

		);
}

export default Card;