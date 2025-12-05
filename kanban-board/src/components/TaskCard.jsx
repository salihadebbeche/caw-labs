function TaskCard({ task, allStatuses, onMoveTask }) {
  return (
    <div className="task-card">
      <h4>{task.title}</h4>
      {task.description && <p>{task.description}</p>}
      <div className="task-actions">
        {allStatuses
          .filter((s) => s !== task.status)
          .map((status) => (
            <button
              key={status}
              onClick={() => onMoveTask(task.id, status)}
            >
              {status}
            </button>
          ))}
      </div>
    </div>
  );
}

export default TaskCard;
