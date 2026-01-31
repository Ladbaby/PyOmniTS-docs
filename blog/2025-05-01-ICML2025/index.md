---
slug: icml-2025
title: ICML 2025
authors: [Ladbaby]
---

## HyperIMTS: Hypergraph Neural Network for Irregular Multivariate Time Series Forecasting 

Boyuan Li, Yicheng Luo, Zhen Liu, Junhao Zheng, Jianming Lv, Qianli Ma†

![](./hypergraph_representation.png)

### Links

- **poster**: https://icml.cc/virtual/2025/poster/43741
- **OpenReview**: https://openreview.net/forum?id=u8wRbX2r2V
- **arXiv**: https://arxiv.org/abs/2505.17431

### Highlights

- We propose a new **hypergraph modeling approach** to represent both observed values and their dependencies in IMTS, which **does not require padding** and **remains extensible for dependency learning**.
- Based on the hypergraph representation, we propose **HyperIMTS**, a hypergraph neural network for the IMTS forecasting task. It leverages timestamp information preserved in the graph to adaptively capture both time-aware and overall variable dependencies, enabling irregularity-aware learning and accurate forecasting.
- We build a unified, extensible, and highly flexible code pipeline for fair IMTS forecasting benchmarking across time series models from various fields and tasks, covering twenty-seven state-of-the-art models and five IMTS datasets. Extensive empirical results demonstrate the low forecast error and high efficiency of HyperIMTS.

### Abstract

Irregular multivariate time series (IMTS) are characterized by irregular time intervals within variables and unaligned observations across variables, posing challenges in learning temporal and variable dependencies. 
Many existing IMTS models either require padded samples to learn separately from temporal and variable dimensions, or represent original samples via bipartite graphs or sets.
However, the former approaches often need to handle extra padding values affecting efficiency and disrupting original sampling patterns, while the latter ones have limitations in capturing dependencies among unaligned observations.
To represent and learn both dependencies from original observations in a unified form, we propose HyperIMTS, a **Hyper**graph neural network for **I**rregular **M**ultivariate **T**ime **S**eries forecasting.
Observed values are converted as nodes in the hypergraph, interconnected by temporal and variable hyperedges to enable message passing among all observations.
Through irregularity-aware message passing, HyperIMTS captures variable dependencies in a time-adaptive way to achieve accurate forecasting. 
Experiments demonstrate HyperIMTS's competitive performance among state-of-the-art models in IMTS forecasting with low computational cost.
Our code is available at https://github.com/qianlima-lab/PyOmniTS.

### Citation

```
@inproceedings{li_HyperIMTSHypergraphNeural_2025,
    author = {Li, Boyuan and Luo, Yicheng and Liu, Zhen and Zheng, Junhao and Lv, Jianming and Ma, Qianli},
    booktitle = {Forty-Second International Conference on Machine Learning},
    title = {HyperIMTS: Hypergraph Neural Network for Irregular Multivariate Time Series Forecasting},
    year = {2025}
}
```