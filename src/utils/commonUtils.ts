export const filterSort = (data: number[][]) => {
    let bids = data.filter((val: any) => val[2] > 0)
    bids.sort(function (a: number[], b: number[]) {
        return b[0] - a[0];
    })

    let offers = data.filter((val: any) => val[2] < 0);
    offers.sort(function (a: number[], b: number[]) {
        return a[0] - b[0];
    });

    return { bids, offers };
}

export const roundOff = (value: number, decimalPlaces = 1) => {
    if(decimalPlaces === 1 ){
        return Math.round(Math.abs(value) * 10)/10;
    } else {
        return Math.round(Math.abs(value) * 1000)/1000;
    }
}