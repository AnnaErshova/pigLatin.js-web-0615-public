'use strict';

var pigLatin = function(english){
  var final_array = new Array();
  var wordsFromASentence = english.split(" ");

  wordsFromASentence.forEach(function(word){
    // if starts with 'qu':
    if (word.search(/qu/) == 0){
      final_array.push(word.slice(2,word.length) + "quay");
    }
    // if starts with a consonant + qu:
    else if (word.search(/^[^yaeiou]qu/) == 0){
      final_array.push(word.slice(3,word.length) + word[0] + "quay");
    }
    // if starts with a vowel:
    else if (word.search(/a|e|i|o|u/) == 0){
      final_array.push(word + "ay");
    }
    // if starts with 3 consonants
    else if (word.search(/^[^yaeiou]{3}/) == 0) {
      final_array.push(word.slice(3,word.length) + word[0] + word [1] + word [2] + "ay");
    }
    // if starts with 2 consonants
    else if (word.search(/^[^yaeiou]{2}/) == 0) {
      final_array.push(word.slice(2,word.length) + word[0] + word [1] + "ay");
    }
    // if starts with 1 consonant:
    else if (word.search(/^[^yaeiou]/) == 0) {
      final_array.push(word.slice(1,word.length) + word[0] + "ay");
    }
  }) 
  return final_array.join(" "); 
}; // ends 

//     else if (word.search(/^[^yaeiou]{2,}/g)) {
// [b-df-hj-np-tv-z] all consonants
// ^[b-df-hj-np-tv-z]{2,} 2 or more consonants in the beginning
