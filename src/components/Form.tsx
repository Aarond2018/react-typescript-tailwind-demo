import { type FormEvent, useRef } from "react";

type Props = {
  addGoals: (title: string, summary: string) => void;
};

export default function Form({ addGoals }: Props) {
  const titleRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const title = titleRef.current!.value;
    const summary = summaryRef.current!.value;

    event.currentTarget.reset();

    addGoals(title, summary);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="w-full flex flex-col my-1">
        <label htmlFor="goal" className="text-md my-2 font-medium">
          Your Goal
        </label>
        <input
          type="text"
          id="goal"
          name="goal"
          ref={titleRef}
          className="w-full p-2 rounded-sm focus:outline-none"
        />
      </div>
      <div className="w-full flex flex-col my-1">
        <label htmlFor="summary" className="text-md my-2 font-medium">
          Short Summary
        </label>
        <input
          type="text"
          id="summary"
          name="summary"
          ref={summaryRef}
          className="w-full p-2 rounded-sm focus:outline-none"
        />
      </div>
      <button className="w-full p-2 bg-main-300 text-white font-medium my-4 uppercase">
        Add Goal
      </button>
    </form>
  );
}
