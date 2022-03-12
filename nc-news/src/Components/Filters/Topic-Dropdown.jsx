import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { fetchTopics } from "../../utils/topicApi";

export default function TopicDropdown({setArticles}) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <Dropdown>
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
            item={topic}
            key={topic.slug}
            
          >
            <Link
              to={`/articles/${topic.slug}`}

              setArticles={setArticles}

              topic={`${topic.slug}`}
              >
              {topic.slug}
            </Link>
          </Dropdown.Item>
        ))}
        <Dropdown.Item>
          <Link to="/articles">Reset</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
