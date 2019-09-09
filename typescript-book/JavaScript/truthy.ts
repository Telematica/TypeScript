if (123) { // Will be treated like `true`
  console.log('Any number other than 0 is truthy');
}

/*
---------------------------------------------------------------------------------------------------
| Variable Type                                      | When it is falsy    | When it is truthy    |
---------------------------------------------------------------------------------------------------
| boolean                                            | false               | true                 | 
| string                                             | '' (empty string)   | any other string     | 
| number                                             | 0 NaN               | any other number     | 
| null                                               | always              | never                | 
| undefined                                          | always              | never                | 
| Any other Object including empty ones like {},[]   | never               | always               |
---------------------------------------------------------------------------------------------------
*/