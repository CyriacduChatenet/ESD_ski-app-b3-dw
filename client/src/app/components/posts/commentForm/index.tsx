import { FC, useState } from "react";

import { CommentService } from "@/setup/services/comment.service";
import { CommentStars } from "../commentStars";
import usePost from "@/setup/contexts/post.context";

interface IProps {
    post_id: string;
}

export const CommentForm: FC<IProps> = ({ post_id }) => {
    const [stars, setStars] = useState(0);
    const [credentials, setCrdentials] = useState({});
    const { data, setData } = usePost();
    const commentService = new CommentService();

    const handleChange = (e: any) => {
        e?.preventDefault();
        const { name, value } = e.target;
        setCrdentials({...credentials, post:[`${post_id}`], [name]: value, stars});
    };

    const handleSubmit = (e: any) => {
        e?.preventDefault();
        commentService.createAndUpdate(`${import.meta.env.VITE_APP_API_URL}/comments`, `${import.meta.env.VITE_APP_API_URL}/posts/${post_id}`, credentials, setData);
    };

    return (
        <form action=""  onSubmit={handleSubmit} className="h-1/2 flex flex-col justify-around mt-8">
            <CommentStars stars={stars} setStars={setStars}/>
             <input type="text" name="username" className="w-4/5 border border-solid border-gray-400 px-4 py-1.5 rounded-md mt-4" placeholder="username" onChange={handleChange} />
             <textarea name="description" className="w-4/5  h-40 border border-solid border-gray-400 px-4 py-1.5 rounded-md" placeholder="description" onChange={handleChange}></textarea>
             <input type="submit" className="w-4/5 px-8 py-2 rounded-lg bg-indigo-700 text-white font-bold mt-4" value="Add comment" />
        </form>
    );
};