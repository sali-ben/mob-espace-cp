import {Stepper} from 'stepper-react';

const steps = [
  {topLabel: 'Step 1', bottomLabel: 'Start', content: 'This is the first step.'},
  {topLabel: 'Step 2', bottomLabel: 'Process', content: 'This is the second step.'},
  {topLabel: 'Step 3', bottomLabel: 'Finish', content: 'This is the final step.'},
];

const StepperComponent = () => {
  return (
    <div>
      <Stepper steps={steps} />;
  </div>
  );
};

export default StepperComponent;
