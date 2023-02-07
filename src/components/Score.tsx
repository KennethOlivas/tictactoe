import { FC } from "react";

type Props = {
  score: string;
};

const Score: FC<Props> = ({ score }) => (
  <h1 className="text-3xl font-bold text-lightCream">{score}</h1>
);

export default Score;
