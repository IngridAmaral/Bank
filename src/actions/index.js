export const WITHDRAW_MONEY = 'WITHDRAW_MONEY';
export const DONATE_MONEY = 'DONATE_MONEY';

export const withdrawMoney = (amount) => {
    return {
        type: WITHDRAW_MONEY,
        payload: {
            amount
        }
    }
};

export const donateMoney = (amount) => {
    return {
        type: DONATE_MONEY,
        payload: {
            amount
        } 
    }
};