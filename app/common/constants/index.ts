interface chip {
  [key: number]: string;
}

export interface BetOptionData {
  betChoice: string;
  odds: number;
  totalStakes?: number;
  players?: number;
  percent?: number;
}

export interface RoundResultData {
  betChoiceShort: string;
  color: string;
  count: number;
}

export const systemName = "l1";
export const ChipMapper = {
  l1: {
    1: "chip-1",
    5: "chip-2",
    10: "chip-3",
    20: "chip-4",
    50: "chip-5",
    100: "chip-6",
    200: "chip-7",
  },
  l2: {
    10: "chip-1",
    20: "chip-2",
    50: "chip-3",
    100: "chip-4",
    200: "chip-5",
  },
};

export const ChipLabelMapper = {
  l1: {
    1: "1",
    5: "5",
    10: "10",
    20: "20",
    50: "50",
    100: "100",
    200: "200",
  },
  l2: {
    10: "10",
    20: "20",
    50: "50",
    100: "100",
    200: "200",
  },
};

const ChipValues = {
  l1: [1, 5, 20, 10, 50, 100, 200],
  l2: [10, 20, 50, 100, 200],
};

export const ChipValuesBySystem = ChipValues[systemName];
