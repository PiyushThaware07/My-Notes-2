export const deposite = (amount) =>{
    return {
        type:"DEPOSITE",
        payload:amount,
    }
}
export const withdraw = (amount) =>{
    return {
        type:"WITHDRAW",
        payload:amount,
    }
}