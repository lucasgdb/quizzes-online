"use strict"

const
	names = [
		'Português',
		'Matemática',
		// 'História',
		'Inglês',
		'Informática',
		'Algoritmos',
		// 'Hardware',
		'Redes',
		// 'Linux',
		'Mitologia Grega',
		'Planeta Terra',
		'Sistema Solar',
		'Felinos',
		// 'Animais',
		// League of Legends,
		// Free fire		
	],
	questions = [
		[
			'Complete: Sueline está ___, pois dormiu ___ durante a noite.',
			'Qual conjunto de palavras está correto?',
			'Na ordem da conversa, qual a colocação correta? João: ___ é separado? Bia: ____ não é junto! João: Mas ___? Bia: O ____ eu não sei.',
			'Complete: Siga ___ e ___ seus medos.',
			'Qual o plural correto de couve-flor, girassol, pudim, giz e lápis?',
			'Complete corretamente a oração: ___ noiva chegou ___ atrasada, o casamento começou ___ quinze minutos e vai terminar meio-dia e ___.'
		],
		[
			'Os ponteiros do relógio formam um ângulo reto ao marcar 3 horas.',
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
			'Quando perguntam "Can I take a picture with you?", significa:',
			'A palavra TREE é o mesmo que:',
			'Quando alguém diz "I am in love with you", significa:',
			'Complete: Did you ___ well last night?',
			'Na frase, "I\'m angry because the bus is late.", a palavra ANGRY significa:',
			'Na frase, ¨What is wrong with being confident?¨, a tradução da palavra CONFIDENT seria:',
			'Na frase, "I\'m feeling weird", a palavra WEIRD significa o quê?'
		],
		[
			'Dentre as alternativas a seguir, qual não faz parte de um item de hardware?',
			'Selecione a opção abaixo que não caracteriza uma medida de segurança para seu computador.',
			'Escolha a alternativa que representa as características do aplicativo TeamViewer.',
			'São sistemas operacionais:',
			'Qual a principal função do Sistema Operacional?',
			'O que um Driver faz?'
		],
		[
			'Qual a definição de Algoritmo?',
			'Onde podemos utilizar um Algoritmo?',
			'O que é um Pseudocódigo?',
			'"... é uma forma universal de representação, pois se utiliza de figuras geométricas para ilustrar os passos a serem seguidos para a resolução de problemas ..." O texto acima, descreve:',
			'A palavra "Pseudocódigo" significa:',
			'A = 10; B = 20; C = A + B; D = C; Dado o Algoritmo, podemos afirmar que:',
			'A instrução: se ... então  ... fimse é necessária para?'
		],
		[
			'Em quantas camadas se divide o modelo de referência OSI?',
			'O que é uma rede de computadores?',
			'Quanto à dispersão geográfica como são classificadas as redes de computadores?',
			'Quanto á topologia física, como são denominadas as redes?',
			'Dos equipamentos de rede abaixo, qual tem a função de escolher o melhor caminho para o envio da informação?',
			'Quais são os principais protocolos da camada de Transporte?',
			'Como é denominado o protocolo de configuração dinâmica de IP?'
		],
		[
			'Qual o nome do deus do vinho na Mitologia Grega?',
			'Segundo a Mitologia Grega, o que a deusa Ártemis era de Apolo?',
			'Qual o nome dado pelos romanos, a deusa grega Afrodite?',
			'Quais dos deuses abaixo não fazem parte da Mitologia Grega?',
			'Onde viviam os deuses gregos?',
			'Conforme o mito grego, quem era, respectivamente, a deusa da caça, a deusa do amor, e a deusa da sabedoria?',
			'Qual o nome do deus grego da guerra?'
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
			'Em frente e enfrente',
			'Couve-flores, girassóis, pudins, gizes e lápis',
			'A, meio, há e meia'
		],
		[
			'Verdadeiro',
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
			'Eu posso tirar uma foto com você?',
			'Árvore',
			'Eu estou apaixonado(a) por você',
			'Sleep',
			'Nervoso',
			'Confiante',
			'Estranho'
		],
		[
			'Debian',
			'Utilizar o desfragmentador de discos do Windows',
			'Estabelece a ligação a qualquer computador ou servidor, permitindo o acesso remoto a distância',
			'Windows 8, Android e IOS',
			'Se trata de um programa especial que atua de forma intermediária entre os usuários e os componentes de um computador',
			'Permite que o sistema operacional e um dispositivo se comuniquem um com o outro'
		],
		[
			'Algoritmo é uma sequência lógica de instruções que devem ser seguidas para resolução de um problema',
			'Na área da computação, construção de interfaces, software, hardware e planejamento de redes',
			'É um código que utiliza a linguagem estruturada e se assemelha, na forma, a um programa escrito na linguagem de programação',
			'Um fluxograma',
			'Falso código',
			'B equivale a A + 10, sendo B + D igual a 50',
			'Tomar uma decisão no sentido de apresentar ou executar uma instrução mediante o teste de uma condição que pode ser Verdadeira ou Falsa'
		],
		[
			'7 camadas',
			'Conjunto de computadores interligados entre si, compartilhando recursos.',
			'LAN, MAN, WAN',
			'Barramento, Anel, Estrela, Híbrida',
			'Roteador',
			'TCP e UDP',
			'DHCP'
		],
		[
			'Dionísio',
			'Irmã',
			'Vênus',
			'Thor e Hórus',
			'Olimpo',
			'Ártemis, Afrodite e Atena',
			'Ares'
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
				'Enfrente e enfrente',
				'Em frente e em frenta',
				'Enfrente e em frenta',
				'Em frente e em frente'
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
				'Eu posso falar com você?',
				'Eu posso tirar uma foto sua?',
				'Eu posso dançar com você?',
				'Eu posso te abraçar?'
			],
			[
				'Três',
				'Torre',
				'Terça-feira',
				'Terceiro'
			],
			[
				'Eu te amo muito',
				'Eu te quero',
				'Eu amo estar com você',
				'Eu amo quando saímos juntos'
			],
			[
				'Slep',
				'Slept',
				'Slop',
				'Slopt'
			],
			[
				'Feliz',
				'Ansioso',
				'Tranquilo',
				'Atrasado',
				'Com fome'
			],
			[
				'Confidente',
				'Confuso',
				'Carinhoso',
				'Contente'
			],
			[
				'Doente',
				'Cansado',
				'Assustado',
				'Arrasado'
			]
		],
		[
			[
				'Mouse',
				'Processador',
				'Chipset',
				'Headset'
			],
			[
				'Deixar o Firewall ativado',
				'Mascarar seu endereçamento IP utilizando uma Proxy',
				'Colocar senha para que somente você tenha acesso ao sistema',
				'Instalar e deixar atualizado um anti-vírus e um anti-spyware'
			],
			[
				'Realiza troca de grandes volumes de dados de um Computador para o outro',
				'Permite atualizar todos os aplicativos do Computador',
				'Faz backup automático de arquivos e pastas selecionadas',
				'Estabelece medidas de segurança para navegação na Internet'
			],
			[
				'Asus, AMD e Intel',
				'Word, Excel e Powerpoint',
				'Mozila Firefox, Internet Explore e Google Chrome',
				'Tablets, Smatphones e Notebooks'
			],
			[
				'Corrigir os danos de um Computador',
				'Estabelecer conexão com a Internet',
				'Ler os dispositivos de um Computador',
				'Acessar os arquivos temporários'
			],
			[
				'Lê CDs e DVDs',
				'Organiza os arquivos do Sistema Operacional',
				'Centraliza as informações',
				'Recupera dados perdidos'
			]
		],
		[
			[
				'Algoritmo é um programa de computador que segue uma sequência lógica de tarefas e variáveis',
				'Algoritmo é um problema lógico que para ser solucionado necessita de um programa baseado em tarefas',
				'Algoritmo é algo que tem ritmo que causa um problema em quem não tem coordenação motora, gerando um problema'
			],
			[
				'Na área da computadores, construção de interferências, tapwares, harddisks e planejamento de redes de pesca',
				'Na área da comutação, construção de intercâmbio, malwares, vírus e planejamento de redes de balanço',
				'Na área da comunicação, aperfeiçoamento de interfaces, softwares livres, raio-x e planejamento de vias'
			],
			[
				'É uma forma de utilizar linguagem estruturada java e se assemelha, na forma, a um programa escrito na linguagem portugol',
				'É um código simples em linguagem de baixo nível que se assemelha, na forma, a um programa escrito na linguagem portugol',
				'É um código que utiliza a linguagem portugol e os comandos de a um programa escrito na linguagem de programação java'
			],
			[
				'Uma descrição narrativa',
				'Um diagrama de Chapim',
				'Um pseudocódigo'
			],
			[
				'Seu código',
				'Código de alguém',
				'Código de baixo nível'
			],
			[
				'B é maior do que A sendo D maior que a soma de A e B',
				'D é diferente da soma de A e B sendo D maior que C',
				'D - A é igual a 20 sendo 20 a metade da soma de A + B',
				'D é diferente de C sendo C a metade da soma de A + D'
			],
			[
				'Tomar uma decisão verdadeira e apresentar ou executar uma instrução falsa se o teste for do tipo inteiro',
				'Tomar um caminho diferente e apresentar ou executar uma instrução mediante um fluxograma de Chapin',
				'Tomar uma decisão se e somente se a condição então não fizer parte da relação de variáveis declaradas no escopo do fluxograma'
			]
		],
		[
			[
				'12 camadas',
				'5 camadas',
				'3 camadas',
				'6 camadas'
			],
			[
				'Conjunto de periféricos integrados.',
				'União de equipamentos com a única finalidade de compartilhar internet.',
				'Vários computadores que fazem parte dos setores de uma organização.'
			],
			[
				'MAN, NAN, LAN',
				'LAN, NAN, WAN',
				'LAN, MAN, TAN'
			],
			[
				'Barra, Anular, Estrela e Token',
				'Anel, híbrida, Estelar e Camada',
				'Segmento, Híbrida, Estrela e Token'
			],
			[
				'Switch',
				'Access Point',
				'Patch Panel'
			],
			[
				'IP e TCP',
				'HTTP e SMTP',
				'UDP e POP'
			],
			[
				'HTTP',
				'FTP',
				'DNS'
			]
		],
		[
			[
				'Apolo',
				'Areas',
				'Hércules',
				'Zeus'
			],
			[
				'Prima',
				'Mãe',
				'Tia',
				'Serva'
			],
			[
				'Era',
				'Íris',
				'Deméter',
				'Pandora'
			],
			[
				'Ares e Hermes',
				'Atena e Apolo',
				'Baco e Hades',
				'Afrodite e Hefesto'
			],
			[
				'Arcádia',
				'Atlântida',
				'Campos Elísios',
				'Palácio de Cristal'
			],
			[
				'Era, Minerva e Ceres',
				'Diana, Era e Juno',
				'Perséfone, Minerva e Gaia',
				'Íris, Pandora e Juno'
			],
			[
				'Zeus',
				'Quírion',
				'Ésquilo',
				'Poseidon',
				'Kratos'
			]
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
