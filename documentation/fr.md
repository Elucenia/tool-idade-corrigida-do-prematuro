<!-- ELUCENIA technical documentation · idade-corrigida-do-prematuro · fr · no clinical/professional/rights approval -->

# Âge corrigé de l’enfant prématuré

[conditions, sources et autorisations](https://elucenia.org/fr/outils/idade-corrigida-do-prematuro)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Âge gestationnel à la naissance: semaines

`ig_sem`

semaines · intervalle: 22–36

### Âge gestationnel à la naissance: jours

`ig_dias`

jours · intervalle: 0–6

### Naissance: jour

`nasc_d`

intervalle: 1–31

### Naissance: mois

`nasc_m`

intervalle: 1–12

### Naissance: année

`nasc_a`

intervalle: 2015–2040

### Date d’évaluation : jour (vide = aujourd’hui)

`ref_d`

facultatif · intervalle: 1–31

### Date d’évaluation: mois

`ref_m`

facultatif · intervalle: 1–12

### Date d’évaluation: année

`ref_a`

facultatif · intervalle: 2015–2040

## Édition de la méthode

Terminologie périnatale AAP 2004 : âge corrigé à 40 semaines ; âge postmenstruel séparé

## Formule documentée

Âge corrigé = âge chronologique − (40 semaines − âge gestationnel à la naissance). En pratique, temps écoulé depuis la date où le bébé a atteint 40 semaines.

Âge postmenstruel = âge gestationnel à la naissance + âge chronologique (semaines et jours). Avant 40 semaines d’âge postmenstruel, utiliser celui-ci plutôt que l’âge corrigé.

## Limites et population

L’âge corrigé est l’âge chronologique diminué du nombre de semaines manquantes pour atteindre 40 semaines de gestation ; âge postmenstruel et âge chronologique sont distincts. Dans le suivi des prématurés, le ministère brésilien de la Santé utilise l’âge chronologique pour la vaccination et l’âge corrigé pour la croissance et le développement. La page consultée indique des horizons selon le résultat suivi : 18 mois pour le périmètre crânien, 24 mois pour le poids et 42 mois pour l’évaluation neurologique ; elle décrit aussi la règle générale jusqu’à 2 ans, ou jusqu’à 3 ans chronologiques pour une naissance avant 28 semaines. Choisissez l’âge et l’horizon selon le suivi, sans interpréter le calcul comme un diagnostic de retard. La politique de l’AAP de 2004 porte sur la terminologie et décrit le terme âge corrigé pour les enfants nés prématurément jusqu’à 3 ans. La page HealthyChildren de l’AAP, mise à jour en 2018, décrit son utilisation pendant les 2 premières années pour les étapes du développement. Les documents ont des objectifs distincts ; les passages vérifiés ne fixent pas un âge unique d’arrêt pour tous les suivis. Les périodes du ministère brésilien de la Santé dépendent du critère évalué, conformément aux limites de cet outil.

## Références

- [Engle WA; American Academy of Pediatrics Committee on Fetus and Newborn. Age terminology during the perinatal period. Pediatrics, 2004.](https://doi.org/10.1542/peds.2004-1915)

- [Ministério da Saúde,puericultura,current retrieval2026-10-04](https://linhasdecuidado.saude.gov.br/portal/puericultura/unidade-de-atencao-primaria/crianca/)

- [American Academy of Pediatrics. Corrected Age For Preemies. HealthyChildren; updated2018-12-10, adapted2017.](https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Corrected-Age-For-Preemies.aspx)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
