let x = 5;
let y = 6;
let z = 4;

if ( x > y && x > z ) {
    document.write("X är det högsta talet");
} else if ( y > x && y > z ) {
    document.write("Y är det högsta talet");
} else if ( z > x && z > y ) {
    document.write("X är det högsta talet");
} else {
    document.write("Det högsta talet finns lagrat i fler än en variabel");
}