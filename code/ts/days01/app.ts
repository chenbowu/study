interface PayInterface {
    handle(price: number): void 
}

class Alipay implements PayInterface {
    handle(price: number): void {
        console.log(`支付宝付款${price}元`);
    }
}

class Wxpay implements PayInterface {
    handle(price: number): void {
        console.log(`微信付款${price}元`);
    }
}
enum payType {
    alipay,
    wxpay
}
function pay(type:payType, price: number){
    let pay: PayInterface;
    switch(type) {
        case payType.alipay:
            pay = new Alipay();
        case payType.wxpay:
            pay = new Wxpay();
    }
    pay.handle(price);
}

pay(payType.alipay,122);
pay(payType.wxpay,888);