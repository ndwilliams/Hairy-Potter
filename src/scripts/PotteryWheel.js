let primaryKey = 1;

export const makePottery = (shape, weight, height) => {
    const potteryObject =  {
        id: primaryKey,
        shape: shape,
        weight: weight,
        height: height,
    }
    primaryKey++;
    return potteryObject;
}