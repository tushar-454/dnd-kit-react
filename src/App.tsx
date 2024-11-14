import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { useState } from 'react';
import Column from './components/Column';
import Container from './components/shared/Container';
import { COLUMNS, INITIAL_TASKS } from './db';
import { Task } from './types';

function App() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    if (!over) return;
    const taskId = active.id as string;
    const newStatus = over.id as Task['status'];
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <main className='bg-gray-100 h-screen'>
      <h1 className='h1 text-center'>DND Kit Todo App</h1>
      <Container>
        {/* wrapper  */}
        <DndContext onDragEnd={handleDragEnd}>
          <div className='flex gap-8 mt-10'>
            {COLUMNS.map((column) => {
              const tasksInColumn = tasks.filter(
                (task) => task.status === column.id
              );
              return (
                <Column
                  key={column.id}
                  column={column}
                  tasks={tasksInColumn}
                />
              );
            })}
          </div>
        </DndContext>
      </Container>
    </main>
  );
}

export default App;
