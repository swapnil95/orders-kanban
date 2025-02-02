type OrderDetails = {
  part: string;
  partNumber: string;
  releaseStatus: string;
  drawingNumber: string;
  flightArticle: string;
  estimatedShippingDate: string;
};

type ProcessDetails = {
  material: string;
  materialStockSize: string;
  surfaceTreatment: string;
  machine: string;
};

export type TaskStatus = 'todo' | 'in-progress' | 'review' | 'done';
export type TaskPriority = 'critical' | 'standard' | 'high';

export type Task = {
  id: string;
  title: string;
  dueDate: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  processDetails: ProcessDetails;
  orderDetails: OrderDetails;
};

export type ColumnId = TaskStatus;

export type Column = {
  id: ColumnId;
  title: string;
  taskIds: string[];
};

export type Filters = {
  search: string;
};

export type KanbanStore = {
  tasks: Record<string, Task>;
  selectedTaskId: null | string;
  setSelectedTask: (taskId: string | null) => void;
  columns: Record<string, Column>;
  filters: Filters;
  setFilter: (name: keyof KanbanStore['filters'], value: string) => void;
};
