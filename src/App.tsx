import { useState } from "react";

import Form from "./components/Form";
import Goal from "./components/Goal";

import goalsImg from "./assets/goalsImg.jpg";

export type Goal = {
  id: number;
  title: string;
  summary: string;
};

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  const handleAddGoals = (title: string, summary: string): void => {
    const newGoal = {
      id: Math.random(),
      title,
      summary,
    };

    setGoals((prev) => [...prev, newGoal]);
  };

  const onDelete = (id:number): void => {
    setGoals(prev => prev.filter(val => val.id !== id))
  }

  return (
    <main className="w-screen py-10 px-4">
      <section className="max-w-3xl bg-main-100 mx-auto p-4 flex flex-col items-center rounded-md">
        <div className="w-16 h-16">
          <img
            src={goalsImg}
            alt="header-img"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="my-4 text-2xl font-bold">Course Goals</h1>
        <Form addGoals={handleAddGoals} />
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
          {goals.map(goalObj => (
            <Goal key={goalObj.id} goal={goalObj} onDelete={onDelete} />
          ))}
        </ul>
      </section>
    </main>
  );
}
