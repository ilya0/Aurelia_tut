
console.log("simpleclass.js loaded")

import { MyBase } from "MyBase";
//pulls the module from tyhe mybase.js
import { compute, val2 } from "someOtherModule"
// plus the modules compute and val from someothermodule


export class SimpleClass extends MyBase {
    // simpleclass extends mybase and inherits properties from mybase
    constructor() {
        super(); //explicitly invokes the base class instructor
        this.name = "Barney";

    }

    get message() {
        let threshold = 40;
        let result = `Hello ${this.name}, are you ${5 + threshold} years old?`;
        return result;
    }

    calculate() {
        return compute() + val2;
    }

    startEngine() {
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("roar");
            }, 5000);
        });
        return promise;
    }
}