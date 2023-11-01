import { Goal as GoalType } from "../App";

type Props = {
  goal: GoalType;
  onDelete: (id: number) => void;
};

export default function Goal({ goal, onDelete }: Props) {
  const { id, title, summary } = goal;

  return (
    <li className="bg-white py-4 px-2 rounded-md border-1 border-main-200 relative">
      <span
        onClick={() => onDelete(id)}
        className="absolute top-4 right-4 text-sm text-main-300 cursor-pointer font-medium"
      >
        Delete
      </span>
      <h3 className="font-medium text-base">{title}</h3>
      <p className="text-main-200">{summary}</p>
    </li>
  );
}
