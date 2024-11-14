import { useDraggable } from '@dnd-kit/core';
import { Task } from '../types';

const TaskCard = ({ task }: { task: Task }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });
  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className='bg-white p-4 shadow rounded mt-4 border border-transparent hover:border-gray-600'
      style={style}
    >
      <h3 className='h3'>{task.title}</h3>
      <p className='mt-2 text-gray-600'>{task.description}</p>
      <span className='status'>{task.status}</span>
    </div>
  );
};

export default TaskCard;
