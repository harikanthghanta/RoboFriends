import React from 'react';


const Card = ({id,name,email}) => {

	return (
		<div className='bg-light-yellow dib br3 pa3 ma2 shadow-3 grow '>
			<img alt='robot' src={`https://robohash.org/${id}`}/>
			 <div>
			 	<h1>{name}</h1>
				<p> {email}</p>
			</div>
		</div>
		
			

		);
}

export default Card;