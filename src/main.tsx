import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PageHeader } from '@design-system/PageHeader';

import './main.css';
import { AppWrapper } from './AppWrapper';
import { KanbanBoard } from './kanban';

const App = () => {
  return (
    <AppWrapper>
      <PageHeader heading="Order Overview" />
      <KanbanBoard />
    </AppWrapper>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
