import { useParams } from "react-router-dom";
import { articlesList } from "../components/articlesData";

const SingleBlog = () => {
  const { name } = useParams();
  const article = articlesList.find((item) => item.name === name);

  if (!article) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="bg-green-500 p-10 text-white space-y-10">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">{article.name}</h1>
        <p className="text-xl">{article.artist}</p>
      </div>
      <p>{article.description}</p>
      <img
        src={article.url}
        alt={article.alt}
        className="w-[500px] rounded-lg mx-auto h-[600px] object-cover"
      />
    </div>
  );
};

export default SingleBlog;
