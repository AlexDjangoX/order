<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM matches, closest, and querySelector</title>
    <style>
      html {
        font-size: 20px;
        line-height: 1.6;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      }
      main.content {
        margin: 3rem;
      }
      p.para {
        font-size: 1rem;
        font-weight: 300;
        padding: 1rem;
      }
      .para span {
        font-weight: 700;
        cursor: pointer;
        text-transform: uppercase;
      }
      #first {
        background-color: hsl(280deg, 40%, 80%);
      }
      #second {
        background-color: hsl(140deg, 40%, 80%);
      }
      .active {
        background-color: goldenrod !important;
      }
    </style>
  </head>
  <body>
    <h1>DOM Element matches(), closest(), &amp; querySelector()</h1>
    <main class="content">
      <p id="first" class="para">
        FIRST Lorem ipsum dolor sit, <span>this is the span</span> amet
        consectetur adipisicing elit. Iure aliquid quisquam optio harum dicta
        quae! Similique molestiae modi nostrum omnis animi sit, dicta voluptatem
        earum vel minus ab corporis perspiciatis!
      </p>
      <p id="second" class="para">
        SECOND Lorem ipsum dolor sit, <span>this is the span</span> amet
        consectetur adipisicing elit. Ut, explicabo illum nam deleniti minus,
        rem error quibusdam eaque asperiores ab magnam fugiat in magni sint
        quaerat similique temporibus iste cum.
      </p>
      <p class="output"></p>
    </main>
    <script>
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM matches, closest, and querySelector</title>
    <style>
      html {
        font-size: 20px;
        line-height: 1.6;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      }
      main.content {
        margin: 3rem;
      }
      p.para {
        font-size: 1rem;
        font-weight: 300;
        padding: 1rem;
      }
      .para span {
        font-weight: 700;
        cursor: pointer;
        text-transform: uppercase;
      }
      #first {
        background-color: hsl(280deg, 40%, 80%);
      }
      #second {
        background-color: hsl(140deg, 40%, 80%);
      }
      .active {
        background-color: goldenrod !important;
      }
    </style>
  </head>
  <body>
    <h1>DOM Element matches(), closest(), &amp; querySelector()</h1>
    <main class="content">
      <p id="first" class="para">
        FIRST Lorem ipsum dolor sit, <span>this is the span</span> amet
        consectetur adipisicing elit. Iure aliquid quisquam optio harum dicta
        quae! Similique molestiae modi nostrum omnis animi sit, dicta voluptatem
        earum vel minus ab corporis perspiciatis!
      </p>
      <p id="second" class="para">
        SECOND Lorem ipsum dolor sit, <span>this is the span</span> amet
        consectetur adipisicing elit. Ut, explicabo illum nam deleniti minus,
        rem error quibusdam eaque asperiores ab magnam fugiat in magni sint
        quaerat similique temporibus iste cum.
      </p>
      <p class="output"></p>
    </main>
    <script>
    onPageLoad()

     
    </script>
  </body>
</html>
    </script>
  </body>
</html>

function onPageLoad(){
    document.addEventListener("DOMContentLoaded", () => {
    let target1 = document.querySelector(".para");
    let target2 = document.querySelector("#second");
    target1.addEventListener("click", clicked);
    target2.addEventListener("click", clicked);
  });
}


  function clicked(ev) {
    ev.preventDefault();
    msg(ev.target + " " + ev.target.closest("#first"));
    let obj = ev.target.closest("#first");
    if (obj) {
      //not null
      obj.classList.add("active");
    }
    if (ev.target.matches("body main p#first")) {
      //if (ev.target === document.querySelector("#first")) {
      //msg("MATCHES", true);
    } else {
      //msg("NO MATCH", true);
    }
  }
  function msg(txt, append = false) {
    let out = document.querySelector(".output");
    if (append) {
      out.textContent += " " + txt;
    } else {
      out.textContent = txt;
    }
  }