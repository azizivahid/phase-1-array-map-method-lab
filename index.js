const tutorials = [
  "What Does The This Keyword Mean?",
  "What Is The Constructor OO Pattern?",
  "Implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What Is NaN And How Can We Check For It",
  "What Is The Difference Between StopPropagation And PreventDefault?",
  "Immutable State And Pure Functions",
  "What Is The Difference Between == And ===?",
  "What Is The Difference Between Event Capturing And Bubbling?",
  "What Is JSONP?"
];

let tutorialsCapitalized = [];

const titleCased = ()=> {
  tutorials.map(function titleCased(stringVariable){

   let newArr = [];

      function stringToArray(string){
        newArr = string.split(" ");
      };
      stringToArray(stringVariable);


      const capitalized = newArr.map( function(string) {
        return string.charAt(0).toUpperCase()+string.slice(1);
  })

      const modifiedString = capitalized.join(" ");
      tutorialsCapitalized.push(modifiedString);
      console.log(modifiedString);

});
  return tutorialsCapitalized;
} 