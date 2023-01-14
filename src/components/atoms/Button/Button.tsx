import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: IProps) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
