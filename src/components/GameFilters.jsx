import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import PCImage from '../images/pc-image.svg';
import XboxImage from '../images/xbox.svg';
import PSImage from '../images/PlayStation.svg';
import Switch from '../images/nintendo-switch.svg';
import { motion } from 'framer-motion';

const GameFilters = () => {
	const games = useSelector((state) => state.games);

	const renderImage = (item) => {
		console.log(item);
		switch (item.platform.id) {
			case 1:
				return XboxImage;
			case 187:
				return PSImage;
			case 186:
				return XboxImage;
			case 7:
				return Switch;
			case 4:
				return PCImage;

			default:
				return 'New Platform';
		}
	};

	return (
		<div className='row'>
			{games.popular ? (
				games.popular.map((game) => (
					<motion.div
						className='col-12 col-md-4 mb-5'
						whileHover={{ scale: 1.1 }}>
						<Card style={{ width: '20rem', border: 'none !important' }}>
							<Card.Img
								variant='top'
								src={game.background_image}
								className='game-card-image'
							/>
							<Card.Body style={{ background: '#202020' }}>
								{game.platforms.map((platform) => (
									<img src={renderImage(platform)} alt='platform' width='40' />
								))}
								<Card.Title className='text-white'>{game.name}</Card.Title>
							</Card.Body>
						</Card>
					</motion.div>
				))
			) : (
				<p>loading</p>
			)}
		</div>
	);
};

export default GameFilters;
