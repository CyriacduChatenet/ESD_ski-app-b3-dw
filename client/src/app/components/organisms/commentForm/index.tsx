import { ChangeEvent, FC, useState } from "react";

import { CommentService } from "@/setup/services/comment.service";
import { CommentStars } from "../../molecules/commentStars";
import usePost from "@/setup/contexts/post.context";
import { Button } from "@/app/components/atoms/button";
import { FormInput } from "../../atoms/input";
import { useParams } from "react-router-dom";
import { PostService } from "@/setup/services/post.service";

interface IProps {
    post_id: string;
}

export const CommentForm: FC<IProps> = ({ post_id }) => {
    const params = useParams();
    const [stars, setStars] = useState(0);
    const [credentials, setCrdentials] = useState({
        post:[`${post_id}`]
    });
    const { data, setData } = usePost();

    const postService = new PostService();
    const commentService = new CommentService();

    const handleChange = (e?: ChangeEvent<any>) => {
        e?.preventDefault();
        const { name, value } = e?.target;
        setCrdentials({...credentials, [name]: value, stars});
    };

    const handleSubmit = async (e: any) => {
        e?.preventDefault();
       const comment = await commentService.create(`${import.meta.env.VITE_APP_API_URL}/comments`, credentials);
       const post = await postService.updateOne(`${import.meta.env.VITE_APP_API_URL}/posts/${post_id}`, { comments: [comment._id]})
    };

    return (
        <form action=""  onSubmit={handleSubmit} className="h-1/2 flex flex-col justify-around mt-8">
            <CommentStars stars={stars} setStars={setStars}/>
            <FormInput type="text" name={"username"} placeholder={"username"} w="w-4/5" onChange={handleChange}/>
             <textarea name="description" className="w-4/5  h-40 border border-solid border-gray-400 px-4 py-1.5 rounded-md" placeholder="description" onChange={handleChange}></textarea>
             <Button label="Add comment" px="px-8" py="py-2" background_color="bg-indigo-700" w="w-4/5"/>
        </form>
    );
};