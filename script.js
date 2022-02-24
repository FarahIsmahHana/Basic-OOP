class Table {
  constructor(table) {
    this.table = table;
  }

  createHeader(head) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";

    head.forEach((h) => {
      open += `<th>${h}</th>`;
    });

    return open + close;
  }

  createBody(body) {
    let open = "<tbody>";
    let close = "</tbody>";

    body.forEach((b) => {
      open += `
            <tr>
              <td>${b[0]}</td>
              <td>${b[1]}</td>
              <td>${b[2]}</td>
              <td>${b[3]}</td>
            </tr>
          `;
    });

    return open + close;
  }

  render(element) {
    let contain = "<table class='table table-hover'>" + this.createHeader(this.table.columns) + this.createBody(this.table.data) + "</table>";
    element.innerHTML = contain;
  }
}

const contain = new Table({
  columns: ["Name", "Email", "No. Handphone", "Alamat"],
  data: [
    ["Elvira Marliani", "elviramarliani1@gmail.com", "0823556478102", "Jl. Imam Bonjol, Sungailiat"],
    ["Riza Utami", "rizautami11@gmail.com", "0237659476", "Tempilang"],
    ["Dini Anjelina", "dinianjelina12@gmail.com", "081272247620", "Jl. Yos. Sudarso, Belinyu"],
    ["Fitria Melliana", "fitriamilleana@gmail.com", "081254890312", "Jl. RSS"],
    ["Rema Meidia", "remameidia21@gmail.com", "082356870723", "Jl. Matras"],
    ["Fira Safitra", "firasafitra06@gmail.com", "081933987520", "Jl. Jend. Sudirman, Belinyu"],
  ],
});
const library = document.getElementById("library");
contain.render(library);
