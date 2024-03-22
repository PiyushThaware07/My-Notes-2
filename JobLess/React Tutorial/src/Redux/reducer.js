const inititalBankBalance = 1000;

const manageBankBalance = (state = inititalBankBalance, action) => {
  switch (action.type) {
    case "DEPOSITE":
      return state + action.payload;
    case "WITHDRAW":
      return state - action.payload;
    default:
      return state;
  }
};

export default manageBankBalance;
