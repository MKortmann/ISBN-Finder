
// this file is responsible to show the information in appropriately way in
// the User Interface (UI)

class UI {
  constructor() {
    this.book = document.getElementById("isbn");
  }

  showBook(data, input) {
    this.book.innerHTML = `
    <div class="container">
      <div class="card" style="width: 18rem;">
        <img src="${data[`ISBN:${input}`].thumbnail_url}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${data[`ISBN:${input}`].bib_key}</h5>
        <p class="card-text">${data[`ISBN:${input}`].info_url}</p>
        <a href="${data[`ISBN:${input}`].preview_url}" class="btn btn-outline-primary">More Info</a>
    </div>
    `;

    console.log(data);
    console.log(data[`ISBN:${input}`].thumbnail_url);


  }
}
