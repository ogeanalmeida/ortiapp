/* Catálogo base de plantas (hortaliças, temperos, raízes, grãos de roça e frutas).
   Funciona sem internet: quando você cadastra uma planta, o app já mostra o resumo dela.
   Valores médios de referência para o clima tropical/semiárido do Brasil (ajuste com a sua experiência).

   germ  : dias para germinar (ou brotar/enraizar, se for por estaca, rama, maniva etc.) [mín, máx]
   m     : dias da semente até a MUDA ficar pronta (0 = semeie direto no lugar, não costuma fazer muda)
   c     : dias da semeadura até a 1ª colheita, plantando DIRETO no local definitivo (vaso, canteiro, roça)
   t     : dias do plantio da MUDA no local definitivo até a 1ª colheita
   f     : dias da semeadura até as primeiras flores (plantas que dão fruto ou grão)
   rega  : regar a cada N dias (vaso pequeno seca mais rápido; na roça, depende da chuva)
   luz   : horas de sol direto por dia      temp / ph: faixa ideal      lbl: o que é a "colheita"
   veg   : forma comum de plantar sem semente (estaca, rama, maniva, rizoma, coroa, filhote, bulbilho…)
   soVeg : true = quase sempre se planta pela parte da planta (não pela semente)
   perene: true = produz por anos depois da 1ª colheita
   Você pode adicionar plantas próprias pelo app (Plantios > Novo > Outra). */
