export const formatNumber = (number) => {
    var num = number.toString().replace(/[^0-9]/ig, "");
    //num = num.substring(num.length - 10);
    return num;
}
export function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}