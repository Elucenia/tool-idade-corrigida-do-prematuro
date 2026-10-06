<!-- ELUCENIA technical documentation · idade-corrigida-do-prematuro · de · no clinical/professional/rights approval -->

# Korrigiertes Alter bei Frühgeburtlichkeit

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/idade-corrigida-do-prematuro)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Gestationsalter bei Geburt: Wochen

`ig_sem`

Wochen · Bereich: 22–36

### Gestationsalter bei Geburt: Tage

`ig_dias`

Tage · Bereich: 0–6

### Geburt: Tag

`nasc_d`

Bereich: 1–31

### Geburt: Monat

`nasc_m`

Bereich: 1–12

### Geburt: Jahr

`nasc_a`

Bereich: 2015–2040

### Untersuchungsdatum: Tag (leer = heute)

`ref_d`

optional · Bereich: 1–31

### Beurteilungsdatum: Monat

`ref_m`

optional · Bereich: 1–12

### Beurteilungsdatum: Jahr

`ref_a`

optional · Bereich: 2015–2040

## Fassung der Methode

AAP-Perinatalterminologie 2004: korrigiertes Alter bei 40 Wochen; postmenstruelles Alter separat

## Dokumentierte Formel

Korrigiertes Alter = chronologisches Alter − (40 Wochen − Gestationsalter bei Geburt). Praktisch die Zeit seit dem Datum, an dem das Kind 40 Wochen erreicht hat.

Postmenstruelles Alter = Gestationsalter bei Geburt + chronologisches Alter (Wochen und Tage). Vor 40 Wochen postmenstruellem Alter dieses statt des korrigierten Alters verwenden.

## Grenzen und Population

Das korrigierte Alter entspricht dem chronologischen Alter abzüglich der bis 40 Schwangerschaftswochen fehlenden Wochen; postmenstruelles und chronologisches Alter sind unterschiedliche Begriffe. Bei der Nachsorge Frühgeborener nutzt das brasilianische Gesundheitsministerium das chronologische Alter für Impfungen und das korrigierte Alter für Wachstum und Entwicklung. Die konsultierte Seite nennt je nach Endpunkt Zeiträume: 18 Monate für den Kopfumfang, 24 Monate für das Gewicht und 42 Monate für die neurologische Beurteilung; außerdem gilt allgemein bis 2 Jahre beziehungsweise bis 3 chronologische Jahre bei Geburt vor 28 Wochen. Wählen Sie Alter und Zeitraum entsprechend dem Nachsorgeziel, ohne die Berechnung als Diagnose einer Verzögerung zu verstehen. Die AAP-Richtlinie von 2004 behandelt die Terminologie und beschreibt den Begriff korrigiertes Alter für frühgeborene Kinder bis zu 3 Jahren. Die 2018 aktualisierte HealthyChildren-Seite der AAP beschreibt seine Verwendung in den ersten 2 Jahren für Entwicklungsmeilensteine. Die Dokumente verfolgen unterschiedliche Zwecke; die überprüften Passagen legen kein einheitliches Endalter für jede Nachbeobachtung fest. Die Zeiträume des brasilianischen Gesundheitsministeriums hängen vom untersuchten Endpunkt ab, wie in den Grenzen dieses Werkzeugs beschrieben.

## Referenzen

- [Engle WA; American Academy of Pediatrics Committee on Fetus and Newborn. Age terminology during the perinatal period. Pediatrics, 2004.](https://doi.org/10.1542/peds.2004-1915)

- [Ministério da Saúde,puericultura,current retrieval2026-10-04](https://linhasdecuidado.saude.gov.br/portal/puericultura/unidade-de-atencao-primaria/crianca/)

- [American Academy of Pediatrics. Corrected Age For Preemies. HealthyChildren; updated2018-12-10, adapted2017.](https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Corrected-Age-For-Preemies.aspx)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Verwenden Sie das korrigierte Alter in den Wachstumskurven und bei der Entwicklungsbeurteilung

| Ergebnisdetails | |
| --- | --- |
| Chronologisches Alter | 6 Monate und 24 Tage (208 Tage) |
| Postmenstruelles Alter | 59 J 5 T |
| Abzuziehende Frühgeburtlichkeit | 10 J 0 T (70 Tage) |
| Datum, an dem 40 Wochen vollendet wurden | 10/5/2026 |


### 2

40 Wochen noch nicht vollendet: postmenstruelles Alter verwenden (das korrigierte Alter existiert erst nach dem Termin)

| Ergebnisdetails | |
| --- | --- |
| Chronologisches Alter | 24 Tage (24 Tage) |
| Postmenstruelles Alter | 33 J 3 T |
| Abzuziehende Frühgeburtlichkeit | 10 J 0 T (70 Tage) |
| Datum, an dem 40 Wochen vollendet wurden | 10/11/2026 |


### 3

Verwenden Sie das korrigierte Alter in den Wachstumskurven und bei der Entwicklungsbeurteilung

| Ergebnisdetails | |
| --- | --- |
| Chronologisches Alter | 1 Jahr (365 Tage) |
| Postmenstruelles Alter | 80 J 4 T |
| Abzuziehende Frühgeburtlichkeit | 11 J 4 T (81 Tage) |
| Datum, an dem 40 Wochen vollendet wurden | 6/4/2025 |

