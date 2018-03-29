import React from 'react';
import styled from 'styled-components';
import Slider from 'material-ui/Slider';

const TimeLabels = styled.table`
  width: 100%;
  margin-top: -35px;
  margin-bottom: 30px;
  font-size: 0.7em;
  border: 0px;
  padding: 0px;
`;

const SliderComponent = () => (
  <Slider style={{width: 200}} axis="x" min={0} max={0.2} step={0.1} />
);

const TimeSlider = (props) => (
  <div>
    <SliderComponent />
    <TimeLabels>
      <tbody>
        <tr>
          <td>1987-1996</td>
          <td>1997-2006</td>
          <td>2007-2016</td>
        </tr>
      </tbody>
    </TimeLabels>
  </div>
);

export default TimeSlider;