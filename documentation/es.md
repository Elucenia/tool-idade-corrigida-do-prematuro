<!-- ELUCENIA technical documentation · idade-corrigida-do-prematuro · es · no clinical/professional/rights approval -->

# Edad corregida del prematuro

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/idade-corrigida-do-prematuro)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Edad gestacional al nacer: semanas

`ig_sem`

semanas · intervalo: 22–36

### Edad gestacional al nacer: días

`ig_dias`

días · intervalo: 0–6

### Nacimiento: día

`nasc_d`

intervalo: 1–31

### Nacimiento: mes

`nasc_m`

intervalo: 1–12

### Nacimiento: año

`nasc_a`

intervalo: 2015–2040

### Fecha de evaluación: día (vacío = hoy)

`ref_d`

opcional · intervalo: 1–31

### Fecha de evaluación: mes

`ref_m`

opcional · intervalo: 1–12

### Fecha de evaluación: año

`ref_a`

opcional · intervalo: 2015–2040

## Edición del método

Terminología perinatal AAP 2004: edad corregida a 40 semanas; edad posmenstrual separada

## Fórmula documentada

Edad corregida = edad cronológica − (40 semanas − edad gestacional al nacer). En la práctica, es el tiempo desde la fecha en que el bebé cumplió 40 semanas.

Edad posmenstrual = edad gestacional al nacer + edad cronológica (en semanas y días). Antes de 40 semanas de edad posmenstrual, use esta en vez de la corregida.

## Límites y población

La edad corregida es la edad cronológica menos las semanas que faltaban para 40 semanas de gestación; la edad posmenstrual y la cronológica son conceptos distintos. En el seguimiento de prematuros, el Ministerio de Salud de Brasil usa edad cronológica para vacunación y edad corregida para crecimiento y desarrollo. La página consultada ofrece horizontes según el desenlace: 18 meses para perímetro cefálico, 24 meses para peso y 42 meses para evaluación neurológica; también describe la regla general hasta 2 años, o hasta 3 años cronológicos cuando el nacimiento ocurrió antes de 28 semanas. Elija la edad y el horizonte según el seguimiento, sin interpretar el cálculo como diagnóstico de retraso. La política de la AAP de 2004 trata sobre terminología y describe el término edad corregida para niños nacidos prematuramente de hasta 3 años. La página HealthyChildren de la AAP, actualizada en 2018, describe su uso durante los primeros 2 años para los hitos del desarrollo. Los documentos tienen finalidades distintas; los pasajes comprobados no establecen una única edad de cese para todo seguimiento. Los períodos del Ministerio de Salud de Brasil dependen del desenlace, según los límites de esta herramienta.

## Referencias

- [Engle WA; American Academy of Pediatrics Committee on Fetus and Newborn. Age terminology during the perinatal period. Pediatrics, 2004.](https://doi.org/10.1542/peds.2004-1915)

- [Ministério da Saúde,puericultura,current retrieval2026-10-04](https://linhasdecuidado.saude.gov.br/portal/puericultura/unidade-de-atencao-primaria/crianca/)

- [American Academy of Pediatrics. Corrected Age For Preemies. HealthyChildren; updated2018-12-10, adapted2017.](https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Corrected-Age-For-Preemies.aspx)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
