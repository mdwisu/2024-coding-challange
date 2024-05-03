// https://www.codewars.com/kata/53dc23c68a0c93699800041d

// function smash(words) {
//   words = words.join(" ");
//   return words;
// }

// const smash = (words) => words.join(" ")

function smash(words) {
  let result = "";
  for (let i = 0; i < words.length; i++) {
    if (i !== words.length - 1) {
      result += words[i] + " ";
    }else{
      result += words[i];
    }
  }
  return result;
}


console.log(smash(["this", "is", "a", "really", "long", "sentence"]));
