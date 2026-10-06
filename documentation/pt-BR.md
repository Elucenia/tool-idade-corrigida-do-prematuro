<!-- ELUCENIA technical documentation · idade-corrigida-do-prematuro · pt-BR · no clinical/professional/rights approval -->

# Idade corrigida do prematuro

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/idade-corrigida-do-prematuro)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Idade gestacional ao nascer: semanas

`ig_sem`

semanas · intervalo: 22–36

### Idade gestacional ao nascer: dias

`ig_dias`

dias · intervalo: 0–6

### Nascimento: dia

`nasc_d`

intervalo: 1–31

### Nascimento: mês

`nasc_m`

intervalo: 1–12

### Nascimento: ano

`nasc_a`

intervalo: 2015–2040

### Data da avaliação: dia (vazio = hoje)

`ref_d`

opcional · intervalo: 1–31

### Data da avaliação: mês

`ref_m`

opcional · intervalo: 1–12

### Data da avaliação: ano

`ref_a`

opcional · intervalo: 2015–2040

## Edição do método

AAPterminologiaperinatal 2004:idadecorrigida 40 semanas; idadepósmenstrual separada

## Fórmula documentada

Idade corrigida = idade cronológica − (40 semanas − idade gestacional ao nascer). Na prática, é o tempo decorrido desde a data em que o bebê completou 40 semanas.

Idade pós-menstrual = idade gestacional ao nascer + idade cronológica (em semanas e dias). Antes de 40 semanas de idade pós-menstrual, usa-se ela, e não a idade corrigida.

## Limites e população

A idade corrigida é a idade cronológica menos as semanas que faltavam para 40 semanas de gestação; idade pós-menstrual e idade cronológica são conceitos distintos. No acompanhamento de prematuros, o Ministério da Saúde usa idade cronológica para vacinação e idade corrigida para crescimento e desenvolvimento. A página consultada traz horizontes conforme o desfecho: 18 meses para perímetro cefálico, 24 meses para peso e 42 meses para avaliação neurológica; também descreve a regra geral até 2 anos, ou até 3 anos cronológicos quando o nascimento ocorreu antes de 28 semanas. Escolha a idade e o horizonte segundo o acompanhamento, sem interpretar o cálculo como diagnóstico de atraso. A política da AAP de 2004 trata de terminologia e descreve o termo idade corrigida para crianças prematuras até 3 anos. A página HealthyChildren da AAP, atualizada em 2018, descreve seu uso nos primeiros 2 anos para marcos do desenvolvimento. Os documentos têm finalidades distintas; os trechos conferidos não estabelecem uma única data de cessação para todo acompanhamento. Os horizontes do Ministério da Saúde dependem do desfecho, conforme os limites desta ferramenta.

## Referências

- [Engle WA; American Academy of Pediatrics Committee on Fetus and Newborn. Age terminology during the perinatal period. Pediatrics, 2004.](https://doi.org/10.1542/peds.2004-1915)

- [Ministério da Saúde,puericultura,current retrieval2026-10-04](https://linhasdecuidado.saude.gov.br/portal/puericultura/unidade-de-atencao-primaria/crianca/)

- [American Academy of Pediatrics. Corrected Age For Preemies. HealthyChildren; updated2018-12-10, adapted2017.](https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Corrected-Age-For-Preemies.aspx)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Use a idade corrigida nas curvas de crescimento e na avaliação do desenvolvimento

| Detalhes do resultado | |
| --- | --- |
| Idade cronológica | 6 meses e 24 dias (208 dias) |
| Idade pós-menstrual | 59s 5d |
| Prematuridade a descontar | 10s 0d (70 dias) |
| Data em que completou 40 semanas | 10/05/2026 |


### 2

Ainda não completou 40 semanas: use a idade pós-menstrual (a idade corrigida só existe após o termo)

| Detalhes do resultado | |
| --- | --- |
| Idade cronológica | 24 dias (24 dias) |
| Idade pós-menstrual | 33s 3d |
| Prematuridade a descontar | 10s 0d (70 dias) |
| Data em que completou 40 semanas | 10/11/2026 |


### 3

Use a idade corrigida nas curvas de crescimento e na avaliação do desenvolvimento

| Detalhes do resultado | |
| --- | --- |
| Idade cronológica | 1 ano (365 dias) |
| Idade pós-menstrual | 80s 4d |
| Prematuridade a descontar | 11s 4d (81 dias) |
| Data em que completou 40 semanas | 06/04/2025 |

