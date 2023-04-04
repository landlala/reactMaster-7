import {atom, selector} from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string] : string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": [],
    Doing: [],
    Done: [],
  }
});