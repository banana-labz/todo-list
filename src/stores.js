import {writable} from "svelte/store"

export const todoList = writable([
  {id: 1, label: "Wake up", important: false, done: false},
  {id: 2, label: "Eat", important: false, done: false},
  {id: 3, label: "Work", important: false, done: false},
  {id: 4, label: "Sleep", important: false, done: false},
  {id: 5, label: "Repeat", important: false, done: false},
])

export const filter = writable("")