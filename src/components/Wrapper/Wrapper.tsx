import React from 'react';
import CanvasWrapper from '../CanvasWrapper/CanvasWrapper';
import Layers from '../Layers/Layers';
import Properties from '../Properties/Properties';
import './Wrapper.scss';

const Wrapper: React.FC = () => {
  return (
    <div className="Wrapper">
      <Layers />
      <CanvasWrapper />
      <Properties />
    </div>
  );
};

export default Wrapper;