  let i = 0;

  while (i < 10) {
      if (i == 0) {
          document.write('<br>Loopen har körts ingen gång');
      } else if (i == 1) {
    document.write('<br>Loopen har körts ' + i + ' gång');
  } else {
      document.write('<br>Loopen har körts ' + i + ' gånger');
  }
    i++;
  }