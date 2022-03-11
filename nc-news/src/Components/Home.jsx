import FeaturedArticle from "./Articles/Featured-Article";
import RandomArticle from "./Articles/Random-Article";

export default function Home({article, setArticle}) {
	return (
	<div> <br/>
	<h3>This is our featured article! </h3>
	<FeaturedArticle article={article} setArticle={setArticle}/>
	<RandomArticle />
	</div>
	)
}