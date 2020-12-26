'use strict'

let rows = +prompt('Rows', '5'),
    columns = +prompt('Columns', '5');

function createArrArray( rows, cols) {
    let arrArray = new Array( rows );

    for ( let i = 0; i < rows; i++) {
        arrArray[i] = new Array( cols );
        arrArray[i].fill( '0' );
        
    }
    return arrArray;

}

console.log( createArrArray( rows, columns ) );