import { FC } from "react";

import { Comment } from "@/setup/types/comment.type";
import { CommentCard } from "@/app/components/posts/commentCard";

interface IProps {
    comments: Comment[];
};

export const CommentList: FC<IProps> = ({ comments }) => {
    return(
        <div className="mt-4 overflow-y-scroll">
        {comments.map((comment: Comment) => <CommentCard key={comment._id} username={comment.username} description={comment.description} stars={comment.stars} />)}
        </div>
    );
};