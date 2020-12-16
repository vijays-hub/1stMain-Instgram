import "./Post.css";
import PostImage from "./PostImage";

const Post = ({ urls }) => {
  return (
    <div className="row mt-5">
      <div className="row d-flex .flex-sm-wrap .flex-md-wrap justify-content-between">
        {urls.map((url) => {
          return (
            <div className="col-sm-4" key="url">
              <PostImage imageUrl={url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
