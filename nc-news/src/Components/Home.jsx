import FeaturedArticle from "./Featured-Article";

export default function Home({article, setArticle}) {
	return (
	<div>
	<h2>THIS IS A HOME PAGE!</h2>
	<p> This is our featured article </p>
	<FeaturedArticle article={article} setArticle={setArticle}/>
	</div>
	)
}