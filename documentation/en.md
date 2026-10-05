<!-- ELUCENIA technical documentation · idade-corrigida-do-prematuro · en · no clinical/professional/rights approval -->

# Corrected age for prematurity

[conditions, sources and permissions](https://elucenia.org/en/tools/idade-corrigida-do-prematuro)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Gestational age at birth: weeks

`ig_sem`

weeks · range: 22–36

### Gestational age at birth: days

`ig_dias`

days · range: 0–6

### Birth: day

`nasc_d`

range: 1–31

### Birth: month

`nasc_m`

range: 1–12

### Birth: year

`nasc_a`

range: 2015–2040

### Assessment date: day (blank = today)

`ref_d`

optional · range: 1–31

### Assessment date: month

`ref_m`

optional · range: 1–12

### Assessment date: year

`ref_a`

optional · range: 2015–2040

## Method edition

AAP perinatal terminology 2004: corrected age at 40 weeks; postmenstrual age separately

## Documented formula

Corrected age = chronological age − (40 weeks − gestational age at birth). In practice, the time elapsed since the date the infant reached 40 weeks.

Postmenstrual age = gestational age at birth + chronological age (in weeks and days). Before 40 weeks postmenstrual age, use it rather than corrected age.

## Limits and population

Corrected age is chronological age minus the weeks short of 40 weeks’ gestation; postmenstrual age and chronological age are distinct concepts. For preterm follow-up, the Brazilian Ministry of Health uses chronological age for vaccination and corrected age for growth and development. The consulted page gives outcome-specific horizons: 18 months for head circumference, 24 months for weight and 42 months for neurological assessment; it also describes the general rule up to 2 years, or up to 3 chronological years when birth occurred before 28 weeks. Select the age and horizon for the follow-up purpose without treating the calculation as a diagnosis of delay. The 2004 AAP policy addresses terminology and describes the term corrected age for children born preterm up to 3 years of age. The AAP HealthyChildren page, updated in 2018, describes its use during the first 2 years for developmental milestones. The documents have different purposes; the passages checked do not establish a single stopping age for all follow-up. The Brazilian Ministry of Health follow-up periods depend on the outcome, as described in this tool’s limitations.

## References

- [Engle WA; American Academy of Pediatrics Committee on Fetus and Newborn. Age terminology during the perinatal period. Pediatrics, 2004.](https://doi.org/10.1542/peds.2004-1915)

- [Ministério da Saúde,puericultura,current retrieval2026-10-04](https://linhasdecuidado.saude.gov.br/portal/puericultura/unidade-de-atencao-primaria/crianca/)

- [American Academy of Pediatrics. Corrected Age For Preemies. HealthyChildren; updated2018-12-10, adapted2017.](https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Corrected-Age-For-Preemies.aspx)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
