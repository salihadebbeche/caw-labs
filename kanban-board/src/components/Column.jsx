import TaskCard from "./TaskCard";

function Column({ title, tasks, allStatuses, onMoveTask }) {
  return (
    <div className="column">
      <h2>
        {title} <span>({tasks.length})</span>
      </h2>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          allStatuses={allStatuses}
          onMoveTask={onMoveTask}
        />
      ))}
    </div>
  );
}

export default Column;
