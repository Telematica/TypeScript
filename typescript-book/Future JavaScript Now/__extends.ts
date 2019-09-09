var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

/*

Here d refers to the derived class and b refers to the base class.
This function does two things:

1. copies the static members of the base class onto the child class i.e. 
for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

2. sets up the child class function's prototype to optionally lookup members
on the parent's proto i.e. effectively d.prototype.__proto__ = b.prototype

*/