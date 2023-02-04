import { WINNER_INICIAL_STATE } from "@reducers/winnerBoardReducer";
import { Board } from "@types";

export const horizontalWinner = (value: string, index: number): Board => {
  if (index === 0) {
    return [
      [value, value, value],
      ["", "", ""],
      ["", "", ""],
    ];
  } else if (index === 1) {
    return [
      ["", "", ""],
      [value, value, value],
      ["", "", ""],
    ];
  } else if (index === 2) {
    return [
      ["", "", ""],
      ["", "", ""],
      [value, value, value],
    ];
  }
  return WINNER_INICIAL_STATE;
};

export const verticalWinner = (value: string, index: number): Board => {
  if (index === 0) {
    return [
      [value, "", ""],
      [value, "", ""],
      [value, "", ""],
    ];
  } else if (index === 1) {
    return [
      ["", value, ""],
      ["", value, ""],
      ["", value, ""],
    ];
  } else if (index === 2) {
    return [
      ["", "", value],
      ["", "", value],
      ["", "", value],
    ];
  }
  return WINNER_INICIAL_STATE;
};

export const diagonal1Winner = (value: string): Board => {
  return [
    [value, "", ""],
    ["", value, ""],
    ["", "", value],
  ];
};

export const diagonal2Winner = (value: string): Board => {
  return [
    ["", "", value],
    ["", value, ""],
    [value, "", ""],
  ];
};
