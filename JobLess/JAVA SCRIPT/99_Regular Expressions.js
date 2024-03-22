const regex = /very/g // this means replace very globally
const text = "Piyush is very very good boy and very intelligent";
console.log(text.replace("very","VERY"));
console.log(text.replace(regex,"VERY"));