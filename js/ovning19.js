  let t = 0;

  while (t < 10) {
      if (t == 0) {
          document.write('<br>The loop has never been run');
      } else if (i == 1) {
    document.write('<br>The loop has been executed ' + t + ' time');
  } else {
      document.write('<br>The loop has been executed ' + t + 'times<br>');
  }
    t++;
  }