(function () {
  const L = [];
  // id, nome, emoji, grupo, [germ], m, c, t, f, rega, luz, [temp], [ph], lbl, resumo, dica, extras
  const C = (id, nome, e, grupo, germ, m, c, t, f, rega, luz, temp, ph, lbl, resumo, dica, x = {}) =>
    L.push({ id, nome, e, grupo, tipo: grupo, germ, m, c, t, f, rega, luz, temp, ph, lbl, resumo, dica, ...x });

  /* ---------------- FOLHOSAS ---------------- */
  C('alface', 'Alface', '🥬', 'Folhosa', [4, 7], 25, 50, 35, null, 1, '4–6 h', [15, 24], [6.0, 6.8], 'colheita',
    'Hortaliça de folha mais plantada do Brasil (crespa, lisa, americana, roxa). Ciclo curto e raiz rasa.',
    'Gosta de solo sempre úmido e de temperatura amena. No calor forte ela pendoa (sobe flor) e amarga. Semeie raso (0,5 cm).', { alias: ['alface crespa', 'alface americana', 'alface roxa'] });
  C('rucula', 'Rúcula', '🌿', 'Folhosa', [3, 7], 20, 35, 25, null, 1, '4–6 h', [15, 25], [6.0, 7.0], 'colheita',
    'Folha de sabor picante, da família da couve. Uma das mais rápidas da horta.',
    'Colha as folhas de fora e deixe o miolo crescer. Calor demais deixa a folha mais picante e faz pendoar.');
  C('couve', 'Couve', '🥬', 'Folhosa', [4, 7], 30, 70, 45, null, 1, '4–6 h', [16, 22], [6.0, 7.0], 'primeira colheita',
    'Couve-manteiga: produz folhas por meses se colher de baixo para cima. Também pega por broto (estaca).',
    'Fique de olho em pulgão e lagarta na parte de trás das folhas. Aduba de cobertura a cada 30 dias.', { alias: ['couve manteiga', 'couve-manteiga'], veg: 'broto lateral', perene: true });
  C('espinafre', 'Espinafre', '🥬', 'Folhosa', [5, 10], 25, 45, 30, null, 1, '4–6 h', [10, 22], [6.5, 7.5], 'colheita',
    'Folha rica em ferro que prefere clima fresco.',
    'Em região quente, o espinafre-da-nova-zelândia aguenta melhor o calor.');
  C('agriao', 'Agrião', '🌿', 'Folhosa', [4, 10], 25, 50, 30, null, 1, '4–6 h', [15, 25], [6.0, 7.0], 'colheita',
    'Folha picante que adora água: cresce bem em local encharcado e até em hidroponia.',
    'Mantenha o solo sempre molhado. Também enraíza fácil com ramos colocados na água.', { veg: 'ramo' });
  C('almeirao', 'Almeirão', '🥬', 'Folhosa', [5, 10], 30, 60, 40, null, 1, '4–6 h', [15, 28], [6.0, 7.0], 'colheita',
    'Folha amarga parente da chicória, rústica e resistente ao calor.',
    'Corte as folhas a 3 cm do chão: rebrota várias vezes.');
  C('chicoria', 'Chicória / Escarola', '🥬', 'Folhosa', [5, 10], 30, 70, 45, null, 1, '4–6 h', [15, 25], [6.0, 7.0], 'colheita',
    'Folhosa de sabor levemente amargo, em pé de roseta grande.',
    'Para amargar menos, amarre as folhas por cima uma semana antes de colher.', { alias: ['escarola', 'endívia'] });
  C('repolho', 'Repolho', '🥬', 'Folhosa', [4, 10], 30, 100, 75, null, 1, '5–6 h', [15, 24], [6.0, 7.0], 'colheita da cabeça',
    'Forma uma cabeça fechada de folhas. Existem tipos de verão para regiões quentes.',
    'Precisa de muita água e adubo na formação da cabeça. Colha quando estiver firme ao apertar.');
  C('acelga', 'Acelga', '🥬', 'Folhosa', [5, 12], 25, 60, 40, null, 1, '4–6 h', [15, 25], [6.0, 7.5], 'colheita',
    'Folha larga com talo branco ou colorido, parente da beterraba. Colhe por muito tempo.',
    'Colha as folhas de fora e deixe o centro produzindo.');
  C('mostarda', 'Mostarda', '🥬', 'Folhosa', [3, 7], 20, 45, 30, null, 1, '4–6 h', [15, 25], [6.0, 7.0], 'colheita',
    'Folha picante de crescimento rapidíssimo, comum em hortas caseiras.',
    'Colha nova, antes de pendoar: depois de florir as folhas ficam duras.');
  C('pak-choi', 'Couve-chinesa / Pak choi', '🥬', 'Folhosa', [3, 7], 20, 50, 30, null, 1, '4–6 h', [15, 25], [6.0, 7.5], 'colheita',
    'Couves de folha macia usadas em refogados e saladas.',
    'Clima ameno e rega frequente. No calor pendoa rápido.', { alias: ['acelga chinesa', 'couve chinesa', 'bok choy'] });
  C('bertalha', 'Bertalha', '🌿', 'Folhosa', [7, 14], 25, 60, 35, null, 1, '6 h', [20, 32], [6.0, 7.5], 'colheita',
    'Trepadeira de folha grossa que adora calor, muito comum no Nordeste e Sudeste.',
    'Dê um suporte para ela subir. Pega fácil também por pedaço de rama.', { veg: 'rama', perene: true });
  C('jambu', 'Jambu', '🌼', 'Folhosa', [7, 15], 25, 60, 35, null, 1, '5–6 h', [22, 32], [5.5, 6.5], 'colheita',
    'Folha e flor que dão dormência na boca, típicas do Pará (tacacá, pato no tucupi).',
    'Semente muito pequena: espalhe na superfície sem enterrar. Gosta de calor e umidade.');
  C('vinagreira', 'Vinagreira / Hibisco', '🌺', 'Folhosa', [7, 14], 30, 80, 55, null, 2, '6–8 h', [22, 32], [6.0, 7.0], 'primeira colheita',
    'Folha azedinha do arroz de cuxá (MA); também chamada de caruru-azedo. O cálice da flor vira chá e geleia.',
    'Muito rústica, aguenta calor e seca. Colha os ponteiros para a planta encher.', { alias: ['caruru azedo', 'quiabo roxo', 'hibisco'] });
  C('taioba', 'Taioba', '🍃', 'Folhosa', [15, 30], 0, 90, 70, null, 2, '3–5 h', [20, 30], [5.5, 6.5], 'primeira colheita',
    'Planta de folha grande e comestível (cozida), plantada pelo rizoma. Cuidado para não confundir com a "taioba brava".',
    'Gosta de meia-sombra e solo úmido. Sempre cozinhe antes de comer.', { veg: 'rizoma', soVeg: true, perene: true });
  C('ora-pro-nobis', 'Ora-pro-nóbis', '🌿', 'Folhosa', [15, 30], 0, 120, 90, null, 3, '6 h', [18, 32], [5.5, 7.0], 'primeira colheita',
    'Cacto trepador de folhas ricas em proteína. Muito rústico.',
    'Plante por estaca de 20 cm. Tem espinhos: use luvas. Colha os ponteiros.', { veg: 'estaca', soVeg: true, perene: true });

  /* ---------------- BRÁSSICAS DE FLOR ---------------- */
  C('brocolis', 'Brócolis', '🥦', 'Folhosa', [4, 10], 30, 95, 70, null, 1, '5–6 h', [15, 24], [6.0, 7.0], 'colheita da cabeça',
    'Colhe-se o botão floral ainda fechado. O tipo "ramoso" dá vários brotos depois do primeiro corte.',
    'Colha antes de as florzinhas amarelas abrirem. Precisa de boro e muita água.');
  C('couve-flor', 'Couve-flor', '🥦', 'Folhosa', [4, 10], 30, 110, 85, null, 1, '5–6 h', [15, 22], [6.0, 7.0], 'colheita da cabeça',
    'Forma uma "cabeça" branca de flores. Prefere clima ameno; há variedades de verão.',
    'Quando a cabeça aparecer, cubra com as próprias folhas para ela ficar branca.');

  /* ---------------- TEMPEROS E ERVAS ---------------- */
  C('coentro', 'Coentro', '🌿', 'Tempero', [5, 14], 0, 40, 30, null, 1, '4–6 h', [18, 28], [6.0, 7.0], 'colheita',
    'O tempero mais usado no Nordeste. Não gosta de transplante: semeie direto no lugar.',
    'Amasse levemente a semente (ela tem duas dentro) e deixe de molho 12 h. Semeie a cada 15–20 dias para ter sempre.');
  C('cebolinha', 'Cebolinha', '🧅', 'Tempero', [7, 14], 45, 75, 40, null, 2, '4–6 h', [13, 24], [6.0, 7.0], 'primeiro corte',
    'Tempero de folha tubular que rebrota após o corte. Pega fácil por touceira.',
    'Corte a 3 cm do solo que ela rebrota. Pode plantar a parte branca com raiz comprada na feira.', { veg: 'touceira', perene: true });
  C('salsinha', 'Salsinha', '🌿', 'Tempero', [14, 28], 45, 80, 50, null, 1, '4–6 h', [15, 25], [6.0, 7.0], 'primeiro corte',
    'Salsa: tempero de folha que produz por vários meses.',
    'Germinação lenta — não desista antes de 4 semanas. Molho de 24 h ajuda.', { alias: ['salsa'] });
  C('manjericao', 'Manjericão', '🌿', 'Tempero', [5, 10], 30, 50, 30, null, 1, '6–8 h', [20, 30], [6.0, 7.5], 'colheita',
    'Erva aromática que ama sol e calor. Pega fácil por estaca.',
    'Retire as flores para a planta continuar produzindo folhas.', { alias: ['alfavaca', 'basilicão'], veg: 'estaca' });
  C('hortela', 'Hortelã', '🌱', 'Tempero', [7, 14], 30, 60, 45, null, 1, '4–6 h', [15, 28], [6.0, 7.0], 'colheita',
    'Erva refrescante que se espalha por ramos rasteiros.',
    'Melhor por estaca (galho na água até enraizar). Espalha muito: plante sozinha no vaso.', { veg: 'estaca', perene: true, alias: ['menta'] });
  C('alecrim', 'Alecrim', '🌿', 'Tempero', [14, 28], 60, 150, 90, null, 3, '6–8 h', [15, 30], [6.0, 7.5], 'primeira colheita',
    'Arbusto aromático de clima seco. Não gosta de excesso de água.',
    'Mais fácil por estaca de ponteiro (10 cm). Solo bem drenado; regue pouco.', { veg: 'estaca', perene: true });
  C('tomilho', 'Tomilho', '🌿', 'Tempero', [7, 21], 45, 100, 60, null, 3, '6 h', [15, 28], [6.0, 7.5], 'primeira colheita',
    'Erva pequena e perfumada, ótima em vaso.',
    'Gosta de sol e solo seco entre as regas.', { veg: 'estaca', perene: true });
  C('oregano', 'Orégano', '🌿', 'Tempero', [7, 14], 40, 90, 50, null, 3, '6 h', [15, 30], [6.0, 7.5], 'primeira colheita',
    'Erva de folhinhas aromáticas que fica mais forte quando seca.',
    'Pouca água e muito sol deixam o aroma mais intenso.', { veg: 'estaca', perene: true });
  C('salvia', 'Sálvia', '🌿', 'Tempero', [10, 21], 45, 100, 60, null, 3, '6 h', [15, 28], [6.0, 7.0], 'primeira colheita',
    'Erva de folha aveludada, usada em carnes e chás.',
    'Solo drenado; não encharque.', { veg: 'estaca', perene: true });
  C('capim-santo', 'Capim-santo / Capim-limão', '🌾', 'Tempero', [10, 20], 0, 90, 75, null, 3, '6–8 h', [20, 32], [5.5, 7.0], 'primeiro corte',
    'Touceira de folhas compridas com cheiro de limão, usada em chá.',
    'Plante pedaços da touceira com raiz. Muito resistente à seca.', { veg: 'touceira', soVeg: true, perene: true, alias: ['capim cidreira', 'capim limão', 'capim-cidreira'] });
  C('erva-cidreira', 'Erva-cidreira / Melissa', '🌿', 'Tempero', [10, 20], 40, 90, 50, null, 2, '4–6 h', [15, 28], [6.0, 7.0], 'primeira colheita',
    'Erva calmante de folha perfumada. No Nordeste o nome também é usado para a lípia (cidreira-de-arbusto).',
    'Pega bem por estaca e por divisão da touceira.', { veg: 'estaca', perene: true, alias: ['melissa', 'cidreira'] });
  C('camomila', 'Camomila', '🌼', 'Tempero', [7, 14], 30, 75, 50, 60, 2, '6 h', [15, 25], [6.0, 7.5], 'colheita das flores',
    'Planta de chá: colhem-se as florzinhas brancas e amarelas.',
    'Prefere clima mais fresco. Colha as flores recém-abertas, de manhã.');
  C('endro', 'Endro / Dill', '🌿', 'Tempero', [7, 14], 0, 50, 35, null, 1, '6 h', [15, 25], [6.0, 7.0], 'colheita',
    'Erva de folha fina e sabor anisado, usada em peixes e conservas.',
    'Não gosta de transplante. Semeie direto.', { alias: ['dill', 'aneto'] });
  C('funcho', 'Funcho / Erva-doce', '🌿', 'Tempero', [7, 14], 30, 90, 60, null, 2, '6 h', [15, 28], [6.0, 7.0], 'colheita',
    'Planta de sabor anisado: usam-se folhas, bulbo e sementes.',
    'Plante longe do coentro e do endro (cruzam entre si).', { alias: ['erva doce', 'erva-doce'] });
  C('coentro-do-para', 'Coentrão / Chicória-do-pará', '🌿', 'Tempero', [14, 30], 40, 90, 50, null, 1, '3–5 h', [22, 32], [5.5, 6.8], 'primeiro corte',
    'Folha serrilhada com cheiro de coentro bem forte, muito usada no Norte e Nordeste. Aguenta mais calor que o coentro.',
    'Gosta de meia-sombra e umidade. Corte as folhas de fora.', { alias: ['coentrão', 'coentro de pasto', 'chicória do pará', 'culantro'], perene: true });
  C('alho', 'Alho', '🧄', 'Tempero', [7, 14], 0, 150, 120, null, 2, '6 h', [13, 25], [6.0, 7.0], 'colheita',
    'Plantado pelo dente (bulbilho). Precisa de frio para formar cabeças grandes.',
    'Enterre o dente com a ponta para cima, 3 cm de fundo. Pare de regar 20 dias antes de colher.', { veg: 'bulbilho', soVeg: true });
  C('cebola', 'Cebola', '🧅', 'Tempero', [7, 14], 45, 150, 110, null, 2, '6–8 h', [15, 28], [6.0, 7.0], 'colheita',
    'Bulbo mais usado na cozinha. No Nordeste (Vale do São Francisco) se planta o ano todo com irrigação.',
    'Colha quando as folhas tombarem e secarem. Deixe curar no sol uns dias.');
  C('alho-poro', 'Alho-poró', '🧅', 'Tempero', [7, 14], 60, 150, 100, null, 1, '6 h', [15, 25], [6.0, 7.0], 'colheita',
    'Parente da cebola com talo branco grosso.',
    'Chegue terra no pé para o talo ficar mais branco e comprido.', { alias: ['alho poró', 'alho porro'] });
  C('gengibre', 'Gengibre', '🫚', 'Tempero', [15, 40], 0, 240, 210, null, 2, '3–5 h', [22, 32], [5.5, 6.5], 'colheita',
    'Rizoma picante plantado por pedaços com "olhos" (gemas).',
    'Meia-sombra e solo fofo e úmido. Colha quando as folhas amarelarem.', { veg: 'rizoma', soVeg: true });
  C('acafrao', 'Açafrão-da-terra / Cúrcuma', '🟠', 'Tempero', [15, 40], 0, 240, 210, null, 2, '4–6 h', [22, 32], [5.5, 7.0], 'colheita',
    'Rizoma alaranjado usado como tempero e corante (cúrcuma).',
    'Plante pedaços do rizoma no início das chuvas. Colha quando a parte de cima secar.', { veg: 'rizoma', soVeg: true, alias: ['cúrcuma', 'curcuma'] });
  C('boldo', 'Boldo', '🌿', 'Tempero', [15, 30], 0, 90, 60, null, 3, '6 h', [18, 32], [6.0, 7.5], 'primeira colheita',
    'Planta medicinal de folha grossa e amarga (boldo-brasileiro).',
    'Pega fácil por estaca. Aguenta seca.', { veg: 'estaca', soVeg: true, perene: true });

  /* ---------------- RAÍZES, TUBÉRCULOS E BULBOS ---------------- */
  C('rabanete', 'Rabanete', '🌸', 'Raiz', [3, 5], 0, 30, 25, null, 1, '4–6 h', [10, 25], [6.0, 7.0], 'colheita',
    'A hortaliça mais rápida: ótima para testar e para crianças.',
    'Vaso com pelo menos 15 cm de fundo. Colha logo, senão fica oco e picante.');
  C('cenoura', 'Cenoura', '🥕', 'Raiz', [7, 14], 0, 95, 80, null, 1, '5–6 h', [16, 25], [6.0, 6.8], 'colheita',
    'Raiz que não aceita transplante: sempre semeie no lugar definitivo.',
    'Substrato fofo e sem pedras. Faça o desbaste deixando 5 cm entre as plantas.');
  C('beterraba', 'Beterraba', '🟣', 'Raiz', [5, 10], 25, 70, 50, null, 1, '5–6 h', [15, 24], [6.0, 7.0], 'colheita',
    'Raiz roxa e doce. Cada "semente" é um cachinho que gera várias plantas.',
    'Faça o desbaste deixando a mais forte. Aceita transplante quando nova.');
  C('nabo', 'Nabo', '⚪', 'Raiz', [4, 7], 0, 50, 40, null, 1, '5–6 h', [12, 25], [6.0, 7.0], 'colheita',
    'Raiz branca de ciclo curto, parente do rabanete.',
    'Colha ainda médio: grande demais fica fibroso.');
  C('batata-doce', 'Batata-doce', '🍠', 'Raiz', [7, 14], 0, 120, 120, null, 3, '6–8 h', [20, 32], [5.5, 6.5], 'colheita',
    'Plantada por rama (pedaço do galho). Muito rústica, aguenta seca e solo fraco.',
    'Use ramas de 30–40 cm com 4–6 gemas, enterrando a metade. Leiras altas ajudam a raiz engrossar.', { veg: 'rama', soVeg: true });
  C('mandioca', 'Mandioca / Aipim / Macaxeira', '🥔', 'Raiz', [10, 20], 0, 300, 300, null, 7, '6–8 h', [20, 32], [5.5, 6.5], 'colheita',
    'Base da roça no Nordeste. Plantada por maniva (pedaço do caule). A mansa (aipim/macaxeira) colhe de 8 a 12 meses; a brava (farinha) de 12 a 18.',
    'Maniva de 20 cm com 5–7 gemas, deitada a 10 cm de fundo, no início das chuvas. Mantenha o mato limpo nos 3 primeiros meses.', { veg: 'maniva', soVeg: true, alias: ['aipim', 'macaxeira', 'mandioca brava', 'mandioca mansa'] });
  C('inhame', 'Inhame / Cará', '🥔', 'Raiz', [20, 40], 0, 240, 240, null, 5, '6 h', [22, 32], [5.5, 6.5], 'colheita',
    'Tubérculo plantado por pedaço da batata-semente, muito cultivado no Nordeste (PB, PE, BA).',
    'Plante no início das chuvas e tutore as ramas. Colha quando a rama secar.', { veg: 'túbera', soVeg: true, alias: ['cará', 'cara', 'inhame da costa'] });
  C('batata', 'Batata-inglesa', '🥔', 'Raiz', [14, 21], 0, 100, 100, null, 2, '6 h', [15, 25], [5.0, 6.0], 'colheita',
    'Plantada pela batata-semente brotada. Prefere clima ameno.',
    'Chegue terra no pé quando a planta tiver 20 cm: batata exposta ao sol fica verde e não se come.', { veg: 'batata-semente', soVeg: true, alias: ['batata inglesa'] });
  C('mandioquinha', 'Mandioquinha / Batata-baroa', '🥕', 'Raiz', [15, 30], 0, 300, 300, null, 3, '5–6 h', [15, 24], [5.5, 6.5], 'colheita',
    'Raiz amarela e perfumada de clima ameno (serras).',
    'Plantada por muda (rebento) com o topo cortado.', { veg: 'rebento', soVeg: true, alias: ['batata baroa', 'batata salsa'] });

  /* ---------------- FRUTOS DE HORTA ---------------- */
  C('tomate', 'Tomate', '🍅', 'Fruto', [5, 10], 30, 110, 80, 60, 1, '6–8 h', [18, 30], [6.0, 6.8], 'primeiros frutos',
    'Fruto de horta mais consumido. Normalmente faz muda e transplanta com 4–6 folhas.',
    'Tutore e regue no pé (folha molhada traz fungo). Retire os brotos laterais (desbrota) no tomate de mesa.');
  C('tomate-cereja', 'Tomate-cereja', '🍅', 'Fruto', [5, 10], 30, 90, 65, 50, 1, '6–8 h', [18, 30], [6.0, 6.8], 'primeiros frutos',
    'Tomate pequeno e doce, mais rústico e produtivo em vaso.',
    'Precisa de muita luz e tutor (estaca). Regue no solo, não nas folhas.');
  C('pimenta', 'Pimenta', '🌶️', 'Fruto', [7, 21], 40, 110, 75, 70, 2, '6–8 h', [20, 30], [6.0, 7.0], 'primeiros frutos',
    'Malagueta, dedo-de-moça, biquinho, de-cheiro, cumari… Planta que produz por anos.',
    'Germina melhor no calor (25–30 °C). Gosta de solo que seca um pouco entre regas.', { perene: true, alias: ['malagueta', 'dedo de moça', 'biquinho', 'pimenta de cheiro', 'cumari', 'habanero'] });
  C('pimentao', 'Pimentão', '🫑', 'Fruto', [7, 14], 40, 120, 85, 75, 1, '6–8 h', [20, 30], [6.0, 6.8], 'primeiros frutos',
    'Fruto de ciclo longo; colhe verde ou espera amadurecer (vermelho/amarelo).',
    'Precisa de vaso grande (15 L ou mais) ou cova bem adubada. Tutore.');
  C('pepino', 'Pepino', '🥒', 'Fruto', [3, 7], 15, 50, 40, 30, 1, '6–8 h', [20, 30], [6.0, 7.0], 'primeiros frutos',
    'Trepadeira de ciclo rápido. Pode semear direto ou fazer muda em copinho.',
    'Dê um suporte para subir. Muita água na fase de fruto; colha pequeno e sempre.');
  C('abobrinha', 'Abobrinha', '🥒', 'Fruto', [4, 8], 15, 50, 40, 35, 1, '6–8 h', [20, 30], [6.0, 7.0], 'primeiros frutos',
    'Abobrinha italiana ou de tronco, colhida novinha.',
    'Se as flores caírem sem fruto, falta polinização: passe a flor macho na fêmea de manhã.', { alias: ['abobrinha italiana'] });
  C('abobora', 'Abóbora / Jerimum', '🎃', 'Fruto', [4, 8], 15, 110, 95, 50, 2, '6–8 h', [20, 32], [5.5, 7.0], 'colheita',
    'Jerimum, moranga, abóbora-de-pescoço, cabotiá. Rama que se espalha muito na roça.',
    'Covas bem adubadas com esterco, 2–3 m entre covas. Colha quando o talo secar e a casca não marcar com a unha.', { alias: ['jerimum', 'moranga', 'cabotiá', 'abóbora de pescoço', 'abobora japonesa'] });
  C('maxixe', 'Maxixe', '🥒', 'Fruto', [4, 8], 0, 55, 45, 35, 2, '6–8 h', [22, 32], [5.5, 7.0], 'primeiros frutos',
    'Fruto espinhoso típico do Nordeste (maxixada). Rama rústica e muito produtiva.',
    'Semeie direto na cova. Colha os frutos novos, a cada 2–3 dias.');
  C('quiabo', 'Quiabo', '🌱', 'Fruto', [5, 10], 0, 70, 55, 50, 2, '6–8 h', [22, 35], [6.0, 7.0], 'primeiros frutos',
    'Hortaliça de calor, produz por meses. Colhe-se o fruto novo e macio.',
    'Deixe a semente de molho 24 h antes de plantar. Colha a cada 2 dias: o quiabo passa do ponto rápido.');
  C('berinjela', 'Berinjela', '🍆', 'Fruto', [7, 14], 35, 110, 80, 70, 1, '6–8 h', [22, 32], [5.5, 6.8], 'primeiros frutos',
    'Fruto de calor, parente do tomate. Planta grande e produtiva.',
    'Faça muda e transplante com 4–5 folhas. Colha com a casca ainda brilhante.');
  C('jilo', 'Jiló', '🟢', 'Fruto', [7, 14], 35, 100, 70, 65, 1, '6–8 h', [22, 32], [5.5, 6.8], 'primeiros frutos',
    'Fruto amargo muito apreciado no Sudeste e Nordeste.',
    'Colha verde, antes de amarelar.');
  C('chuchu', 'Chuchu', '🟢', 'Fruto', [15, 30], 0, 120, 100, 80, 2, '6 h', [18, 28], [5.5, 6.8], 'primeiros frutos',
    'Trepadeira perene: planta-se o próprio chuchu brotado.',
    'Enterre o fruto brotado deitado, deixando a ponta de fora. Precisa de latada ou cerca.', { veg: 'fruto brotado', soVeg: true, perene: true });
  C('vagem', 'Feijão-vagem', '🫛', 'Fruto', [4, 8], 0, 60, 50, 40, 1, '6–8 h', [18, 30], [6.0, 7.0], 'primeiras vagens',
    'Feijão colhido verde, na vagem. Tipos de rama (tutorados) e anão.',
    'Semeie direto (2–3 sementes por cova). Colha as vagens antes de os grãos marcarem.', { alias: ['vagem'] });
  C('ervilha', 'Ervilha', '🫛', 'Fruto', [5, 10], 0, 75, 60, 45, 2, '6 h', [13, 22], [6.0, 7.5], 'colheita',
    'Leguminosa de clima ameno; colhe-se a vagem verde ou o grão.',
    'Precisa de suporte para enrolar. Não gosta de calor forte.');
  C('morango', 'Morango', '🍓', 'Fruto', [14, 30], 0, 120, 75, 45, 1, '6–8 h', [15, 25], [5.5, 6.5], 'primeiros frutos',
    'Quase sempre plantado por muda (estolão). Produz por 1–2 anos.',
    'Plante a muda sem enterrar a coroa (o centro). Solo levemente ácido e cobertura no chão.', { veg: 'muda (estolão)', soVeg: true, perene: true });
  C('melao', 'Melão', '🍈', 'Fruto', [4, 8], 15, 90, 75, 35, 1, '8 h', [22, 32], [6.0, 7.0], 'colheita',
    'Fruto de clima quente e seco (RN e CE são os maiores produtores).',
    'Chuva na maturação tira o açúcar. Colha quando soltar fácil do talo (melão amarelo: casca bem amarela).');
  C('melancia', 'Melancia', '🍉', 'Fruta', [4, 8], 15, 85, 70, 35, 2, '8 h', [22, 32], [6.0, 7.0], 'colheita',
    'Fruta de rama anual, de ciclo curto (75–90 dias da semente). Pode semear na cova ou fazer muda em copinho/bandeja.',
    'Muda pronta com 2 folhas definitivas (15–20 dias): transplante sem quebrar o torrão. Ponto de colheita: gavinha ao lado do fruto seca e "barriga" amarela.');
  C('microverdes', 'Microverdes', '🌱', 'Broto', [1, 3], 0, 10, 10, null, 1, '4 h', [18, 24], [6.0, 7.0], 'colheita',
    'Plantinhas colhidas com as primeiras folhas (rúcula, mostarda, beterraba, girassol…).',
    'Bandeja rasa, semeadura bem densa, borrife água 2× ao dia. Colha com tesoura.', { alias: ['microgreens', 'brotos'] });

  /* ---------------- GRÃOS E CULTURAS DE ROÇA ---------------- */
  C('milho', 'Milho', '🌽', 'Grão', [4, 7], 0, 120, 120, 55, 3, '8 h', [20, 32], [5.5, 7.0], 'colheita do grão',
    'Base da roça. Milho-verde fica pronto por volta de 80–90 dias; o grão seco, de 110 a 130.',
    'Plante no início das chuvas, 2–3 sementes por cova. Faltar água no pendoamento derruba a produção.', { alias: ['milho verde', 'milho crioulo'] });
  C('feijao', 'Feijão (carioca / preto)', '🫘', 'Grão', [4, 8], 0, 90, 90, 40, 3, '8 h', [18, 30], [5.5, 6.5], 'colheita',
    'Feijão-comum: ciclo de 85–95 dias. Sensível a seca na florada.',
    '2–3 sementes por cova a 3–5 cm de fundo. Colha quando as vagens estiverem secas.', { alias: ['feijão carioca', 'feijão preto', 'feijão comum'] });
  C('feijao-corda', 'Feijão-de-corda / Caupi', '🫘', 'Grão', [4, 7], 0, 70, 70, 40, 4, '8 h', [20, 35], [5.5, 7.0], 'colheita',
    'Feijão-macassar/fradinho: o mais plantado no semiárido, aguenta seca e calor. Colhe verde ou seco.',
    'Semeie direto na cova. Pode colher a vagem verde (feijão-verde) por volta dos 60 dias.', { alias: ['feijão de corda', 'caupi', 'macassar', 'fradinho', 'feijão verde'] });
  C('fava', 'Fava', '🫘', 'Grão', [5, 10], 0, 100, 100, 50, 4, '8 h', [20, 32], [5.5, 7.0], 'colheita',
    'Fava-de-lima, muito plantada no Nordeste junto com o milho.',
    'Gosta de suporte (pode subir no pé de milho já colhido).', { alias: ['feijão fava', 'fava de lima'] });
  C('andu', 'Feijão-guandu / Andu', '🫘', 'Grão', [5, 10], 0, 120, 120, 80, 5, '8 h', [20, 35], [5.0, 7.0], 'colheita',
    'Arbusto que dá feijão e serve de adubo verde e forragem. Muito resistente à seca.',
    'Produz por 2–3 anos. Ótimo para melhorar o solo e fazer quebra-vento.', { alias: ['guandu', 'andu', 'feijão andu'], perene: true });
  C('amendoim', 'Amendoim', '🥜', 'Grão', [5, 10], 0, 110, 110, 30, 4, '8 h', [22, 32], [5.5, 6.5], 'colheita',
    'Leguminosa cujas vagens se formam debaixo da terra.',
    'Solo arenoso e solto ajuda o "esporão" a entrar na terra. Colha quando as folhas amarelarem.');
  C('soja', 'Soja', '🫘', 'Grão', [5, 7], 0, 120, 120, 50, 4, '8 h', [20, 30], [6.0, 6.8], 'colheita',
    'Grão de lavoura mecanizada, rico em proteína.',
    'Inocule a semente com bactéria (rizóbio) para fixar nitrogênio.');
  C('sorgo', 'Sorgo', '🌾', 'Grão', [4, 8], 0, 110, 110, 65, 5, '8 h', [22, 35], [5.5, 7.5], 'colheita',
    'Cereal mais resistente à seca que o milho; usado em grão, silagem e forragem.',
    'Boa opção para o semiárido. Rebrota depois do corte (soca).');
  C('arroz', 'Arroz', '🌾', 'Grão', [5, 10], 25, 120, 100, 85, 1, '8 h', [20, 32], [5.0, 6.5], 'colheita',
    'Cereal de várzea (alagado) ou de sequeiro.',
    'O de sequeiro precisa de chuva bem distribuída.');
  C('girassol', 'Girassol', '🌻', 'Grão', [5, 10], 0, 95, 95, 60, 3, '8 h', [18, 32], [6.0, 7.5], 'colheita',
    'Flor grande que dá semente (óleo, ração, alimentação de pássaros).',
    'Colha quando o verso da flor ficar amarelo-amarronzado.');
  C('gergelim', 'Gergelim', '⚪', 'Grão', [4, 7], 0, 100, 100, 40, 5, '8 h', [22, 35], [5.5, 7.5], 'colheita',
    'Grão oleaginoso muito tolerante à seca, bom para o semiárido.',
    'Colha quando as cápsulas de baixo começarem a abrir; seque em feixes em pé.');
  C('algodao', 'Algodão', '☁️', 'Grão', [5, 10], 0, 150, 150, 60, 5, '8 h', [22, 35], [5.5, 7.0], 'colheita',
    'Planta de fibra; há algodão colorido desenvolvido para o semiárido (Embrapa).',
    'Colha os capulhos bem abertos e secos.');
  C('mamona', 'Mamona', '🌿', 'Grão', [7, 14], 0, 150, 150, 60, 7, '8 h', [20, 35], [5.0, 7.0], 'colheita',
    'Oleaginosa rústica de sequeiro. A semente é tóxica.',
    'Não deixe animais nem crianças comerem as sementes.');
  C('cana', 'Cana-de-açúcar', '🎋', 'Grão', [15, 30], 0, 365, 365, null, 5, '8 h', [22, 35], [5.5, 7.0], 'primeiro corte',
    'Plantada por tolete (pedaço do colmo). Usada para açúcar, garapa, rapadura e ração.',
    'Toletes com 3 gemas, deitados no sulco. Rebrota por vários cortes (soca).', { veg: 'tolete', soVeg: true, perene: true, alias: ['cana de açúcar', 'cana'] });
  C('palma', 'Palma forrageira', '🌵', 'Forrageira', [20, 40], 0, 540, 540, null, 15, '8 h', [20, 38], [5.5, 7.5], 'primeiro corte',
    'Cacto forrageiro, reserva de alimento e água para o gado no semiárido.',
    'Plante a raquete (cladódio) enterrada pela metade, em pé ou inclinada. Primeiro corte com 18–24 meses.', { veg: 'raquete', soVeg: true, perene: true, alias: ['palma', 'palma doce', 'orelha de elefante'] });
  C('capim', 'Capim (pastagem)', '🌾', 'Forrageira', [7, 21], 0, 90, 90, null, 7, '8 h', [20, 35], [5.0, 7.0], 'primeiro pastejo',
    'Braquiária, mombaça, tanzânia, massai, buffel… Formação de pasto por semente ou muda.',
    'Plante com chuva garantida. O primeiro pastejo deve ser leve, quando o capim estiver bem enraizado.', { perene: true, alias: ['braquiária', 'braquiaria', 'mombaça', 'tanzânia', 'massai', 'buffel', 'capim elefante', 'pastagem'] });

  /* ---------------- FRUTAS (perenes, de muda) ---------------- */
  C('maracuja', 'Maracujá', '🟡', 'Fruta', [10, 30], 50, 270, 210, 190, 2, '6–8 h', [21, 32], [5.5, 6.8], 'primeiros frutos',
    'Trepadeira perene; o maracujá-azedo começa a produzir 6–8 meses após o plantio da muda e produz por 2–3 anos.',
    'Muda pronta com 15–25 cm e 3–4 pares de folhas (45–60 dias). Na roça, espaldeira com arame a 1,8–2 m. Flor abre à tarde: a mamangava poliniza.', { perene: true, alias: ['maracujá azedo', 'maracujá amarelo', 'maracuja doce'] });
  C('mamao', 'Mamão', '🥭', 'Fruta', [10, 20], 45, 300, 255, 165, 2, '6–8 h', [22, 32], [5.5, 6.7], 'primeiros frutos',
    'Começa a florir 4–5 meses após o transplante e a colher 8–10 meses após o plantio da muda.',
    'Lave as sementes para tirar a mucilagem. Plante 3 mudas por cova e deixe a mais produtiva (hermafrodita) na florada. Não encharque.', { perene: true, alias: ['papaia', 'formosa'] });
  C('banana', 'Banana', '🍌', 'Fruta', [20, 40], 0, 400, 400, 270, 3, '8 h', [22, 32], [5.5, 6.5], 'primeiro cacho',
    'Plantada por muda (filhote/rizoma). Primeiro cacho em 12–15 meses; depois os filhos continuam produzindo.',
    'Deixe "mãe, filha e neta" por touceira e corte os demais filhotes. Adube com potássio.', { veg: 'filhote', soVeg: true, perene: true, alias: ['banana prata', 'banana nanica', 'banana da terra'] });
  C('abacaxi', 'Abacaxi', '🍍', 'Fruta', [20, 40], 0, 540, 480, 390, 7, '8 h', [22, 32], [4.5, 5.5], 'colheita',
    'Plantado por coroa, filhote ou rebento. Leva 14–20 meses até a colheita.',
    'Solo arenoso e ácido, bem drenado. A florada pode ser induzida para colher na época certa.', { veg: 'coroa / filhote', soVeg: true, alias: ['ananás'] });
  C('manga', 'Manga', '🥭', 'Fruta', [15, 30], 180, 1640, 1095, 1000, 7, '8 h', [22, 35], [5.5, 7.0], 'primeiros frutos',
    'Árvore de calor; muda enxertada produz em 3–4 anos (de semente, 5–7).',
    'Prefira muda enxertada. Florada precisa de período seco.', { perene: true });
  C('caju', 'Caju', '🍎', 'Fruta', [15, 25], 90, 820, 730, 640, 10, '8 h', [22, 35], [4.5, 6.5], 'primeiros frutos',
    'Fruta símbolo do Nordeste. O cajueiro-anão precoce produz a partir do 2º ano.',
    'Muito resistente à seca. Prefira o anão precoce enxertado.', { perene: true, alias: ['cajueiro', 'caju anão'] });
  C('goiaba', 'Goiaba', '🍐', 'Fruta', [15, 30], 150, 700, 545, 450, 5, '8 h', [20, 32], [5.5, 7.0], 'primeiros frutos',
    'Fruta rústica e produtiva; muda enxertada ou de estaca produz em 1,5 a 2 anos.',
    'Faça poda de produção: a goiaba frutifica nos ramos novos.', { perene: true });
  C('acerola', 'Acerola', '🍒', 'Fruta', [20, 40], 120, 570, 450, 360, 4, '8 h', [22, 32], [5.5, 6.5], 'primeiros frutos',
    'Arbusto que produz várias safras por ano, rico em vitamina C.',
    'Prefira muda de estaca ou enxerto (semente germina pouco).', { perene: true, veg: 'estaca' });
  C('limao', 'Limão', '🍋', 'Fruta', [15, 30], 240, 1140, 900, 820, 5, '8 h', [20, 32], [5.5, 6.5], 'primeiros frutos',
    'Limão Tahiti e galego. Muda enxertada produz em 2–3 anos.',
    'Compre muda certificada (livre de doenças dos citros).', { perene: true, alias: ['limão tahiti', 'limão galego'] });
  C('laranja', 'Laranja', '🍊', 'Fruta', [15, 30], 300, 1400, 1095, 1000, 5, '8 h', [20, 32], [5.5, 6.5], 'primeiros frutos',
    'Laranja-pera, lima, bahia… Muda enxertada produz em 3 anos.',
    'A Bahia (Recôncavo e Litoral Norte) é polo de citros: procure viveiro registrado.', { perene: true, alias: ['laranja pera', 'laranja lima'] });
  C('tangerina', 'Tangerina / Mexerica', '🍊', 'Fruta', [15, 30], 300, 1400, 1095, 1000, 5, '8 h', [20, 32], [5.5, 6.5], 'primeiros frutos',
    'Também chamada de mexerica, bergamota ou laranja-cravo.',
    'Muda enxertada; faça raleio se carregar demais.', { perene: true, alias: ['mexerica', 'bergamota', 'ponkan'] });
  C('coco', 'Coco', '🥥', 'Fruta', [60, 120], 240, 1700, 1460, 1250, 5, '8 h', [24, 34], [5.5, 7.5], 'primeiros cocos',
    'O coqueiro-anão começa a produzir com 3–4 anos.',
    'Plante o coco inteiro deitado, meio enterrado, para germinar. Gosta de muita água e sol.', { perene: true, alias: ['coqueiro', 'coco verde', 'coco anão'] });
  C('abacate', 'Abacate', '🥑', 'Fruta', [20, 40], 180, 1640, 1460, 1350, 5, '8 h', [20, 32], [5.5, 6.5], 'primeiros frutos',
    'Árvore grande; muda enxertada produz em 3–4 anos.',
    'Não tolera encharcamento.', { perene: true });
  C('jaca', 'Jaca', '🍈', 'Fruta', [15, 30], 120, 1580, 1460, 1350, 7, '8 h', [22, 35], [5.0, 7.0], 'primeiros frutos',
    'Árvore muito rústica do litoral e Recôncavo baiano.',
    'Precisa de muito espaço (8–10 m entre plantas).', { perene: true });
  C('pitaya', 'Pitaya', '🐉', 'Fruta', [15, 30], 0, 450, 365, 300, 5, '8 h', [20, 35], [5.5, 7.0], 'primeiros frutos',
    'Cacto trepador; plantado por estaca, produz a partir de 1 ano.',
    'Precisa de mourão com suporte no topo. Flor abre à noite.', { veg: 'estaca', soVeg: true, perene: true, alias: ['fruta do dragão'] });
  C('graviola', 'Graviola', '🍈', 'Fruta', [15, 40], 180, 1275, 1095, 1000, 5, '8 h', [22, 32], [5.5, 6.5], 'primeiros frutos',
    'Árvore de clima quente e úmido; produz em 3 anos.',
    'Polinização manual aumenta muito a produção.', { perene: true });
  C('pinha', 'Pinha / Fruta-do-conde', '🍏', 'Fruta', [20, 40], 150, 1050, 900, 800, 5, '8 h', [22, 32], [5.5, 7.0], 'primeiros frutos',
    'Muito plantada no semiárido baiano. Produz em 2–3 anos.',
    'Poda na época seca e irrigação induzem a florada.', { perene: true, alias: ['fruta do conde', 'ata', 'araticum'] });
  C('umbu', 'Umbu', '🟢', 'Fruta', [30, 60], 180, 2000, 1825, 1700, 15, '8 h', [22, 38], [5.0, 7.5], 'primeiros frutos',
    'Árvore símbolo da caatinga, guarda água nas raízes (batatas). De semente demora 5 anos ou mais.',
    'Enxerto ou estaca grande encurtam o tempo. Resistentíssimo à seca.', { perene: true, alias: ['imbu', 'umbuzeiro'] });
  C('caja', 'Cajá / Seriguela', '🟠', 'Fruta', [20, 40], 0, 1095, 730, 640, 10, '8 h', [22, 35], [5.5, 7.0], 'primeiros frutos',
    'Cajá, cajarana e seriguela pegam por estaca grande (galho) e produzem em 2–3 anos.',
    'Plante estacas de 1 m no início das chuvas.', { veg: 'estaca', soVeg: true, perene: true, alias: ['seriguela', 'siriguela', 'cajá', 'cajarana', 'taperebá'] });
  C('tamarindo', 'Tamarindo', '🟤', 'Fruta', [7, 21], 150, 2000, 1825, 1700, 15, '8 h', [22, 35], [5.5, 7.5], 'primeiros frutos',
    'Árvore grande e resistente à seca; de semente produz em 5 anos ou mais.',
    'Muito rústica, ótima sombra para o gado.', { perene: true });
  C('jabuticaba', 'Jabuticaba', '🫐', 'Fruta', [20, 40], 365, 2190, 1825, 1700, 3, '6–8 h', [18, 30], [5.5, 6.5], 'primeiros frutos',
    'Fruta no tronco. De semente leva 6–10 anos; a híbrida/enxertada, 2–3.',
    'Gosta de água constante. Prefira muda enxertada.', { perene: true });
  C('pitanga', 'Pitanga', '🍒', 'Fruta', [20, 40], 180, 910, 730, 640, 5, '8 h', [20, 32], [5.5, 6.5], 'primeiros frutos',
    'Arbusto nativo, rústico, que produz em 2 anos.',
    'Aguenta bem o calor; pode ser cerca-viva.', { perene: true });
  C('amora', 'Amora', '🫐', 'Fruta', [15, 30], 0, 450, 365, 300, 3, '6–8 h', [18, 30], [5.5, 7.0], 'primeiros frutos',
    'Amoreira: pega fácil por estaca e produz já no 1º ano.',
    'Pode após a colheita para estimular brotos novos.', { veg: 'estaca', soVeg: true, perene: true });
  C('uva', 'Uva', '🍇', 'Fruta', [20, 40], 0, 600, 545, 450, 5, '8 h', [20, 32], [5.5, 7.0], 'primeiros cachos',
    'No Vale do São Francisco a videira colhe duas safras por ano.',
    'Plantada por estaca ou muda enxertada; precisa de latada ou espaldeira e poda.', { veg: 'estaca', soVeg: true, perene: true, alias: ['videira', 'parreira'] });
  C('roma', 'Romã', '🔴', 'Fruta', [20, 40], 0, 900, 730, 640, 5, '8 h', [20, 35], [5.5, 7.5], 'primeiros frutos',
    'Arbusto muito tolerante à seca e ao calor.',
    'Pega bem por estaca.', { veg: 'estaca', perene: true });
  C('figo', 'Figo', '🟣', 'Fruta', [20, 40], 0, 600, 545, 450, 4, '8 h', [18, 32], [6.0, 7.5], 'primeiros frutos',
    'Figueira de estaca; produz no 2º ano.',
    'Poda anual de inverno; gosta de solo calcário.', { veg: 'estaca', soVeg: true, perene: true });
  C('acai', 'Açaí', '🫐', 'Fruta', [25, 60], 180, 1275, 1095, 1000, 1, '6–8 h', [22, 32], [4.5, 6.0], 'primeiros cachos',
    'Palmeira de várzea; produz a partir do 3º ano.',
    'Muita água; não aguenta seca.', { perene: true });
  C('cupuacu', 'Cupuaçu', '🟤', 'Fruta', [15, 30], 240, 1335, 1095, 1000, 3, '6 h', [22, 32], [5.0, 6.5], 'primeiros frutos',
    'Parente do cacau, da Amazônia; produz em 3 anos.',
    'Gosta de meia-sombra quando jovem.', { perene: true });
  C('cacau', 'Cacau', '🍫', 'Fruta', [10, 20], 150, 1245, 1095, 1000, 3, '4–6 h', [22, 32], [5.5, 6.5], 'primeiros frutos',
    'Base do sul da Bahia; cultivado na sombra (cabruca). Produz no 3º ano.',
    'Precisa de sombra e umidade. Prefira clones resistentes à vassoura-de-bruxa.', { perene: true });
  C('cafe', 'Café', '☕', 'Fruta', [45, 60], 180, 910, 730, 640, 5, '6 h', [18, 28], [5.5, 6.5], 'primeira colheita',
    'Muda de saquinho fica pronta em 6 meses; primeira colheita 2 anos após o plantio (Chapada Diamantina e Planalto da Bahia).',
    'Plante no início das chuvas. Arábica em altitude; conilon (robusta) em regiões quentes.', { perene: true, alias: ['café arábica', 'conilon'] });
  C('physalis', 'Physalis', '🟠', 'Fruta', [7, 14], 40, 150, 110, 80, 2, '6–8 h', [18, 28], [5.5, 7.0], 'primeiros frutos',
    'Frutinha dentro de uma "capinha", de alto valor de venda.',
    'Tutore. Colha quando a capinha ficar seca e cor de palha.', { alias: ['fisális'] });

  /* ---- adapta para o formato do app (alvo = colheita plantando direto da semente) ---- */
  for (const p of L) {
    p.alvo = p.c; p.alvoLabel = p.lbl;
    if (!p.umid) p.umid = p.grupo === 'Fruta' || p.grupo === 'Grão' || p.grupo === 'Forrageira' ? [45, 70] : [55, 75];
  }
  window.CATALOGO = L;
})();

window.EVENTOS = {
  rega:        { e: "💧", nome: "Rega" },
  germinou:    { e: "🌱", nome: "Germinou/Pegou" },
  adubacao:    { e: "🧪", nome: "Adubação" },
  transplante: { e: "🪴", nome: "Transplante" },
  poda:        { e: "✂️", nome: "Poda/Desbaste" },
  praga:       { e: "🐛", nome: "Praga/Doença" },
  colheita:    { e: "🧺", nome: "Colheita" },
  foto:        { e: "📷", nome: "Foto" },
  observacao:  { e: "📝", nome: "Observação" },
  perda:       { e: "🥀", nome: "Perda" },
  venda:       { e: "💰", nome: "Venda" }
};
