import { Person } from './arrow-functions';

/*
    Beyond the terse syntax, you only need to use the fat arrow if you are going to give the function 
    to someone else to call. Effectively:
*/
var person = new Person(1);
var growOld = person.growOld;

growOld();

person.growOld();

/*
    Tip: Arrow Function Danger
    In fact if you want this to be the calling context you should not use the arrow function. 
    This is the case with callbacks used by libraries like jquery, underscore, mocha and others.
    If the documentation mentions functions on this then you should probably just use a function instead of a fat arrow.
    Similarly if you plan to use arguments don't use an arrow function.
*/