import React from 'react';
import TaskList from '../TaskList/TaskList';

function Body( props ) {
    return (
      <div>
        <h2>Body</h2>
        <TaskList tasks={props.tasks} />
      </div>
    );
}

export default Body;