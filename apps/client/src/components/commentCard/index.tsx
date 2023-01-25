import { FC } from "react";

interface IProps {
    username: string;
    description: string;
    stars: number;
}

const CommentCard: FC<IProps> = ({ username, description, stars }) => {
  return (
    <article
      className="flex justify-between w-full my-2 py-2 pl-4 bg-white"
    >
      <div className="w-9/12">
        <p>
          <b>{username}</b>
        </p>
        <p>{description}</p>
      </div>
      <div className="w-2/12">
        <p> stars : {stars}</p>
      </div>
    </article>
  );
};

export default CommentCard;
