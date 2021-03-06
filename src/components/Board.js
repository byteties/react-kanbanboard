import React from 'react';

import Stage from './Stage';

const Board = ({ stagesNames, stagesTasks,onSelect }) => {

  return (
    <div>
      <h1>Kanban board</h1>
      <p></p>
      <div style={{
        display: 'flex',
      }}>
        {stagesTasks.map((tasks, idx) => (
          <Stage
            stageId={idx}
            key={stagesNames[idx]}
            name={stagesNames[idx]}
            tasks={tasks}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
