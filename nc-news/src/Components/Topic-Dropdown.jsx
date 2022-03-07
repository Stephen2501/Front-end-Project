import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { fetchTopics } from '../utils/topicApi';


export default function TopicDropdown({ setTopic }) {
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		fetchTopics().then((topicsFromApi) => {
			setTopics(topicsFromApi);
		});
	}, []);

	return (
		<Dropdown>
			<Dropdown.Toggle
				variant='success'
				id='dropdown-category-button'
				title='Topics'>
				Topics
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{topics.map((topic) => (
					<Dropdown.Item
						onClick={() => {
							setTopic(topic.slug);
						}}
						item={topic}
						key={topic.slug}>
						{topic.slug}
					</Dropdown.Item>
				))}
				<Dropdown.Item
					onClick={() => {
						setTopic('');
					}}>
					Reset
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}