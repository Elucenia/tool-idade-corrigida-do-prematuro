<!-- ELUCENIA technical documentation · idade-corrigida-do-prematuro · ja · no clinical/professional/rights approval -->

# 早産児の修正月齢

[条件・出典・許諾](https://elucenia.org/ja/tools/idade-corrigida-do-prematuro)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 出生時在胎週数：週

`ig_sem`

週 · 範囲: 22–36

### 出生時在胎週数：日

`ig_dias`

日 · 範囲: 0–6

### 生年月日: 日

`nasc_d`

範囲: 1–31

### 生年月日: 月

`nasc_m`

範囲: 1–12

### 生年月日: 年

`nasc_a`

範囲: 2015–2040

### 評価日：日 （空欄 = 今日）

`ref_d`

任意 · 範囲: 1–31

### 評価日: 月

`ref_m`

任意 · 範囲: 1–12

### 評価日: 年

`ref_a`

任意 · 範囲: 2015–2040

## 方法の版

AAP周産期用語2004：修正月齢は40週基準、月経後週数は別に算出

## 記載された計算式

修正月齢 = 暦年齢 −（40週 − 出生時在胎週数）。実際には在胎40週に相当する日からの経過時間です。

月経後週数 = 出生時在胎週数 + 暦年齢（週と日）。月経後週数40週未満では修正月齢ではなく月経後週数を用います。

## 限界・対象集団

修正月齢は、暦年齢から妊娠40週までに不足していた週数を差し引いたものです。月経後年齢と暦年齢は異なります。ブラジル保健省は早産児のフォローアップで、予防接種には暦年齢、成長・発達には修正月齢を用います。参照ページには評価目的別の期間が示され、頭囲18か月、体重24か月、神経学的評価42か月です。また、一般には2歳まで、28週未満で出生した場合は暦年齢3歳までと説明しています。フォローアップの目的に合わせて年齢と期間を選び、計算を発達遅滞の診断と解釈しないでください。 AAPの2004年の方針は用語を扱い、早産で生まれた3歳までの子どもについて修正年齢という用語を説明しています。2018年に更新されたAAPのHealthyChildrenページでは、最初の2年間に発達の到達点を評価するために修正年齢を用いることが説明されています。両文書の目的は異なり、確認した箇所はすべての追跡に共通する修正の終了年齢を定めていません。ブラジル保健省の追跡期間は評価するアウトカムによって異なり、このツールの適用制限に記載されています。

## 参考文献

- [Engle WA; American Academy of Pediatrics Committee on Fetus and Newborn. Age terminology during the perinatal period. Pediatrics, 2004.](https://doi.org/10.1542/peds.2004-1915)

- [Ministério da Saúde,puericultura,current retrieval2026-10-04](https://linhasdecuidado.saude.gov.br/portal/puericultura/unidade-de-atencao-primaria/crianca/)

- [American Academy of Pediatrics. Corrected Age For Preemies. HealthyChildren; updated2018-12-10, adapted2017.](https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Corrected-Age-For-Preemies.aspx)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
