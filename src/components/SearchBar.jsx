import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const SearchBar = () => {
	const [searchInput, setSearchInput] = useState('');
	const dispatch = useDispatch();
	const searchItems = useSelector((state) => state.searchReducer);

	const handleSearchInput = (e) => {
		setSearchInput(e.target.value);
	};

	const handleSearch = () => {
		dispatch({
			type: 'ADD_SEARCH',
			payload: searchInput,
		});
	};
	return (
		<div className='row'>
			<div className='col-3'>
				<h2>
					C<span style={{ fontSize: '0.8rem' }}>omputer</span> G
					<span style={{ fontSize: '0.8rem' }}>ame</span> C
					<span style={{ fontSize: '0.8rem' }}>omparison</span>
				</h2>
			</div>
			<div className='col-6'>
				<InputGroup className='mb-3'>
					<FormControl
						placeholder='Search for games'
						aria-label="Recipient's username"
						aria-describedby='game-search'
						onChange={handleSearchInput}
					/>
					<Button
						variant='outline-secondary'
						id='game-search'
						onClick={handleSearch}>
						Button
					</Button>
				</InputGroup>
			</div>
		</div>
	);
};

export default SearchBar;
