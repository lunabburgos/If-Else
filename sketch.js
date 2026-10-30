let espaco = 20;
let raioPerto = 100;   //raio da zona de tensão

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(20, 20, 35);

  //cores normais
  let corPerto = color(230, 60, 60);
  let corLonge = color(90, 110, 160);

  //CONDIÇÃO 1: ao clicar, as cores trocam
  if (mouseIsPressed) {
    corPerto = color(255, 145, 0);
    corLonge = color(230, 60, 60);
  }

  for (let x = espaco / 2; x < width; x += espaco) {
    for (let y = espaco / 2; y < height; y += espaco) {
      let d = dist(mouseX, mouseY, x, y); //https://p5js.org/reference/p5/dist/
      let tamanho, cor, tremor;

      //CONDIÇÃO 2: a distância ao rato decide o comportamento
      if (d < raioPerto) {
        //perto: maior e a tremer
        tamanho = map(d, 0, raioPerto, 15, 5); //https://p5js.org/reference/p5/map/
        tremor = map(d, 0, raioPerto, 5, 0);
        cor = corPerto;
      } else {
        //longe: pequeno e calmo
        tamanho = 6;
        tremor = 0.5;
        cor = corLonge;
      }

      fill(cor);
      let px = x + random(-tremor, tremor);
      let py = y + random(-tremor, tremor);

      //CONDIÇÃO 3: clicar transforma círculos em quadrados
      if (mouseIsPressed) { //https://p5js.org/reference/p5/mouseIsPressed/
        rectMode(CENTER); //https://p5js.org/reference/p5/rectMode/
        rect(px, py, tamanho * 2, tamanho * 2);
      } else {
        ellipse(px, py, tamanho);
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}