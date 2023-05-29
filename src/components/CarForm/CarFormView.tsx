import { useState } from "react";
import { Car, CarColour, CarMake } from "./types";
import StepView, { Step, StepType } from "../Controls/StepView";
import Button from "../Controls/Button";
import { isEmpty } from "lodash";

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

const CarFormView = () => {
  const [stepIndex, setStepIndex] = useState<number>();
  const [car, setCar] = useState<Car>({});

  const isEndOfForm = stepIndex === STEPS.length - 1;

  return (
    <div>
      {stepIndex == null ? (
        <div>
          {isEmpty(car) ? (
            <Button text={"Start"} onClick={() => setStepIndex(0)} />
          ) : (
            <div>
              <h4>Generated Text</h4>
              <p>{`I have a ${car.make} and the colour is ${car.colour}`}</p>
              {car.colour === CarColour.RED && <p>THE CAR IS RED! NICE!!</p>}
            </div>
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
