import React, { useEffect, useState } from 'react';

{/* <CountUpAnimation duration={1000}>500</CountUpAnimation> */}

const easeOutQuad = t => t * ( 2 - t );
const frameDuration = 1000 / 60;
export default function CountUpAnimation( { children, duration = 2000 } ){
	const countTo = parseInt( children, 10 );
	const [ count, setCount ] = useState( 0 );
	useEffect( () => {
		let frame = 0;
		const totalFrames = Math.round( duration / frameDuration );
		const counter = setInterval( () => {
			frame++;
			const progress = easeOutQuad( frame / totalFrames );
			setCount( countTo * progress );

			if ( frame === totalFrames ) {
				clearInterval( counter );
			}
		}, frameDuration );
	}, [children] );

	return Math.floor( count );
};