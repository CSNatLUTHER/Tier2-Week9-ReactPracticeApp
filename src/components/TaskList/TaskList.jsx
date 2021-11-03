import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

function TaskList(props) {
    return (
      <div id="taskList">
        <h2>TaskList</h2>
        <table id="taskTable">
          <tr>
            <th>id</th>
            <th>task</th>
            <th>task complete</th>
            <th>time complete</th>
          </tr>
            {props.tasks.map( task=> (<TaskItem task={task}/>) ) }
        </table>
      </div>
    );
}

export default TaskList;