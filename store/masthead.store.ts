import create, { SetState } from "zustand";

export const useBasketStore = create<{
  count: number;
  inc: () => void;
  dec: () => void;
}>((set: SetState<{ count: number }>) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));
