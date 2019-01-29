const questions = [
  [
    'Complete: Sueline está ___, pois dormiu ___ durante a noite.',
    'Qual conjunto de palavras está correto?',
    'Na ordem da conversa, qual a colocação correta? João: ___ é separado? Bia: ____ não é junto! João: Mas ___? Bia: O ____ eu não sei.',
    '"Engodar" é o sinônimo de:',
    'Complete: Siga ___ e ___ seus medos.',
    'Qual destas palavras não é sinônimo de "Rubicundo".',
    'Qual o plural correto de couve-flor, girassol, pudim, giz e lápis?',
    'Complete corretamente a oração: ___ noiva chegou ___ atrasada, o casamento começou ___ quinze minutos e vai terminar meio-dia e ___.'
  ],
  [
    'Os ponteiros do relógio formam um ângulo reto ao marcar 3 horas.',
    '40% de 75 é 28.',
    'Todos os lados de um triângulo escaleno têm o mesmo comprimento.',
    'Quando se divide 1.000 por 0, o resultado é 0.',
    'Se f(X) = 5, então (X + 3X) - (2X + X) é igual ao valor de X.',
    '7% é igual a 0,07.',
    'Zero é um número inteiro e também um número natural.',
    'De acordo com a Trigonometria, seno(θ) dividido por cosseno(θ) é igual a secante(θ).',
    '40 - 6 * 4 = 136.',
    'Não há número 0 em numeral romano.',
    '1, 2 e 3 são os únicos números naturais cuja resposta é a mesma se adicionados ou multiplicados entre si.',
    'É possível que você não marque um número inteiro neste quiz.'
  ],
  [
    'Quantos movimentos o planeta Terra executa?',
    'Qual é a principal consequência do movimento de rotação?',
    'Qual a principal consequência do movimento de translação?',
    'Qual a forma real da Terra?',
    'Quanto tempo a Terra demora para executar o movimento de rotação?',
    'Quanto tempo a Terra demora para executar o movimento de translação?',
    'O que é litosfera?',
    'O que é hidrosfera?',
    'O que é atmosfera?',
    'O que é biosfera?'
  ],
  [
    'Qual corpo celeste é conhecido por "Planeta Vermelho"?',
    'Qual é o maior planeta do sitema solar?',
    'Em qual galáxia nosso sistema solar está localizado?',
    'Quantas estrelas existem em nosso sistema solar?',
    'Qual o planeta mais frio do nosso sistema solar?',
    'Qual destes planetas não possui anéis?',
    'Vênus e ___ são os dois planetas que não têm uma lua.',
    'Qual o planeta mais quente do sistema solar?'
  ],
  [
    'Qual é a única espécie de felino que os exemplares raramente são encontrados sozinhos?',
    'Qual dos felinos a seguir tem maior o porte?',
    'Qual dos felinos a seguir costuma caçar à noite?',
    'Qual dos felinos a seguir tem menor porte?',
    'O Leão macho é o mais lento dentre todos os grandes felinos.',
    'Qual dos felinos á seguir possui melhor habilidade de escalar árvores?',
    'Qual dos felinos á seguir tem maior o costume e habilidade para caçar pássaros?',
    'Quantas raças de gatos domésticos existem aproximadamente?'
  ]
],
  answers = [
    [
      'Mal-humorada, mal',
      'Jejum, jeito, gesto, jenipapo',
      'Por que, porque, por quê e porquê',
      'Iludir',
      'Em frente e enfrente',
      'Brilhante',
      'Couve-flores, girassóis, pudins, gizes e lápis',
      'A, meio, há e meia'
    ],
    [
      'Verdadeiro',
      'Falso',
      'Falso',
      'Falso',
      'Verdadeiro',
      'Verdadeiro',
      'Falso',
      'Falso',
      'Falso',
      'Verdadeiro',
      'Verdadeiro',
      'Falso'
    ],
    [
      '14 Movimentos',
      'A formação dos dias e das noites',
      'A formação das 4 estações do ano',
      'Geoide',
      '23 horas, 56 minutos e 4 segundos',
      '365 dias, 5 horas, 48 minutos e 46 segundos',
      'É o solo onde pisamos',
      'É o conjunto de água de todo o planeta',
      'É a camada gasosa que envolve a Terra',
      'É o conjunto de sistemas vivos do planeta'
    ],
    [
      'Marte',
      'Júpiter',
      'Via Láctea',
      '1',
      'Urano',
      'Vênus',
      'Mercúrio',
      'Vênus'
    ],
    [
      'Leão',
      'Tigre',
      'Leão',
      'Gato do Deserto',
      'Verdadeiro',
      'Leopardo',
      'Caracal',
      '80'
    ]
  ],
  fakeAnswers = [
    [
      [
        'Mau humorada, mau',
        'Má-humorada, mal',
        'Mal humorada, mau',
        'Má humorada, mau'
      ],
      [
        'Jejum, geito, jesto e genipapo',
        'Gejum, jeito, gesto e jenipapo',
        'Gejum, geito, jesto e jenipapo',
        'Jejum, geito, jeito e genipapo'
      ],
      [
        'Porque, por quê, por que e porquê',
        'Por que, porque, porquê e por quê',
        'Por quê, porquê, porque e por que',
        'Porquê, por que, por quê e porque'
      ],
      [
        'Encostar',
        'Inverter',
        'Engordar',
        'Respirar'
      ],
      [
        'Enfrente e enfrente',
        'Em frente e em frenta',
        'Enfrente e em frenta',
        'Em frente e em frente'
      ],
      [
        'Corado',
        'Avermelhado',
        'Grená'
      ],
      [
        'Couves-flor, girassóis, pudim, giz e lápises',
        'Couve-flores, girassols, pudim, giz e lápises',
        'Couves-flor, girassols, pudins, gizes e lápis',
        'Couves-flores, girassóis, pudim, giz e lápises'
      ],
      [
        'À, meia, a e meio',
        'À, meia, a e meio',
        'À, meia, a e meio'
      ]
    ],
    [
      ['Falso'],
      ['Verdadeiro'],
      ['Verdadeiro'],
      ['Verdadeiro'],
      ['Falso'],
      ['Falso'],
      ['Verdadeiro'],
      ['Verdadeiro'],
      ['Verdadeiro'],
      ['Falso'],
      ['Falso'],
      ['Verdadeiro']
    ],
    [
      [
        '11 movimentos',
        '12 movimentos',
        '13 movimentos',
        '15 movimentos'
      ],
      [
        'A formação das 4 estações do ano',
        'A formação das chuvas',
        'A formação dos fenômenos naturais'
      ],
      [
        'A formação das chuvas',
        'A manutenção das temperaturas da Terra',
        'A formação do dia e da noite'
      ],
      [
        'Redonda',
        'Oval',
        'Plana',
        'A Terra não tem forma'
      ],
      [
        '22 horas, 43 minutos e 54 segundos',
        '23 horas, 56 minutos e 40 segundos',
        '24 horas, 56 minutos e 4 segundos'
      ],
      [
        '24 horas, 56 minutos e 4 minutos',
        '364 dias, 5 horas e 45 segundos',
        '5 horas, 48 minutos e 46 minutos',
        '365 dias, 1 hora e 46 segundos'
      ],
      [
        'É o conjunto de água de todo o planeta',
        'É a camada mais extensa da atmosfera',
        'É o conjunto de sistemas vivos do planeta'
      ],
      [
        'É o solo onde pisamos',
        'É a camada mais extensa da atmosfera',
        'É o conjunto de sistemas vivos do planeta'
      ],
      [
        'É o solo onde pisamos',
        'É o conjunto de água de todo o planeta',
        'É o conjunto de sistemas vivos do planeta'
      ],
      [
        'É o solo onde pisamos',
        'É o conjunto de água de todo o planeta',
        'É a camada gasosa que envolve a Terra'
      ]
    ],
    [
      [
        'Vênus',
        'Mercúrio',
        'Saturno'
      ],
      [
        'Urano',
        'Saturno',
        'Netuno'
      ],
      [
        'Andrômeda',
        'Galáxia do Sombreiro',
        'Triângulo'
      ],
      [
        '2',
        '5',
        '10',
        '20',
        'Mais de 10.000'
      ],
      [
        'Netuno',
        'Júpiter',
        'Saturno'
      ],
      [
        'Urano',
        'Netuno',
        'Saturno'
      ],
      [
        'Netuno',
        'Saturno',
        'Marte'
      ],
      [
        'Mercúrio',
        'Júpiter',
        'Terra'
      ]
    ],
    [
      [
        'Guepardo',
        'Tigre',
        'Gato',
        'Lince'
      ],
      [
        'Guepardo',
        'Leopardo',
        'Caracal',
        'Onça'
      ],
      [
        'Gato',
        'Tigre',
        'Puma',
        'Leopardo'
      ],
      [
        'Lince',
        'Caracal',
        'Gato Pescador'
      ],
      [
        'Falso'
      ],
      [
        'Tigre',
        'Gato',
        'Puma'
      ],
      [
        'Lince',
        'Gato Doméstico'
      ],
      [
        '46',
        '60',
        '100'
      ]
    ]
  ]