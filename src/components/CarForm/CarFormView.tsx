import { useState } from "react";
import { Car, CarColour, CarMake } from "./types";
import StepView, { Step, StepType } from "../Controls/StepView";
import Button from "../Controls/Button";

const STEPS: Step<Car>[] = [
  {
    title: "Make",
    type: StepType.List,
    options: Object.values(CarMake),
    propertyName: "make",
  },
  {
    title: "Colour",
    type: StepType.List,
    options: Object.values(CarColour),
    propertyName: "colour",
  },
  { title: "Code", type: StepType.Text, propertyName: "code" },
];

const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;

const CarFormView = () => {
  const [stepIndex, setStepIndex] = useState<number>();
  const [car, setCar] = useState<Car>({});

  const isEndOfForm = stepIndex === STEPS.length - 1;

  return (
    <div>
      {stepIndex == null ? (
        <div>
          {isEmptyObject(car) ? (
            <Button text={"Start"} onClick={() => setStepIndex(0)} />
          ) : (
            <div>{JSON.stringify(car)}</div>
          )}
        </div>
      ) : (
        <StepView<Car>
          step={STEPS[stepIndex]}
          values={car}
          onChange={setCar}
          buttonText={isEndOfForm ? "Done" : "Next"}
          onSubmit={() => {
            isEndOfForm ? setStepIndex(undefined) : setStepIndex(stepIndex + 1);
          }}
        />
      )}
    </div>
  );
};

export default CarFormView;
