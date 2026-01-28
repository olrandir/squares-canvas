/**
*  @param {function} callback - A function to be called with the fetched color palette.
*  Fetches a color palette from the Colormind API and executes a callback with the result.
*/
function getColorApi(callback: (palette: any[]) => void) : void {
  const url : string = "http://colormind.io/api/";
  const data : any = {
    model : "default",
  }

  const http : XMLHttpRequest = new XMLHttpRequest();

  http.onreadystatechange = function() {
    let palette : any[] = []
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
