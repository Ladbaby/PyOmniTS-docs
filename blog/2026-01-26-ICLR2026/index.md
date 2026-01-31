---
slug: iclr-2026
title: ICLR 2026
authors: [Ladbaby]
---

## Learning Recursive Multi-Scale Representations for Irregular Multivariate Time Series Forecasting

Boyuan Li, Zhen Liu, Yicheng Luo, Qianli Ma†

![](./model_architecture.png)

### Links

- **OpenReview**: https://openreview.net/forum?id=JEIDxiTWzB

### Highlights

- We introduce **recursive splitting** based on time periods for IMTS samples to **preserve the original sampling patterns** across all scale levels, and leverage IMTS backbones to capture dependencies in different time periods as multi-scale representations.
- We propose **ReIMTS**, a recursive multi-scale method for IMTS forecasting. Using irregularity-aware representation fusion, it recursively captures global-to-local dependencies and provides accurate predictions.
- Extensive experiments including twenty-six baseline methods and five IMTS datasets on IMTS forecasting are conducted. Tested on six IMTS backbones, ReIMTS consistently boosts their forecasting performance in all settings while maintaining good efficiency.

### Abstract

Irregular Multivariate Time Series (IMTS) are characterized by uneven intervals between consecutive timestamps, which carry sampling pattern information valuable and informative for learning temporal and variable dependencies.
In addition, IMTS often exhibit diverse dependencies across multiple time scales.
However, many existing multi-scale IMTS methods use resampling to obtain the coarse series, which can alter the original timestamps and disrupt the sampling pattern information.
To address the challenge, we propose ReIMTS, a **R**cursive multi-scale modeling approach for **I**rregular **M**ultivariate **T**ime **S**eries forecasting.
Instead of resampling, ReIMTS keeps timestamps unchanged and recursively splits each sample into subsamples with progressively shorter time periods.
Based on the original sampling timestamps in these long-to-short subsamples, an irregularity-aware representation fusion mechanism is proposed to capture global-to-local dependencies for accurate forecasting.
Extensive experiments demonstrate an average performance improvement of 29.1\% in the forecasting task across different models and real-world datasets.
Our code is available at https://github.com/Ladbaby/PyOmniTS.

### Citation

```
@inproceedings{li_LearningRecursiveMultiScale_2026,
    author = {Li, Boyuan and Liu, Zhen and Luo, Yicheng  and Ma, Qianli},
    booktitle = {International Conference on Learning Representations},
    title = {Learning Recursive Multi-Scale Representations for Irregular Multivariate Time Series Forecasting},
    year = {2026}
}
```
