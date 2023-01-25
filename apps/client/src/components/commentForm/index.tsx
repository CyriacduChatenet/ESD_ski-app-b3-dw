import { FC } from "react";

const CommentForm: FC = () => {
    return (
        <form action="" className="flex flex-col items-center justify-around h-1/2">
        <input type="text" placeholder="Enter your name" className="w-full px-10 rounded-md py-2 border-1 border solid border-gray" name="username" />
        <textarea name="description" id="" cols={30} rows={5} placeholder="Enter comment" className="w-full px-10 rounded-md py-2 border solid border-gray"></textarea>
        <input type="submit" value="Add comment" className="px-20 py-2 bg-primary-default text-white font-bold rounded-md" />
      </form>
    );
};

export default CommentForm;