import { useState } from "react";
import {
  type ChangeEvent,
  type FormEvent,
  type Dispatch,
  useEffect,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { categories } from "../data/categories";
import type { Activity } from "../types";
import type {
  ActivityActions,
  ActivityState,
} from "../reducers/activity-reducer";

type FormProps = {
  dispatch: Dispatch<ActivityActions>;
  state: ActivityState;
};
const initialState: Activity = {
  id: uuidv4(),
  category: 1,
  name: '',
  calories: 0,
};

export default function Form({ dispatch, state } : FormProps) {
  const [activity, setActivity] = useState<Activity>(initialState);

  useEffect(() => {
    if (state.activeId) {
      const selectedActivity = state.activities.filter(stateActivity => stateActivity.id === state.activeId
      )[0]
      setActivity(selectedActivity);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.activeId]);

const handleChange = (
  e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
) => {
  const { id, value } = e.target;

  if (id === "calories") {
    const numericValue = value.replace(/\D/g, ""); // elimina todo lo que no sea número
    setActivity({
      ...activity,
      [id]: numericValue === "" ? 0 : Number(numericValue),
    });
  } else if (id === "category") {
    setActivity({ ...activity, [id]: Number(value) });
  } else {
    setActivity({ ...activity, [id]: value });
  }
};

  const isValidActivity = () => {
    const { name, calories } = activity;
    return name.trim() !== "" && calories > 0;
  };
  const handleSumit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: "save-activity", payload: { newActivity: activity } });
    setActivity({
      ...initialState,
      id: uuidv4(),
    });
   
  };
  return (
    <form
      className=" space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={handleSumit}
    >
      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="category" className=" font-bold">
          Category:
        </label>
        <select
          className=" border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value={activity?.category ?? ""}

          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="name" className=" font-bold">
          Activity:
        </label>
        <input
          id="name"
          type="text"
          className=" border border-slate-300 p-2 rounded-lg"
          placeholder=" Salad, Orange Juice, Weightlifting, Cycling"
          value={activity.name}
          onChange={handleChange}
        />
      </div>
      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="calories" className=" font-bold">
          Calories:
        </label>
        <input
          id="calories"
          type="text"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="300 or 500 kcal"
          value={activity.calories === 0 ? "" : activity.calories}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        className=" bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white
       cursor-pointer disabled:opacity-10"
        value={activity.category === 1 ? "Save Food" : "Save Exercises"}
        disabled={!isValidActivity()}
      />
    </form>
  );
}
