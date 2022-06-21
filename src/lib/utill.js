export const formatNumber = (number) => {
    var num = number.toString().replace(/[^0-9]/ig, "");
    //num = num.substring(num.length - 10);
    return num;
   }