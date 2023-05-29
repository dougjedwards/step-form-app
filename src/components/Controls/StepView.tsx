import { isEmpty } from "lodash";
import Button from "./Button";

type StepBase<T> = {
  title: string;
  propertyName: keyof T;
};

export enum StepType {
  List = "list",
  Text = "text",
}

type ListOptionStep<T> = StepBase<T> & {
  type: StepType.List;
  options: string[];
};

type TextInputStep<T> = StepBase<T> & { type: StepType.Text };

export type Step<T> = ListOptionStep<T> | TextInputStep<T>;

export type StepViewProps<T> = {
  step: ListOptionStep<T> | TextInputStep<T>;
  values: T;
  onChange: (values: T) => void;
  onSubmit: () => void;
  buttonText: string;
};

const StepView = <T,>({
  step,
  values,
  onChange,
  buttonText,
  onSubmit,
}: StepViewProps<T>) => {
  const renderStepControl = () => {
    switch (step.type) {
      case StepType.List:
        return (
          <select
            value={values[step.propertyName] as (typeof step.options)[number]}
            onChange={(e) => {
              const value = step.options.includes(e.currentTarget.value)
                ? e.currentTarget.value
                : undefined;
              onChange({
                ...values,
                [step.propertyName]: value,
              });
            }}
          >
            <option value={undefined}>Select an option</option>
            {step.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case StepType.Text:
        return (
          <input
            value={(values[step.propertyName] as string) ?? ""}
            onChange={(e) => {
              onChange({
                ...values,
                [step.propertyName]: e.currentTarget.value,
              });
            }}
          />
        );

      default:
        throw new Error("Step type not implemented");
    }
  };

  return (
    <div>
      <h3>{step.title}</h3>
      {renderStepControl()}
      <Button disabled={isEmpty(values[step.propertyName])} onClick={onSubmit}>
        {buttonText}
      </Button>
    </div>
  );
};

export default StepView;
