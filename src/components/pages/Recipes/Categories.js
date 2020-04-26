import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './recipes.scss';
import domain from '../../../domain';
import Category from './Category';
import LoadingSpinner from '../../partials/LoadingSpinner';

const Categories = () => {
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getCategories = async () => {
			// setIsLoading(true);
			const results = await axios.get(`${domain}/categories.php`);
			setCategories(results.data);
			setIsLoading(false);
			console.log(results.data);
		};
		getCategories();
	}, []);

	return (
		<>
			{isLoading ? (
				<div>
					<LoadingSpinner />
				</div>
			) : (
				<div className='container-fluid'>
					{categories.map((category) => (
						<Category category={category} />
					))}
				</div>
			)}
		</>
	);
};

export default Categories;
