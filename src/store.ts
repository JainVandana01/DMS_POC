import { atom } from "jotai";
import { atomWithStorage, createJSONStorage } from 'jotai/utils'
// const storage = createJSONStorage(() => AsyncStorage)
// const userId = atomWithStorage('user-id-key', null, storage)

export const loginData = atom({
  username: '',
  password: '',
});

// export const useLocalStoreAtom = ()

export const atomWithLocalStorage = (key: string, initialValue: any) => {
  const getInitialValue = () => {
    const item = localStorage.getItem(key)
    if (item !== null) {
      return JSON.parse(item)
    }
    return initialValue
  }
  const baseAtom = atom(getInitialValue())
  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === 'function' ? update(get(baseAtom)) : update
      set(baseAtom, nextValue)
      localStorage.setItem(key, JSON.stringify(nextValue))
    }
  )
  return derivedAtom
}
