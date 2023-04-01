let a = 5;
let s = 6;
let d = 4;

if ( a > s && a > d ) {
    document.write("X är det högsta talet");
} else if ( s > a && s > d ) {
    document.write("Y är det högsta talet");
} else if ( d > a && d > s ) {
    document.write("X är det högsta talet");
} else {
    document.write("Det högsta talet finns lagrat i fler än en variabel");
}