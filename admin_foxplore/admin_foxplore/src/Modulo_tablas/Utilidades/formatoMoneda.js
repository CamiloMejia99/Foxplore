export const formatoMoneda = (number) => {


    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,

    });

    return formatter.format(number).replace(/^(\D+)/, '$' + (number < 0 ? "-" : ""))
}