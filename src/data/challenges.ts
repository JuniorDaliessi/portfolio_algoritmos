import { ChallengeDay } from '../types';

export const challengesData: ChallengeDay[] = [
  {
    day: "Dia 1",
    challenges: [
      {
        id: "dia1-desafio1",
        title: "Rotina para Acordar",
        versions: [
          {
            id: "dia1-desafio1-v1",
            title: "Algoritmo de Rotina Matinal",
            statement: `<h2>DESAFIO 01: Escreva o seu algoritmo para acordar</h2>
                        <p>Para começar a exercitar, quero que você pegue papel e caneta. Crie uma lista numerada de atividades que você faz quando acorda até o momento antes de ir tomar café. Usar papel e caneta tem o propósito de ajudar na fixação, e esse exemplo bobinho vai te ajudar a criar abstrações sobre algumas dessas etapas.</p>
                        <p>Vamos combinar o seguinte: Tem que ser na caneta e não pode ter rasura!</p>
                        <p>Você provavelmente vai ficar em dúvida sobre algumas dessas atividades. Por exemplo, se você escrever que a primeira coisa que faz é abrir os olhos, então poderá pensar se será necessário enumerar todos os outros movimentos do corpo, como esticar as pernas, ou andar até o banheiro. Em um primeiro momento, você é quem vai definir esse nível de abstração.</p>
                        <p>Sua lista pode ter 20 itens, ou 200. Você é quem decide. O importante é conseguir enumerar de forma cronológica, seguindo um passo a passo. Por isso esse desafio parece bobinho, mas é algo poderoso para você mesmo entender como é esse processo de pensamento dentro de você.</p>`,
            code: `// Encapsular em uma função anônima autoexecutável (opcional, para organizar)
(function() {
  // =========================================================
  // DESAFIO 1 - Rotina para Acordar
  // =========================================================
  const desafio1 = [
    "Ouço o despertador tocar",
    "Sinto minha consciência sair do modo hibernação",
    "Abro os olhos",
    "Desligo o despertador",
    "Espreguiço o corpo",
    "Levanto da cama",
    "Caminho até o banheiro",
    "Caminho até a geladeira",
    "Pego limão",
    "Pego água",
    "Espremo meio limão na água",
    "Bebo a água com limão",
    "Preparo algo para comer"
  ];

  console.log("=== DESAFIO 1 - Rotina para Acordar ===");
  desafio1.forEach((passo, index) => {
    console.log(\`\${index + 1}. \${passo}\`);
  });
  
  // Espaço extra no console
  console.log("\\n");
})();`,
            explanation: `<p>Este código demonstra como podemos usar arrays e funções JavaScript para representar uma sequência de passos para uma rotina matinal.</p>
                        <p>O código está contido em uma função anônima autoexecutável (IIFE), que é um padrão comumente usado para isolar variáveis e evitar poluição no escopo global.</p>
                        <p>O algoritmo apresenta uma lista de passos sequenciais que demonstram a rotina para acordar de uma pessoa, como:</p>
                        <ul>
                            <li>Despertar ao ouvir o despertador</li>
                            <li>Acordar (abrir os olhos, desligar o despertador)</li>
                            <li>Levantar e iniciar os preparativos matinais</li>
                            <li>Preparar uma bebida (água com limão)</li>
                            <li>Iniciar os preparativos para o café da manhã</li>
                        </ul>
                        <p>Para visualizar os passos, usamos o método <code>forEach()</code> do array para iterar sobre cada passo e exibi-lo com seu número correspondente.</p>
                        <p>Este é um bom exemplo de como algoritmos podem ser usados para decompor tarefas cotidianas em passos sequenciais lógicos, o que é a base do pensamento computacional.</p>`,
            trace: [
              {
                step: 1,
                call: "Início da IIFE",
                explanation: "A função anônima autoexecutável começa a ser executada"
              },
              {
                step: 2,
                call: "Declaração do array desafio1",
                explanation: "O array contendo os passos da rotina matinal é criado na memória"
              },
              {
                step: 3,
                call: "console.log(título)",
                saida: "=== DESAFIO 1 - Rotina para Acordar ===",
                explanation: "O título do desafio é exibido no console"
              },
              {
                step: 4,
                call: "desafio1.forEach() - primeira iteração",
                index: 0,
                passo: "Ouço o despertador tocar",
                saida: "1. Ouço o despertador tocar",
                explanation: "O primeiro elemento do array (índice 0) é processado e exibido com o número 1"
              },
              {
                step: 5,
                call: "desafio1.forEach() - segunda iteração",
                index: 1,
                passo: "Sinto minha consciência sair do modo hibernação",
                saida: "2. Sinto minha consciência sair do modo hibernação",
                explanation: "O segundo elemento do array (índice 1) é processado e exibido com o número 2"
              },
              {
                step: 6,
                call: "desafio1.forEach() - iterações subsequentes",
                explanation: "Os demais elementos do array são processados e exibidos sequencialmente"
              },
              {
                step: 7,
                call: "console.log(\"\\n\")",
                explanation: "Uma linha em branco é adicionada após a listagem dos passos"
              },
              {
                step: 8,
                call: "Fim da IIFE",
                explanation: "A função anônima autoexecutável termina sua execução"
              }
            ]
          },
          {
            id: "dia1-desafio1-v2",
            title: "Versão Iterativa",
            statement: `<h2>Sequência de Fibonacci - Versão Iterativa</h2>
                        <p>Implemente uma função iterativa para calcular o n-ésimo número da sequência de Fibonacci.</p>
                        <p>Na matemática, a sequência de Fibonacci é uma sequência de números inteiros, começando normalmente por 0 e 1, na qual cada termo subsequente corresponde à soma dos dois anteriores.</p>
                        <p>Por exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...</p>
                        <h3>Entrada:</h3>
                        <p>Um número inteiro não negativo n.</p>
                        <h3>Saída:</h3>
                        <p>O n-ésimo número na sequência de Fibonacci.</p>
                        <h3>Restrições:</h3>
                        <ul>
                            <li>0 ≤ n ≤ 45</li>
                        </ul>`,
            code: `function fibonacci(n) {
    // Casos base
    if (n <= 0) return 0;
    if (n === 1) return 1;
    
    // Abordagem iterativa
    let a = 0;
    let b = 1;
    let resultado;
    
    for (let i = 2; i <= n; i++) {
        resultado = a + b;
        a = b;
        b = resultado;
    }
    
    return resultado;
}

// Exemplo de uso
console.log(fibonacci(10)); // Deve retornar 55`,
            explanation: `<p>Esta implementação usa o método iterativo para calcular a sequência de Fibonacci.</p>
                        <p>Em vez de chamar a função recursivamente, usamos um loop para calcular cada número da sequência:</p>
                        <ul>
                            <li>Inicializamos duas variáveis <code>a</code> e <code>b</code> com os dois primeiros números da sequência: 0 e 1.</li>
                            <li>Em cada iteração do loop, calculamos o próximo número <code>resultado</code> somando <code>a</code> e <code>b</code>.</li>
                            <li>Em seguida, atualizamos <code>a</code> para ser igual a <code>b</code> e <code>b</code> para ser igual ao <code>resultado</code>.</li>
                            <li>Continuamos este processo n-1 vezes para chegar ao n-ésimo número de Fibonacci.</li>
                        </ul>
                        <p>Esta abordagem é muito mais eficiente que a recursiva, com complexidade de tempo O(n) em vez de O(2^n).</p>`,
            trace: [
              {
                step: 1,
                call: "fibonacci(5)",
                n: 5,
                variaveis: "a = 0, b = 1",
                explanation: "Inicializamos as variáveis a = 0 e b = 1 (os dois primeiros números da sequência)"
              },
              {
                step: 2,
                iteracao: "i = 2",
                calculo: "resultado = 0 + 1 = 1",
                atualizacao: "a = 1, b = 1",
                explanation: "1ª iteração: resultado = a + b = 0 + 1 = 1, atualizamos a = 1 e b = 1"
              },
              {
                step: 3,
                iteracao: "i = 3",
                calculo: "resultado = 1 + 1 = 2",
                atualizacao: "a = 1, b = 2",
                explanation: "2ª iteração: resultado = a + b = 1 + 1 = 2, atualizamos a = 1 e b = 2"
              },
              {
                step: 4,
                iteracao: "i = 4",
                calculo: "resultado = 1 + 2 = 3",
                atualizacao: "a = 2, b = 3",
                explanation: "3ª iteração: resultado = a + b = 1 + 2 = 3, atualizamos a = 2 e b = 3"
              },
              {
                step: 5,
                iteracao: "i = 5",
                calculo: "resultado = 2 + 3 = 5",
                atualizacao: "a = 3, b = 5",
                explanation: "4ª iteração: resultado = a + b = 2 + 3 = 5, atualizamos a = 3 e b = 5"
              },
              {
                step: 6,
                call: "Fim do loop",
                return: "5",
                explanation: "Retornamos resultado = 5, que é o 5º número de Fibonacci"
              }
            ]
          }
        ]
      },
      {
        id: "dia1-desafio2",
        title: "Receita Favorita",
        versions: [
          {
            id: "dia1-desafio2-v1",
            title: "Preparo de Hambúrguer",
            statement: `<h2>DESAFIO 02: Escreva a sua receita favorita</h2>
                        <p>O próximo desafio é bem parecido com o de acordar, porém envolve algo que está completamente relacionado com algoritmo e lógica de programação: Cozinhar.</p>
                        <p>Isso mesmo, desenvolver uma receita na cozinha é muito próximo da execução de um programa de computador. Se você já conhece as técnicas e os passos necessários para executar a mesma receita diversas vezes, basta você repetir.</p>
                        <p>Ainda em um papel e caneta, escreva a sua receita favorita na cozinha. Pode ser um macarrão, o preparo de uma bebida, mas deve ser algo que você levou ao menos um tempo para preparar. Dessa vez detalhe ao máximo o processo, fazendo com que tenha no mínimo 20 etapas. Vamos testar a sua capacidade para entrar ainda mais na abstração.</p>`,
            code: `// Encapsular em uma função anônima autoexecutável (opcional, para organizar)
(function() {
  // =========================================================
  // DESAFIO 2 - Preparo de Hambúrguer
  // =========================================================
  const desafio2 = [
    "Vou até a cozinha",
    "Pego a chapa elétrica",
    "Ligo a chapa na tomada",
    "Espero esquentar",
    "Pego um hambúrguer e coloco na chapa",
    "Pego o bacon, pico em pedaços",
    "Coloco o bacon na chapa",
    "Pego o pão, abro o pão",
    "Pego os molhos e passo no pão",
    "Pego uma folha de alface, lavo a folha, coloco no pão",
    "Pego uma espátula, viro o hambúrguer, mexo o bacon",
    "Pego o bacon com a espátula e coloco no pão",
    "Pego o hambúrguer, coloco no pão",
    "Pego um ovo, quebro ele na chapa",
    "Uso uma tampa pequena para cobrir o ovo e deixá-lo no formato redondo",
    "Corto a cebola em anéis, coloco na chapa",
    "Pego o ovo frito, coloco no pão",
    "Retiro os anéis de cebola e coloco no pão",
    "Fecho o pão, levo à chapa, prenso dos dois lados",
    "Retiro o lanche da chapa, coloco no prato, como o lanche"
  ];

  console.log("=== DESAFIO 2 - Preparo de Hambúrguer ===");
  desafio2.forEach((passo, index) => {
    console.log(\`\${index + 1}. \${passo}\`);
  });
  
  console.log("\\n");
})();`,
            explanation: `<p>Este código demonstra como podemos representar uma sequência de passos para o preparo de um hambúrguer usando JavaScript.</p>
                        <p>Assim como no desafio anterior, usamos uma função anônima autoexecutável (IIFE) para encapsular nosso código, evitando poluição no escopo global.</p>
                        <p>O algoritmo apresenta uma lista detalhada dos passos sequenciais para preparar um hambúrguer, incluindo:</p>
                        <ul>
                            <li>Preparação da chapa e dos ingredientes</li>
                            <li>Montagem do lanche em uma ordem específica</li>
                            <li>Cozimento dos diferentes componentes</li>
                            <li>Finalização e consumo do hambúrguer</li>
                        </ul>
                        <p>Assim como os algoritmos de computador, uma receita segue uma sequência lógica de instruções em ordem específica. Se alterarmos a ordem (por exemplo, colocar o ovo antes de fritar o hambúrguer), podemos ter resultados completamente diferentes.</p>
                        <p>Este exemplo demonstra bem o conceito de algoritmo: uma sequência finita e ordenada de passos bem definidos para realizar uma tarefa.</p>`,
            trace: [
              {
                step: 1,
                call: "Início da IIFE",
                explanation: "A função anônima autoexecutável começa a ser executada"
              },
              {
                step: 2,
                call: "Declaração do array desafio2",
                explanation: "O array contendo os passos do preparo do hambúrguer é criado na memória"
              },
              {
                step: 3,
                call: "console.log(título)",
                saida: "=== DESAFIO 2 - Preparo de Hambúrguer ===",
                explanation: "O título do desafio é exibido no console"
              },
              {
                step: 4,
                call: "desafio2.forEach() - primeira iteração",
                index: 0,
                passo: "Vou até a cozinha",
                saida: "1. Vou até a cozinha",
                explanation: "O primeiro elemento do array (índice 0) é processado e exibido com o número 1"
              },
              {
                step: 5,
                call: "desafio2.forEach() - segunda iteração",
                index: 1,
                passo: "Pego a chapa elétrica",
                saida: "2. Pego a chapa elétrica",
                explanation: "O segundo elemento do array (índice 1) é processado e exibido com o número 2"
              },
              {
                step: 6,
                call: "desafio2.forEach() - iterações 3-20",
                explanation: "Os demais elementos do array são processados e exibidos sequencialmente"
              },
              {
                step: 7,
                call: "console.log(\"\\n\")",
                explanation: "Uma linha em branco é adicionada após a listagem dos passos"
              },
              {
                step: 8,
                call: "Fim da IIFE",
                explanation: "A função anônima autoexecutável termina sua execução"
              }
            ]
          }
        ]
      },
      {
        id: "dia1-desafio3",
        title: "Lista de Tarefas Diárias",
        versions: [
          {
            id: "dia1-desafio3-v1",
            title: "Rotina Diária (Trabalho Noturno + Folga)",
            statement: `<h2>DESAFIO 03: Monte sua lista de tarefas diárias</h2>
                        <p>Vamos para um último desafio do dia! Esses desafios são apenas uma preparação para o que está por vir. Por mais bobo que pareça, é assim que você vai descobrir o que pra você é mais fácil e mais difícil de fazer.</p>
                        <p>Por isso é preciso colocar a mão na massa e testar suas habilidades.</p>
                        <p>Crie uma lista numerada das tarefas que você costuma fazer no dia a dia. Crie a partir de um dia normal, pode ser algo como: acordar, tomar café, fazer exercício, tomar banho, se vestir, ir ao trabalho, ou ir estudar, etc... Faça isso até que a última atividade seja você ir dormir.</p>
                        <p>Tente ser o mais detalhado possível. A ideia, mais uma vez, é mostrar a sua habilidade para ser mais específico possível. Depois que terminar observe cada item da lista e tente imaginar como seria se cada um desses itens fosse um programa de computador que pudesse ser elaborado de forma individual.</p>`,
            code: `// Encapsular em uma função anônima autoexecutável (opcional, para organizar)
(function() {
  // =========================================================
  // DESAFIO 3 - Rotina Diária (Trabalho Noturno + Folga)
  // =========================================================
  const desafio3 = [
    "Acordo às 12:20 com o despertador",
    "Troco de roupa, pego o capacete",
    "Vou buscar meu filho na escola",
    "Chego em casa, preparo o almoço",
    "Almoço com meu filho",
    "Tomo banho, troco de roupa",
    "Vou para a academia",
    "Volto para casa, tomo um pós-treino",
    "Estudo e depois tomo outro banho",
    "Coloco o uniforme, arrumo a mochila",
    "Saio para o trabalho às 17:20",
    "Chego no trabalho às 18:00",
    "Trabalho por 12 horas noturnas (até 06:00)",
    "Saio do trabalho às 06:00, chego em casa às 06:20",
    "Acordo meu filho, preparo o café da manhã",
    "Levo meu filho para a escola",
    "Volto para casa, tomo um banho",
    "Deito, tento assistir a uma série, mas durmo",
    "Despertador toca às 12:20 novamente",
    "Troco de roupa, pego o capacete, busco meu filho na escola",
    "Chego em casa, preparo o almoço, almoço com meu filho",
    "Tomo banho, troco de roupa, vou para academia",
    "Volto para casa, tomo um pós-treino, tomo um banho",
    "Percebo que é minha folga (escala 12x36)",
    "Ligo a TV, assisto a uma série",
    "Preparo a janta, janto com a família",
    "Ajudo meu filho com a lição de casa",
    "Jogo videogame com meu filho",
    "Saio para dar uma volta, volto para casa",
    "Ligo o computador, estudo até 3:00 da manhã",
    "Como algo, escovo os dentes",
    "Durmo até o celular despertar às 6:20 novamente"
  ];

  console.log("=== DESAFIO 3 - Rotina Diária (Trabalho + Folga) ===");
  desafio3.forEach((acao, index) => {
    console.log(\`\${index + 1}. \${acao}\`);
  });

})();`,
            explanation: `<p>Este código demonstra como podemos representar uma rotina diária completa usando JavaScript, incluindo um dia de trabalho noturno e um dia de folga.</p>
                        <p>Seguindo a mesma estrutura dos desafios anteriores, usamos uma função anônima autoexecutável (IIFE) para encapsular nosso código e manter a organização.</p>
                        <p>O algoritmo utiliza um array para armazenar cada uma das 32 atividades da rotina diária, apresentando um ciclo completo de dois dias (trabalho e folga) em uma escala 12x36.</p>
                        <p>Este exemplo mostra como podemos modelar comportamentos complexos do mundo real como sequências de passos em um algoritmo. Algumas observações importantes:</p>
                        <ul>
                            <li>O algoritmo mostra a linearidade do tempo, onde cada ação ocorre após a anterior</li>
                            <li>Demonstra padrões repetitivos (acordar com despertador, buscar o filho, etc.)</li>
                            <li>Inclui tomadas de decisão ("Percebo que é minha folga")</li>
                            <li>Mostra como um ciclo se completa e recomeça (próximo despertar)</li>
                        </ul>
                        <p>Esta representação nos ajuda a entender que nossas rotinas diárias são, de fato, algoritmos que executamos repetidamente. Cada ação poderia ser ainda mais detalhada em "sub-rotinas" mais específicas, assim como fazemos ao decompor problemas complexos em programação.</p>`,
            trace: [
              {
                step: 1,
                call: "Início da IIFE",
                explanation: "A função anônima autoexecutável começa a ser executada"
              },
              {
                step: 2,
                call: "Declaração do array desafio3",
                explanation: "O array contendo as 32 ações da rotina diária é criado na memória"
              },
              {
                step: 3,
                call: "console.log(título)",
                saida: "=== DESAFIO 3 - Rotina Diária (Trabalho + Folga) ===",
                explanation: "O título do desafio é exibido no console"
              },
              {
                step: 4,
                call: "desafio3.forEach() - primeira iteração",
                index: 0,
                acao: "Acordo às 12:20 com o despertador",
                saida: "1. Acordo às 12:20 com o despertador",
                explanation: "O primeiro elemento do array (índice 0) é processado e exibido com o número 1"
              },
              {
                step: 5,
                call: "desafio3.forEach() - segunda iteração",
                index: 1,
                acao: "Troco de roupa, pego o capacete",
                saida: "2. Troco de roupa, pego o capacete",
                explanation: "O segundo elemento do array (índice 1) é processado e exibido com o número 2"
              },
              {
                step: 6,
                call: "desafio3.forEach() - iterações 3-32",
                explanation: "Os demais elementos do array são processados e exibidos sequencialmente"
              },
              {
                step: 7,
                call: "Fim da IIFE",
                explanation: "A função anônima autoexecutável termina sua execução"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    day: "Dia 2",
    challenges: [
      {
        id: "dia2-desafio1",
        title: "Dados de um Documento",
        versions: [
          {
            id: "dia2-desafio1-v1",
            title: "Tipos de Dados",
            statement: `<h2>DESAFIO 01: Dados de um documento</h2>
                        <p>Esse desafio é bem simples. Pegue um de seus documentos, de preferência o RG. Faça uma lista dos dados encontrados nele e defina que tipo de dado cada um dos itens de sua lista poderia ser.</p>
                        <p>Por exemplo: o Nome é um dado do tipo texto e a Data de Nascimento que é do tipo Data.</p>`,
            code: `// DESAFIO 01: Dados de um documento (RG)
// Este é um exemplo com dados fictícios

// Objeto representando os dados de um RG
const dadosRG = {
  nome: "João Silva Santos", // string (texto)
  dataNascimento: new Date("1990-05-15"), // Date (data)
  numeroRG: "12.345.678-9", // string (texto formatado)
  cpf: "123.456.789-00", // string (texto formatado)
  filiacao: {
    nomePai: "Pedro Silva", // string (texto)
    nomeMae: "Maria Santos" // string (texto)
  },
  naturalidade: "São Paulo - SP", // string (texto)
  dataExpedicao: new Date("2018-10-25"), // Date (data)
  sexo: "M", // string (caractere/texto)
  altura: 1.75, // number (número decimal)
  foto: "binary_data", // dados binários (representando a foto)
  digital: "binary_data", // dados binários (representando a impressão digital)
  assinatura: "binary_data", // dados binários (representando a assinatura)
  orgaoEmissor: "SSP/SP", // string (texto)
  viaEmissao: 1 // number (número inteiro)
};

// Exibindo os dados e seus tipos
console.log("=== DADOS DO RG E SEUS TIPOS ===");
console.log("Nome:", dadosRG.nome, "- Tipo:", typeof dadosRG.nome);
console.log("Data de Nascimento:", dadosRG.dataNascimento.toLocaleDateString(), "- Tipo:", dadosRG.dataNascimento instanceof Date ? "Date" : typeof dadosRG.dataNascimento);
console.log("Número do RG:", dadosRG.numeroRG, "- Tipo:", typeof dadosRG.numeroRG);
console.log("CPF:", dadosRG.cpf, "- Tipo:", typeof dadosRG.cpf);
console.log("Nome do Pai:", dadosRG.filiacao.nomePai, "- Tipo:", typeof dadosRG.filiacao.nomePai);
console.log("Nome da Mãe:", dadosRG.filiacao.nomeMae, "- Tipo:", typeof dadosRG.filiacao.nomeMae);
console.log("Naturalidade:", dadosRG.naturalidade, "- Tipo:", typeof dadosRG.naturalidade);
console.log("Data de Expedição:", dadosRG.dataExpedicao.toLocaleDateString(), "- Tipo:", dadosRG.dataExpedicao instanceof Date ? "Date" : typeof dadosRG.dataExpedicao);
console.log("Sexo:", dadosRG.sexo, "- Tipo:", typeof dadosRG.sexo);
console.log("Altura:", dadosRG.altura, "- Tipo:", typeof dadosRG.altura);
console.log("Foto:", "Disponível", "- Tipo:", typeof dadosRG.foto);
console.log("Digital:", "Disponível", "- Tipo:", typeof dadosRG.digital);
console.log("Assinatura:", "Disponível", "- Tipo:", typeof dadosRG.assinatura);
console.log("Órgão Emissor:", dadosRG.orgaoEmissor, "- Tipo:", typeof dadosRG.orgaoEmissor);
console.log("Via de Emissão:", dadosRG.viaEmissao, "- Tipo:", typeof dadosRG.viaEmissao);`,
            explanation: `<p>Este código demonstra como podemos representar os dados encontrados em um documento de identidade (RG) usando uma estrutura de dados em JavaScript.</p>
                        
                        <p>Utilizamos um objeto chamado <code>dadosRG</code> para armazenar todas as informações encontradas em um RG típico. Cada propriedade do objeto representa um campo do documento e está associada a um tipo de dado específico:</p>
                        
                        <ul>
                            <li><strong>String (texto)</strong>: Para dados como nome, número do RG, CPF, naturalidade, orgão emissor, etc. Mesmo que alguns desses campos contenham números (como RG e CPF), eles são armazenados como texto devido à formatação com pontos e traços.</li>
                            <li><strong>Date (data)</strong>: Para campos que representam datas, como data de nascimento e data de expedição. Em JavaScript, usamos o objeto <code>Date</code> para manipular datas.</li>
                            <li><strong>Number (número)</strong>: Para valores numéricos como altura e via de emissão. A altura é representada como número decimal, enquanto a via de emissão é um número inteiro.</li>
                            <li><strong>Objeto</strong>: Para dados agrupados, como informações de filiação (nome do pai e da mãe).</li>
                            <li><strong>Dados binários</strong>: Representados aqui como strings, mas em um sistema real seriam dados binários para a foto, impressão digital e assinatura.</li>
                        </ul>
                        
                        <p>O código também inclui uma seção que imprime cada campo junto com seu tipo de dado, utilizando:</p>
                        <ul>
                            <li>O operador <code>typeof</code> para determinar o tipo da maioria dos campos</li>
                            <li>O operador <code>instanceof</code> para verificar se um objeto é uma instância da classe <code>Date</code></li>
                        </ul>
                        
                        <p>Este exemplo ilustra como diferentes tipos de dados são utilizados para representar informações do mundo real em um programa de computador. Compreender os tipos de dados apropriados para cada tipo de informação é fundamental na programação, pois isso afeta como os dados são armazenados, manipulados e validados.</p>`,
            trace: [
              {
                step: 1,
                call: "Declaração do objeto dadosRG",
                explanation: "Criamos um objeto chamado dadosRG que armazena todos os dados do documento"
              },
              {
                step: 2,
                call: "console.log(título)",
                saida: "=== DADOS DO RG E SEUS TIPOS ===",
                explanation: "Exibimos o título da nossa análise"
              },
              {
                step: 3,
                call: "console.log(nome e tipo)",
                dadoAnalisado: "nome",
                valor: "João Silva Santos",
                tipo: "string",
                saida: "Nome: João Silva Santos - Tipo: string",
                explanation: "Exibimos o valor do nome e determinamos que seu tipo é 'string' (texto)"
              },
              {
                step: 4,
                call: "console.log(data de nascimento e tipo)",
                dadoAnalisado: "dataNascimento",
                valor: "15/05/1990", // formato brasileiro para exemplificar
                tipo: "Date",
                saida: "Data de Nascimento: 15/05/1990 - Tipo: Date",
                explanation: "Exibimos a data de nascimento formatada e determinamos que seu tipo é 'Date' (objeto de data)"
              },
              {
                step: 5,
                call: "console.log(número do RG e tipo)",
                dadoAnalisado: "numeroRG",
                valor: "12.345.678-9",
                tipo: "string",
                saida: "Número do RG: 12.345.678-9 - Tipo: string",
                explanation: "Exibimos o número do RG e determinamos que seu tipo é 'string' (texto), apesar de conter números, pois inclui formatação com pontos e traço"
              },
              {
                step: 6,
                call: "console.log demais campos",
                explanation: "O código continua exibindo os valores e tipos de todos os outros campos do objeto dadosRG"
              }
            ]
          }
        ]
      },
      {
        id: "dia2-desafio2",
        title: "Tipos em um Formulário",
        versions: [
          {
            id: "dia2-desafio2-v1",
            title: "Formulário da Caixa",
            statement: `<h2>DESAFIO 02: Identificando tipos em um formulário da Caixa</h2>
                        <p>Nesse desafio quero que você classifique os tipos de dados desse formulário que é utilizado para atualização de cadastro de empresas da Caixa.</p>
                        <p>Pra começar o "Nome da firma ou Razão Social" é um texto (uma string); seguindo do "CNPJ" que é uma sequência de números 14, sendo que os 2 últimos são dígitos verificadores; a "Receita Fiscal - Último Exercício Encerrado" e "Receita Fiscal - Últimos 12 Meses" são valores monetários, ou seja números com casas decimais; o "Ano Referência" também numérico, porém inteiro; assim como a "Quantidade de Meses".</p>`,
            code: `// DESAFIO 02: Identificando tipos em um formulário da Caixa

const dadosFormulario = {
  razaoSocial: "Padaria Pão Quente Ltda.",
  nomeFantasia: "Pão Quente",
  cnpj: "12.345.678/0001-99",
  receitaFiscal: 125000.75,
  anoReferencia: 2023,
  quantidadeMeses: 12,
  endereco: "Rua das Flores, 150 - Centro",
  cep: "12345-678",
  municipio: "São Paulo",
  uf: "SP",
  telefone: "(11) 99888-7766",
  email: "contato@paoquente.com",
  naturezaJuridica: "Sociedade Empresária Limitada",
  dataAbertura: new Date("2015-06-10")
};

console.log("=== DADOS DO FORMULÁRIO COM typeof e instanceof ===\n");

Object.keys(dadosFormulario).forEach((campo) => {
  const valor = dadosFormulario[campo];
  const tipo = typeof valor;
  const tipoFinal = (valor instanceof Date) ? "Date (objeto de data)" : tipo;

  console.log(\`\${campo.toUpperCase()}:\\nValor: \${valor}\\nTipo detectado: \${tipoFinal}\\n\`);
});`,
            explanation: `<p>Nesta solução, analisamos e categorizamos os tipos de dados encontrados em um formulário típico da Caixa para cadastro empresarial.</p>
                        <p>O código demonstra:</p>
                        <ul>
                            <li>A criação de um objeto JavaScript para representar o formulário e seus diferentes campos</li>
                            <li>A atribuição de valores realistas para cada campo</li>
                            <li>A utilização de diferentes tipos de dados nativos do JavaScript:</li>
                            <ul>
                                <li>String para textos (razão social, nome fantasia, CNPJ formatado, etc.)</li>
                                <li>Number para valores numéricos (receita fiscal, ano de referência)</li>
                                <li>Date para datas (data de abertura)</li>
                            </ul>
                            <li>Um método automatizado para detectar e exibir o tipo de cada campo:</li>
                            <ul>
                                <li>Usando <code>typeof</code> para tipos primitivos</li>
                                <li>Usando <code>instanceof</code> para detectar objetos especiais como Date</li>
                            </ul>
                        </ul>
                        <p>Esta abordagem programática é útil porque nos permite visualizar automaticamente cada campo, seu valor e seu tipo, o que facilita a análise de grandes conjuntos de dados.</p>`,
            trace: [
              {
                step: 1,
                call: "Declaração do objeto dadosFormulario",
                explanation: "Criamos um objeto com várias propriedades representando os campos de um formulário da Caixa"
              },
              {
                step: 2,
                call: "console.log(título)",
                saida: "=== DADOS DO FORMULÁRIO COM typeof e instanceof ===",
                explanation: "Exibimos o título da nossa análise"
              },
              {
                step: 3,
                call: "Object.keys(dadosFormulario)",
                resultado: ["razaoSocial", "nomeFantasia", "cnpj", "receitaFiscal", "anoReferencia", "quantidadeMeses", "endereco", "cep", "municipio", "uf", "telefone", "email", "naturezaJuridica", "dataAbertura"],
                explanation: "Obtemos um array com todos os nomes de propriedades do objeto dadosFormulario"
              },
              {
                step: 4,
                call: "forEach() - primeira iteração: razaoSocial",
                campo: "razaoSocial",
                valor: "Padaria Pão Quente Ltda.",
                tipo: "string",
                tipoFinal: "string",
                saida: "RAZAOSOCIAL:\nValor: Padaria Pão Quente Ltda.\nTipo detectado: string",
                explanation: "Verificamos o tipo da propriedade razaoSocial e exibimos as informações"
              },
              {
                step: 5,
                call: "forEach() - segunda iteração: nomeFantasia",
                campo: "nomeFantasia",
                valor: "Pão Quente",
                tipo: "string",
                tipoFinal: "string",
                saida: "NOMEFANTASIA:\nValor: Pão Quente\nTipo detectado: string",
                explanation: "Verificamos o tipo da propriedade nomeFantasia e exibimos as informações"
              },
              {
                step: 6,
                call: "forEach() - iterações subsequentes",
                explanation: "O processo continua para cada propriedade do objeto, identificando seus tipos e exibindo as informações"
              }
            ]
          }
        ]
      },
      {
        id: "dia2-desafio3",
        title: "Características de um Produto",
        versions: [
          {
            id: "dia2-desafio3-v1",
            title: "Análise de Produto do Mercado Livre",
            statement: `<h2>DESAFIO 03: Características de um produto</h2>
                        <p>Agora o desafio vai ser grande! Navegue pela página de um produto no Mercado Livre. Você vai começar a entender que no mundo real, quando estamos lidando com dados, geralmente são muitos ao mesmo tempo.</p>
                        <p>Extraia o máximo de informações que conseguir sobre essa página de produto. Identifique os campos utilizados para formar essa página. Por exemplo: Categorias em que o produto pertence; Se é novo ou usado; Quantidade de Vendas realizadas; Se ele está como Favorito na sua conta ou não, Quantidade de avaliações, Nome do produto e etc.</p>
                        <p>Faça a maior lista que puder. Esse processo vai te ajudar a refletir sobre a quantidade e os tipos de dados existentes nesse sistema. Mais uma vez, utilize papel e caneta para anotar tudo. Deixe essa preguiça de lado e termine o desafio!</p>`,
            code: `const produtoMercadoLivre = {
  nome: "Notebook Dell Alienware I9-13900HX 16GB DDR5 Nvidia RTX 4060",
  cor: "Dark Metallic Moon",
  preco: 14999.00,
  parcelamento: "10x R$ 1.499,90 sem juros",
  condicao: "Novo",
  notaAvaliacao: 4.6,
  quantidadeAvaliacoes: 11,
  vendidoPor: "ATUAL ELETRONICOS",
  quantidadeVendas: 100,
  entregaGratis: true,
  dataEntregaEstimada: new Date("2025-04-07"), // Exemplo aproximado
  disponibilidade: "Último disponível",
  urlVendedor: "https://www.mercadolivre.com.br/perfil/ATUALELETRONICOS"
};

console.log("=== DADOS DO PRODUTO (MERCADO LIVRE) ===\\n");

Object.keys(produtoMercadoLivre).forEach((campo) => {
  const valor = produtoMercadoLivre[campo];
  const tipo = typeof valor;
  const tipoFinal = valor instanceof Date ? "Date (objeto de data)" : tipo;

  console.log(\`\${campo.toUpperCase()}:\\nValor: \${valor}\\nTipo detectado: \${tipoFinal}\\n\`);
});`,
            explanation: `<p>Nesta solução, catalogamos e analisamos os diferentes tipos de dados encontrados em uma página de produto típica do Mercado Livre.</p>
                        <p>O código demonstra:</p>
                        <ul>
                            <li>A modelagem de dados de um produto real usando um objeto JavaScript</li>
                            <li>A inclusão de diversas propriedades relevantes encontradas em páginas de e-commerce</li>
                            <li>A utilização de diferentes tipos de dados nativos do JavaScript:</li>
                            <ul>
                                <li>String para textos (nome do produto, condição, cor)</li>
                                <li>Number para valores numéricos (preço, notas de avaliação, quantidades)</li>
                                <li>Boolean para valores verdadeiro/falso (entrega grátis)</li>
                                <li>Date para datas (data estimada de entrega)</li>
                            </ul>
                            <li>Um método automatizado para detectar e exibir o tipo de cada campo utilizando:</li>
                            <ul>
                                <li><code>typeof</code> para identificação de tipos primitivos</li>
                                <li><code>instanceof</code> para identificação de objetos complexos como Date</li>
                            </ul>
                        </ul>

                        <div class="code-explanation">
                          <h4>Análise detalhada linha por linha:</h4>
                          
                          <pre><code>const produtoMercadoLivre = {
  nome: "Notebook Dell Alienware I9-13900HX 16GB DDR5 Nvidia RTX 4060",
  cor: "Dark Metallic Moon",
  preco: 14999.00,
  parcelamento: "10x R$ 1.499,90 sem juros",
  condicao: "Novo",
  notaAvaliacao: 4.6,
  quantidadeAvaliacoes: 11,
  vendidoPor: "ATUAL ELETRONICOS",
  quantidadeVendas: 100,
  entregaGratis: true,
  dataEntregaEstimada: new Date("2025-04-07"), // Exemplo aproximado
  disponibilidade: "Último disponível",
  urlVendedor: "https://www.mercadolivre.com.br/perfil/ATUALELETRONICOS"
};</code></pre>
                          <p>Declaração e inicialização de um objeto JavaScript que representa um produto do Mercado Livre:</p>
                          <ul>
                            <li>Usamos <code>const</code> para declarar um objeto que não será reatribuído</li>
                            <li>O objeto contém 13 propriedades representando diferentes características do produto</li>
                            <li>Utilizamos diferentes tipos de dados:
                              <ul>
                                <li><strong>Strings</strong>: Para textos como nome, cor, parcelamento, condição, etc.</li>
                                <li><strong>Numbers</strong>: Para valores numéricos como preço, nota de avaliação, quantidade</li>
                                <li><strong>Boolean</strong>: Para a propriedade entregaGratis, representando sim/não</li>
                                <li><strong>Date</strong>: Um objeto de data para dataEntregaEstimada</li>
                              </ul>
                            </li>
                            <li>O comentário <code>// Exemplo aproximado</code> indica que o valor é ilustrativo</li>
                          </ul>
                          
                          <pre><code>console.log("=== DADOS DO PRODUTO (MERCADO LIVRE) ===\\n");</code></pre>
                          <p>Exibe um cabeçalho no console para identificar o propósito da saída:</p>
                          <ul>
                            <li>O <code>\\n</code> é um caractere de escape que representa uma quebra de linha</li>
                            <li>Isso cria um espaço visual após o título, melhorando a legibilidade</li>
                          </ul>
                          
                          <pre><code>Object.keys(produtoMercadoLivre).forEach((campo) => {</code></pre>
                          <p>Inicia um loop que itera sobre cada propriedade do objeto produtoMercadoLivre:</p>
                          <ul>
                            <li><code>Object.keys()</code> retorna um array com os nomes de todas as propriedades do objeto</li>
                            <li><code>forEach()</code> executa a função de callback para cada elemento do array</li>
                            <li>O parâmetro <code>campo</code> receberá cada nome de propriedade (ex: "nome", "cor", "preco")</li>
                          </ul>
                          
                          <pre><code>  const valor = produtoMercadoLivre[campo];</code></pre>
                          <p>Obtém o valor da propriedade atual:</p>
                          <ul>
                            <li>A notação <code>produtoMercadoLivre[campo]</code> permite acessar dinamicamente propriedades</li>
                            <li>Por exemplo, se <code>campo</code> for "preco", a expressão acessará <code>produtoMercadoLivre.preco</code></li>
                          </ul>
                          
                          <pre><code>  const tipo = typeof valor;</code></pre>
                          <p>Determina o tipo primitivo do valor usando o operador <code>typeof</code>:</p>
                          <ul>
                            <li>O operador <code>typeof</code> retorna uma string indicando o tipo primitivo</li>
                            <li>Possíveis retornos incluem: "string", "number", "boolean", "object", etc.</li>
                            <li>Note que <code>typeof</code> retorna "object" para arrays, objetos e objetos Date</li>
                          </ul>
                          
                          <pre><code>  const tipoFinal = valor instanceof Date ? "Date (objeto de data)" : tipo;</code></pre>
                          <p>Refina a detecção de tipo para objetos especiais:</p>
                          <ul>
                            <li>O operador <code>instanceof</code> verifica se o valor é uma instância de uma classe específica</li>
                            <li>Quando <code>valor instanceof Date</code> é verdadeiro, atribui "Date (objeto de data)" à <code>tipoFinal</code></li>
                            <li>Caso contrário, mantém o tipo original detectado pelo <code>typeof</code></li>
                            <li>Isso resolve a limitação do <code>typeof</code> que identifica qualquer objeto como "object"</li>
                          </ul>
                          
                          <pre><code  console.log(\`\${campo.toUpperCase()}:\nValor: \${valor}\nTipo detectado: \${tipoFinal}\n\`);</code></pre>
                          <p>Exibe as informações formatadas no console:</p>
                          <ul>
                            <li>Usa a sintaxe de template string (backticks) para interpolação de variáveis</li>
                            <li><code>campo.toUpperCase()</code> converte o nome da propriedade para maiúsculas</li>
                            <li>Inclui quebras de linha (\n) para formatar visualmente a saída</li>
                            <li>Exibe três informações: nome do campo, seu valor e tipo detectado</li>
                            <li>Adiciona uma linha em branco ao final de cada campo para melhor separação visual</li>
                          </ul>
                          
                          <pre><code>});</code></pre>
                          <p>Fecha o bloco da função de callback do <code>forEach</code>, completando o loop que processa cada propriedade.</p>
                        </div>
                        
                        <p>Este exercício ilustra a complexidade dos dados que compõem um produto em um site de e-commerce moderno e como diferentes tipos de dados são necessários para representar adequadamente todas as informações relevantes para o usuário.</p>`,
            trace: [
              {
                step: 1,
                call: "Declaração do objeto produtoMercadoLivre",
                explanation: "Criamos um objeto com várias propriedades representando as características de um produto no Mercado Livre"
              },
              {
                step: 2,
                call: "console.log(título)",
                saida: "=== DADOS DO PRODUTO (MERCADO LIVRE) ===",
                explanation: "Exibimos o título da nossa análise"
              },
              {
                step: 3,
                call: "Object.keys(produtoMercadoLivre)",
                resultado: ["nome", "cor", "preco", "parcelamento", "condicao", "notaAvaliacao", "quantidadeAvaliacoes", "vendidoPor", "quantidadeVendas", "entregaGratis", "dataEntregaEstimada", "disponibilidade", "urlVendedor"],
                explanation: "Obtemos um array com todos os nomes de propriedades do objeto produtoMercadoLivre"
              },
              {
                step: 4,
                call: "forEach() - primeira iteração: nome",
                campo: "nome",
                valor: "Notebook Dell Alienware I9-13900HX 16GB DDR5 Nvidia RTX 4060",
                tipo: "string",
                tipoFinal: "string",
                saida: "NOME:\nValor: Notebook Dell Alienware I9-13900HX 16GB DDR5 Nvidia RTX 4060\nTipo detectado: string",
                explanation: "Verificamos o tipo da propriedade nome e exibimos as informações"
              },
              {
                step: 5,
                call: "forEach() - segunda iteração: cor",
                campo: "cor",
                valor: "Dark Metallic Moon",
                tipo: "string",
                tipoFinal: "string",
                saida: "COR:\nValor: Dark Metallic Moon\nTipo detectado: string",
                explanation: "Verificamos o tipo da propriedade cor e exibimos as informações"
              },
              {
                step: 6,
                call: "forEach() - terceira iteração: preco",
                campo: "preco",
                valor: 14999.00,
                tipo: "number",
                tipoFinal: "number",
                saida: "PRECO:\nValor: 14999\nTipo detectado: number",
                explanation: "Verificamos o tipo da propriedade preco e exibimos as informações"
              },
              {
                step: 7,
                call: "forEach() - iteração dataEntregaEstimada",
                campo: "dataEntregaEstimada",
                valor: "2025-04-07T00:00:00.000Z",
                tipo: "object",
                tipoFinal: "Date (objeto de data)",
                saida: "DATAENTREGAESTIMADA:\nValor: Mon Apr 07 2025 00:00:00 GMT+0000\nTipo detectado: Date (objeto de data)",
                explanation: "Verificamos o tipo da propriedade dataEntregaEstimada, identificando-a corretamente como um objeto Date"
              },
              {
                step: 8,
                call: "forEach() - iteração entregaGratis",
                campo: "entregaGratis",
                valor: true,
                tipo: "boolean",
                tipoFinal: "boolean",
                saida: "ENTREGAGRATIS:\nValor: true\nTipo detectado: boolean",
                explanation: "Verificamos o tipo da propriedade entregaGratis, identificando-a como boolean"
              },
              {
                step: 9,
                call: "forEach() - iterações subsequentes",
                explanation: "O processo continua para cada propriedade do objeto, identificando seus tipos e exibindo as informações"
              }
            ]
          }
        ]
      },
      {
        id: "dia2-desafio4",
        title: "Cálculo de IMC",
        versions: [
          {
            id: "dia2-desafio4-v1",
            title: "Calculadora de IMC com Classificação",
            statement: `<h2>DESAFIO 04: Calcule seu IMC</h2>
                        <p>Crie um código para calcular o seu IMC (que é o Índice de Massa Corporal). Assim como fizemos antes pode ser no papel ou se você quiser no Playcode.io.</p>
                        <p>A conta para encontrar o IMC é simples, basta dividir o peso pelo quadrado da altura. Dica: No JavaScript para calcular o quadrado basta usar duas vezes o asterisco "**".</p>`,
            code: `let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));

let imc = peso / (altura ** 2);
let classificacao = "";

// Determina a faixa com base no IMC
switch (true) {
  case (imc < 18.5):
    classificacao = "Abaixo do peso";
    break;
  case (imc < 24.9):
    classificacao = "Peso normal";
    break;
  case (imc < 29.9):
    classificacao = "Sobrepeso";
    break;
  case (imc < 34.9):
    classificacao = "Obesidade grau 1";
    break;
  case (imc < 39.9):
    classificacao = "Obesidade grau 2";
    break;
  default:
    classificacao = "Obesidade grau 3 (mórbida)";
}

console.log("=== CÁLCULO DE IMC ===");
console.log("Peso:", peso, "kg");
console.log("Altura:", altura, "m");
console.log("IMC:", imc.toFixed(2));
console.log("Classificação:", classificacao);`,
            explanation: `<p>Este código implementa uma calculadora de IMC (Índice de Massa Corporal) que não apenas calcula o índice, mas também fornece uma classificação baseada nos padrões internacionais de saúde.</p>
                        <p>A solução demonstra:</p>
                        <ul>
                            <li>A utilização da função <code>prompt()</code> para capturar entradas do usuário (peso e altura)</li>
                            <li>Conversão de texto para números com <code>parseFloat()</code> para permitir cálculos matemáticos</li>
                            <li>O uso do operador de exponenciação (<code>**</code>) para calcular o quadrado da altura</li>
                            <li>Utilização da estrutura <code>switch/case</code> com expressões booleanas para classificar o IMC em diferentes categorias</li>
                            <li>Formatação de números decimais com <code>toFixed(2)</code> para exibir apenas duas casas decimais</li>
                            <li>Exibição organizada dos resultados no console</li>
                        </ul>
                        <p>O código também inclui uma seção que calcula a classificação do IMC com base nos padrões da Organização Mundial da Saúde (OMS) e exibe a classificação correspondente no console.</p>`,
            trace: [
              {
                step: 1,
                call: "Input de dados para peso",
                input: "75",
                peso: 75,
                explanation: "Usuário informa seu peso como '75', que é convertido para o número 75 através do parseFloat()"
              },
              {
                step: 2,
                call: "Input de dados para altura",
                input: "1.75",
                altura: 1.75,
                explanation: "Usuário informa sua altura como '1.75', que é convertido para o número 1.75 através do parseFloat()"
              },
              {
                step: 3,
                call: "Cálculo do IMC",
                calculo: "75 / (1.75 ** 2)",
                passos: "75 / (1.75 * 1.75) = 75 / 3.0625 = 24.49",
                imc: 24.49,
                explanation: "Calculamos o IMC dividindo o peso (75) pelo quadrado da altura (1.75² = 3.0625), resultando em 24.49"
              },
              {
                step: 4,
                call: "Avaliação da estrutura switch/case",
                expressao: "switch (true)",
                condicao1: "imc < 18.5 => 24.49 < 18.5 => false",
                condicao2: "imc < 24.9 => 24.49 < 24.9 => true",
                resultado: "classificacao = 'Peso normal'",
                classificacao: "Peso normal",
                explanation: "A estrutura switch avalia cada case e para no primeiro que é verdadeiro (imc < 24.9), atribuindo 'Peso normal' à classificação"
              },
              {
                step: 5,
                call: "console.log(título)",
                saida: "=== CÁLCULO DE IMC ===",
                explanation: "Exibimos o título da nossa análise"
              },
              {
                step: 6,
                call: "console.log(peso)",
                saida: "Peso: 75 kg",
                explanation: "Exibimos o peso informado pelo usuário"
              },
              {
                step: 7,
                call: "console.log(altura)",
                saida: "Altura: 1.75 m",
                explanation: "Exibimos a altura informada pelo usuário"
              },
              {
                step: 8,
                call: "console.log(imc)",
                processamento: "imc.toFixed(2) => 24.49 formatado para duas casas decimais",
                saida: "IMC: 24.49",
                explanation: "Exibimos o IMC calculado, formatado para mostrar apenas duas casas decimais"
              },
              {
                step: 9,
                call: "console.log(classificacao)",
                saida: "Classificação: Peso normal",
                explanation: "Exibimos a classificação do IMC determinada pela estrutura switch/case"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    day: "Dia 3",
    challenges: [
      {
        id: "dia3-desafio1",
        title: "Operadores Aritméticos",
        versions: [
          {
            id: "dia3-desafio1-v1",
            title: "Adição",
            statement: `<h2>Operadores Aritméticos - Adição</h2>
                        <p>Este exemplo demonstra o uso do operador de adição (+) em JavaScript em diferentes contextos práticos.</p>
                        <p>O operador de adição é usado para somar dois valores numéricos ou para concatenar strings.</p>
                        <h3>Exemplos incluídos:</h3>
                        <ul>
                            <li>Soma de pontuações em um jogo</li>
                            <li>Cálculo de total de horas trabalhadas</li>
                            <li>Soma de valores de salários</li>
                        </ul>`,
            code: `// ---------- ADIÇÃO ----------
console.log("=== ADIÇÃO ===");

// 1) Soma de pontos em um jogo
let pontosAtuais = 150;
let pontoNovos = 50;
let pontosTotal = pontosAtuais + pontoNovos;
console.log("1) Pontuação total:", pontosTotal);

console.log("\\n");

// 2) Soma de horas trabalhadas na semana
let horasSegunda = 8;
let horasTerca = 6;
let horasQuarta = 7;
let horasQuinta = 8;
let horasSexta = 4;
let totalHoras = horasSegunda + horasTerca + horasQuarta + horasQuinta + horasSexta;
console.log("2) Total de horas trabalhadas:", totalHoras);

console.log("\\n");

// 3) Soma de valores (salários)
let salarioPrimeiro = 2500;
let salarioSegundo = 3200;
let salarioTotal = salarioPrimeiro + salarioSegundo;
console.log("3) Soma dos salários:", salarioTotal);

console.log("\\n==============================\\n");`,
            explanation: `<p>O operador de adição (+) é um dos operadores aritméticos fundamentais em JavaScript e em muitas outras linguagens de programação.</p>

<div class="code-explanation">
  <h4>Análise detalhada linha por linha:</h4>
  
  <pre><code>// ---------- ADIÇÃO ----------</code></pre>
  <p>Comentário que identifica a seção do código dedicada ao operador de adição.</p>
  
  <pre><code>console.log("=== ADIÇÃO ===");</code></pre>
  <p>Exibe um título formatado no console para marcar o início da seção de exemplos de adição.</p>
  
  <pre><code>// 1) Soma de pontos em um jogo</code></pre>
  <p>Comentário que descreve o primeiro exemplo prático: somar pontuações em um jogo.</p>
  
  <pre><code>let pontosAtuais = 150;</code></pre>
  <p>Declara a variável <code>pontosAtuais</code> e atribui o valor numérico 150, representando a pontuação existente do jogador.</p>
  
  <pre><code>let pontoNovos = 50;</code></pre>
  <p>Declara a variável <code>pontoNovos</code> e atribui o valor 50, representando os novos pontos ganhos pelo jogador.</p>
  
  <pre><code>let pontosTotal = pontosAtuais + pontoNovos;</code></pre>
  <p>Declara a variável <code>pontosTotal</code> e atribui a ela o resultado da soma de <code>pontosAtuais</code> (150) e <code>pontoNovos</code> (50), resultando em 200. Esta linha demonstra o uso do operador de adição para somar dois valores numéricos.</p>
  
  <pre><code>console.log("1) Pontuação total:", pontosTotal);</code></pre>
  <p>Exibe no console a mensagem "1) Pontuação total:" seguida do valor da variável <code>pontosTotal</code> (200).</p>
  
  <pre><code>console.log("\\n");</code></pre>
  <p>Insere uma linha em branco no console para melhor separação visual entre os exemplos.</p>
  
  <pre><code>// 2) Soma de horas trabalhadas na semana</code></pre>
  <p>Comentário que descreve o segundo exemplo prático: calcular o total de horas trabalhadas em uma semana.</p>
  
  <pre><code>let horasSegunda = 8;
let horasTerca = 6;
let horasQuarta = 7;
let horasQuinta = 8;
let horasSexta = 4;</code></pre>
  <p>Declara cinco variáveis representando as horas trabalhadas em cada dia da semana de segunda a sexta-feira, com os respectivos valores 8, 6, 7, 8 e 4.</p>
  
  <pre><code>let totalHoras = horasSegunda + horasTerca + horasQuarta + horasQuinta + horasSexta;</code></pre>
  <p>Declara a variável <code>totalHoras</code> e atribui a ela o resultado da soma de todas as horas trabalhadas na semana (8 + 6 + 7 + 8 + 4 = 33). Este exemplo mostra como o operador de adição pode ser usado em uma expressão com múltiplos valores.</p>
  
  <pre><code>console.log("2) Total de horas trabalhadas:", totalHoras);</code></pre>
  <p>Exibe no console a mensagem "2) Total de horas trabalhadas:" seguida do valor da variável <code>totalHoras</code> (33).</p>
  
  <pre><code>console.log("\\n");</code></pre>
  <p>Insere outra linha em branco no console para separação visual.</p>
  
  <pre><code>// 3) Soma de valores (salários)</code></pre>
  <p>Comentário que descreve o terceiro exemplo prático: somar dois valores de salários.</p>
  
  <pre><code>let salarioPrimeiro = 2500;</code></pre>
  <p>Declara a variável <code>salarioPrimeiro</code> e atribui o valor 2500, representando o primeiro salário.</p>
  
  <pre><code>let salarioSegundo = 3200;</code></pre>
  <p>Declara a variável <code>salarioSegundo</code> e atribui o valor 3200, representando o segundo salário.</p>
  
  <pre><code>let salarioTotal = salarioPrimeiro + salarioSegundo;
console.log("3) Soma dos salários:", salarioTotal);</code></pre>
  <p>Declara a variável <code>salarioTotal</code> e atribui a ela o resultado da soma dos dois salários (2500 + 3200 = 5700). Mais um exemplo do uso do operador de adição com valores numéricos.</p>
  
  <pre><code>console.log("\\n==============================\\n");</code></pre>
  <p>Insere uma linha com caracteres de igual (=) para demarcar visualmente o fim da seção de exemplos de adição.</p>
</div>

<h4>Fluxo de execução:</h4>
<ol>
    <li>Definição de valores iniciais para o exemplo de pontuação em jogo</li>
    <li>Cálculo e exibição da soma das pontuações</li>
    <li>Definição de valores iniciais para horas trabalhadas em cada dia</li>
    <li>Cálculo e exibição da soma total das horas na semana</li>
    <li>Definição de valores iniciais para dois salários</li>
    <li>Cálculo e exibição da soma dos salários</li>
</ol>

                        <p>Nos exemplos apresentados, vemos três aplicações práticas do operador de adição:</p>
                        <ul>
                            <li><strong>Exemplo 1:</strong> Somamos pontos em um jogo, simulando a adição de novas pontuações a um total existente.</li>
                            <li><strong>Exemplo 2:</strong> Calculamos o total de horas trabalhadas na semana somando as horas de cada dia.</li>
                            <li><strong>Exemplo 3:</strong> Somamos dois valores de salários para obter um total.</li>
                        </ul>

                        <p>Vale lembrar que em JavaScript o operador + também pode ser usado para concatenar strings. Se um dos operandos for uma string, o JavaScript converteria o outro operando para string e faria a concatenação em vez da adição numérica.</p>`,
            trace: [
              // Algoritmo 1: Soma de pontos em um jogo
              {
                step: 1,
                algoritmo: "Exemplo 1: Pontuação total",
                instrucao: "let pontosAtuais = 150",
                pontosAtuais: 150,
                explanation: "Inicializamos a variável pontosAtuais com o valor 150"
              },
              {
                step: 2,
                algoritmo: "Exemplo 1: Pontuação total",
                instrucao: "let pontoNovos = 50",
                pontoNovos: 50,
                explanation: "Inicializamos a variável pontoNovos com o valor 50"
              },
              {
                step: 3,
                algoritmo: "Exemplo 1: Pontuação total",
                instrucao: "let pontosTotal = pontosAtuais + pontoNovos",
                calculo: "150 + 50 = 200",
                pontosTotal: 200,
                explanation: "Somamos pontosAtuais (150) e pontoNovos (50) e armazenamos o resultado (200) em pontosTotal"
              },
              {
                step: 4,
                algoritmo: "Exemplo 1: Pontuação total",
                instrucao: "console.log(\"1) Pontuação total:\", pontosTotal)",
                saida: "1) Pontuação total: 200",
                explanation: "Exibimos o resultado da soma no console"
              },
              
              // Algoritmo 2: Soma de horas trabalhadas na semana
              {
                step: 1,
                algoritmo: "Exemplo 2: Total de horas trabalhadas",
                instrucao: "let horasSegunda = 8",
                horasSegunda: 8,
                explanation: "Inicializamos a variável horasSegunda com o valor 8"
              },
              {
                step: 2,
                algoritmo: "Exemplo 2: Total de horas trabalhadas",
                instrucao: "let horasTerca = 6",
                horasTerca: 6,
                explanation: "Inicializamos a variável horasTerca com o valor 6"
              },
              {
                step: 3,
                algoritmo: "Exemplo 2: Total de horas trabalhadas",
                instrucao: "let horasQuarta = 7",
                horasQuarta: 7,
                explanation: "Inicializamos a variável horasQuarta com o valor 7"
              },
              {
                step: 4,
                algoritmo: "Exemplo 2: Total de horas trabalhadas",
                instrucao: "let horasQuinta = 8",
                horasQuinta: 8,
                explanation: "Inicializamos a variável horasQuinta com o valor 8"
              },
              {
                step: 5,
                algoritmo: "Exemplo 2: Total de horas trabalhadas",
                instrucao: "let horasSexta = 4",
                horasSexta: 4,
                explanation: "Inicializamos a variável horasSexta com o valor 4"
              },
              {
                step: 6,
                algoritmo: "Exemplo 2: Total de horas trabalhadas",
                instrucao: "let totalHoras = horasSegunda + horasTerca + horasQuarta + horasQuinta + horasSexta",
                calculo: "8 + 6 + 7 + 8 + 4 = 33",
                totalHoras: 33,
                explanation: "Somamos as horas de todos os dias da semana (8+6+7+8+4) e armazenamos o resultado (33) em totalHoras"
              },
              {
                step: 7,
                algoritmo: "Exemplo 2: Total de horas trabalhadas",
                instrucao: "console.log(\"2) Total de horas trabalhadas:\", totalHoras)",
                saida: "2) Total de horas trabalhadas: 33",
                explanation: "Exibimos o total de horas trabalhadas no console"
              },
              
              // Algoritmo 3: Soma de valores (salários)
              {
                step: 1,
                algoritmo: "Exemplo 3: Soma de salários",
                instrucao: "let salarioPrimeiro = 2500",
                salarioPrimeiro: 2500,
                explanation: "Inicializamos a variável salarioPrimeiro com o valor 2500"
              },
              {
                step: 2,
                algoritmo: "Exemplo 3: Soma de salários",
                instrucao: "let salarioSegundo = 3200",
                salarioSegundo: 3200,
                explanation: "Inicializamos a variável salarioSegundo com o valor 3200"
              },
              {
                step: 3,
                algoritmo: "Exemplo 3: Soma de salários",
                instrucao: "let salarioTotal = salarioPrimeiro + salarioSegundo",
                calculo: "2500 + 3200 = 5700",
                salarioTotal: 5700,
                explanation: "Somamos salarioPrimeiro (2500) e salarioSegundo (3200) e armazenamos o resultado (5700) em salarioTotal"
              },
              {
                step: 4,
                algoritmo: "Exemplo 3: Soma de salários",
                instrucao: "console.log(\"3) Soma dos salários:\", salarioTotal)",
                saida: "3) Soma dos salários: 5700",
                explanation: "Exibimos a soma dos salários no console"
              }
            ]
          },
          {
            id: "dia3-desafio1-v2",
            title: "Subtração",
            statement: `<h2>Operadores Aritméticos - Subtração</h2>
                        <p>Este exemplo demonstra o uso do operador de subtração (-) em JavaScript em diferentes contextos práticos.</p>
                        <p>O operador de subtração é usado para calcular a diferença entre dois valores numéricos.</p>
                        <h3>Exemplos incluídos:</h3>
                        <ul>
                            <li>Cálculo de lucro (receita - despesas)</li>
                            <li>Cálculo de idade a partir do ano de nascimento</li>
                            <li>Determinação da diferença entre dois valores</li>
                        </ul>`,
            code: `// ---------- SUBTRAÇÃO ----------
console.log("=== SUBTRAÇÃO ===");

// 1) Cálculo de lucro (receita - despesas)
let receita = 5000;
let despesas = 3200;
let lucro = receita - despesas;
console.log("1) Lucro calculado:", lucro);

console.log("\\n");

// 2) Cálculo de idade (anoAtual - anoNascimento)
let anoAtual = 2025;
let anoNascimento = 1990;
let idade = anoAtual - anoNascimento;
console.log("2) Idade calculada:", idade);

console.log("\\n");

// 3) Diferença entre dois valores
let numA = 50;
let numB = 30;
let diferenca = numA - numB;
console.log("3) Diferença entre numA e numB:", diferenca);

console.log("\\n==============================\\n");`,
            explanation: `<p>O operador de subtração (-) é um dos operadores aritméticos fundamentais em JavaScript e em muitas outras linguagens de programação.</p>

<div class="code-explanation">
  <h4>Análise detalhada linha por linha:</h4>
  
  <pre><code>// ---------- SUBTRAÇÃO ----------</code></pre>
  <p>Comentário que identifica a seção do código dedicada ao operador de subtração.</p>
  
  <pre><code>console.log("=== SUBTRAÇÃO ===");</code></pre>
  <p>Exibe um título formatado no console para marcar o início da seção de exemplos de subtração.</p>
  
  <pre><code>// 1) Cálculo de lucro (receita - despesas)</code></pre>
  <p>Comentário que descreve o primeiro exemplo prático: cálculo de lucro subtraindo despesas da receita.</p>
  
  <pre><code>let receita = 5000;</code></pre>
  <p>Declara a variável <code>receita</code> e atribui o valor 5000, representando o total de receitas.</p>
  
  <pre><code>let despesas = 3200;</code></pre>
  <p>Declara a variável <code>despesas</code> e atribui o valor 3200, representando o total de despesas.</p>
  
  <pre><code>let lucro = receita - despesas;</code></pre>
  <p>Declara a variável <code>lucro</code> e atribui a ela o resultado da subtração <code>receita</code> (5000) menos <code>despesas</code> (3200), resultando em 1800. Esta linha demonstra o uso do operador de subtração para calcular a diferença entre dois valores numéricos.</p>
  
  <pre><code>console.log("1) Lucro calculado:", lucro);</code></pre>
  <p>Exibe no console a mensagem "1) Lucro calculado:" seguida do valor da variável <code>lucro</code> (1800).</p>
  
  <pre><code>console.log("\\n");</code></pre>
  <p>Insere uma linha em branco no console para melhor separação visual entre os exemplos.</p>
  
  <pre><code>// 2) Cálculo de idade (anoAtual - anoNascimento)</code></pre>
  <p>Comentário que descreve o segundo exemplo prático: calcular a idade de uma pessoa subtraindo o ano de nascimento do ano atual.</p>
  
  <pre><code>let anoAtual = 2025;</code></pre>
  <p>Declara a variável <code>anoAtual</code> e atribui o valor 2025, representando o ano atual para o cálculo.</p>
  
  <pre><code>let anoNascimento = 1990;</code></pre>
  <p>Declara a variável <code>anoNascimento</code> e atribui o valor 1990, representando o ano de nascimento da pessoa.</p>
  
  <pre><code>let idade = anoAtual - anoNascimento;</code></pre>
  <p>Declara a variável <code>idade</code> e atribui a ela o resultado da subtração <code>anoAtual</code> (2025) menos <code>anoNascimento</code> (1990), resultando em 35. Este é um uso comum da subtração para calcular períodos de tempo.</p>
  
  <pre><code>console.log("2) Idade calculada:", idade);</code></pre>
  <p>Exibe no console a mensagem "2) Idade calculada:" seguida do valor da variável <code>idade</code> (35).</p>
  
  <pre><code>console.log("\\n");</code></pre>
  <p>Insere outra linha em branco no console para separação visual.</p>
  
  <pre><code>// 3) Diferença entre dois valores</code></pre>
  <p>Comentário que descreve o terceiro exemplo prático: calcular a diferença entre dois números.</p>
  
  <pre><code>let numA = 50;</code></pre>
  <p>Declara a variável <code>numA</code> e atribui o valor 50, representando o primeiro número.</p>
  
  <pre><code>let numB = 30;</code></pre>
  <p>Declara a variável <code>numB</code> e atribui o valor 30, representando o segundo número.</p>
  
  <pre><code>let diferenca = numA - numB;</code></pre>
  <p>Declara a variável <code>diferenca</code> e atribui a ela o resultado da subtração <code>numA</code> (50) menos <code>numB</code> (30), resultando em 20. Este é um exemplo simples de uso da subtração para encontrar a diferença entre dois valores.</p>
  
  <pre><code>console.log("3) Diferença entre numA e numB:", diferenca);</code></pre>
  <p>Exibe no console a mensagem "3) Diferença entre numA e numB:" seguida do valor da variável <code>diferenca</code> (20).</p>
  
  <pre><code>console.log("\\n==============================\\n");</code></pre>
  <p>Insere uma linha com caracteres de igual (=) para demarcar visualmente o fim da seção de exemplos de subtração.</p>
</div>

<h4>Fluxo de execução:</h4>
<ol>
    <li>Definição de valores iniciais para o exemplo de cálculo de lucro</li>
    <li>Cálculo e exibição do lucro (receita menos despesas)</li>
    <li>Definição de valores iniciais para cálculo de idade</li>
    <li>Cálculo e exibição da idade (ano atual menos ano de nascimento)</li>
    <li>Definição de valores iniciais para cálculo de diferença</li>
    <li>Cálculo e exibição da diferença entre os dois números</li>
</ol>

                        <p>Nos exemplos apresentados, vemos três aplicações práticas do operador de subtração:</p>
                        <ul>
    <li><strong>Exemplo 1:</strong> Calculamos o lucro subtraindo as despesas da receita, uma operação fundamental em cálculos financeiros.</li>
                            <li><strong>Exemplo 2:</strong> Calculamos a idade de uma pessoa subtraindo o ano de nascimento do ano atual.</li>
    <li><strong>Exemplo 3:</strong> Calculamos a diferença entre dois valores numéricos.</li>
                        </ul>

<p>O operador de subtração em JavaScript só funciona com valores numéricos. Se tentarmos subtrair strings ou outros tipos de dados não numéricos, o JavaScript tentará convertê-los para números antes de realizar a operação.</p>`,
            trace: [
              // Algoritmo 1: Cálculo de lucro
              {
                step: 1,
                algoritmo: "Exemplo 1: Lucro",
                instrucao: "let receita = 5000",
                receita: 5000,
                explanation: "Inicializamos a variável receita com o valor 5000"
              },
              {
                step: 2,
                algoritmo: "Exemplo 1: Lucro",
                instrucao: "let despesas = 3200",
                despesas: 3200,
                explanation: "Inicializamos a variável despesas com o valor 3200"
              },
              {
                step: 3,
                algoritmo: "Exemplo 1: Lucro",
                instrucao: "let lucro = receita - despesas",
                calculo: "5000 - 3200 = 1800",
                lucro: 1800,
                explanation: "Subtraímos despesas (3200) de receita (5000) e armazenamos o resultado (1800) em lucro"
              },
              {
                step: 4,
                algoritmo: "Exemplo 1: Lucro",
                instrucao: "console.log(\"1) Lucro calculado:\", lucro)",
                saida: "1) Lucro calculado: 1800",
                explanation: "Exibimos o lucro calculado no console"
              },
              
              // Algoritmo 2: Cálculo de idade
              {
                step: 1,
                algoritmo: "Exemplo 2: Idade",
                instrucao: "let anoAtual = 2025",
                anoAtual: 2025,
                explanation: "Inicializamos a variável anoAtual com o valor 2025"
              },
              {
                step: 2,
                algoritmo: "Exemplo 2: Idade",
                instrucao: "let anoNascimento = 1990",
                anoNascimento: 1990,
                explanation: "Inicializamos a variável anoNascimento com o valor 1990"
              },
              {
                step: 3,
                algoritmo: "Exemplo 2: Idade",
                instrucao: "let idade = anoAtual - anoNascimento",
                calculo: "2025 - 1990 = 35",
                idade: 35,
                explanation: "Subtraímos anoNascimento (1990) de anoAtual (2025) e armazenamos o resultado (35) em idade"
              },
              {
                step: 4,
                algoritmo: "Exemplo 2: Idade",
                instrucao: "console.log(\"2) Idade calculada:\", idade)",
                saida: "2) Idade calculada: 35",
                explanation: "Exibimos a idade calculada no console"
              },
              
              // Algoritmo 3: Diferença entre dois valores
              {
                step: 1,
                algoritmo: "Exemplo 3: Diferença entre valores",
                instrucao: "let numA = 50",
                numA: 50,
                explanation: "Inicializamos a variável numA com o valor 50"
              },
              {
                step: 2,
                algoritmo: "Exemplo 3: Diferença entre valores",
                instrucao: "let numB = 30",
                numB: 30,
                explanation: "Inicializamos a variável numB com o valor 30"
              },
              {
                step: 3,
                algoritmo: "Exemplo 3: Diferença entre valores",
                instrucao: "let diferenca = numA - numB",
                calculo: "50 - 30 = 20",
                diferenca: 20,
                explanation: "Subtraímos numB (30) de numA (50) e armazenamos o resultado (20) em diferenca"
              },
              {
                step: 4,
                algoritmo: "Exemplo 3: Diferença entre valores",
                instrucao: "console.log(\"3) Diferença entre numA e numB:\", diferenca)",
                saida: "3) Diferença entre numA e numB: 20",
                explanation: "Exibimos a diferença calculada no console"
              }
            ]
          },
          {
            id: "dia3-desafio1-v3",
            title: "Multiplicação",
            statement: `<h2>Operadores Aritméticos - Multiplicação</h2>
                        <p>Este exemplo demonstra o uso do operador de multiplicação (*) em JavaScript em diferentes contextos práticos.</p>
                        <p>O operador de multiplicação é usado para calcular o produto de dois valores numéricos.</p>
                        <h3>Exemplos incluídos:</h3>
                        <ul>
                            <li>Cálculo de ganho diário (valor/hora × horas trabalhadas)</li>
                            <li>Multiplicação de uma média pelo total de dados</li>
                            <li>Cálculo de horas trabalhadas em um período</li>
                        </ul>`,
            code: `// ---------- MULTIPLICAÇÃO ----------
console.log("=== MULTIPLICAÇÃO ===");

// 1) Ganho por hora trabalhada
let valorHora = 30;
let horasTrabalhadasDia = 8;
let ganhoDia = valorHora * horasTrabalhadasDia;
console.log("1) Ganho diário (30/h * 8h):", ganhoDia);

console.log("\\n");

// 2) Multiplicação de uma média pelo total de dados
let media = 7;
let totalDados = 5;
let resultadoMultiplicacao = media * totalDados;
console.log("2) Multiplicação da média pelo total de dados:", resultadoMultiplicacao);

console.log("\\n");

// 3) Total de horas trabalhadas em 20 dias (exemplo de 8h/dia)
let diasTrabalhados = 20;
let horasPorDia = 8;
let totalHoras = diasTrabalhados * horasPorDia;
console.log("3) Total de horas trabalhadas no mês (20 dias):", totalHoras);

console.log("\\n==============================\\n");`,
            explanation: `<p>O operador de multiplicação (*) é um dos operadores aritméticos fundamentais em JavaScript e em muitas outras linguagens de programação.</p>

<div class="code-explanation">
  <h4>Análise detalhada linha por linha:</h4>
  
  <pre><code>// ---------- MULTIPLICAÇÃO ----------</code></pre>
  <p>Comentário que identifica a seção do código dedicada ao operador de multiplicação.</p>
  
  <pre><code>console.log("=== MULTIPLICAÇÃO ===");</code></pre>
  <p>Exibe um título formatado no console para marcar o início da seção de exemplos de multiplicação.</p>
  
  <pre><code>// 1) Ganho por hora trabalhada</code></pre>
  <p>Comentário que descreve o primeiro exemplo prático: calcular o ganho diário multiplicando o valor por hora pelas horas trabalhadas.</p>
  
  <pre><code>let valorHora = 30;</code></pre>
  <p>Declara a variável <code>valorHora</code> e atribui o valor 30, representando o valor monetário ganho por hora de trabalho.</p>
  
  <pre><code>let horasTrabalhadasDia = 8;</code></pre>
  <p>Declara a variável <code>horasTrabalhadasDia</code> e atribui o valor 8, representando a quantidade de horas trabalhadas em um dia.</p>
  
  <pre><code>let ganhoDia = valorHora * horasTrabalhadasDia;</code></pre>
  <p>Declara a variável <code>ganhoDia</code> e atribui a ela o resultado da multiplicação de <code>valorHora</code> (30) por <code>horasTrabalhadasDia</code> (8), resultando em 240. Esta linha demonstra o uso do operador de multiplicação para calcular um valor total baseado em uma taxa por unidade.</p>
  
  <pre><code>console.log("1) Ganho diário (30/h * 8h):", ganhoDia);</code></pre>
  <p>Exibe no console a mensagem "1) Ganho diário (30/h * 8h):" seguida do valor da variável <code>ganhoDia</code> (240).</p>
  
  <pre><code>console.log("\\n");</code></pre>
  <p>Insere uma linha em branco no console para melhor separação visual entre os exemplos.</p>
  
  <pre><code>// 2) Multiplicação de uma média pelo total de dados</code></pre>
  <p>Comentário que descreve o segundo exemplo prático: multiplicar uma média pelo total de dados, operação comum em estatística.</p>
  
  <pre><code>let media = 7;</code></pre>
  <p>Declara a variável <code>media</code> e atribui o valor 7, representando uma média calculada.</p>
  
  <pre><code>let totalDados = 5;</code></pre>
  <p>Declara a variável <code>totalDados</code> e atribui o valor 5, representando o número total de itens usados no cálculo da média.</p>
  
  <pre><code>let resultadoMultiplicacao = media * totalDados;</code></pre>
  <p>Declara a variável <code>resultadoMultiplicacao</code> e atribui a ela o resultado da multiplicação de <code>media</code> (7) por <code>totalDados</code> (5), resultando em 35. Este exemplo mostra como a multiplicação pode ser usada em cálculos estatísticos.</p>
  
  <pre><code>console.log("2) Multiplicação da média pelo total de dados:", resultadoMultiplicacao);</code></pre>
  <p>Exibe no console a mensagem "2) Multiplicação da média pelo total de dados:" seguida do valor da variável <code>resultadoMultiplicacao</code> (35).</p>
  
  <pre><code>console.log("\\n");</code></pre>
  <p>Insere outra linha em branco no console para separação visual.</p>
  
  <pre><code>// 3) Total de horas trabalhadas em 20 dias (exemplo de 8h/dia)</code></pre>
  <p>Comentário que descreve o terceiro exemplo prático: calcular o total de horas trabalhadas em um período de tempo.</p>
  
  <pre><code>let diasTrabalhados = 20;</code></pre>
  <p>Declara a variável <code>diasTrabalhados</code> e atribui o valor 20, representando o número de dias trabalhados em um mês.</p>
  
  <pre><code>let horasPorDia = 8;</code></pre>
  <p>Declara a variável <code>horasPorDia</code> e atribui o valor 8, representando a quantidade de horas trabalhadas por dia.</p>
  
  <pre><code>let totalHoras = diasTrabalhados * horasPorDia;</code></pre>
  <p>Declara a variável <code>totalHoras</code> e atribui a ela o resultado da multiplicação de <code>diasTrabalhados</code> (20) por <code>horasPorDia</code> (8), resultando em 160. Este exemplo demonstra como a multiplicação pode ser usada para calcular totais em um período.</p>
  
  <pre><code>console.log("3) Total de horas trabalhadas no mês (20 dias):", totalHoras);</code></pre>
  <p>Exibe no console a mensagem "3) Total de horas trabalhadas no mês (20 dias):" seguida do valor da variável <code>totalHoras</code> (160).</p>
  
  <pre><code>console.log("\\n==============================\\n");</code></pre>
  <p>Insere uma linha com caracteres de igual (=) para demarcar visualmente o fim da seção de exemplos de multiplicação.</p>
</div>

<h4>Fluxo de execução:</h4>
<ol>
    <li>Definição de valores iniciais para o exemplo de ganho diário</li>
    <li>Cálculo e exibição do ganho diário (valor por hora multiplicado pelas horas trabalhadas)</li>
    <li>Definição de valores iniciais para multiplicação estatística</li>
    <li>Cálculo e exibição do resultado da multiplicação da média pelo total de dados</li>
    <li>Definição de valores iniciais para cálculo de horas totais</li>
    <li>Cálculo e exibição do total de horas trabalhadas no mês</li>
</ol>

                        <p>Nos exemplos apresentados, vemos três aplicações práticas do operador de multiplicação:</p>
                        <ul>
                            <li><strong>Exemplo 1:</strong> Calculamos o ganho diário multiplicando o valor da hora de trabalho pelo número de horas trabalhadas.</li>
                            <li><strong>Exemplo 2:</strong> Multiplicamos uma média pelo total de dados, uma operação comum em estatística e análise de dados.</li>
                            <li><strong>Exemplo 3:</strong> Calculamos o total de horas trabalhadas em um mês, multiplicando o número de dias trabalhados pelas horas diárias.</li>
                        </ul>

                        <p>A multiplicação em JavaScript aceita apenas valores numéricos. Quando tentamos multiplicar um número por uma string, o JavaScript tenta converter a string em número antes de realizar a operação.</p>`,
            trace: [
              // Algoritmo 1: Ganho por hora trabalhada
              {
                step: 1,
                algoritmo: "Exemplo 1: Ganho diário",
                instrucao: "let valorHora = 30",
                valorHora: 30,
                explanation: "Inicializamos a variável valorHora com o valor 30"
              },
              {
                step: 2,
                algoritmo: "Exemplo 1: Ganho diário",
                instrucao: "let horasTrabalhadasDia = 8",
                horasTrabalhadasDia: 8,
                explanation: "Inicializamos a variável horasTrabalhadasDia com o valor 8"
              },
              {
                step: 3,
                algoritmo: "Exemplo 1: Ganho diário",
                instrucao: "let ganhoDia = valorHora * horasTrabalhadasDia",
                calculo: "30 * 8 = 240",
                ganhoDia: 240,
                explanation: "Multiplicamos valorHora (30) por horasTrabalhadasDia (8) e armazenamos o resultado (240) em ganhoDia"
              },
              {
                step: 4,
                algoritmo: "Exemplo 1: Ganho diário",
                instrucao: "console.log(\"1) Ganho diário (30/h * 8h):\", ganhoDia)",
                saida: "1) Ganho diário (30/h * 8h): 240",
                explanation: "Exibimos o ganho diário calculado no console"
              },
              
              // Algoritmo 2: Multiplicação de média pelo total
              {
                step: 1,
                algoritmo: "Exemplo 2: Média × Total",
                instrucao: "let media = 7",
                media: 7,
                explanation: "Inicializamos a variável media com o valor 7"
              },
              {
                step: 2,
                algoritmo: "Exemplo 2: Média × Total",
                instrucao: "let totalDados = 5",
                totalDados: 5,
                explanation: "Inicializamos a variável totalDados com o valor 5"
              },
              {
                step: 3,
                algoritmo: "Exemplo 2: Média × Total",
                instrucao: "let resultadoMultiplicacao = media * totalDados",
                calculo: "7 * 5 = 35",
                resultadoMultiplicacao: 35,
                explanation: "Multiplicamos media (7) por totalDados (5) e armazenamos o resultado (35) em resultadoMultiplicacao"
              },
              {
                step: 4,
                algoritmo: "Exemplo 2: Média × Total",
                instrucao: "console.log(\"2) Multiplicação da média pelo total de dados:\", resultadoMultiplicacao)",
                saida: "2) Multiplicação da média pelo total de dados: 35",
                explanation: "Exibimos o resultado da multiplicação no console"
              },
              
              // Algoritmo 3: Total de horas trabalhadas
              {
                step: 1,
                algoritmo: "Exemplo 3: Horas mensais",
                instrucao: "let diasTrabalhados = 20",
                diasTrabalhados: 20,
                explanation: "Inicializamos a variável diasTrabalhados com o valor 20"
              },
              {
                step: 2,
                algoritmo: "Exemplo 3: Horas mensais",
                instrucao: "let horasPorDia = 8",
                horasPorDia: 8,
                explanation: "Inicializamos a variável horasPorDia com o valor 8"
              },
              {
                step: 3,
                algoritmo: "Exemplo 3: Horas mensais",
                instrucao: "let totalHoras = diasTrabalhados * horasPorDia",
                calculo: "20 * 8 = 160",
                totalHoras: 160,
                explanation: "Multiplicamos diasTrabalhados (20) por horasPorDia (8) e armazenamos o resultado (160) em totalHoras"
              },
              {
                step: 4,
                algoritmo: "Exemplo 3: Horas mensais",
                instrucao: "console.log(\"3) Total de horas trabalhadas no mês (20 dias):\", totalHoras)",
                saida: "3) Total de horas trabalhadas no mês (20 dias): 160",
                explanation: "Exibimos o total de horas trabalhadas no console"
              }
            ]
          },
          {
            id: "dia3-desafio1-v4",
            title: "Divisão e Módulo",
            statement: `<h2>Operadores Aritméticos - Divisão e Módulo</h2>
                        <p>Este exemplo demonstra o uso dos operadores de divisão (/) e módulo (%) em JavaScript em contextos práticos.</p>
                        <p>O operador de divisão é usado para dividir um valor por outro, enquanto o operador de módulo retorna o resto de uma divisão.</p>
                        <h3>Exemplos incluídos:</h3>
                        <ul>
                            <li>Divisão de um valor entre várias pessoas</li>
                            <li>Cálculo do resto de uma divisão</li>
                            <li>Verificação de números pares e ímpares usando o operador de módulo</li>
                        </ul>`,
            code: `// ---------- DIVISÃO ----------
console.log("=== DIVISÃO ===");

// Exemplo de divisão: dividir R$500 entre 5 pessoas
let valorTotal = 500;
let numeroPessoas = 5;
let valorPorPessoa = valorTotal / numeroPessoas;
console.log("Divisão de R$500 entre 5 pessoas:", valorPorPessoa);

console.log("\\n==============================\\n");

// ---------- MÓDULO (RESTO) ----------
console.log("=== MÓDULO (RESTO) ===");

// Exemplo: resto da divisão de 13 por 5
let x = 13;
let y = 5;
let resto = x % y;
console.log("Resto da divisão de 13 por 5:", resto);

// Exemplo: verificar se números são pares ou ímpares
console.log("\\n--- Verificando números pares e ímpares ---");
let num1 = 10;
let num2 = 7;

// Verificar se num1 é par ou ímpar
let restoNum1 = num1 % 2;
if (restoNum1 === 0) {
    console.log(num1 + " é um número par");
} else {
    console.log(num1 + " é um número ímpar");
}

// Verificar se num2 é par ou ímpar
let restoNum2 = num2 % 2;
if (restoNum2 === 0) {
    console.log(num2 + " é um número par");
} else {
    console.log(num2 + " é um número ímpar");
}

console.log("\\n==============================\\n");`,
            explanation: `<p>Os operadores de divisão (/) e módulo (%) são fundamentais para diversos cálculos em programação:</p>

<div class="code-explanation">
  <h4>Análise detalhada linha por linha:</h4>
  
  <pre><code>// ---------- DIVISÃO ----------</code></pre>
  <p>Comentário que identifica a seção do código dedicada ao operador de divisão.</p>
  
  <pre><code>console.log("=== DIVISÃO ===");</code></pre>
  <p>Exibe um título formatado no console para marcar o início da seção de exemplos de divisão.</p>
  
  <pre><code>// Exemplo de divisão: dividir R$500 entre 5 pessoas</code></pre>
  <p>Comentário que descreve o exemplo prático: dividir um valor total entre um número de pessoas.</p>
  
  <pre><code>let valorTotal = 500;</code></pre>
  <p>Declara a variável <code>valorTotal</code> e atribui o valor 500, representando o montante total a ser dividido.</p>
  
  <pre><code>let numeroPessoas = 5;</code></pre>
  <p>Declara a variável <code>numeroPessoas</code> e atribui o valor 5, representando o número de pessoas entre as quais o valor será dividido.</p>
  
  <pre><code>let valorPorPessoa = valorTotal / numeroPessoas;</code></pre>
  <p>Declara a variável <code>valorPorPessoa</code> e atribui a ela o resultado da divisão de <code>valorTotal</code> (500) por <code>numeroPessoas</code> (5), resultando em 100. Esta linha demonstra o uso do operador de divisão para calcular um valor distribuído igualmente.</p>
  
  <pre><code>console.log("Divisão de R$500 entre 5 pessoas:", valorPorPessoa);</code></pre>
  <p>Exibe no console a mensagem "Divisão de R$500 entre 5 pessoas:" seguida do valor da variável <code>valorPorPessoa</code> (100).</p>
  
  <pre><code>console.log("\\n==============================\\n");</code></pre>
  <p>Insere linhas em branco e uma linha com caracteres de igual (=) para demarcar visualmente o fim da seção de exemplos de divisão.</p>
  
  <pre><code>// ---------- MÓDULO (RESTO) ----------</code></pre>
  <p>Comentário que identifica a seção do código dedicada ao operador de módulo (resto da divisão).</p>
  
  <pre><code>console.log("=== MÓDULO (RESTO) ===");</code></pre>
  <p>Exibe um título formatado no console para marcar o início da seção de exemplos de operador de módulo.</p>
  
  <pre><code>// Exemplo: resto da divisão de 13 por 5</code></pre>
  <p>Comentário que descreve o primeiro exemplo do operador de módulo: calcular o resto da divisão entre dois números.</p>
  
  <pre><code>let x = 13;</code></pre>
  <p>Declara a variável <code>x</code> e atribui o valor 13, representando o dividendo na operação de módulo.</p>
  
  <pre><code>let y = 5;</code></pre>
  <p>Declara a variável <code>y</code> e atribui o valor 5, representando o divisor na operação de módulo.</p>
  
  <pre><code>let resto = x % y;</code></pre>
  <p>Declara a variável <code>resto</code> e atribui a ela o resultado da operação de módulo entre <code>x</code> (13) e <code>y</code> (5), resultando em 3. O operador de módulo (%) retorna o resto da divisão inteira entre os operandos.</p>
  
  <pre><code>console.log("Resto da divisão de 13 por 5:", resto);</code></pre>
  <p>Exibe no console a mensagem "Resto da divisão de 13 por 5:" seguida do valor da variável <code>resto</code> (3).</p>
  
  <pre><code>// Exemplo: verificar se números são pares ou ímpares</code></pre>
  <p>Comentário que descreve o segundo exemplo do operador de módulo: usar o resto da divisão por 2 para determinar se um número é par ou ímpar.</p>
  
  <pre><code>console.log("\\n--- Verificando números pares e ímpares ---");</code></pre>
  <p>Exibe um subtítulo formatado no console para marcar o início do exemplo de verificação de números pares e ímpares.</p>
  
  <pre><code>let num1 = 10;</code></pre>
  <p>Declara a variável <code>num1</code> e atribui o valor 10, representando o primeiro número a ser verificado.</p>
  
  <pre><code>let num2 = 7;</code></pre>
  <p>Declara a variável <code>num2</code> e atribui o valor 7, representando o segundo número a ser verificado.</p>
  
  <pre><code>// Verificar se num1 é par ou ímpar</code></pre>
  <p>Comentário que indica o início da verificação do primeiro número.</p>
  
  <pre><code>let restoNum1 = num1 % 2;</code></pre>
  <p>Declara a variável <code>restoNum1</code> e atribui a ela o resultado da operação de módulo entre <code>num1</code> (10) e 2, resultando em 0. Um número é par se o resto da divisão por 2 for igual a 0.</p>
  
  <pre><code>if (restoNum1 === 0) {
    console.log(num1 + " é um número par");
} else {
    console.log(num1 + " é um número ímpar");
}</code></pre>
  <p>Estrutura condicional que verifica se <code>restoNum1</code> é igual a 0. Se for, exibe no console a mensagem "10 é um número par"; caso contrário, exibe "10 é um número ímpar". Como <code>restoNum1</code> é 0, a mensagem exibida será "10 é um número par".</p>
  
  <pre><code>// Verificar se num2 é par ou ímpar</code></pre>
  <p>Comentário que indica o início da verificação do segundo número.</p>
  
  <pre><code>let restoNum2 = num2 % 2;</code></pre>
  <p>Declara a variável <code>restoNum2</code> e atribui a ela o resultado da operação de módulo entre <code>num2</code> (7) e 2, resultando em 1. Um número é ímpar se o resto da divisão por 2 for igual a 1.</p>
  
  <pre><code>if (restoNum2 === 0) {
    console.log(num2 + " é um número par");
} else {
    console.log(num2 + " é um número ímpar");
}</code></pre>
  <p>Estrutura condicional que verifica se <code>restoNum2</code> é igual a 0. Se for, exibe no console a mensagem "7 é um número par"; caso contrário, exibe "7 é um número ímpar". Como <code>restoNum2</code> é 1, a mensagem exibida será "7 é um número ímpar".</p>
  
  <pre><code>console.log("\\n==============================\\n");</code></pre>
  <p>Insere linhas em branco e uma linha com caracteres de igual (=) para demarcar visualmente o fim da seção de exemplos do operador de módulo.</p>
</div>

<h4>Fluxo de execução:</h4>
<ol>
    <li>Demonstração do operador de divisão:
        <ul>
            <li>Definição de valores iniciais para o exemplo de divisão</li>
            <li>Cálculo e exibição do resultado da divisão</li>
        </ul>
    </li>
    <li>Demonstração do operador de módulo:
        <ul>
            <li>Cálculo e exibição do resto da divisão entre dois números</li>
            <li>Uso do operador de módulo para verificar se um número é par ou ímpar:
                <ul>
                    <li>Verificação do primeiro número (par)</li>
                    <li>Verificação do segundo número (ímpar)</li>
                </ul>
            </li>
        </ul>
    </li>
</ol>

                        <ul>
                            <li><strong>Operador de divisão (/):</strong> Divide o operando à esquerda pelo operando à direita. É útil para distribuir valores igualmente ou calcular proporções.</li>
                            <li><strong>Operador de módulo (%):</strong> Retorna o resto da divisão do operando à esquerda pelo operando à direita. É frequentemente usado para verificar divisibilidade e em algoritmos cíclicos.</li>
                        </ul>
                        <p>No primeiro exemplo, dividimos um valor total entre um número de pessoas, situação comum em divisões de contas ou pagamentos.</p>
                        <p>No segundo exemplo, calculamos o resto da divisão de um número por outro, útil para determinar se um número é divisível por outro (o resto seria 0) ou para operações que precisam trabalhar com ciclos.</p>
                        <p>No terceiro exemplo, aplicamos o operador de módulo para verificar se um número é par ou ímpar:</p>
                        <ul>
    <li>Se um número dividido por 2 tem resto 0, ele é par.</li>
    <li>Se um número dividido por 2 tem resto 1, ele é ímpar.</li>
                        </ul>
<p>Esta é uma aplicação muito comum do operador de módulo em programação e algoritmos.</p>`,
            trace: [
              // Algoritmo 1: Divisão de valor entre pessoas
              {
                step: 1,
                algoritmo: "Exemplo 1: Divisão",
                instrucao: "let valorTotal = 500",
                valorTotal: 500,
                explanation: "Inicializamos a variável valorTotal com o valor 500"
              },
              {
                step: 2,
                algoritmo: "Exemplo 1: Divisão",
                instrucao: "let numeroPessoas = 5",
                numeroPessoas: 5,
                explanation: "Inicializamos a variável numeroPessoas com o valor 5"
              },
              {
                step: 3,
                algoritmo: "Exemplo 1: Divisão",
                instrucao: "let valorPorPessoa = valorTotal / numeroPessoas",
                calculo: "500 / 5 = 100",
                valorPorPessoa: 100,
                explanation: "Dividimos valorTotal (500) por numeroPessoas (5) e armazenamos o resultado (100) em valorPorPessoa"
              },
              {
                step: 4,
                algoritmo: "Exemplo 1: Divisão",
                instrucao: "console.log(\"Divisão de R$500 entre 5 pessoas:\", valorPorPessoa)",
                saida: "Divisão de R$500 entre 5 pessoas: 100",
                explanation: "Exibimos o valor por pessoa no console"
              },
              
              // Algoritmo 2: Cálculo do resto
              {
                step: 1,
                algoritmo: "Exemplo 2: Módulo (resto)",
                instrucao: "let x = 13",
                x: 13,
                explanation: "Inicializamos a variável x com o valor 13"
              },
              {
                step: 2,
                algoritmo: "Exemplo 2: Módulo (resto)",
                instrucao: "let y = 5",
                y: 5,
                explanation: "Inicializamos a variável y com o valor 5"
              },
              {
                step: 3,
                algoritmo: "Exemplo 2: Módulo (resto)",
                instrucao: "let resto = x % y",
                calculo: "13 % 5 = 3 (13 ÷ 5 = 2 com resto 3)",
                resto: 3,
                explanation: "Calculamos o resto da divisão de x (13) por y (5), que é 3, e armazenamos em resto"
              },
              {
                step: 4,
                algoritmo: "Exemplo 2: Módulo (resto)",
                instrucao: "console.log(\"Resto da divisão de 13 por 5:\", resto)",
                saida: "Resto da divisão de 13 por 5: 3",
                explanation: "Exibimos o resto da divisão no console"
              },
              
              // Algoritmo 3: Verificação de números pares ou ímpares
              {
                step: 1,
                algoritmo: "Exemplo 3: Verificação de números pares ou ímpares",
                instrucao: "let num1 = 10",
                num1: 10,
                explanation: "Inicializamos a variável num1 com o valor 10"
              },
              {
                step: 2,
                algoritmo: "Exemplo 3: Verificação de números pares ou ímpares",
                instrucao: "let num2 = 7",
                num2: 7,
                explanation: "Inicializamos a variável num2 com o valor 7"
              },
              {
                step: 3,
                algoritmo: "Exemplo 3: Verificação de números pares ou ímpares",
                instrucao: "let restoNum1 = num1 % 2",
                calculo: "10 % 2 = 0",
                restoNum1: 0,
                explanation: "Calculamos o resto da divisão de num1 (10) por 2, que é 0"
              },
              {
                step: 4,
                algoritmo: "Exemplo 3: Verificação de números pares ou ímpares",
                instrucao: "if (restoNum1 === 0) { console.log(num1 + \" é um número par\"); } else { console.log(num1 + \" é um número ímpar\"); }",
                saida: "10 é um número par",
                explanation: "Exibimos que num1 (10) é um número par"
              },
              {
                step: 5,
                algoritmo: "Exemplo 3: Verificação de números pares ou ímpares",
                instrucao: "let restoNum2 = num2 % 2",
                calculo: "7 % 2 = 1",
                restoNum2: 1,
                explanation: "Calculamos o resto da divisão de num2 (7) por 2, que é 1"
              },
              {
                step: 6,
                algoritmo: "Exemplo 3: Verificação de números pares ou ímpares",
                instrucao: "if (restoNum2 === 0) { console.log(num2 + \" é um número par\"); } else { console.log(num2 + \" é um número ímpar\"); }",
                saida: "7 é um número ímpar",
                explanation: "Exibimos que num2 (7) é um número ímpar"
              }
            ]
          },
          {
            id: "dia3-desafio1-v5",
            title: "Exponenciação e Raiz Quadrada",
            statement: `<h2>Operadores Aritméticos - Exponenciação e Raiz Quadrada</h2>
                        <p>Este exemplo demonstra o uso do operador de exponenciação (**) e do método Math.sqrt() para cálculo de raiz quadrada em JavaScript.</p>
                        <p>O operador de exponenciação é usado para elevar um valor a uma potência.</p>
                        <h3>Exemplos incluídos:</h3>
                        <ul>
                            <li>Cálculo de potências usando o operador **</li>
                            <li>Cálculo de raiz quadrada usando Math.sqrt()</li>
                            <li>Cálculo da área de um círculo usando PI e potência</li>
                        </ul>`,
            code: `// ---------- EXPONENCIAÇÃO ----------
console.log("=== EXPONENCIAÇÃO ===");

// Exemplo: 2^4 (2 elevado a 4)
let base = 2;
let expoente = 4;
let resultadoExpo = base ** expoente; // 2^4 = 16
console.log("2 elevado a 4 =", resultadoExpo);

console.log("\\n");

// ---------- RAIZ QUADRADA ----------
console.log("=== RAIZ QUADRADA ===");

// Exemplo: raiz quadrada de 16
let numero = 16;
let raizQuadrada = Math.sqrt(numero);
console.log("Raiz quadrada de 16 =", raizQuadrada);

console.log("\\n");

// Aplicação: cálculo da área de um círculo
let raio = 5;
let areaCirculo = Math.PI * raio ** 2;
console.log("Área do círculo com raio 5:", areaCirculo);

console.log("\\n==============================\\n");`,
            explanation: `<p>Os operadores de exponenciação (**) e o método Math.sqrt() são ferramentas importantes para cálculos matemáticos mais avançados em JavaScript.</p>

<div class="code-explanation">
  <h4>Análise detalhada linha por linha:</h4>
  
  <pre><code>// ---------- EXPONENCIAÇÃO ----------</code></pre>
  <p>Comentário que identifica a seção do código dedicada ao operador de exponenciação.</p>
  
  <pre><code>console.log("=== EXPONENCIAÇÃO ===");</code></pre>
  <p>Exibe um título formatado no console para marcar o início da seção de exemplos de exponenciação.</p>
  
  <pre><code>// Exemplo: 2^4 (2 elevado a 4)</code></pre>
  <p>Comentário que descreve o primeiro exemplo: calcular 2 elevado à 4ª potência.</p>
  
  <pre><code>let base = 2;</code></pre>
  <p>Declara a variável <code>base</code> e atribui o valor 2, representando o número que será elevado à potência.</p>
  
  <pre><code>let expoente = 4;</code></pre>
  <p>Declara a variável <code>expoente</code> e atribui o valor 4, representando a potência à qual a base será elevada.</p>
  
  <pre><code>let resultadoExpo = base ** expoente; // 2^4 = 16</code></pre>
  <p>Declara a variável <code>resultadoExpo</code> e atribui a ela o resultado da operação de exponenciação, onde <code>base</code> (2) é elevado ao <code>expoente</code> (4), resultando em 16. O operador <code>**</code> é utilizado em JavaScript para calcular potências.</p>
  
  <pre><code>console.log("2 elevado a 4 =", resultadoExpo);</code></pre>
  <p>Exibe no console a mensagem "2 elevado a 4 =" seguida do valor da variável <code>resultadoExpo</code> (16).</p>
  
  <pre><code>console.log("\\n");</code></pre>
  <p>Insere uma linha em branco no console para melhor separação visual entre os exemplos.</p>
  
  <pre><code>// ---------- RAIZ QUADRADA ----------</code></pre>
  <p>Comentário que identifica a seção do código dedicada ao cálculo de raiz quadrada.</p>
  
  <pre><code>console.log("=== RAIZ QUADRADA ===");</code></pre>
  <p>Exibe um título formatado no console para marcar o início da seção de exemplos de raiz quadrada.</p>
  
  <pre><code>// Exemplo: raiz quadrada de 16</code></pre>
  <p>Comentário que descreve o exemplo de cálculo da raiz quadrada de 16.</p>
  
  <pre><code>let numero = 16;</code></pre>
  <p>Declara a variável <code>numero</code> e atribui o valor 16, representando o número do qual queremos calcular a raiz quadrada.</p>
  
  <pre><code>let raizQuadrada = Math.sqrt(numero);</code></pre>
  <p>Declara a variável <code>raizQuadrada</code> e atribui a ela o resultado da função <code>Math.sqrt()</code> aplicada ao <code>numero</code> (16), resultando em 4. A função <code>Math.sqrt()</code> é um método nativo do JavaScript que calcula a raiz quadrada de um número.</p>
  
  <pre><code>console.log("Raiz quadrada de 16 =", raizQuadrada);</code></pre>
  <p>Exibe no console a mensagem "Raiz quadrada de 16 =" seguida do valor da variável <code>raizQuadrada</code> (4).</p>
  
  <pre><code>console.log("\\n");</code></pre>
  <p>Insere outra linha em branco no console para separação visual.</p>
  
  <pre><code>// Aplicação: cálculo da área de um círculo</code></pre>
  <p>Comentário que descreve uma aplicação prática: calcular a área de um círculo usando a fórmula π × r².</p>
  
  <pre><code>let raio = 5;</code></pre>
  <p>Declara a variável <code>raio</code> e atribui o valor 5, representando o raio do círculo.</p>
  
  <pre><code>let areaCirculo = Math.PI * raio ** 2;</code></pre>
  <p>Declara a variável <code>areaCirculo</code> e atribui a ela o resultado da multiplicação de <code>Math.PI</code> (uma constante matemática disponível no objeto Math) pelo quadrado do <code>raio</code> (5² = 25), resultando em aproximadamente 78,54. Esta linha combina o uso do operador de exponenciação para calcular o quadrado do raio e a constante π para aplicar a fórmula da área do círculo (A = π × r²).</p>
  
  <pre><code>console.log("Área do círculo com raio 5:", areaCirculo);</code></pre>
  <p>Exibe no console a mensagem "Área do círculo com raio 5:" seguida do valor da variável <code>areaCirculo</code> (aproximadamente 78,54).</p>
  
  <pre><code>console.log("\\n==============================\\n");</code></pre>
  <p>Insere linhas em branco e uma linha com caracteres de igual (=) para demarcar visualmente o fim da seção de exemplos.</p>
</div>

<h4>Fluxo de execução:</h4>
<ol>
    <li>Demonstração do operador de exponenciação:
        <ul>
            <li>Definição de valores iniciais (base e expoente)</li>
            <li>Cálculo e exibição do resultado da exponenciação</li>
                        </ul>
    </li>
    <li>Demonstração do cálculo de raiz quadrada:
        <ul>
            <li>Definição do valor inicial (número)</li>
            <li>Cálculo e exibição da raiz quadrada usando Math.sqrt()</li>
        </ul>
    </li>
    <li>Aplicação prática:
        <ul>
            <li>Cálculo da área de um círculo usando a fórmula matemática que combina π e exponenciação</li>
            <li>Exibição do resultado do cálculo</li>
        </ul>
    </li>
</ol>

<p>O operador de exponenciação (<code>**</code>) foi introduzido no ECMAScript 2016 (ES7) e é uma forma mais concisa de calcular potências em JavaScript, substituindo o antigo método <code>Math.pow()</code>.</p>

<p>A função <code>Math.sqrt()</code> é parte do objeto Math, que contém várias propriedades e métodos para constantes e funções matemáticas. Outras funções úteis do objeto Math incluem <code>Math.abs()</code> (valor absoluto), <code>Math.round()</code> (arredondamento), <code>Math.floor()</code> (arredondamento para baixo) e <code>Math.ceil()</code> (arredondamento para cima).</p>`,
            trace: [
              // Algoritmo: Exponenciação
              {
                step: 1,
                algoritmo: "Exponenciação",
                instrucao: "let base = 2",
                base: 2,
                explanation: "Inicializamos a variável base com o valor 2"
              },
              {
                step: 2,
                algoritmo: "Exponenciação",
                instrucao: "let expoente = 4",
                expoente: 4,
                explanation: "Inicializamos a variável expoente com o valor 4"
              },
              {
                step: 3,
                algoritmo: "Exponenciação",
                instrucao: "let resultadoExpo = base ** expoente",
                calculo: "2 ** 4 = 2 × 2 × 2 × 2 = 16",
                resultadoExpo: 16,
                explanation: "Calculamos base (2) elevado ao expoente (4), que é 2^4 = 16, e armazenamos em resultadoExpo"
              },
              {
                step: 4,
                algoritmo: "Exponenciação",
                instrucao: "console.log(\"2 elevado a 4 =\", resultadoExpo)",
                saida: "2 elevado a 4 = 16",
                explanation: "Exibimos o resultado da exponenciação no console"
              },
              
              // Algoritmo: Raiz Quadrada
              {
                step: 1,
                algoritmo: "Raiz Quadrada",
                instrucao: "let numero = 16",
                numero: 16,
                explanation: "Inicializamos a variável numero com o valor 16"
              },
              {
                step: 2,
                algoritmo: "Raiz Quadrada",
                instrucao: "let raizQuadrada = Math.sqrt(numero)",
                calculo: "Math.sqrt(16) = 4",
                raizQuadrada: 4,
                explanation: "Calculamos a raiz quadrada de numero (16), que é 4, usando o método Math.sqrt()"
              },
              {
                step: 3,
                algoritmo: "Raiz Quadrada",
                instrucao: "console.log(\"Raiz quadrada de 16 =\", raizQuadrada)",
                saida: "Raiz quadrada de 16 = 4",
                explanation: "Exibimos o resultado do cálculo da raiz quadrada no console"
              },
              
              // Algoritmo: Área do Círculo
              {
                step: 1,
                algoritmo: "Área do Círculo",
                instrucao: "let raio = 5",
                raio: 5,
                explanation: "Inicializamos a variável raio com o valor 5"
              },
              {
                step: 2,
                algoritmo: "Área do Círculo",
                instrucao: "let areaCirculo = Math.PI * raio ** 2",
                calculo: "3.141592653589793 * 5^2 = 3.141592653589793 * 25 ≈ 78.54",
                areaCirculo: 78.53981633974483,
                explanation: "Calculamos a área do círculo usando a fórmula π×r², onde elevamos o raio (5) ao quadrado e multiplicamos por π"
              },
              {
                step: 3,
                algoritmo: "Área do Círculo",
                instrucao: "console.log(\"Área do círculo com raio 5:\", areaCirculo)",
                saida: "Área do círculo com raio 5: 78.53981633974483",
                explanation: "Exibimos a área calculada do círculo no console"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    day: "Dia 4",
    challenges: [
      {
        id: "dia4-desafio1",
        title: "Renovação da CNH",
        versions: [
          {
            id: "dia4-desafio1-v1",
            title: "Estruturas Condicionais",
            statement: `<h2>Desafio 01: Renovação da CNH</h2>
                        <p>Vamos supor que estamos criando um sistema para controlar a renovação da carteira de motorista e precisamos saber em quanto tempo a mesma irá vencer de acordo com a legislação.</p>
                        <p>De acordo com a lei, se você está tirando a carteira pela primeira vez (independentemente da sua idade), o tempo de vencimento dela é de 1 ano.</p>
                        <p>Caso contrário, as regras são:</p>
                        <ol>
                            <li>Se você tem idade inferior a 50 anos, o vencimento é de 10 anos;</li>
                            <li>Se for igual ou superior a 50 anos ou inferior a 70 anos, o vencimento é de 5 anos;</li>
                            <li>Mas se for igual ou superior a 70 anos, o vencimento será de 3 anos.</li>
                        </ol>
                        <p>Você deve criar variáveis e estruturas condicionais para controlar esse vencimento.</p>`,
            code: `// === DESAFIO 01: Renovação da CNH ===
//
// Regras:
// 1) Se é a primeira carteira (independente da idade) => vencimento em 1 ano
// 2) Se a idade é menor que 50 anos => vencimento em 10 anos
// 3) Se a idade é >= 50 e < 70 => vencimento em 5 anos
// 4) Se a idade é >= 70 => vencimento em 3 anos

// Solicita os dados ao usuário
let primeiraVezInput = prompt("É a primeira vez que você está tirando a carteira? (sim/nao)");
let idadeInput = prompt("Qual a sua idade?");

// Converte e normaliza as entradas
let primeiraVez = primeiraVezInput.toLowerCase() === "sim";
let idade = parseInt(idadeInput);

console.log("=== DESAFIO 01: Renovação da CNH ===\\n");

// Verifica se a idade é válida
if (isNaN(idade) || idade <= 0) {
  console.log("Idade inválida. Verifique o valor digitado.");
} else {
  // Verifica se é a primeira carteira
  if (primeiraVez) {
    console.log("Como é a sua primeira carteira, o vencimento é de 1 ano.");
  } else {
    // Caso não seja a primeira vez, verifica a idade
    if (idade < 50) {
      console.log("O vencimento da sua CNH é de 10 anos.");
    } else if (idade >= 50 && idade < 70) {
      console.log("O vencimento da sua CNH é de 5 anos.");
    } else {
      console.log("O vencimento da sua CNH é de 3 anos.");
    }
  }
}`,
            explanation: `<p>Este programa implementa um sistema que determina o período de vencimento da Carteira Nacional de Habilitação (CNH) com base em dois critérios: se é a primeira vez que a pessoa está tirando a carteira e sua idade.</p>
                        
                        <div class="code-explanation">
                          <h4>Análise detalhada linha por linha:</h4>
                          
                          <pre><code>// === DESAFIO 01: Renovação da CNH ===</code></pre>
                          <p>Comentário que identifica o início do programa e seu propósito.</p>
                          
                          <pre><code>// Regras:
// 1) Se é a primeira carteira (independente da idade) => vencimento em 1 ano
// 2) Se a idade é menor que 50 anos => vencimento em 10 anos
// 3) Se a idade é >= 50 e < 70 => vencimento em 5 anos
// 4) Se a idade é >= 70 => vencimento em 3 anos</code></pre>
                          <p>Comentários que descrevem as regras de negócio que o algoritmo irá implementar. Isso é uma boa prática para documentar o propósito e o funcionamento do código.</p>
                          
                          <pre><code>let primeiraVezInput = prompt("É a primeira vez que você está tirando a carteira? (sim/nao)");</code></pre>
                          <p>Declara a variável <code>primeiraVezInput</code> e atribui a ela o valor retornado pela função <code>prompt()</code>, que exibe uma caixa de diálogo solicitando ao usuário que informe se é a primeira vez que está tirando a carteira. A resposta do usuário é armazenada como texto (string).</p>
                          
                          <pre><code>let idadeInput = prompt("Qual a sua idade?");</code></pre>
                          <p>Declara a variável <code>idadeInput</code> e atribui a ela o valor retornado por outro <code>prompt()</code>, solicitando ao usuário que informe sua idade. Novamente, a resposta é armazenada como texto, mesmo que o usuário digite números.</p>
                          
                          <pre><code>let primeiraVez = primeiraVezInput.toLowerCase() === "sim";</code></pre>
                          <p>Declara a variável <code>primeiraVez</code> e atribui a ela o resultado da expressão <code>primeiraVezInput.toLowerCase() === "sim"</code>, que é um valor booleano (true/false).
                          <ul>
                            <li>O método <code>toLowerCase()</code> converte o texto para minúsculas, garantindo que a comparação não seja sensível a maiúsculas/minúsculas (por exemplo, "SIM", "Sim" e "sim" serão todos considerados iguais).</li>
                            <li>O operador <code>===</code> compara se o valor é exatamente igual a "sim".</li>
                            <li>Se o usuário digitou "sim" (em qualquer combinação de maiúsculas/minúsculas), <code>primeiraVez</code> será <code>true</code>; caso contrário, será <code>false</code>.</li>
                          </ul></p>
                          
                          <pre><code>let idade = parseInt(idadeInput);</code></pre>
                          <p>Declara a variável <code>idade</code> e atribui a ela o resultado da função <code>parseInt(idadeInput)</code>.
                          <ul>
                            <li>A função <code>parseInt()</code> converte um texto para um número inteiro.</li>
                            <li>Se o texto não puder ser convertido para um número (por exemplo, se o usuário digitou "trinta" em vez de "30"), o resultado será <code>NaN</code> (Not a Number).</li>
                          </ul></p>
                          
                          <pre><code>console.log("=== DESAFIO 01: Renovação da CNH ===\\n");</code></pre>
                          <p>Exibe o título do desafio no console. O <code>\\n</code> representa uma quebra de linha, criando um espaço após o título.</p>
                          
                          <pre><code>if (isNaN(idade) || idade <= 0) {</code></pre>
                          <p>Inicia uma estrutura condicional que verifica se:
                          <ul>
                            <li><code>isNaN(idade)</code>: a função <code>isNaN()</code> retorna <code>true</code> se o valor não for um número válido. Isso acontece se o usuário digitar algo que não pode ser convertido para número.</li>
                            <li><code>idade <= 0</code>: verifica se a idade é menor ou igual a zero, o que seria inválido.</li>
                            <li>O operador <code>||</code> (OU lógico) retorna <code>true</code> se qualquer uma das condições for verdadeira.</li>
                          </ul></p>
                          
                          <pre><code>  console.log("Idade inválida. Verifique o valor digitado.");</code></pre>
                          <p>Se a condição anterior for verdadeira (idade inválida), exibe uma mensagem de erro no console. O código está indentado para mostrar que está dentro do bloco <code>if</code>.</p>
                          
                          <pre><code>} else {</code></pre>
                          <p>Inicia o bloco <code>else</code>, que será executado se a idade for válida (um número positivo).</p>
                          
                          <pre><code>  if (primeiraVez) {</code></pre>
                          <p>Dentro do bloco <code>else</code>, inicia outra estrutura condicional que verifica se <code>primeiraVez</code> é <code>true</code>, ou seja, se o usuário respondeu "sim" à pergunta sobre ser a primeira vez tirando a carteira.</p>
                          
                          <pre><code    console.log("Como é a sua primeira carteira, o vencimento é de 1 ano.");</code></pre>
                          <p>Se for a primeira vez, exibe a mensagem informando que o vencimento é de 1 ano, independentemente da idade.</p>
                          
                          <pre><code  } else {</code></pre>
                          <p>Inicia outro bloco <code>else</code> que será executado se não for a primeira carteira.</p>
                          
                          <pre><code    if (idade < 50) {</code></pre>
                          <p>Verifica se a idade é menor que 50 anos.</p>
                          
                          <pre><code      console.log("O vencimento da sua CNH é de 10 anos.");</code></pre>
                          <p>Se a idade for menor que 50, exibe que o vencimento é de 10 anos.</p>
                          
                          <pre><code    } else if (idade >= 50 && idade < 70) {</code></pre>
                          <p>Se a idade não for menor que 50, verifica se ela está entre 50 (inclusive) e 70 (exclusive).
                          <ul>
                            <li><code>idade >= 50</code>: verifica se a idade é maior ou igual a 50.</li>
                            <li><code>idade < 70</code>: verifica se a idade é menor que 70.</li>
                            <li>O operador <code>&&</code> (E lógico) exige que ambas as condições sejam verdadeiras para que a expressão inteira seja verdadeira.</li>
                            <li>Neste caso, requer que a idade seja maior ou igual a 50 E também menor que 70.</li>
                          </ul></p>
                          
                          <pre><code      console.log("O vencimento da sua CNH é de 5 anos.");</code></pre>
                          <p>Se a idade estiver entre 50 e 70 anos, exibe que o vencimento é de 5 anos.</p>
                          
                          <pre><code    } else {</code></pre>
                          <p>Inicia o bloco <code>else</code> final, que será executado se nenhuma das condições anteriores for verdadeira (ou seja, se a idade for 70 anos ou mais).</p>
                          
                          <pre><code      console.log("O vencimento da sua CNH é de 3 anos.");</code></pre>
                          <p>Se a idade for 70 anos ou mais, exibe que o vencimento é de 3 anos.</p>
                          
                          <pre><code    }</code></pre>
                          <p>Fecha o bloco condicional para as diferentes faixas etárias.</p>
                          
                          <pre><code  }</code></pre>
                          <p>Fecha o bloco condicional para a verificação de primeira carteira.</p>
                          
                          <pre><code>}</code></pre>
                          <p>Fecha o bloco condicional principal para a verificação de idade válida.</p>
                        </div>
                        
                        <h4>Fluxo de execução:</h4>
                        <ol>
                            <li>Coleta dos dados do usuário via prompts</li>
                            <li>Processamento e normalização dos dados (conversão para tipos adequados)</li>
                            <li>Validação da idade (verificação se é um número válido e positivo)</li>
                            <li>Aplicação da lógica de negócio por meio de estruturas condicionais aninhadas:
                                <ul>
                                    <li>Primeira verificação: se é primeira carteira</li>
                                    <li>Segunda verificação (se não for primeira carteira): análise da faixa etária</li>
                                </ul>
                            </li>
                            <li>Apresentação do resultado ao usuário via console.log</li>
                        </ol>
                        
                        <p>Este tipo de estrutura de decisão aninhada é comum em sistemas que precisam aplicar diferentes regras com base em múltiplos critérios. O código é organizado de forma lógica, começando pela validação das entradas, seguido pela aplicação das regras de negócio, e finalizando com a exibição do resultado apropriado.</p>`,
            trace: [
              // Cenário 1: Primeira carteira
              {
                step: 1,
                algoritmo: "Cenário 1: Primeira carteira",
                instrucao: "Input do usuário para primeiraVezInput",
                primeiraVezInput: "sim",
                explanation: "Usuário informa que é a primeira vez que está tirando a carteira"
              },
              {
                step: 2,
                algoritmo: "Cenário 1: Primeira carteira",
                instrucao: "Input do usuário para idadeInput",
                idadeInput: "25",
                explanation: "Usuário informa que tem 25 anos"
              },
              {
                step: 3,
                algoritmo: "Cenário 1: Primeira carteira",
                instrucao: "let primeiraVez = primeiraVezInput.toLowerCase() === \"sim\"",
                calculo: "'sim'.toLowerCase() === 'sim' é true",
                primeiraVez: true,
                explanation: "Convertemos a entrada para minúsculo e verificamos se é igual a 'sim'"
              },
              {
                step: 4,
                algoritmo: "Cenário 1: Primeira carteira",
                instrucao: "let idade = parseInt(idadeInput)",
                calculo: "parseInt('25') resulta em 25",
                idade: 25,
                explanation: "Convertemos a string '25' para o número inteiro 25"
              },
              {
                step: 5,
                algoritmo: "Cenário 1: Primeira carteira",
                instrucao: "if (isNaN(idade) || idade <= 0)",
                calculo: "isNaN(25) é false, 25 <= 0 é false, então false || false é false",
                resultado: false,
                explanation: "Verificamos se a idade é válida: não é NaN e é maior que zero"
              },
              {
                step: 6,
                algoritmo: "Cenário 1: Primeira carteira",
                instrucao: "if (primeiraVez)",
                calculo: "primeiraVez é true",
                resultado: true,
                explanation: "Verificamos se é a primeira carteira, o que é verdadeiro"
              },
              {
                step: 7,
                algoritmo: "Cenário 1: Primeira carteira",
                instrucao: "console.log(\"Como é a sua primeira carteira, o vencimento é de 1 ano.\")",
                saida: "Como é a sua primeira carteira, o vencimento é de 1 ano.",
                explanation: "Exibimos que o vencimento é de 1 ano pois é a primeira carteira"
              },
              
              // Cenário 2: Idade menor que 50 anos
              {
                step: 1,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "Input do usuário para primeiraVezInput",
                primeiraVezInput: "nao",
                explanation: "Usuário informa que não é a primeira vez que está tirando a carteira"
              },
              {
                step: 2,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "Input do usuário para idadeInput",
                idadeInput: "35",
                explanation: "Usuário informa que tem 35 anos"
              },
              {
                step: 3,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "let primeiraVez = primeiraVezInput.toLowerCase() === \"sim\"",
                calculo: "'nao'.toLowerCase() === 'sim' é false",
                primeiraVez: false,
                explanation: "Convertemos a entrada para minúsculo e verificamos se é igual a 'sim'"
              },
              {
                step: 4,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "let idade = parseInt(idadeInput)",
                calculo: "parseInt('35') resulta em 35",
                idade: 35,
                explanation: "Convertemos a string '35' para o número inteiro 35"
              },
              {
                step: 5,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "if (isNaN(idade) || idade <= 0)",
                calculo: "isNaN(35) é false, 35 <= 0 é false, então false || false é false",
                resultado: false,
                explanation: "Verificamos se a idade é válida: não é NaN e é maior que zero"
              },
              {
                step: 6,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "if (primeiraVez)",
                calculo: "primeiraVez é false",
                resultado: false,
                explanation: "Verificamos se é a primeira carteira, o que é falso"
              },
              {
                step: 7,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "if (idade < 50)",
                calculo: "35 < 50 é true",
                resultado: true,
                explanation: "Verificamos se a idade é menor que 50 anos"
              },
              {
                step: 8,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "console.log(\"O vencimento da sua CNH é de 10 anos.\")",
                saida: "O vencimento da sua CNH é de 10 anos.",
                explanation: "Exibimos que o vencimento é de 10 anos para idade menor que 50"
              },
              
              // Cenário 3: Idade entre 50 e 70 anos
              {
                step: 1,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "Input do usuário para primeiraVezInput",
                primeiraVezInput: "nao",
                explanation: "Usuário informa que não é a primeira vez que está tirando a carteira"
              },
              {
                step: 2,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "Input do usuário para idadeInput",
                idadeInput: "60",
                explanation: "Usuário informa que tem 60 anos"
              },
              {
                step: 3,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "let primeiraVez = primeiraVezInput.toLowerCase() === \"sim\"",
                calculo: "'nao'.toLowerCase() === 'sim' é false",
                primeiraVez: false,
                explanation: "Convertemos a entrada para minúsculo e verificamos se é igual a 'sim'"
              },
              {
                step: 4,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "let idade = parseInt(idadeInput)",
                calculo: "parseInt('60') resulta em 60",
                idade: 60,
                explanation: "Convertemos a string '60' para o número inteiro 60"
              },
              {
                step: 5,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "if (isNaN(idade) || idade <= 0)",
                calculo: "isNaN(60) é false, 60 <= 0 é false, então false || false é false",
                resultado: false,
                explanation: "Verificamos se a idade é válida: não é NaN e é maior que zero"
              },
              {
                step: 6,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "if (primeiraVez)",
                calculo: "primeiraVez é false",
                resultado: false,
                explanation: "Verificamos se é a primeira carteira, o que é falso"
              },
              {
                step: 7,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "if (idade < 50)",
                calculo: "60 < 50 é false",
                resultado: false,
                explanation: "Verificamos se a idade é menor que 50 anos"
              },
              {
                step: 8,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "else if (idade >= 50 && idade < 70)",
                calculo: "60 >= 50 é true, 60 < 70 é true, então true && true é true",
                resultado: true,
                explanation: "Verificamos se a idade está entre 50 e 70 anos"
              },
              {
                step: 9,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "console.log(\"O vencimento da sua CNH é de 5 anos.\")",
                saida: "O vencimento da sua CNH é de 5 anos.",
                explanation: "Exibimos que o vencimento é de 5 anos para idade entre 50 e 70 anos"
              },
              
              // Cenário 4: Idade maior ou igual a 70 anos
              {
                step: 1,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "Input do usuário para primeiraVezInput",
                primeiraVezInput: "nao",
                explanation: "Usuário informa que não é a primeira vez que está tirando a carteira"
              },
              {
                step: 2,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "Input do usuário para idadeInput",
                idadeInput: "75",
                explanation: "Usuário informa que tem 75 anos"
              },
              {
                step: 3,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "let primeiraVez = primeiraVezInput.toLowerCase() === \"sim\"",
                calculo: "'nao'.toLowerCase() === 'sim' é false",
                primeiraVez: false,
                explanation: "Convertemos a entrada para minúsculo e verificamos se é igual a 'sim'"
              },
              {
                step: 4,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "let idade = parseInt(idadeInput)",
                calculo: "parseInt('75') resulta em 75",
                idade: 75,
                explanation: "Convertemos a string '75' para o número inteiro 75"
              },
              {
                step: 5,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "if (isNaN(idade) || idade <= 0)",
                calculo: "isNaN(75) é false, 75 <= 0 é false, então false || false é false",
                resultado: false,
                explanation: "Verificamos se a idade é válida: não é NaN e é maior que zero"
              },
              {
                step: 6,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "if (primeiraVez)",
                calculo: "primeiraVez é false",
                resultado: false,
                explanation: "Verificamos se é a primeira carteira, o que é falso"
              },
              {
                step: 7,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "if (idade < 50)",
                calculo: "75 < 50 é false",
                resultado: false,
                explanation: "Verificamos se a idade é menor que 50 anos"
              },
              {
                step: 8,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "else if (idade >= 50 && idade < 70)",
                calculo: "75 >= 50 é true, 75 < 70 é false, então true && false é false",
                resultado: false,
                explanation: "Verificamos se a idade está entre 50 e 70 anos"
              },
              {
                step: 9,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "else { console.log(\"O vencimento da sua CNH é de 3 anos.\"); }",
                saida: "O vencimento da sua CNH é de 3 anos.",
                explanation: "Exibimos que o vencimento é de 3 anos para idade maior ou igual a 70 anos"
              }
            ]
          },
          {
            id: "dia4-desafio1-v2",
            title: "Versão com if/else if",
            statement: `<h2>Desafio 01: Renovação da CNH (versão com if, else if)</h2>
                        <p>Vamos supor que estamos criando um sistema para controlar a renovação da carteira de motorista e precisamos saber em quanto tempo a mesma irá vencer de acordo com a legislação.</p>
                        <p>De acordo com a lei, se você está tirando a carteira pela primeira vez (independentemente da sua idade), o tempo de vencimento dela é de 1 ano.</p>
                        <p>Caso contrário, as regras são:</p>
                        <ol>
                            <li>Se você tem idade inferior a 50 anos, o vencimento é de 10 anos;</li>
                            <li>Se for igual ou superior a 50 anos ou inferior a 70 anos, o vencimento é de 5 anos;</li>
                            <li>Mas se for igual ou superior a 70 anos, o vencimento será de 3 anos.</li>
                        </ol>
                        <p>Nesta versão, implementamos a solução usando uma estrutura de if/else if em sequência, uma alternativa à estrutura aninhada.</p>`,
            code: `// === DESAFIO 01: Renovação da CNH (versão com if, else if) ===
//
// Este código solicita que o usuário informe se é a primeira vez que está tirando a CNH 
// e sua idade, para determinar o prazo de vencimento da carteira:
//
// - Se for a primeira carteira (independente da idade): vencimento em 1 ano
// - Se não for a primeira e a idade for menor que 50 anos: vencimento em 10 anos
// - Se não for a primeira e a idade for entre 50 (inclusive) e 70 anos: vencimento em 5 anos
// - Se não for a primeira e a idade for 70 ou mais: vencimento em 3 anos

let primeiraVezInput = prompt("É a primeira vez que você está tirando a carteira? (sim/nao)").toLowerCase();
let idade = parseInt(prompt("Qual a sua idade?"));

console.log("=== DESAFIO 01: Renovação da CNH ===\\n");

// Verifica se a idade é um valor válido
if (isNaN(idade) || idade <= 0) {
  console.log("Idade inválida. Verifique o valor digitado.");
} else if (primeiraVezInput === "sim") {
  console.log("Como é a sua primeira carteira, o vencimento é de 1 ano.");
} else if (idade < 50) {
  console.log("O vencimento da sua CNH é de 10 anos.");
} else if (idade < 70) {
  console.log("O vencimento da sua CNH é de 5 anos.");
} else {
  console.log("O vencimento da sua CNH é de 3 anos.");
}`,
            explanation: `<p>Este programa implementa um sistema que determina o período de vencimento da Carteira Nacional de Habilitação (CNH) com base em dois critérios: se é a primeira vez que a pessoa está tirando a carteira e sua idade.</p>
                        
                        <div class="code-explanation">
                          <h4>Diferença em relação à primeira versão:</h4>
                          <p>Esta implementação utiliza uma abordagem com condicionais if/else if em sequência, ao invés de condicionais aninhados como na versão anterior. Isso torna o código mais plano e, em alguns casos, mais fácil de entender e manter.</p>
                          
                          <h4>Análise detalhada linha por linha:</h4>
                          
                          <pre><code>// === DESAFIO 01: Renovação da CNH (versão com if, else if) ===</code></pre>
                          <p>Comentário que identifica o início do programa e seu propósito, destacando que é uma versão alternativa.</p>
                          
                          <pre><code>// Este código solicita que o usuário informe se é a primeira vez que está tirando a CNH 
// e sua idade, para determinar o prazo de vencimento da carteira:
//
// - Se for a primeira carteira (independente da idade): vencimento em 1 ano
// - Se não for a primeira e a idade for menor que 50 anos: vencimento em 10 anos
// - Se não for a primeira e a idade for entre 50 (inclusive) e 70 anos: vencimento em 5 anos
// - Se não for a primeira e a idade for 70 ou mais: vencimento em 3 anos</code></pre>
                          <p>Comentários que descrevem as regras de negócio que o algoritmo irá implementar.</p>
                          
                          <pre><code>let primeiraVezInput = prompt("É a primeira vez que você está tirando a carteira? (sim/nao)").toLowerCase();</code></pre>
                          <p>Declara a variável <code>primeiraVezInput</code> e atribui a ela o valor retornado pela função <code>prompt()</code>, já convertendo para minúsculas com <code>toLowerCase()</code>. Isso simplifica o código em comparação com a versão anterior.</p>
                          
                          <pre><code>let idade = parseInt(prompt("Qual a sua idade?"));</code></pre>
                          <p>Declara a variável <code>idade</code> e atribui a ela o valor retornado pelo <code>prompt()</code>, convertendo diretamente para número inteiro.</p>
                          
                          <pre><code>console.log("=== DESAFIO 01: Renovação da CNH ===\\n");</code></pre>
                          <p>Exibe o título do desafio no console com uma quebra de linha após.</p>
                          
                          <pre><code>if (isNaN(idade) || idade <= 0) {
  console.log("Idade inválida. Verifique o valor digitado.");
}</code></pre>
                          <p>Verifica se a idade é inválida (não é um número ou é menor ou igual a zero). Se for, exibe uma mensagem de erro.</p>
                          
                          <pre><code>else if (primeiraVezInput === "sim") {
  console.log("Como é a sua primeira carteira, o vencimento é de 1 ano.");
}</code></pre>
                          <p>Se a idade for válida, verifica se é a primeira vez que o usuário está tirando a carteira. Se for, informa que o vencimento é de 1 ano.</p>
                          
                          <pre><code>else if (idade < 50) {
  console.log("O vencimento da sua CNH é de 10 anos.");
}</code></pre>
                          <p>Se não for a primeira carteira, verifica se a idade é menor que 50 anos. Se for, informa que o vencimento é de 10 anos.</p>
                          
                          <pre><code>else if (idade < 70) {
  console.log("O vencimento da sua CNH é de 5 anos.");
}</code></pre>
                          <p>Se não for nenhum dos casos anteriores (ou seja, não é a primeira carteira e idade não é menor que 50), verifica se a idade é menor que 70. Se for, informa que o vencimento é de 5 anos.</p>
                          
                          <pre><code>else {
  console.log("O vencimento da sua CNH é de 3 anos.");
}</code></pre>
                          <p>Se não for nenhum dos casos anteriores (ou seja, não é a primeira carteira e idade é maior ou igual a 70), informa que o vencimento é de 3 anos.</p>
                        </div>
                        
                        <h4>Comparação entre as duas versões:</h4>
                        <p>A principal diferença está na estrutura do código:</p>
                        <ul>
                            <li>Na primeira versão, usamos condicionais aninhados (if dentro de if), criando uma árvore de decisão com diferentes níveis.</li>
                            <li>Na segunda versão, usamos uma sequência de if/else if, tornando a estrutura mais linear.</li>
                        </ul>
                        
                        <p>Vantagens da versão if/else if:</p>
                        <ul>
                            <li>Código mais plano, sem tantos níveis de aninhamento</li>
                            <li>Melhor legibilidade em alguns casos, especialmente para condições mais complexas</li>
                            <li>Facilidade de adicionar novas condições ou alterar a ordem das verificações</li>
                        </ul>
                        
                        <p>Esta versão é especialmente útil quando as condições são mutuamente exclusivas, como neste caso, onde uma carteira só pode estar em uma das categorias de vencimento.</p>`,
            trace: [
              // Cenário 1: Primeira carteira
              {
                step: 1,
                algoritmo: "Cenário 1: Primeira carteira",
                instrucao: "Input do usuário para primeiraVezInput",
                primeiraVezInput: "sim",
                explanation: "Usuário informa que é a primeira vez que está tirando a carteira"
              },
              {
                step: 2,
                algoritmo: "Cenário 1: Primeira carteira",
                instrucao: "Input do usuário para idade",
                idadeInput: "25",
                explanation: "Usuário informa que tem 25 anos"
              },
              {
                step: 3,
                algoritmo: "Cenário 1: Primeira carteira",
                instrucao: "let idade = parseInt(idadeInput)",
                calculo: "parseInt('25') resulta em 25",
                idade: 25,
                explanation: "Convertemos a string '25' para o número inteiro 25"
              },
              {
                step: 4,
                algoritmo: "Cenário 1: Primeira carteira",
                instrucao: "if (isNaN(idade) || idade <= 0)",
                calculo: "isNaN(25) é false, 25 <= 0 é false, então false || false é false",
                resultado: false,
                explanation: "Verificamos se a idade é válida: não é NaN e é maior que zero"
              },
              {
                step: 5,
                algoritmo: "Cenário 1: Primeira carteira",
                instrucao: "else if (primeiraVezInput === \"sim\")",
                calculo: "'sim' === 'sim' é true",
                resultado: true,
                explanation: "Verificamos se é a primeira carteira, o que é verdadeiro"
              },
              {
                step: 6,
                algoritmo: "Cenário 1: Primeira carteira",
                instrucao: "console.log(\"Como é a sua primeira carteira, o vencimento é de 1 ano.\")",
                saida: "Como é a sua primeira carteira, o vencimento é de 1 ano.",
                explanation: "Exibimos que o vencimento é de 1 ano pois é a primeira carteira"
              },
              
              // Cenário 2: Idade menor que 50 anos
              {
                step: 1,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "Input do usuário para primeiraVezInput",
                primeiraVezInput: "nao",
                explanation: "Usuário informa que não é a primeira vez que está tirando a carteira"
              },
              {
                step: 2,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "Input do usuário para idade",
                idadeInput: "35",
                explanation: "Usuário informa que tem 35 anos"
              },
              {
                step: 3,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "let idade = parseInt(idadeInput)",
                calculo: "parseInt('35') resulta em 35",
                idade: 35,
                explanation: "Convertemos a string '35' para o número inteiro 35"
              },
              {
                step: 4,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "if (isNaN(idade) || idade <= 0)",
                calculo: "isNaN(35) é false, 35 <= 0 é false, então false || false é false",
                resultado: false,
                explanation: "Verificamos se a idade é válida: não é NaN e é maior que zero"
              },
              {
                step: 5,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "else if (primeiraVezInput === \"sim\")",
                calculo: "'nao' === 'sim' é false",
                resultado: false,
                explanation: "Verificamos se é a primeira carteira, o que é falso"
              },
              {
                step: 6,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "else if (idade < 50)",
                calculo: "35 < 50 é true",
                resultado: true,
                explanation: "Verificamos se a idade é menor que 50 anos"
              },
              {
                step: 7,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "console.log(\"O vencimento da sua CNH é de 10 anos.\")",
                saida: "O vencimento da sua CNH é de 10 anos.",
                explanation: "Exibimos que o vencimento é de 10 anos para idade menor que 50"
              },
              
              // Cenário 3: Idade entre 50 e 70 anos
              {
                step: 1,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "Input do usuário para primeiraVezInput",
                primeiraVezInput: "nao",
                explanation: "Usuário informa que não é a primeira vez que está tirando a carteira"
              },
              {
                step: 2,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "Input do usuário para idade",
                idadeInput: "60",
                explanation: "Usuário informa que tem 60 anos"
              },
              {
                step: 3,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "let primeiraVez = primeiraVezInput.toLowerCase() === \"sim\"",
                calculo: "'nao'.toLowerCase() === 'sim' é false",
                primeiraVez: false,
                explanation: "Convertemos a entrada para minúsculo e verificamos se é igual a 'sim'"
              },
              {
                step: 4,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "let idade = parseInt(idadeInput)",
                calculo: "parseInt('60') resulta em 60",
                idade: 60,
                explanation: "Convertemos a string '60' para o número inteiro 60"
              },
              {
                step: 5,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "if (isNaN(idade) || idade <= 0)",
                calculo: "isNaN(60) é false, 60 <= 0 é false, então false || false é false",
                resultado: false,
                explanation: "Verificamos se a idade é válida: não é NaN e é maior que zero"
              },
              {
                step: 6,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "if (primeiraVez)",
                calculo: "primeiraVez é false",
                resultado: false,
                explanation: "Verificamos se é a primeira carteira, o que é falso"
              },
              {
                step: 7,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "if (idade < 50)",
                calculo: "60 < 50 é false",
                resultado: false,
                explanation: "Verificamos se a idade é menor que 50 anos"
              },
              {
                step: 8,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "else if (idade >= 50 && idade < 70)",
                calculo: "60 >= 50 é true, 60 < 70 é true, então true && true é true",
                resultado: true,
                explanation: "Verificamos se a idade está entre 50 e 70 anos"
              },
              {
                step: 9,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "console.log(\"O vencimento da sua CNH é de 5 anos.\")",
                saida: "O vencimento da sua CNH é de 5 anos.",
                explanation: "Exibimos que o vencimento é de 5 anos para idade entre 50 e 70 anos"
              },
              
              // Cenário 4: Idade maior ou igual a 70 anos
              {
                step: 1,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "Input do usuário para primeiraVezInput",
                primeiraVezInput: "nao",
                explanation: "Usuário informa que não é a primeira vez que está tirando a carteira"
              },
              {
                step: 2,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "Input do usuário para idade",
                idadeInput: "75",
                explanation: "Usuário informa que tem 75 anos"
              },
              {
                step: 3,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "let primeiraVez = primeiraVezInput.toLowerCase() === \"sim\"",
                calculo: "'nao'.toLowerCase() === 'sim' é false",
                primeiraVez: false,
                explanation: "Convertemos a entrada para minúsculo e verificamos se é igual a 'sim'"
              },
              {
                step: 4,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "let idade = parseInt(idadeInput)",
                calculo: "parseInt('75') resulta em 75",
                idade: 75,
                explanation: "Convertemos a string '75' para o número inteiro 75"
              },
              {
                step: 5,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "if (isNaN(idade) || idade <= 0)",
                calculo: "isNaN(75) é false, 75 <= 0 é false, então false || false é false",
                resultado: false,
                explanation: "Verificamos se a idade é válida: não é NaN e é maior que zero"
              },
              {
                step: 6,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "if (primeiraVez)",
                calculo: "primeiraVez é false",
                resultado: false,
                explanation: "Verificamos se é a primeira carteira, o que é falso"
              },
              {
                step: 7,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "if (idade < 50)",
                calculo: "75 < 50 é false",
                resultado: false,
                explanation: "Verificamos se a idade é menor que 50 anos"
              },
              {
                step: 8,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "else if (idade >= 50 && idade < 70)",
                calculo: "75 >= 50 é true, 75 < 70 é false, então true && false é false",
                resultado: false,
                explanation: "Verificamos se a idade está entre 50 e 70 anos"
              },
              {
                step: 9,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "else { console.log(\"O vencimento da sua CNH é de 3 anos.\"); }",
                saida: "O vencimento da sua CNH é de 3 anos.",
                explanation: "Exibimos que o vencimento é de 3 anos para idade maior ou igual a 70 anos"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    day: "Dia 5",
    challenges: [
      {
        id: "dia5-desafio1",
        title: "Rendimento de Aplicação Financeira",
        versions: [
          {
            id: "dia5-desafio1-v1",
            title: "Simulador de Investimento com Juros Compostos",
            statement: `<h2>DESAFIO 01: Rendimento de aplicação financeira</h2>
                        <p>Suponha que você investiu R$ 1.000 em uma aplicação financeira que rende 12% ao ano. Usando um loop for, podemos calcular como esse investimento cresce ao longo do tempo, vamos supor nos próximos 10 anos. Mostre o valor no console por ano.</p>`,
            code: `// === DESAFIO 01: Rendimento de Aplicação Financeira ===
//
// Este código solicita ao usuário que informe:
// 1) O valor inicial do investimento (em reais)
// 2) A taxa de rendimento anual (em %)
// 3) O número de anos de investimento
//
// Em seguida, o programa calcula e exibe o valor acumulado ao final de cada ano.

let investimentoInput = prompt("Digite o valor inicial do investimento (em reais):");
let taxaInput = prompt("Digite a taxa de rendimento anual (em %):");
let anosInput = prompt("Digite o número de anos de investimento:");

let investimento = parseFloat(investimentoInput);
let taxaPercent = parseFloat(taxaInput);
let anos = parseInt(anosInput);

// Validação das entradas
if (isNaN(investimento) || investimento <= 0) {
  console.log("Valor de investimento inválido.");
} else if (isNaN(taxaPercent) || taxaPercent <= 0) {
  console.log("Taxa de rendimento inválida.");
} else if (isNaN(anos) || anos <= 0) {
  console.log("Número de anos inválido.");
} else {
  // Converte a taxa percentual para decimal (ex: 12% => 0.12)
  let taxa = taxaPercent / 100;

  console.log("=== DESAFIO 01: Rendimento de Aplicação Financeira ===\\n");
  console.log("Investimento inicial: R$ " + investimento.toFixed(2));
  console.log("Taxa de rendimento anual: " + taxaPercent + "%");
  console.log("Número de anos: " + anos + "\\n");

  // Calcula e exibe o valor acumulado ao final de cada ano
  for (let ano = 1; ano <= anos; ano++) {
    investimento = investimento * (1 + taxa);
    console.log("Após " + ano + " ano(s), valor acumulado: R$ " + investimento.toFixed(2));
  }
}`,
            explanation: `<p>Este código implementa um simulador de investimento com juros compostos, um conceito fundamental em finanças e investimentos.</p>

                        <div class="code-explanation">
                          <h4>Análise detalhada linha por linha:</h4>
                          
                          <pre><code>let investimentoInput = prompt("Digite o valor inicial do investimento (em reais):");</code></pre>
                          <p>Solicita e armazena o valor inicial do investimento informado pelo usuário:</p>
                          <ul>
                            <li>A função <code>prompt()</code> exibe uma caixa de diálogo para entrada do usuário</li>
                            <li>O valor inserido é armazenado como string na variável <code>investimentoInput</code></li>
                          </ul>
                          
                          <pre><code>let taxaInput = prompt("Digite a taxa de rendimento anual (em %):");</code></pre>
                          <p>Solicita e armazena a taxa de rendimento anual:</p>
                          <ul>
                            <li>Similar ao passo anterior, captura o percentual de rendimento da aplicação</li>
                            <li>Por exemplo, para uma aplicação que rende 12% ao ano, o usuário deve digitar "12"</li>
                          </ul>
                          
                          <pre><code>let anosInput = prompt("Digite o número de anos de investimento:");</code></pre>
                          <p>Solicita e armazena o horizonte temporal do investimento:</p>
                          <ul>
                            <li>Captura por quantos anos a simulação deve ser realizada</li>
                            <li>Define o número de iterações do loop <code>for</code> que calculará os rendimentos</li>
                          </ul>
                          
                          <pre><code>let investimento = parseFloat(investimentoInput);
let taxaPercent = parseFloat(taxaInput);
let anos = parseInt(anosInput);</code></pre>
                          <p>Converte as entradas do usuário de strings para números:</p>
                          <ul>
                            <li><code>parseFloat()</code> converte para números decimais (investimento e taxa)</li>
                            <li><code>parseInt()</code> converte para número inteiro (anos)</li>
                            <li>Essa conversão é necessária para realizar operações matemáticas</li>
                          </ul>
                          
                          <pre><code>// Validação das entradas
if (isNaN(investimento) || investimento <= 0) {
  console.log("Valor de investimento inválido.");
} else if (isNaN(taxaPercent) || taxaPercent <= 0) {
  console.log("Taxa de rendimento inválida.");
} else if (isNaN(anos) || anos <= 0) {
  console.log("Número de anos inválido.");
} else {</code></pre>
                          <p>Implementa validações para garantir entradas corretas:</p>
                          <ul>
                            <li>Verifica se o investimento é um número válido e positivo</li>
                            <li>Verifica se a taxa é um número válido e positivo</li>
                            <li>Verifica se o número de anos é um número válido e positivo</li>
                            <li>A função <code>isNaN()</code> retorna verdadeiro se o valor não for um número</li>
                            <li>Apenas prossegue com o cálculo se todas as entradas forem válidas</li>
                          </ul>
                          
                          <pre><code>  // Converte a taxa percentual para decimal (ex: 12% => 0.12)
  let taxa = taxaPercent / 100;</code></pre>
                          <p>Converte a taxa percentual para formato decimal:</p>
                          <ul>
                            <li>Para cálculos de juros, a taxa deve estar em formato decimal (ex: 12% = 0.12)</li>
                            <li>Simplifica o cálculo do rendimento na fórmula de juros compostos</li>
                          </ul>
                          
                          <pre><code>  console.log("=== DESAFIO 01: Rendimento de Aplicação Financeira ===\\n");
  console.log("Investimento inicial: R$ " + investimento.toFixed(2));
  console.log("Taxa de rendimento anual: " + taxaPercent + "%");
  console.log("Número de anos: " + anos + "\\n");</code></pre>
                          <p>Exibe um resumo dos parâmetros do investimento:</p>
                          <ul>
                            <li>O método <code>toFixed(2)</code> formata o valor com duas casas decimais</li>
                            <li>Exibe as informações de forma clara para o usuário acompanhar os resultados</li>
                          </ul>
                          
                          <pre><code  // Calcula e exibe o valor acumulado ao final de cada ano
  for (let ano = 1; ano <= anos; ano++) {
    investimento = investimento * (1 + taxa);
    console.log("Após " + ano + " ano(s), valor acumulado: R$ " + investimento.toFixed(2));
  }</code></pre>
                          <p>Implementa o cálculo de juros compostos usando um loop:</p>
                          <ul>
                            <li>O loop <code>for</code> itera de 1 até o número de anos especificado</li>
                            <li>Em cada iteração, aplica a fórmula de juros compostos: Montante = Principal × (1 + taxa)<sup>tempo</sup></li>
                            <li>Aqui, a fórmula é aplicada ano a ano, atualizando o valor do investimento</li>
                            <li>Exibe o resultado acumulado ao final de cada período</li>
                          </ul>
                        </div>

                        <p>O código demonstra conceitos importantes:</p>
                        <ul>
                            <li>Interação com o usuário através de prompts para entrada de dados</li>
                            <li>Conversão e validação de tipos de dados para garantir cálculos corretos</li>
                            <li>Aplicação da fórmula de juros compostos, fundamental em cálculos financeiros</li>
                            <li>Uso de loops para simular o acúmulo de valor ao longo do tempo</li>
                            <li>Formatação de valores monetários para melhor legibilidade</li>
                        </ul>

                        <p>Este é um exemplo prático de como a programação pode ser aplicada para resolver problemas financeiros do mundo real, como planejamento de aposentadoria, análise de investimentos ou educação financeira.</p>`,
            trace: [
              {
                step: 1,
                call: "Entrada de dados",
                investimentoInput: "1000",
                taxaInput: "12",
                anosInput: "10",
                explanation: "O usuário insere os valores iniciais: R$ 1000 de investimento inicial, 12% de taxa anual, e período de 10 anos"
              },
              {
                step: 2,
                call: "Conversão de tipos",
                investimento: 1000,
                taxaPercent: 12,
                anos: 10,
                explanation: "As strings são convertidas para seus respectivos tipos numéricos usando parseFloat() e parseInt()"
              },
              {
                step: 3,
                call: "Validação de entradas",
                resultado: "Todas as entradas são válidas (números positivos)",
                explanation: "O programa verifica se todas as entradas são números válidos e positivos antes de prosseguir"
              },
              {
                step: 4,
                call: "Conversão da taxa para decimal",
                calculo: "12 / 100 = 0.12",
                taxa: 0.12,
                explanation: "A taxa percentual (12%) é convertida para formato decimal (0.12) para uso na fórmula de juros compostos"
              },
              {
                step: 5,
                call: "Exibição dos parâmetros iniciais",
                saida: [
                  "=== DESAFIO 01: Rendimento de Aplicação Financeira ===",
                  "",
                  "Investimento inicial: R$ 1000.00",
                  "Taxa de rendimento anual: 12%",
                  "Número de anos: 10",
                  ""
                ],
                explanation: "Os parâmetros do investimento são exibidos no console para referência"
              },
              {
                step: 6,
                call: "Loop ano 1",
                iteracao: 1,
                calculo: "1000 * (1 + 0.12) = 1120",
                investimento: 1120,
                saida: "Após 1 ano(s), valor acumulado: R$ 1120.00",
                explanation: "No primeiro ano, o investimento de R$ 1000 rende 12%, totalizando R$ 1120"
              },
              {
                step: 7,
                call: "Loop ano 2",
                iteracao: 2,
                calculo: "1120 * (1 + 0.12) = 1254.40",
                investimento: 1254.40,
                saida: "Após 2 ano(s), valor acumulado: R$ 1254.40",
                explanation: "No segundo ano, o novo montante de R$ 1120 rende 12%, totalizando R$ 1254.40"
              },
              {
                step: 8,
                call: "Loop ano 3",
                iteracao: 3,
                calculo: "1254.40 * (1 + 0.12) = 1404.93",
                investimento: 1404.93,
                saida: "Após 3 ano(s), valor acumulado: R$ 1404.93",
                explanation: "No terceiro ano, o montante de R$ 1254.40 rende 12%, totalizando R$ 1404.93"
              },
              {
                step: 9,
                call: "Iterações subsequentes",
                explanation: "O processo continua até o décimo ano, com o investimento crescendo a cada período"
              },
              {
                step: 10,
                call: "Loop ano 10 (final)",
                iteracao: 10,
                calculo: "2772.04 * (1 + 0.12) = 3104.68",
                investimento: 3104.68,
                saida: "Após 10 ano(s), valor acumulado: R$ 3104.68",
                explanation: "No décimo e último ano, o investimento inicial de R$ 1000 triplicou, chegando a R$ 3104.68"
              }
            ]
          }
        ]
      },
      {
        id: "dia5-desafio2",
        title: "Contagem Regressiva para Lançamento",
        versions: [
          {
            id: "dia5-desafio2-v1",
            title: "Contagem Regressiva com Avisos",
            statement: `<h2>DESAFIO 02: Contagem regressiva para lançamento de foguete</h2>
                        <p>Imagine que você é um engenheiro da NASA e está prestes a lançar um foguete. Você precisa fazer uma contagem regressiva a partir de 10 até o lançamento. No entanto, quando chegar nos últimos 3 segundos, é importante dar um aviso, então inclua o texto "Atenção!" junto à contagem. Quando a contagem terminar mostre a mensagem: "Lançamento do foguete!"</p>`,
            code: `// === DESAFIO 02: Contagem regressiva com for e espera de meio segundo ===
//
// O objetivo é fazer uma contagem regressiva a partir de 10 até o lançamento,
// aguardando 0,5 segundo entre cada número, utilizando um loop for.
// Quando chegar nos últimos 3 segundos, incluir "Atenção!" junto à contagem.
// Ao chegar em 0, mostrar a mensagem "Lançamento do foguete!".

console.log("=== DESAFIO 02: Contagem regressiva ===\\n");

for (let i = 10; i >= 0; i--) {
  // O delay é calculado para que o primeiro número (10) seja exibido imediatamente,
  // e cada iteração subsequente espere 0,5 segundo a mais.
  setTimeout(() => {
    if (i === 0) {
      console.log("Lançamento do foguete!");
    } else if (i <= 3) {
      console.log(i + " ... Atenção!");
    } else {
      console.log(i);
    }
  }, (10 - i) * 500);
}`,
            explanation: `<p>Este código implementa uma contagem regressiva de lançamento de foguete com efeitos de timing e alertas condicionais.</p>

                        <div class="code-explanation">
                          <h4>Análise detalhada linha por linha:</h4>
                          
                          <pre><code>// === DESAFIO 02: Contagem regressiva com for e espera de meio segundo ===</code></pre>
                          <p>Comentário de título que identifica o desafio e seu propósito específico.</p>
                          
                          <pre><code>//
// O objetivo é fazer uma contagem regressiva a partir de 10 até o lançamento,
// aguardando 0,5 segundo entre cada número, utilizando um loop for.
// Quando chegar nos últimos 3 segundos, incluir "Atenção!" junto à contagem.
// Ao chegar em 0, mostrar a mensagem "Lançamento do foguete!".</code></pre>
                          <p>Comentários que descrevem detalhadamente o comportamento esperado do programa:</p>
                          <ul>
                            <li>Explica a contagem regressiva começando em 10</li>
                            <li>Define o intervalo de tempo entre cada número (0,5 segundo)</li>
                            <li>Especifica o comportamento especial para os últimos 3 segundos</li>
                            <li>Indica a mensagem final ao terminar a contagem</li>
                          </ul>
                          
                          <pre><code>console.log("=== DESAFIO 02: Contagem regressiva ===\\n");</code></pre>
                          <p>Exibe o título do programa no console:</p>
                          <ul>
                            <li>Marca o início da execução do programa</li>
                            <li>O <code>\\n</code> adiciona uma quebra de linha após o título</li>
                          </ul>
                          
                          <pre><code>for (let i = 10; i >= 0; i--) {</code></pre>
                          <p>Inicia um loop decrescente de 10 até 0:</p>
                          <ul>
                            <li>Declara e inicializa a variável <code>i</code> com o valor 10</li>
                            <li>Define a condição de continuação (<code>i >= 0</code>)</li>
                            <li>Decrementa a variável <code>i</code> após cada iteração com <code>i--</code></li>
                            <li>A contagem regressiva inclui o zero, totalizando 11 números (10 até 0)</li>
                          </ul>
                          
                          <pre><code>  // O delay é calculado para que o primeiro número (10) seja exibido imediatamente,
  // e cada iteração subsequente espere 0,5 segundo a mais.
  setTimeout(() => {</code></pre>
                          <p>Utiliza a função setTimeout para criar um atraso progressivo em cada iteração:</p>
                          <ul>
                            <li>O comentário explica a lógica do cálculo do tempo de espera</li>
                            <li>O <code>setTimeout</code> agenda a execução da função callback após um determinado tempo</li>
                            <li>A função passada como primeiro argumento será executada após o tempo especificado</li>
                          </ul>
                          
                          <pre><code>    if (i === 0) {
      console.log("Lançamento do foguete!");
    }</code></pre>
                          <p>Primeira condição: verifica se chegou ao final da contagem:</p>
                          <ul>
                            <li>Quando <code>i</code> é igual a 0, a contagem terminou</li>
                            <li>Exibe a mensagem especial "Lançamento do foguete!"</li>
                            <li>Esta é a última mensagem exibida, indicando o clímax do programa</li>
                          </ul>
                          
                          <pre><code>    else if (i <= 3) {
      console.log(i + " ... Atenção!");
    }</code></pre>
                          <p>Segunda condição: verifica se está nos últimos 3 segundos:</p>
                          <ul>
                            <li>Quando <code>i</code> é menor ou igual a 3 (3, 2 ou 1)</li>
                            <li>Exibe o número seguido do aviso "... Atenção!"</li>
                            <li>Este alerta visual destaca os momentos críticos antes do lançamento</li>
                          </ul>
                          
                          <pre><code>    else {
      console.log(i);
    }</code></pre>
                          <p>Terceira condição (default): para os outros números:</p>
                          <ul>
                            <li>Para os valores iniciais da contagem (10 até 4)</li>
                            <li>Exibe apenas o número, sem mensagens adicionais</li>
                          </ul>
                          
                          <pre><code>  }, (10 - i) * 500);</code></pre>
                          <p>Define o tempo de espera para cada número da contagem:</p>
                          <ul>
                            <li>A fórmula <code>(10 - i) * 500</code> calcula o atraso em milissegundos</li>
                            <li>Para <code>i = 10</code>: (10 - 10) * 500 = 0ms (exibição imediata)</li>
                            <li>Para <code>i = 9</code>: (10 - 9) * 500 = 500ms (espera meio segundo)</li>
                            <li>Para <code>i = 0</code>: (10 - 0) * 500 = 5000ms (espera 5 segundos)</li>
                            <li>Isso cria um intervalo constante de 0,5 segundo entre cada número</li>
                          </ul>
                          
                          <pre><code>}</code></pre>
                          <p>Fecha o bloco do loop for:</p>
                          <ul>
                            <li>É importante observar que todas as chamadas de <code>setTimeout</code> são agendadas quase simultaneamente</li>
                            <li>O loop termina rapidamente, mas as funções callback serão executadas nos momentos calculados</li>
                            <li>A execução do programa continua após o loop, enquanto os timeouts estão pendentes</li>
                          </ul>
                        </div>

                        <p>Este código demonstra conceitos importantes de programação JavaScript:</p>
                        <ul>
                            <li><strong>Loops decrescentes:</strong> Utilizando um loop for para contar de forma regressiva</li>
                            <li><strong>Programação assíncrona:</strong> Uso de setTimeout para criar atrasos controlados</li>
                            <li><strong>Estruturas condicionais:</strong> Aplicação de if/else para comportamentos específicos baseados no valor do contador</li>
                            <li><strong>Cálculo de timing:</strong> Fórmula para gerar intervalos constantes entre as exibições</li>
                            <li><strong>Concatenação de strings:</strong> Junção de números e texto para criar mensagens dinâmicas</li>
                        </ul>

                        <p>O programa simula de forma eficaz uma contagem regressiva real, criando suspense com os avisos nos momentos finais antes do lançamento.</p>`,
            trace: [
              {
                step: 1,
                call: "Início do programa",
                saida: "=== DESAFIO 02: Contagem regressiva ===\n",
                explanation: "O programa inicia exibindo o título no console"
              },
              {
                step: 2,
                call: "Loop for - agendando chamadas setTimeout",
                explanation: "O loop for executa 11 iterações (de i=10 até i=0), agendando cada exibição com um atraso calculado"
              },
              {
                step: 3,
                call: "Primeira exibição (i=10) - tempo: 0ms",
                calculo: "(10 - 10) * 500 = 0ms",
                saida: "10",
                explanation: "O primeiro número (10) é exibido imediatamente sem atraso"
              },
              {
                step: 4,
                call: "Segunda exibição (i=9) - tempo: 500ms",
                calculo: "(10 - 9) * 500 = 500ms",
                saida: "9",
                explanation: "Após 0,5 segundo, o número 9 é exibido"
              },
              {
                step: 5,
                call: "Terceira exibição (i=8) - tempo: 1000ms",
                calculo: "(10 - 8) * 500 = 1000ms",
                saida: "8",
                explanation: "Após 1 segundo, o número 8 é exibido"
              },
              {
                step: 6,
                call: "Quarta exibição (i=7) - tempo: 1500ms",
                calculo: "(10 - 7) * 500 = 1500ms",
                saida: "7",
                explanation: "Após 1,5 segundos, o número 7 é exibido"
              },
              {
                step: 7,
                call: "Quinta a sétima exibição",
                explanation: "O processo continua com os números 6, 5 e 4, cada um aparecendo após mais 0,5 segundo"
              },
              {
                step: 8,
                call: "Oitava exibição (i=3) - tempo: 3500ms",
                calculo: "(10 - 3) * 500 = 3500ms",
                saida: "3 ... Atenção!",
                explanation: "Após 3,5 segundos, o número 3 é exibido com o aviso de atenção"
              },
              {
                step: 9,
                call: "Nona exibição (i=2) - tempo: 4000ms",
                calculo: "(10 - 2) * 500 = 4000ms",
                saida: "2 ... Atenção!",
                explanation: "Após 4 segundos, o número 2 é exibido com o aviso de atenção"
              },
              {
                step: 10,
                call: "Décima exibição (i=1) - tempo: 4500ms",
                calculo: "(10 - 1) * 500 = 4500ms",
                saida: "1 ... Atenção!",
                explanation: "Após 4,5 segundos, o número 1 é exibido com o aviso de atenção"
              },
              {
                step: 11,
                call: "Exibição final (i=0) - tempo: 5000ms",
                calculo: "(10 - 0) * 500 = 5000ms",
                saida: "Lançamento do foguete!",
                explanation: "Após 5 segundos, a mensagem final de lançamento é exibida, completando a contagem regressiva"
              }
            ]
          },
          {
            id: "dia5-desafio2-v2",
            title: "Contagem Regressiva com setInterval",
            statement: `<h2>DESAFIO 02: Contagem regressiva para lançamento de foguete</h2>
                        <p>Imagine que você é um engenheiro da NASA e está prestes a lançar um foguete. Você precisa fazer uma contagem regressiva a partir de 10 até o lançamento. No entanto, quando chegar nos últimos 3 segundos, é importante dar um aviso, então inclua o texto "Atenção!" junto à contagem. Quando a contagem terminar mostre a mensagem: "Lançamento do foguete!"</p>`,
            code: `// === DESAFIO 02: Contagem regressiva com espera de meio segundo ===
//
// O objetivo é fazer uma contagem regressiva a partir de 10 até o lançamento,
// aguardando 0,5 segundo entre cada número.
// Quando chegar nos últimos 3 segundos, incluir "Atenção!" junto à contagem.
// Ao chegar em 0, mostrar a mensagem "Lançamento do foguete!".

console.log("=== DESAFIO 02: Contagem regressiva ===\\n");

let count = 10;

// Cria um intervalo que executa a cada 500 milissegundos (0,5 segundo)
const intervalo = setInterval(function() {
  if (count === 0) {
    console.log("Lançamento do foguete!");
    clearInterval(intervalo);
  } else if (count <= 3) {
    console.log(count + " ... Atenção!");
  } else {
    console.log(count);
  }
  count--;
}, 500);`,
            explanation: `<p>Este código implementa uma contagem regressiva de lançamento de foguete usando a função setInterval para controlar o tempo.</p>

                        <div class="code-explanation">
                          <h4>Análise detalhada linha por linha:</h4>
                          
                          <pre><code>// === DESAFIO 02: Contagem regressiva com espera de meio segundo ===</code></pre>
                          <p>Comentário de título que identifica o desafio e seu propósito.</p>
                          
                          <pre><code>//
// O objetivo é fazer uma contagem regressiva a partir de 10 até o lançamento,
// aguardando 0,5 segundo entre cada número.
// Quando chegar nos últimos 3 segundos, incluir "Atenção!" junto à contagem.
// Ao chegar em 0, mostrar a mensagem "Lançamento do foguete!".</code></pre>
                          <p>Comentários que descrevem o comportamento esperado do programa:</p>
                          <ul>
                            <li>Explica a contagem regressiva começando em 10</li>
                            <li>Define o intervalo de tempo entre cada número (0,5 segundo)</li>
                            <li>Especifica o comportamento especial para os últimos 3 segundos</li>
                            <li>Indica a mensagem final ao terminar a contagem</li>
                          </ul>
                          
                          <pre><code>console.log("=== DESAFIO 02: Contagem regressiva ===\\n");</code></pre>
                          <p>Exibe o título do programa no console:</p>
                          <ul>
                            <li>Marca o início da execução do programa</li>
                            <li>O <code>\\n</code> adiciona uma quebra de linha após o título</li>
                          </ul>
                          
                          <pre><code>let count = 10;</code></pre>
                          <p>Inicializa a variável de contagem:</p>
                          <ul>
                            <li>Declara e inicializa a variável <code>count</code> com o valor 10</li>
                            <li>Esta variável será decrementada a cada intervalo até chegar a zero</li>
                            <li>Diferente da versão anterior, aqui usamos uma variável externa ao invés de uma variável de iteração de loop</li>
                          </ul>
                          
                          <pre><code>// Cria um intervalo que executa a cada 500 milissegundos (0,5 segundo)
const intervalo = setInterval(function() {</code></pre>
                          <p>Configura um temporizador com intervalo fixo:</p>
                          <ul>
                            <li>A função <code>setInterval()</code> executa um código repetidamente em intervalos de tempo iguais</li>
                            <li>O primeiro argumento é uma função anônima (callback) que será executada a cada intervalo</li>
                            <li>A variável <code>intervalo</code> armazena o ID do intervalo para poder cancelá-lo posteriormente</li>
                            <li>Esta abordagem é diferente da versão anterior, que usava múltiplos <code>setTimeout</code></li>
                          </ul>
                          
                          <pre><code>  if (count === 0) {
    console.log("Lançamento do foguete!");
    clearInterval(intervalo);
  }</code></pre>
                          <p>Primeira condição: verifica se chegou ao final da contagem:</p>
                          <ul>
                            <li>Quando <code>count</code> é igual a 0, a contagem terminou</li>
                            <li>Exibe a mensagem especial "Lançamento do foguete!"</li>
                            <li>O comando <code>clearInterval(intervalo)</code> cancela o intervalo, evitando que continue executando</li>
                            <li>Este é um ponto crucial: sem cancelar o intervalo, a função continuaria sendo chamada indefinidamente</li>
                          </ul>
                          
                          <pre><code>  else if (count <= 3) {
    console.log(count + " ... Atenção!");
  }</code></pre>
                          <p>Segunda condição: verifica se está nos últimos 3 segundos:</p>
                          <ul>
                            <li>Quando <code>count</code> é menor ou igual a 3 (3, 2 ou 1)</li>
                            <li>Exibe o número seguido do aviso "... Atenção!"</li>
                            <li>Este alerta visual destaca os momentos críticos antes do lançamento</li>
                          </ul>
                          
                          <pre><code>  else {
    console.log(count);
  }</code></pre>
                          <p>Terceira condição (default): para os outros números:</p>
                          <ul>
                            <li>Para os valores iniciais da contagem (10 até 4)</li>
                            <li>Exibe apenas o número, sem mensagens adicionais</li>
                          </ul>
                          
                          <pre><code>  count--;</code></pre>
                          <p>Decrementa o contador após cada exibição:</p>
                          <ul>
                            <li>Reduz o valor de <code>count</code> em 1 a cada vez que a função é executada</li>
                            <li>Este decremento ocorre após a exibição do valor atual</li>
                            <li>Na próxima execução da função de callback, <code>count</code> terá um valor menor</li>
                          </ul>
                          
                          <pre><code>}, 500);</code></pre>
                          <p>Define o intervalo de tempo entre as execuções:</p>
                          <ul>
                            <li>O segundo argumento da função <code>setInterval</code> especifica o tempo em milissegundos</li>
                            <li>500ms equivale a meio segundo (0,5s)</li>
                            <li>A função de callback será executada a cada meio segundo até ser cancelada</li>
                          </ul>
                        </div>

                        <p>Esta implementação difere da primeira versão do desafio nos seguintes aspectos:</p>
                        <ul>
                            <li><strong>Método de temporização:</strong> Usa <code>setInterval</code> em vez de múltiplos <code>setTimeout</code></li>
                            <li><strong>Variável de controle:</strong> Mantém uma variável externa que é modificada a cada execução</li>
                            <li><strong>Finalização:</strong> Precisa explicitamente cancelar o intervalo com <code>clearInterval</code></li>
                            <li><strong>Sincronização:</strong> Todas as exibições ocorrem em tempo preciso de 0,5 segundo entre si</li>
                            <li><strong>Execução sequencial:</strong> Cada exibição só ocorre após a anterior ter sido processada</li>
                        </ul>

                        <p>As duas abordagens produzem o mesmo resultado visual, mas diferem na implementação técnica. Esta versão com <code>setInterval</code> é considerada mais apropriada para contagens regressivas, pois:</p>
                        <ul>
                            <li>É mais concisa e utiliza menos recursos do sistema</li>
                            <li>Garante intervalos precisos entre as exibições</li>
                            <li>É mais fácil de adaptar para contagens de duração variável</li>
                            <li>Representa melhor o conceito de "pulsos" regulares de tempo</li>
                        </ul>`,
            trace: [
              {
                step: 1,
                call: "Início do programa",
                saida: "=== DESAFIO 02: Contagem regressiva ===\n",
                explanation: "O programa inicia exibindo o título no console"
              },
              {
                step: 2,
                call: "Inicialização de variáveis",
                variaveis: "count = 10",
                explanation: "A variável count é inicializada com 10"
              },
              {
                step: 3,
                call: "Configuração de setInterval",
                parametros: "função anônima, 500ms",
                explanation: "Um intervalo é configurado para executar a função de callback a cada 0,5 segundo"
              },
              {
                step: 4,
                call: "Primeira execução - t=0ms",
                count: 10,
                saida: "10",
                novoCount: 9,
                explanation: "A função exibe 10 e decrementa o contador para 9"
              },
              {
                step: 5,
                call: "Segunda execução - t=500ms",
                count: 9,
                saida: "9",
                novoCount: 8,
                explanation: "A função exibe 9 e decrementa o contador para 8"
              },
              {
                step: 6,
                call: "Terceira execução - t=1000ms",
                count: 8,
                saida: "8",
                novoCount: 7,
                explanation: "A função exibe 8 e decrementa o contador para 7"
              },
              {
                step: 7,
                call: "Quarta a sétima execução",
                explanation: "O processo continua para os valores 7, 6, 5 e 4, cada um exibido após mais 0,5 segundo"
              },
              {
                step: 8,
                call: "Oitava execução - t=3500ms",
                count: 3,
                saida: "3 ... Atenção!",
                novoCount: 2,
                explanation: "A função exibe '3 ... Atenção!' e decrementa o contador para 2"
              },
              {
                step: 9,
                call: "Nona execução - t=4000ms",
                count: 2,
                saida: "2 ... Atenção!",
                novoCount: 1,
                explanation: "A função exibe '2 ... Atenção!' e decrementa o contador para 1"
              },
              {
                step: 10,
                call: "Décima execução - t=4500ms",
                count: 1,
                saida: "1 ... Atenção!",
                novoCount: 0,
                explanation: "A função exibe '1 ... Atenção!' e decrementa o contador para 0"
              },
              {
                step: 11,
                call: "Última execução - t=5000ms",
                count: 0,
                saida: "Lançamento do foguete!",
                acao: "clearInterval(intervalo)",
                explanation: "A função exibe a mensagem final de lançamento e cancela o intervalo, encerrando a contagem regressiva"
              }
            ]
          }
        ]
      },
      {
        id: "dia5-desafio3",
        title: "Cálculo de Juros",
        versions: [
          {
            id: "dia5-desafio3-v1",
            title: "Tempo de Duplicação do Investimento",
            statement: `<h2>DESAFIO 03: Cálculo de juros</h2>
                        <p>Vamos calcular quanto tempo (em anos) levará para que um investimento inicial dobre, considerando uma taxa de juros anual. Use um loop while para realizar os cálculos e mostre o valor acumulado ao final de cada ano.</p>
                        <p>Solicite ao usuário:</p>
                        <ul>
                          <li>Um valor inicial para investimento (em reais)</li>
                          <li>Uma taxa de juros anual (em percentual)</li>
                        </ul>
                        <p>O programa deve validar as entradas e calcular quanto tempo levará para o investimento dobrar de valor.</p>`,
            code: `// === DESAFIO 03: Tempo de Duplicação do Investimento ===
//
// Solicita ao usuário um valor inicial para investimento e uma taxa de juros anual.
// Verifica quanto tempo levará para o valor inicial dobrar.
// Utiliza um loop while para calcular o crescimento ano a ano.

let valorInicialInput = prompt("Digite o valor inicial do investimento:");
let taxaJurosInput = prompt("Digite a taxa de juros anual (em %):");

let valorInicial = parseFloat(valorInicialInput);
let taxaJuros = parseFloat(taxaJurosInput);

// Validação das entradas
if (isNaN(valorInicial) || valorInicial <= 0) {
  console.log("Valor inicial inválido. Digite um número positivo.");
} else if (isNaN(taxaJuros) || taxaJuros <= 0) {
  console.log("Taxa de juros inválida. Digite um número positivo.");
} else {
  // Converte a taxa percentual para decimal
  let taxa = taxaJuros / 100;
  
  // Define o valor-alvo (dobro do valor inicial)
  let valorAlvo = valorInicial * 2;
  
  // Inicializa variáveis para o loop
  let valorAtual = valorInicial;
  let anos = 0;
  
  console.log("=== DESAFIO 03: Tempo de Duplicação do Investimento ===\\n");
  console.log("Valor inicial: R$ " + valorInicial.toFixed(2));
  console.log("Taxa de juros anual: " + taxaJuros.toFixed(2) + "%");
  console.log("Valor alvo (dobro): R$ " + valorAlvo.toFixed(2));
  console.log("\\nSimulação ano a ano:\\n");
  
  // Loop while que executa até o valor atual atingir ou ultrapassar o valor-alvo
  while (valorAtual < valorAlvo) {
    anos++;
    // Aplica os juros (valorAtual = valorAtual + valorAtual * taxa)
    valorAtual *= (1 + taxa);
    console.log("Ano " + anos + ": R$ " + valorAtual.toFixed(2));
  }
  
  console.log("\\nSerão necessários " + anos + " anos para o investimento dobrar de valor.");
}`,
            explanation: `<div class="code-explanation">
            <p>Este programa calcula quanto tempo (em anos) levará para que um investimento inicial dobre de valor, aplicando uma taxa de juros anual. Vamos analisar o código linha por linha:</p>

<h3>1. Entrada de dados</h3>
<pre><code>let valorInicialInput = prompt("Digite o valor inicial do investimento:");</code></pre>
<p>Solicita ao usuário que digite o valor inicial do investimento e armazena a resposta como string na variável <code>valorInicialInput</code>.</p>

<pre><code>let taxaJurosInput = prompt("Digite a taxa de juros anual (em %):");</code></pre>
<p>Solicita ao usuário que digite a taxa de juros anual em porcentagem e armazena a resposta como string na variável <code>taxaJurosInput</code>.</p>

<h3>2. Conversão das entradas</h3>
<pre><code>let valorInicial = parseFloat(valorInicialInput);</code></pre>
<p>Converte a string <code>valorInicialInput</code> em um número de ponto flutuante usando a função <code>parseFloat()</code>.</p>

<pre><code>let taxaJuros = parseFloat(taxaJurosInput);</code></pre>
<p>Converte a taxa de juros de string para número usando a função <code>parseFloat()</code>.</p>

<h3>3. Validação das entradas</h3>
<pre><code>if (isNaN(valorInicial) || valorInicial <= 0) {
  console.log("Valor inicial inválido. Digite um número positivo.");
} else if (isNaN(taxaJuros) || taxaJuros <= 0) {
  console.log("Taxa de juros inválida. Digite um número positivo.");
} else {</code></pre>
<p>Verifica se as entradas são números válidos e positivos. A função <code>isNaN()</code> verifica se o valor não é um número. Se algum valor for inválido, exibe uma mensagem de erro correspondente.</p>

<h3>4. Preparação dos dados</h3>
<pre><code>  // Converte a taxa percentual para decimal
  let taxa = taxaJuros / 100;</code></pre>
<p>Converte a taxa de juros de percentual para decimal dividindo por 100 (ex.: 10% = 0.1).</p>

<pre><code>  // Define o valor-alvo (dobro do valor inicial)
  let valorAlvo = valorInicial * 2;</code></pre>
<p>Calcula o valor-alvo, que é o dobro do valor inicial. Este é o valor que queremos atingir para determinar quanto tempo leva para o investimento dobrar.</p>

<pre><code>  // Inicializa variáveis para o loop
  let valorAtual = valorInicial;
  let anos = 0;</code></pre>
<p>Inicializa duas variáveis importantes: <code>valorAtual</code>, que começa igual ao valor inicial e será atualizado a cada iteração do loop, e <code>anos</code>, um contador que começará em 0 e será incrementado a cada iteração.</p>

<h3>5. Exibição dos parâmetros iniciais</h3>
<pre><code>  console.log("=== DESAFIO 03: Tempo de Duplicação do Investimento ===\\n");
  console.log("Valor inicial: R$ " + valorInicial.toFixed(2));
  console.log("Taxa de juros anual: " + taxaJuros.toFixed(2) + "%");
  console.log("Valor alvo (dobro): R$ " + valorAlvo.toFixed(2));
  console.log("\\nSimulação ano a ano:\\n");</code></pre>
<p>Exibe os parâmetros da simulação: o valor inicial, a taxa de juros, o valor-alvo. O método <code>toFixed(2)</code> formata os valores com duas casas decimais.</p>

<h3>6. Simulação do crescimento do investimento</h3>
<pre><code>  // Loop while que executa até o valor atual atingir ou ultrapassar o valor-alvo
  while (valorAtual < valorAlvo) {
    anos++;
    // Aplica os juros (valorAtual = valorAtual + valorAtual * taxa)
    valorAtual *= (1 + taxa);
    console.log("Ano " + anos + ": R$ " + valorAtual.toFixed(2));
  }</code></pre>
<p>Este é o coração do programa: um loop <code>while</code> que continuará executando enquanto o valor atual for menor que o valor-alvo (dobro do inicial). Em cada iteração:</p>
<ul>
    <li>Incrementa-se o contador de anos.</li>
    <li>Aplica-se a taxa de juros ao valor atual usando a fórmula de juros compostos: novo valor = valor atual × (1 + taxa).</li>
    <li>O operador <code>*=</code> é uma forma abreviada de escrever <code>valorAtual = valorAtual * (1 + taxa)</code>.</li>
    <li>Exibe-se o ano atual e o valor atualizado após a aplicação dos juros.</li>
</ul>
<p>O loop continuará até que o <code>valorAtual</code> seja maior ou igual ao <code>valorAlvo</code>, momento em que o investimento terá pelo menos dobrado.</p>

<h3>7. Exibição do resultado final</h3>
<pre><code>  console.log("\\nSerão necessários " + anos + " anos para o investimento dobrar de valor.");</code></pre>
<p>Após o término do loop, exibe-se a conclusão: quantos anos serão necessários para o investimento dobrar de valor com a taxa de juros fornecida.</p>

<h3>Conceitos matemáticos aplicados</h3>
<p>Este programa aplica o conceito de juros compostos, onde os juros são calculados sobre o montante acumulado (principal + juros anteriores). A fórmula utilizada é:</p>
<p><code>ValorFinal = ValorInicial × (1 + taxa)^anos</code></p>
<p>Onde <code>^</code> representa a operação de potenciação.</p>

<p>Um conceito relacionado é a "Regra dos 72", uma regra prática que estima o tempo necessário para dobrar um investimento: <code>anos ≈ 72 / taxa de juros (%)</code>. Para uma taxa de 10%, por exemplo, a regra estima aproximadamente 7,2 anos, próximo do resultado exato calculado pelo programa.</p>

<p>Este programa demonstra o poder dos juros compostos ao longo do tempo e como pequenas mudanças na taxa de juros podem afetar significativamente o tempo necessário para duplicar um investimento.</p>`,
            trace: [
              {
                step: 1,
                call: "Entrada de dados",
                valorInicialInput: "1000",
                taxaJurosInput: "10",
                explanation: "O usuário informa o valor inicial de R$ 1000 e uma taxa de juros de 10% ao ano"
              },
              {
                step: 2,
                call: "Conversão e validação",
                valorInicial: 1000,
                taxaJuros: 10,
                taxa: 0.1,
                valorAlvo: 2000,
                explanation: "Os valores de entrada são convertidos para número e validados. A taxa percentual é convertida para decimal (10% = 0.1) e calculamos o valor-alvo (dobro do inicial)"
              },
              {
                step: 3,
                call: "Inicialização",
                valorAtual: 1000,
                anos: 0,
                saida: "=== DESAFIO 03: Tempo de Duplicação do Investimento ===\n\nValor inicial: R$ 1000.00\nTaxa de juros anual: 10.00%\nValor alvo (dobro): R$ 2000.00\n\nSimulação ano a ano:\n",
                explanation: "Inicializamos as variáveis e exibimos os parâmetros da simulação"
              },
              {
                step: 4,
                call: "Loop while - primeira iteração",
                anos: 1,
                calculo: "1000 * (1 + 0.1) = 1100",
                valorAtual: 1100,
                saida: "Ano 1: R$ 1100.00",
                explanation: "Incrementamos o contador de anos para 1 e aplicamos a taxa de juros ao valor atual: 1000 * 1.1 = 1100"
              },
              {
                step: 5,
                call: "Loop while - segunda iteração",
                anos: 2,
                calculo: "1100 * (1 + 0.1) = 1210",
                valorAtual: 1210,
                saida: "Ano 2: R$ 1210.00",
                explanation: "Incrementamos o contador de anos para 2 e aplicamos a taxa de juros ao valor atual: 1100 * 1.1 = 1210"
              },
              {
                step: 6,
                call: "Loop while - terceira iteração",
                anos: 3,
                calculo: "1210 * (1 + 0.1) = 1331",
                valorAtual: 1331,
                saida: "Ano 3: R$ 1331.00",
                explanation: "Incrementamos o contador de anos para 3 e aplicamos a taxa de juros ao valor atual: 1210 * 1.1 = 1331"
              },
              {
                step: 7,
                call: "Loop while - quarta iteração",
                anos: 4,
                calculo: "1331 * (1 + 0.1) = 1464.1",
                valorAtual: 1464.1,
                saida: "Ano 4: R$ 1464.10",
                explanation: "Incrementamos o contador de anos para 4 e aplicamos a taxa de juros ao valor atual: 1331 * 1.1 = 1464.10"
              },
              {
                step: 8,
                call: "Loop while - quinta iteração",
                anos: 5,
                calculo: "1464.1 * (1 + 0.1) = 1610.51",
                valorAtual: 1610.51,
                saida: "Ano 5: R$ 1610.51",
                explanation: "Incrementamos o contador de anos para 5 e aplicamos a taxa de juros ao valor atual: 1464.10 * 1.1 = 1610.51"
              },
              {
                step: 9,
                call: "Loop while - sexta iteração",
                anos: 6,
                calculo: "1610.51 * (1 + 0.1) = 1771.56",
                valorAtual: 1771.56,
                saida: "Ano 6: R$ 1771.56",
                explanation: "Incrementamos o contador de anos para 6 e aplicamos a taxa de juros ao valor atual: 1610.51 * 1.1 = 1771.56"
              },
              {
                step: 10,
                call: "Loop while - sétima iteração",
                anos: 7,
                calculo: "1771.56 * (1 + 0.1) = 1948.72",
                valorAtual: 1948.72,
                saida: "Ano 7: R$ 1948.72",
                explanation: "Incrementamos o contador de anos para 7 e aplicamos a taxa de juros ao valor atual: 1771.56 * 1.1 = 1948.72"
              },
              {
                step: 11,
                call: "Loop while - oitava iteração",
                anos: 8,
                calculo: "1948.72 * (1 + 0.1) = 2143.59",
                valorAtual: 2143.59,
                saida: "Ano 8: R$ 2143.59",
                explanation: "Incrementamos o contador de anos para 8 e aplicamos a taxa de juros ao valor atual: 1948.72 * 1.1 = 2143.59"
              },
              {
                step: 12,
                call: "Condição de saída",
                valorAtual: 2143.59,
                valorAlvo: 2000,
                condicao: "2143.59 > 2000",
                explanation: "A condição do loop 'valorAtual < valorAlvo' não é mais satisfeita, pois 2143.59 > 2000, então saímos do loop"
              },
              {
                step: 13,
                call: "Resultado final",
                anos: 8,
                saida: "\nSerão necessários 8 anos para o investimento dobrar de valor.",
                explanation: "Exibimos o resultado final: serão necessários 8 anos para o investimento dobrar de valor com uma taxa de juros de 10% ao ano"
              }
            ]
          }
        ]
      },
      {
        id: "dia5-desafio4",
        title: "Compra Parcelada",
        versions: [
          {
            id: "dia5-desafio4-v1",
            title: "Simulador de Compra Parcelada com Juros",
            statement: `<h2>DESAFIO 04: Compra parcelada</h2>
                        <p>Suponha que você comprou um produto e optou por parcelar o valor em 12 vezes sem juros. Escreva um código que imprima o valor de cada parcela e o valor restante a ser pago.</p>`,
            code: `// === DESAFIO 04: Compra Parcelada com Juros ===
//
// O programa solicita ao usuário:
// 1) Valor total da compra
// 2) Taxa de juros por parcela (em %)
// 3) Quantidade de parcelas
//
// Em seguida, ele calcula o valor final da compra com juros compostos, determina
// o valor de cada parcela (parcelamento fixo) e exibe, para cada parcela, o saldo
// devedor restante após o pagamento.

let valorCompraInput = prompt("Digite o valor total da compra:");
let taxaInput = prompt("Digite a taxa de juros por parcela (em %):");
let parcelasInput = prompt("Digite a quantidade de parcelas:");

let valorCompra = parseFloat(valorCompraInput);
let taxaPercent = parseFloat(taxaInput);
let numParcelas = parseInt(parcelasInput);

// Validação das entradas
if (isNaN(valorCompra) || valorCompra <= 0) {
  console.log("Valor da compra inválido.");
} else if (isNaN(taxaPercent) || taxaPercent < 0) {
  console.log("Taxa de juros inválida.");
} else if (isNaN(numParcelas) || numParcelas <= 0) {
  console.log("Quantidade de parcelas inválida.");
} else {
  // Converte a taxa percentual para decimal
  let taxa = taxaPercent / 100;
  
  // Calcula o valor final com juros compostos:
  // Fórmula: ValorFinal = valorCompra * (1 + taxa)^(numParcelas)
  let valorFinal = valorCompra * Math.pow(1 + taxa, numParcelas);
  
  // Calcula o valor fixo de cada parcela
  let valorParcela = valorFinal / numParcelas;
  
  console.log("=== DESAFIO 04: Compra Parcelada com Juros ===\\n");
  console.log("Valor total da compra: R$ " + valorCompra.toFixed(2));
  console.log("Taxa de juros por parcela: " + taxaPercent.toFixed(2) + "%");
  console.log("Quantidade de parcelas: " + numParcelas);
  console.log("Valor total com juros: R$ " + valorFinal.toFixed(2));
  console.log("Valor de cada parcela: R$ " + valorParcela.toFixed(2));
  console.log("");
  
  // Exibe o saldo devedor após o pagamento de cada parcela
  for (let i = 1; i <= numParcelas; i++) {
    let saldoRestante = valorFinal - (valorParcela * i);
    console.log("Parcela " + i + ": R$ " + valorParcela.toFixed(2) + " | Saldo restante: R$ " + saldoRestante.toFixed(2));
  }
}`,
            explanation: `<div class="code-explanation">
<p>Este programa simula uma compra parcelada com juros compostos, mostrando o valor de cada parcela e o saldo devedor após cada pagamento. Vamos analisar o código linha por linha:</p>
                        
<h3>1. Entrada de dados</h3>
<pre><code>let valorCompraInput = prompt("Digite o valor total da compra:");</code></pre>
<p>Solicita ao usuário que digite o valor total da compra e armazena a resposta como string na variável <code>valorCompraInput</code>.</p>
                        
<pre><code>let taxaInput = prompt("Digite a taxa de juros por parcela (em %):");</code></pre>
<p>Solicita a taxa de juros por parcela em porcentagem e armazena na variável <code>taxaInput</code>.</p>
                        
<pre><code>let parcelasInput = prompt("Digite a quantidade de parcelas:");</code></pre>
<p>Solicita a quantidade de parcelas desejada e armazena na variável <code>parcelasInput</code>.</p>
                        
<h3>2. Conversão das entradas</h3>
<pre><code>let valorCompra = parseFloat(valorCompraInput);</code></pre>
<p>Converte a string <code>valorCompraInput</code> em um número de ponto flutuante usando <code>parseFloat()</code>.</p>
                        
<pre><code>let taxaPercent = parseFloat(taxaInput);</code></pre>
<p>Converte a taxa de juros de string para número.</p>
                        
<pre><code>let numParcelas = parseInt(parcelasInput);</code></pre>
<p>Converte a quantidade de parcelas para um número inteiro usando <code>parseInt()</code>.</p>
                        
<h3>3. Validação das entradas</h3>
<pre><code>if (isNaN(valorCompra) || valorCompra <= 0) {
  console.log("Valor da compra inválido.");
} else if (isNaN(taxaPercent) || taxaPercent < 0) {
  console.log("Taxa de juros inválida.");
} else if (isNaN(numParcelas) || numParcelas <= 0) {
  console.log("Quantidade de parcelas inválida.");
} else {</code></pre>
<p>Verifica se as entradas são números válidos e positivos. A função <code>isNaN()</code> verifica se o valor não é um número. Se algum valor for inválido, exibe uma mensagem de erro correspondente.</p>
                        
<h3>4. Cálculo dos valores</h3>
<pre><code>  // Converte a taxa percentual para decimal
  let taxa = taxaPercent / 100;</code></pre>
<p>Converte a taxa de juros de percentual para decimal dividindo por 100 (ex.: 2% = 0.02).</p>
                        
<pre><code>  // Calcula o valor final com juros compostos:
  // Fórmula: ValorFinal = valorCompra * (1 + taxa)^(numParcelas)
  let valorFinal = valorCompra * Math.pow(1 + taxa, numParcelas);</code></pre>
<p>Calcula o valor final da compra com juros compostos usando a fórmula matemática <code>ValorFinal = ValorInicial * (1 + taxa)^períodos</code>. A função <code>Math.pow()</code> calcula a potência (1 + taxa) elevado ao número de parcelas.</p>
                        
<pre><code>  // Calcula o valor fixo de cada parcela
  let valorParcela = valorFinal / numParcelas;</code></pre>
<p>Determina o valor fixo de cada parcela dividindo o valor final pelo número de parcelas.</p>
                        
<h3>5. Exibição dos resultados iniciais</h3>
<pre><code>  console.log("=== DESAFIO 04: Compra Parcelada com Juros ===\\n");
  console.log("Valor total da compra: R$ " + valorCompra.toFixed(2));
  console.log("Taxa de juros por parcela: " + taxaPercent.toFixed(2) + "%");
  console.log("Quantidade de parcelas: " + numParcelas);
  console.log("Valor total com juros: R$ " + valorFinal.toFixed(2));
  console.log("Valor de cada parcela: R$ " + valorParcela.toFixed(2));
  console.log("");</code></pre>
<p>Exibe os detalhes da simulação: valor da compra, taxa de juros, número de parcelas, valor total com juros e valor de cada parcela. O método <code>toFixed(2)</code> formata os valores com duas casas decimais.</p>
                        
<h3>6. Simulação do pagamento das parcelas</h3>
<pre><code>  // Exibe o saldo devedor após o pagamento de cada parcela
  for (let i = 1; i <= numParcelas; i++) {
    let saldoRestante = valorFinal - (valorParcela * i);
    console.log("Parcela " + i + ": R$ " + valorParcela.toFixed(2) + " | Saldo restante: R$ " + saldoRestante.toFixed(2));
  }
}</code></pre>
<p>Utiliza um loop <code>for</code> que itera de 1 até o número de parcelas. Para cada iteração:</p>
<ul>
    <li>Calcula o saldo devedor restante após o pagamento da parcela atual, subtraindo do valor final o produto do valor da parcela pelo número de parcelas já pagas.</li>
    <li>Exibe o número da parcela, o valor da parcela e o saldo restante após o pagamento.</li>
</ul>
                        
<p>Este programa é um exemplo prático de como os juros compostos afetam o valor final de uma compra parcelada. Ele mostra claramente a amortização da dívida ao longo do tempo, permitindo que o usuário visualize como cada pagamento reduz o saldo devedor até chegar a zero na última parcela.</p>
</div>`,
            trace: [
              {
                step: 1,
                call: "Entrada de dados",
                valorCompraInput: "1000",
                taxaInput: "2",
                parcelasInput: "12",
                explanation: "O usuário informa o valor total da compra (R$ 1000), a taxa de juros (2% por parcela) e o número de parcelas (12)"
              },
              {
                step: 2,
                call: "Conversão e validação",
                valorCompra: 1000,
                taxaPercent: 2,
                numParcelas: 12,
                explanation: "Os valores de entrada são convertidos para números e validados"
              },
              {
                step: 3,
                call: "Cálculo da taxa decimal",
                taxa: 0.02,
                explanation: "A taxa percentual é convertida para decimal: 2% = 0.02"
              },
              {
                step: 4,
                call: "Cálculo do valor final com juros",
                calculo: "1000 * (1 + 0.02)^12",
                valorFinal: 1268.24,
                explanation: "Calculamos o valor final com juros compostos: 1000 * (1.02)^12 = 1268.24"
              },
              {
                step: 5,
                call: "Cálculo do valor da parcela",
                calculo: "1268.24 / 12",
                valorParcela: 105.69,
                explanation: "Calculamos o valor fixo de cada parcela: 1268.24 / 12 = 105.69"
              },
              {
                step: 6,
                call: "Exibição dos detalhes da compra",
                saida: "=== DESAFIO 04: Compra Parcelada com Juros ===\n\nValor total da compra: R$ 1000.00\nTaxa de juros por parcela: 2.00%\nQuantidade de parcelas: 12\nValor total com juros: R$ 1268.24\nValor de cada parcela: R$ 105.69\n",
                explanation: "Exibimos os detalhes da compra, incluindo o valor total com juros e o valor de cada parcela"
              },
              {
                step: 7,
                call: "Loop for - primeira iteração",
                i: 1,
                calculo: "1268.24 - (105.69 * 1)",
                saldoRestante: 1162.55,
                saida: "Parcela 1: R$ 105.69 | Saldo restante: R$ 1162.55",
                explanation: "Calculamos o saldo restante após o pagamento da primeira parcela: 1268.24 - 105.69 = 1162.55"
              },
              {
                step: 8,
                call: "Loop for - segunda iteração",
                i: 2,
                calculo: "1268.24 - (105.69 * 2)",
                saldoRestante: 1056.86,
                saida: "Parcela 2: R$ 105.69 | Saldo restante: R$ 1056.86",
                explanation: "Calculamos o saldo restante após o pagamento da segunda parcela: 1268.24 - 211.38 = 1056.86"
              },
              {
                step: 9,
                call: "Loop for - terceira iteração",
                i: 3,
                calculo: "1268.24 - (105.69 * 3)",
                saldoRestante: 951.17,
                saida: "Parcela 3: R$ 105.69 | Saldo restante: R$ 951.17",
                explanation: "Calculamos o saldo restante após o pagamento da terceira parcela: 1268.24 - 317.07 = 951.17"
              },
              {
                step: 10,
                call: "Loop for - iterações subsequentes",
                explanation: "O processo continua até a 12ª parcela, calculando o saldo restante após cada pagamento"
              },
              {
                step: 11,
                call: "Loop for - última iteração",
                i: 12,
                calculo: "1268.24 - (105.69 * 12)",
                saldoRestante: 0.00,
                saida: "Parcela 12: R$ 105.69 | Saldo restante: R$ 0.00",
                explanation: "Após o pagamento da última parcela, o saldo devedor chega a zero (pode haver pequenas diferenças devido a arredondamentos)"
              }
            ]
          }
        ]
      }
    ]
  }
]; 