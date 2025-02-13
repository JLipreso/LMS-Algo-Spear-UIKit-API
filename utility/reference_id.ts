export function createReferenceID(identifier: string) {
    var length              = 3
    let result              = '';
    const characters        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength  = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }

    var dateTime    = new Date();
    var year        = dateTime.getFullYear();
    var month       = dateTime.getMonth() + 1;
    var day         = dateTime.getDate();
    var hour        = dateTime.getHours();
    var minute      = dateTime.getMinutes();
    var seconds     = dateTime.getSeconds();
    var dateString  = year +''+ month +''+ day +''+ hour +''+ minute +''+ seconds;

    return identifier + '-' + dateString + '-' + result;
}