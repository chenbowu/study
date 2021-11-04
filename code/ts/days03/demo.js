// interface pay {
// }
var myTest = function myDate(n) {
    if (this instanceof myDate) {
        return new Date(n);
    }
    else {
        return n ? n : 0;
    }
};
// function MyDate(s: string) {
//   if(s && new.target) {
//     return new Date();
//   }
// }
// function MyDate(n?: number): number | undefined {
//   if(n != null) {
//     return n;
//   }
// }
