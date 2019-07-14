
// This app.js file is responsible for the main functionality of the program!

// intialization

const bISBN = new ISBN;


document.querySelector("#btnSearchBook").addEventListener("click", () => {

  const inputValue = document.querySelector("#iSearchBook").value;
  console.log(inputValue);

  bISBN.getBook(inputValue)
    .then(data =>  {
      console.log(data);
    })


});
