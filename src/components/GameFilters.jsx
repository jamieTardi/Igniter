import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';

const GameFilters = () => {
	const games = useSelector((state) => state.games);
	console.log(games.popular);
	return (
		<div className='row'>
			{games.popular ? (
				games.popular.map((game) => (
					<>
						<Card className='col-12 col-md-3'>
							<Card.Img variant='top' src='holder.js/100px180' />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
								<Button variant='primary'>Go somewhere</Button>
							</Card.Body>
						</Card>
					</>
				))
			) : (
				<p>loading</p>
			)}
		</div>
	);
};

export default GameFilters;
