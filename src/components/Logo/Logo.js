import React from 'react';
import Tilt from 'react-tilt';
import jakub from './jakub.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0 center'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 180, width: 180 }} >
			 	<div className="Tilt-inner">
			 		<img style={{paddingTop: '25px'}} alt='logo' src={jakub} />
			 	</div>
			</Tilt>
		</div>
	);
}

export default Logo;