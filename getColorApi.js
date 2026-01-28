async function getColorApi(callback) {
  const url = "http://colormind.io/api/";
  const data = {
    model : "default",
  }

  const http = new XMLHttpRequest();

  http.onreadystatechange = function() {
    let palette = []
    if (http.readyState == 4 && http.status == 200) {
      palette = JSON.parse(http.responseText).result;
    } else if (http.readyState == 4) {
      console.error("Error fetching color palette: " + http.status + " " + http.statusText);
    }
    if (callback && palette.length > 0) {
      callback(palette);
    }
  }

  http.open("POST", url, true);
  http.send(JSON.stringify(data));
};
