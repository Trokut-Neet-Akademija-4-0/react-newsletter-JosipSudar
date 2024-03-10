import { Link } from "react-router-dom";
import { articlesList } from "../components/articlesData";

const Blog = () => {
  return (
    <div className="bg-green-500 p-10 space-y-10">
      {articlesList.map((article, index) => {
        return (
          <Link
            key={index}
            className="flex bg-white p-5 rounded-lg gap-5 font-bold"
            to={`/blog/${article.name}`}
          >
            <h1>{article.name}</h1>
            <span>-</span>
            <p>{article.artist}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
