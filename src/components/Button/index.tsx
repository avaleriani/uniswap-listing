import Image from "components/Image";

type ButtonProps = {
  title: string;
  onClick: () => void;
};

const Button = ({ title, onClick }: ButtonProps) => (
  <a onClick={onClick}>
    <button className="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
      <Image className="fill-current text-green-600" src={"/assets/star.svg"} alt="star icon" width={16} height={16} />
      {title}
    </button>
  </a>
);

export default Button;
