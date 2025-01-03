// Primitive Type
var Name = "TV";
var price = 34000;
var stock = true;
var id = Symbol();
// Non-Primitive Type
// 1.Array
// a.) Similar Type
// b.) Various Type
var value1 = ["A", "B"];
var value2 = [10, 30, 40];
var value3 = [10, "A", true];
var value4 = new Array("A", "B");
var value5 = new Array();
value5[0] = "A";
value5[1] = 10; // All vaild
value5[2] = true;
// var value6:string[]|number[]=[10,"A"];  // Invalid
// var value7:string[]|number[]=[];
// value7[0]=10;      
// value7[1]="A";       // Both Valid
// var value8:string[]|number[];
// value8[0]=10;
// value8[1]=20;       // invalid because Array memory is not intialize or assign
// 2. Object
var product = {
    Name: "TV",
    price: 40439,
    Stock: true,
    Rating: { rate: 4.3, count: 66 }
};
