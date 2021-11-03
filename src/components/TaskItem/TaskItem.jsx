import React from 'react';


function TaskItem(props) {
    return (
      <tr>
          <td>{props.task.id}</td>
          <td>{props.task.task}</td>
          <td>{JSON.stringify(props.task.task_complete)}</td>
          <td>{props.task.update_time}</td>
      </tr>
    );
}

export default TaskItem;