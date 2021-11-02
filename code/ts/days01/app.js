class Alipay {
    handle(price) {
        console.log(`支付宝付款${price}元`);
    }
}
class Wxpay {
    handle(price) {
        console.log(`微信付款${price}元`);
    }
}
var payType;
(function (payType) {
    payType[payType["alipay"] = 0] = "alipay";
    payType[payType["wxpay"] = 1] = "wxpay";
})(payType || (payType = {}));
function pay(type, price) {
    let pay;
    switch (type) {
        case payType.alipay:
            pay = new Alipay();
        case payType.wxpay:
            pay = new Wxpay();
    }
    pay.handle(price);
}
pay(payType.alipay, 122);
pay(payType.wxpay, 888);
