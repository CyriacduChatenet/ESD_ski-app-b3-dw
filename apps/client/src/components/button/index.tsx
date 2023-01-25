import { FC } from "react";

interface IProps {
  label: string;
}

const Button: FC<IProps> = ({ label }) => {
  return <button className="px-12 py-2 bg-primary-default text-white rounded-lg font-semibold">{label}</button>;
};

export default Button;
