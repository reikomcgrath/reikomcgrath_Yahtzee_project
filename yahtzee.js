// function () Generate a random number
window.addEventListener("load", () => {
  /*function rollRandomDice() {
        let num = Math.floor(Math.random()*6+1);
        consol.log(num);
        alert('random');
        return Math.floor(Math.random()*6+1); //Generate min 1 to max 6 random number
    }*/

  function rollRandomDice() {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    return randomNumber;
  }

  function rollDice1() {
    alert("Roll die");
    //let img = document.getElementById("gm1");
    //consol.log(img);

    let randomNumber = Math.floor(Math.random() * 6 + 1); // Generate a random number and set the image source
    consol.log(randomNumber);
    document.getElementById("gm1").setAttribute("src", "images/2.png");
  }
  document.getElementById("button1").addEventListener("click", rollDice1);

  // function () replace src in one dice with new number - function rollDice1()
  // get ranom number = n
  // element by id="gm1" (image)
  // replay a new src img src="images/1.png"
  // src="images/1.png" > convert to 3.png

  /*('#button1').click(function () {    //click listner
        $('.sai1').animate({
            right: '10px'
        }, 100);  // move to right by 10px in 0.1 sec
        $('.sai1').animate({
            right: '0px'  // move back to the original position in 0.1 sec
        }, 100);
        $('#hideOrShow').toggle(); //hide and show #hideOrShow element
        
    })*/
});
