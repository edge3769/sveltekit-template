import { writable } from 'svelte/store'

function simpleStore() {
    const { subscribe, set } = writable([])

    return {
        subscribe,
        set: (value) => set(value)
    }
}

export const sort = simpleStore()
export const tags = simpleStore()
export const itype = simpleStore()
export const stateId = simpleStore()
export const nationId = simpleStore()
export const location = simpleStore()
export const userQuery = simpleStore()
export const itemQuery = simpleStore()
export const globalQuery = simpleStore()