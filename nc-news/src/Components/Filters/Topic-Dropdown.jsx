import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { fetchTopics } from "../../utils/topicApi";

export default function TopicDropdown() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <Dropdown class="dropdown">
      <Dropdown.Toggle
        variant="success"
        id="dropdown-category-button"
        title="Topics"
      >
        Topics
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {topics.map((topic) => (
          <Dropdown.Item
          as={Link}
          to={`/articles/${topic.slug}`}
          >{topic.slug}
          </Dropdown.Item>
        ))}
        <Dropdown.Item
          as={Link} 
          to="/articles/">Reset
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
