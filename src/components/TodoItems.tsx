"use client";

import { useState } from "react";

type TodoItemProps = {
  id: string;
  title: string;
  complete?: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};
export function TodoItems({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  const [state, setState] = useState(complete);

  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer hidden"
        defaultChecked={complete}
        onChange={(e) => {
          toggleTodo(id, e.target.checked);
          setState(e.target.checked);
        }}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
      {state && (
        <button
          className="ml-4 border border-slate-300 hover:bg-slate-600"
          onClick={() => {
            deleteTodo(id);
            location.reload();
          }}
        >
          delete
        </button>
      )}
    </li>
  );
}
