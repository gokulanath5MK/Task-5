const studentResume = {
    "name": "Gokulanath Muthukumar",
    "title": "Mechanical Engineering Student",
  };
  

  for (let key in studentResume) {
    if (studentResume.hasOwnProperty(key)) {
      console.log(key + ": " + studentResume[key]);
    }
  }
  