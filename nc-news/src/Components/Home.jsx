import FeaturedArticle from "./Featured-Article";
import RandomArticle from "./Random-Article";

export default function Home({article, setArticle}) {
	return (
	<div> <br/>
	<h3>This is our featured article! </h3>
	<FeaturedArticle article={article} setArticle={setArticle}/>
	<RandomArticle />
	</div>
	)
}