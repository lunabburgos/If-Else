# Ex.02 If/Else

Neste exercício criei uma composição interativa em que uma grelha de pontos reage à posição e ao clique do rato, usando três condicionais (if/else). 

A primeira, em draw(), define as cores: os pontos junto ao rato são vermelhos e os restantes azuis, e ao clicar passam a laranja e vermelho. 

A segunda usa dist() para calcular a distância de cada ponto ao rato. Dentro do raio definido, o ponto fica maior, com cor diferente e a tremer através de random(). Fora dele, fica pequeno e quase parado. Neste ramo, map() converte a distância em tamanho e tremor, de modo que o efeito aumenta gradualmente à medida que o rato se aproxima. 

A terceira usa mouseIsPressed para trocar a forma: círculos (ellipse()) em repouso e quadrados (rect() com rectMode(CENTER)) ao clicar.

Escolhi uma grelha densa sobre um fundo escuro e fixo para que a variação de cor e de tamanho se lesse com clareza, e uma paleta reduzida (azul, vermelho e laranja) para que as mudanças causadas pelas condições fossem o foco. O canvas ocupa toda a janela com windowWidth e windowHeight, e windowResized() ajustando-se quando a janela muda, para funcionar em qualquer ecrã.


Referência distância: https://p5js.org/reference/p5/dist/

Referência map(): https://p5js.org/reference/p5/map/

Referência do rato: https://p5js.org/reference/p5/mouseIsPressed/