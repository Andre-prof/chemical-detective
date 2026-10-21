# Chemical Detective

Jogo educativo de investigação química. O aluno analisa três amostras de água, escolhe métodos, observa os resultados, compara evidências e propõe intervenções.

## Como usar

Abra `index.html` em um navegador moderno. Não exige instalação nem compilação. Também pode ser servido por qualquer hospedagem de arquivos estáticos.

## A investigação

- Apresentação da missão pelo químico do Laboratório de Análises Químicas 101.
- Três pontos de coleta: entrada do prédio, torneira da ala antiga e torneira da ala renovada.
- Sete ensaios em cada amostra: cloretos, sulfatos, chumbo, pH, dureza, ferro e cloro livre.
- Escolha de reagente ou instrumento, com orientação para nova tentativa quando o método está incorreto.
- Animações de gotejamento, precipitação, leitura instrumental e titulação.
- Equações e explicações dos métodos no experimento e no caderno.
- Bloqueio de repetição dos ensaios concluídos na etapa atual e convite do químico para seguir à próxima amostra.
- Tratamentos simulados, reanálise da amostra B e comparação dos resultados.
- Caderno de laboratório com hipóteses, conclusões e exportação em texto.

O progresso é salvo localmente no navegador. Não há contas de aluno, banco de dados nem envio dos registros a um servidor. Fontes tipográficas são carregadas do Google Fonts quando há conexão; fontes alternativas estão disponíveis.

## Escopo didático

O projeto é um protótipo com substâncias, concentrações e eficiências de tratamento simplificadas. As animações representam etapas de análise, sem constituir protocolos laboratoriais completos. Os sete ensaios não bastam para demonstrar potabilidade, que exige outros parâmetros e controle microbiológico.

A avaliação da conclusão fornece perguntas orientadoras baseadas nos procedimentos realizados; ela não faz correção semântica automática do texto do aluno. A identificação de cloretos, isoladamente, não comprova contaminação por esgoto nem influência marinha.

## Arquivos

`model.js` gera cenários com faixas limitadas e mantém os valores durante a investigação. Reiniciar gera novos valores. Ferro dissolvido: Fe²⁺ com 1,10-fenantrolina, total após redução e Fe³⁺ por diferença; cloro livre com DPD e leitura imediata. Não são simuladas interferências nem digestão de partículas.

`app.js` contém o estado da investigação e suas regras. `style.css`, `animations.css` e `workflow.css` definem a aparência, as animações e os diálogos. As imagens do laboratório e do químico são ilustrações geradas por IA.

## Validação

Verificações realizadas: sintaxe JavaScript, seleção de métodos, rejeição do método incorreto sem alteração dos registros, resultados apresentados após as sequências animadas, conclusão da amostra e navegação para a próxima. O fluxo de reanálise após tratamento também foi verificado.

## Referências

- [Reações de precipitação — University of Central Florida](https://pressbooks.online.ucf.edu/chemistryfundamentals/chapter/classifying-chemical-reactions/)
- [Chumbo na água — US EPA](https://www.epa.gov/ground-water-and-drinking-water/basic-information-about-lead-drinking-water)
- [Tecnologias de tratamento de água — US EPA](https://www.epa.gov/sdwa/overview-drinking-water-treatment-technologies)
- [Métodos de análise — US EPA](https://www.epa.gov/sites/production/files/2017-11/documents/vol2-appendixa-1_a-20.pdf)

