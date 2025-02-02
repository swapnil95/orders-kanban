import { create } from 'zustand';
import type { KanbanStore } from './types';
import { tasksInitialState, columnsInitialState } from '../mocks/initialState';

export const useKanbanStore = create<KanbanStore>()((set) => ({
  tasks: tasksInitialState,
  columns: columnsInitialState,
  selectedTaskId: null,
  setSelectedTask: (taskId) => {
    set((state) => ({
      ...state,
      selectedTaskId: taskId,
    }));
  },
  filters: {
    search: '',
  },
  setFilter: (name, value) => {
    set((state) => ({
      ...state,
      filters: { ...state.filters, [name]: value },
    }));
  },
}));
