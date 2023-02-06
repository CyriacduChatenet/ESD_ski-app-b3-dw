import { PostService } from "@/setup/services/posts.service";
import { FC, useEffect, useState } from "react";

const HomePage: FC = () => {
  const [data, setData] = useState([]);
  const postService = new PostService();

  useEffect(() => {
    postService.findAll(`${import.meta.env.VITE_APP_API_URL}/posts`, setData);
  }, []);
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

export default HomePage;
