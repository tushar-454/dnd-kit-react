import { useDroppable } from '@dnd-kit/core';
import { Column as ColumnTypes, Task } from '../types';
import TaskCard from './TaskCard';

const Column = ({ column, tasks }: { column: ColumnTypes; tasks: Task[] }) => {
  const { setNodeRef } = useDroppable({ id: column.id });
  return (
    <div
      ref={setNodeRef}
      key={column.id}
      className='w-1/3 border border-gray-200 bg-white rounded p-4 shadow-lg'
    >
      <h2 className='h2'>{column.title}</h2>
      {/* tasks */}
      <div className='mt-5 grid space-y-4'>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
