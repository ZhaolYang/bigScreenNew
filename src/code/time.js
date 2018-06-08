let code = {};

code.base = `
function getNow() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var weekArr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    if (month < 10) month = "0" + month;
    var day = now.getDate();
    var weekday = now.getDay() - 0;
    var hours = now.getHours();
    if (hours < 10) hours = "0" + hours;
    var minutes = now.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;
    var seconds = now.getSeconds();
    if (seconds < 10) seconds = "0" + seconds;
    var timeStr = year + '年' + month + '月' + day + '日 ' + weekArr[weekday] + ' ' + hours + ':' + minutes + ':' + seconds;
    return timeStr;
};

// es5严格模式禁用argument.callee方法，采用非匿名函数调用的方式调用自身
(function updateTime() {
    var nows = getNow();
    $("#bs-time").text(nows);
    setTimeout(function () {
        updateTime();
    }, 1000);
})();
`;

export default code;