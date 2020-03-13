import { DONATE_MONEY, WITHDRAW_MONEY } from '../actions';

export default (state, action) => {
    if (state.totalAmount > 0) {
        switch (action.type) {
            case WITHDRAW_MONEY:
                return { ...state, totalAmount: state.totalAmount - action.payload.amount }
            case DONATE_MONEY:
                return { ...state, totalAmount: 0 }
            default:
                return state
        }
    } else {
        return state;
    }
}