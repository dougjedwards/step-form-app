export enum CarMake {
  AUDI = "AUDI",
  BMW = "BMW",
  VAUXHALL = "VAUXHALL",
  MERCEDES = "MERCEDES",
  PEUGEOT = "PEUGEOT",
  RENAULT = "RENAULT",
}

export enum CarColour {
  BLUE = "BLUE",
  RED = "RED",
  BLACK = "BLACK",
  ORANGE = "ORANGE",
}

export type Car = {
  make?: CarMake;
  colour?: CarColour;
  code?: string;
};
