let url = "http://localhost:8080/all";
fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    document.getElementById("demoText")!.innerHTML = data[1].A_Code;
    console.log("Refreshed everything!");
  });