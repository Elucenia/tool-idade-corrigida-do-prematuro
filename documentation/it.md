<!-- ELUCENIA technical documentation · idade-corrigida-do-prematuro · it · no clinical/professional/rights approval -->

# Età corretta del prematuro

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/idade-corrigida-do-prematuro)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Età gestazionale alla nascita: settimane

`ig_sem`

settimane · intervallo: 22–36

### Età gestazionale alla nascita: giorni

`ig_dias`

giorni · intervallo: 0–6

### Nascita: giorno

`nasc_d`

intervallo: 1–31

### Nascita: mese

`nasc_m`

intervallo: 1–12

### Nascita: anno

`nasc_a`

intervallo: 2015–2040

### Data di valutazione: giorno (vuoto = oggi)

`ref_d`

facoltativo · intervallo: 1–31

### Data di valutazione: mese

`ref_m`

facoltativo · intervallo: 1–12

### Data di valutazione: anno

`ref_a`

facoltativo · intervallo: 2015–2040

## Edizione del metodo

Terminologia perinatale AAP 2004: età corretta a 40 settimane; età postmestruale separata

## Formula documentata

Età corretta = età cronologica − (40 settimane − età gestazionale alla nascita). In pratica, il tempo trascorso dalla data in cui il bambino ha raggiunto 40 settimane.

Età postmestruale = età gestazionale alla nascita + età cronologica (settimane e giorni). Prima di 40 settimane postmestruali, usare questa invece dell’età corretta.

## Limiti e popolazione

L’età corretta è l’età cronologica meno le settimane mancanti a 40 settimane di gestazione; età postmestruale ed età cronologica sono concetti distinti. Nel follow-up dei prematuri, il Ministero della Salute brasiliano usa l’età cronologica per le vaccinazioni e quella corretta per crescita e sviluppo. La pagina consultata indica orizzonti secondo l’esito: 18 mesi per la circonferenza cranica, 24 mesi per il peso e 42 mesi per la valutazione neurologica; descrive anche la regola generale fino a 2 anni, o fino a 3 anni cronologici per nascita prima di 28 settimane. Scegli età e orizzonte in base al follow-up, senza interpretare il calcolo come diagnosi di ritardo. La politica dell’AAP del 2004 riguarda la terminologia e descrive il termine età corretta per i bambini nati pretermine fino a 3 anni. La pagina HealthyChildren dell’AAP, aggiornata nel 2018, ne descrive l’uso nei primi 2 anni per le tappe dello sviluppo. I documenti hanno finalità diverse; i passaggi verificati non stabiliscono un’unica età alla quale interrompere la correzione per ogni follow-up. I periodi del Ministero della Salute brasiliano dipendono dall’esito valutato, come indicato nei limiti di questo strumento.

## Riferimenti

- [Engle WA; American Academy of Pediatrics Committee on Fetus and Newborn. Age terminology during the perinatal period. Pediatrics, 2004.](https://doi.org/10.1542/peds.2004-1915)

- [Ministério da Saúde,puericultura,current retrieval2026-10-04](https://linhasdecuidado.saude.gov.br/portal/puericultura/unidade-de-atencao-primaria/crianca/)

- [American Academy of Pediatrics. Corrected Age For Preemies. HealthyChildren; updated2018-12-10, adapted2017.](https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Corrected-Age-For-Preemies.aspx)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
