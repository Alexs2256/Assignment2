function Vowels(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelCount = 0;

    for (var i = 0; i < string.length; i++) {
        let s = string[i].toLowerCase();
        if (vowels.includes(s)) vowelCount++;
       }
       
    
    return vowelCount;
}

function consonants(string) {
    let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 
        't', 'v', 'w', 'x', 'y', 'z'];

    var consonantCount = 0;

    for (var i = 0; i < string.length; i++) {
        let s = string[i].toLowerCase();
        if (consonants.includes(s)) consonantCount++;
    }

    return consonantCount;

}

document.getElementById('checkButton').addEventListener('click', function(event) {
    event.preventDefault(); 

    var consonant = "consonant", vowel = "vowel";
    
    let userInput = document.getElementById('inputString').value;

    if (consonants(userInput) > 1) consonant += 's';
    if (Vowels(userInput) > 1) vowel+='s';

   if (Vowels(userInput) > 0 && consonants(userInput) > 0) 
    document.getElementById('result3').textContent = "'" +userInput + "'" + " has " + Vowels(userInput) + " " + vowel + " " + " and " + consonants(userInput) + " " + consonant;
    else if (Vowels(userInput) > 0)
    document.getElementById('result3').textContent = "'" +userInput + "'" + " has " + Vowels(userInput) + " "+ vowel + ", " + consonants(userInput) + " consonants"; 
    else if (consonants(userInput) > 0) 
    document.getElementById('result3').textContent = "'" +userInput + "'" + " has " + consonants(userInput) + " " + consonant + ", " + Vowels(userInput) + " vowels"; 
    else
    document.getElementById('result3').textContent = "There are no consonants or vowels in this string"; 
});

function isPalindrome(number) {

  let reversedNumber = "";
  var originalNumber = number;

  while (number > 0) {
      reversedNumber += number % 10;
      number = Math.floor(number / 10);
  }

  var newNum = Number(reversedNumber);

  if (newNum === originalNumber) return true;
  else return false;

}

document.getElementById('checkP').addEventListener('click', function(event) {

    event.preventDefault();
  
    let userInput = document.getElementById('inputNumber').value;
    var numb = parseInt(userInput);

    if (isPalindrome(numb)===true)
    document.getElementById('result2').textContent = numb + " is a palindrome"; 
    else 
    document.getElementById('result2').textContent = numb+ "  is not a palindrome"; 

});


function getTotal(subTotal, tip) {

    tip/=100;

    var tip = subTotal*tip;

    return subTotal+tip;
}


document.getElementById('subtotal').addEventListener('click', function(event) {

    event.preventDefault();

    let subTotal = parseFloat(document.getElementById('inputSub').value);
    let tip = parseFloat(document.getElementById('inputTip').value);
    
       if (isNaN(subTotal) || isNaN(tip) || tip > 100 || subTotal < 0) 
        document.getElementById('result').textContent = "Please enter valid numbers for subtotal and tip.";
     else 
        document.getElementById('result').textContent = "Your total is: " + getTotal(subTotal, tip).toFixed(2)+ " your tip amount is: "+ (getTotal(subTotal, tip).toFixed(2)-subTotal).toFixed(2);
    
    });



