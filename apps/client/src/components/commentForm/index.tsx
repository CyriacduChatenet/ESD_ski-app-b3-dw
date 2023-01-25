import { FC, useState } from "react";

interface IProps {
  id: string;
}

const CommentForm: FC<IProps> = ({ id }) => {
  const [credentials, setCredentials] = useState({});
  const [comments, setComments] = useState<any>([]);

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setCredentials({ ...credentials, [name]: value, post: [id] })
  }

    return (
        <form action="" className="flex flex-col items-center justify-around h-1/2">
        <input type="text" placeholder="Enter your name" className="w-full px-10 rounded-md py-2 border-1 border solid border-gray" name="username" onChange={handleChange} />
        <textarea name="description" id="" cols={30} rows={5} placeholder="Enter comment" className="w-full px-10 rounded-md py-2 border solid border-gray" onChange={handleChange}></textarea>
        <input type="submit" value="Add comment" className="px-20 py-2 bg-primary-default text-white font-bold rounded-md" />
      </form>
    );
};

export default CommentForm;