for (let i = 0; i < 5; i++) {
    const randomNum = (Math.random() * (1 - 0.1) + 0.1).toFixed(1);
    if ( randomNum < 0.5) {
        document.write(randomNum + ' Det var ett litet tal<br>');
    } else if ( randomNum >= 0.5 ) {
        document.write(randomNum + ' Det var ett stort tal<br>');
    } else {
        document.write(randomNum);
    }
  }