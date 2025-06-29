import React from 'react';
import './routes.css';

const Routes = ({ dataPoint }) => {
  return (
    <div className='pathAnswer'>

      <div className='resultRow'>
        <div className='resultLabel'>Source:&nbsp;</div>
        <div className='resultValue'>{dataPoint.from}</div>
      </div>

      <div className='resultRow'>
        <div className='resultLabel'>Destination:&nbsp;</div>
        <div className='resultValue'>{dataPoint.to}</div>
      </div>

      <div className='resultRow'>
        <div className='resultLabel'>Path:&nbsp;</div>
        <div className='resultValue'>{dataPoint.path.join(' → ')}</div>
      </div>

      <div className='resultRow'>
        <div className='resultLabel'>Distance:&nbsp;</div>
        <div className='resultValue'>{dataPoint.totalDis} m</div>
      </div>

    </div>
  );
};

export default Routes;
