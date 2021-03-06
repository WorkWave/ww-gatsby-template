import React from 'react';

export const WaveDownSVG = ({ height, width, fill }) => {
	return (
		<svg
			width={width}
			// height={height}
			viewBox='0 0 2160 263'
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'>
			<path
				id='Wave'
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M2160 0H0V262.5C360 182.5 720 142.5 1080 142.5C1440 142.5 1800 182.5 2160 262.5V0Z'
				fill={fill}
			/>
		</svg>
	);
};
