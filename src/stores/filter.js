import {writable} from "svelte/store"

export const FilterOptions = [
  "All", "Active", "Done"
]

const filter = writable(FilterOptions[0])

export default filter
