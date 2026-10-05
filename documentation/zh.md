<!-- ELUCENIA technical documentation · idade-corrigida-do-prematuro · zh · no clinical/professional/rights approval -->

# 早产儿校正年龄

[条件、来源与许可](https://elucenia.org/zh/tools/idade-corrigida-do-prematuro)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 出生时胎龄：周

`ig_sem`

周 · 范围: 22–36

### 出生时胎龄：天

`ig_dias`

天 · 范围: 0–6

### 出生日期: 日

`nasc_d`

范围: 1–31

### 出生日期: 月

`nasc_m`

范围: 1–12

### 出生日期: 年

`nasc_a`

范围: 2015–2040

### 评估日期：日 （留空 = 今天）

`ref_d`

选填 · 范围: 1–31

### 评价日期: 月

`ref_m`

选填 · 范围: 1–12

### 评价日期: 年

`ref_a`

选填 · 范围: 2015–2040

## 方法版本

AAP围产期术语2004：矫正年龄以40周计；经后年龄单独计算

## 已记录的公式

矫正年龄 = 实际年龄 −（40周 − 出生胎龄）。实际为从婴儿达到40周的日期起经过的时间。

经后年龄 = 出生胎龄 + 实际年龄（周和天）。经后年龄不足40周时，使用经后年龄而非矫正年龄。

## 限制与适用人群

矫正年龄等于实际年龄减去距孕40周尚缺的周数；经后年龄与实际年龄是不同概念。巴西卫生部在早产儿随访中使用实际年龄安排接种，使用矫正年龄评估生长发育。所查阅页面根据观察结局给出期限：头围18个月、体重24个月、神经评估42个月；同时说明一般规则为至2岁，若出生孕周不足28周，则至实际年龄3岁。应按随访目的选择年龄和期限，不要将该计算理解为发育迟缓的诊断。 AAP的2004年政策涉及术语，说明矫正年龄这一术语适用于3岁以内的早产儿童。AAP的HealthyChildren页面于2018年更新，说明在最初2年可使用矫正年龄评估发育里程碑。两份文件的目的不同；所核对的段落并未为所有随访规定统一的停止矫正年龄。巴西卫生部的随访期限取决于所评估的结局，详见本工具的适用限制。

## 参考文献

- [Engle WA; American Academy of Pediatrics Committee on Fetus and Newborn. Age terminology during the perinatal period. Pediatrics, 2004.](https://doi.org/10.1542/peds.2004-1915)

- [Ministério da Saúde,puericultura,current retrieval2026-10-04](https://linhasdecuidado.saude.gov.br/portal/puericultura/unidade-de-atencao-primaria/crianca/)

- [American Academy of Pediatrics. Corrected Age For Preemies. HealthyChildren; updated2018-12-10, adapted2017.](https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Corrected-Age-For-Preemies.aspx)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
