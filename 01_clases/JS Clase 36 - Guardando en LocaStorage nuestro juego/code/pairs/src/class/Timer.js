class Timer {
  min;
  sec;
  ms;
  count;
  malt;
  salt;
  msalt;
  idElement;

  constructor(idElement = "timer") {
    console.log("Creamos un Timer");
    this.idElement = idElement;

    if (localStorage.getItem("timer") !== null) {
      let timerFromLocalStorage = JSON.parse(localStorage.getItem("timer"));
      this.sec = parseInt(timerFromLocalStorage.sec);
      this.min = 0;
      this.ms = parseInt(timerFromLocalStorage.ms);
    } else {
      this.ms = 0;
      this.min = 0;
      this.sec = 0;
    }
  }

  start() {
    this.count = setInterval(() => {
      if (this.ms == 100) {
        this.ms = 0;
        if (this.sec == 60) {
          this.sec = 0;
          this.min++;
        } else {
          if (this.sec % 2 == 0) {
            let timerObject = {
              sec: this.sec,
              ms: this.ms,
              min: this.min,
            };
            localStorage.setItem("timer", JSON.stringify(timerObject));
          }
          this.sec++;
        }
      } else {
        this.ms++;
      }

      this.malt = this.pad(this.min);
      this.salt = this.pad(this.sec);
      this.msalt = this.pad(this.ms);

      this.update(this.malt + ":" + this.salt + ":" + this.msalt);
    }, 10);
  }

  stop() {
    clearInterval(this.count);
  }

  update(txt) {
    let temp = document.getElementById(this.idElement);
    temp.firstChild.nodeValue = txt;
  }

  pad(time) {
    let temp;
    if (time < 10) {
      temp = "0" + time;
    } else {
      temp = time;
    }
    return temp;
  }
}

export default Timer;
