/*
    // 1)
    $('.awesome').show(); // Error: cannot find name `$`

*/
/*
    // 2)
    declare var $: any;

    $('.awesome').show(); // Okay!
*/

// 3)
declare var $: {
  (selector:string): any;
};
$('.awesome').show(); // Okay!
$(123).show(); // Error: selector needs to be a string