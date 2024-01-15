: Propriedades CSS são em camelCase

scale - aumenta ou diminui o tamanho do elemeno
    - 1 é o tamanho original, 
    - 1.1 é 1.1 vezes o tamanho original

x - eixo horizontal 
    - valor positivo é do lado direito
    - valor negativo é do esquerdo

y - eixo vertical 
    - valor positivo é para baixo
    - valor negativo é para cima

originX - A animação vai iniciar a partir do ponto original.
        - Se colocar um hover sem definir que o originX é 0,
            - o elemento com hover se desloca pra esquerda.
            - O mesmo vale pro originY, mas ai ele vai pra cima. 

<!-- ------------------------------------------------------------------------------- -->
transition: 
    - delay : Atrasa a animação no tempo determinado
    - duration : Quanto tempovai rolar a animação
    - type: {
        - tipo da animação : spring | just | ...
        - stiffness : só usada com a spring - Quanto que a mola vai quicar.
    }
<!-- ------------------------------------------------------------------------------- -->

Orchestration -> Vai dentro de transition: 

Ela vai no PRIMEIRO que vai ser animado - Caso tenha conflito de animações, ou de uma estar sendo
feita no mesmo tempo da outra e ai buga a animação:

when: "beforeChildren"  -> Isso indica que esse elemento vai rodar a animação ANTES da animação do filho dela.
when: "afterChildren"  -> Isso indica que esse elemento vai rodar a animação DEPOIS da animação do filho dela.

staggerChildren: number -> Define quando tempo vai atrasar a animação do próximo elemento 

<!-- ------------------------------------------------------------------------------- -->

keyFrames = é um array de valores
scale: [1, 1.1, 1, 1.1, 1, 1.1, 1] => Vai ficar aumentando e diminuindo a escala do elemento

<!-- ------------------------------------------------------------------------------- -->
Repetindo animações:

dentro do transition, usamos o YOYO combado com Infinity,
ele vai ficar repetindo a animação de forma infinita.

