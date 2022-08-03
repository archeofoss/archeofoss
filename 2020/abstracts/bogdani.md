---
title: "Fieldnotes for the development and publication of open standards for the vectorization of archaeologic and architectonic topographic legacy data"
description: "Fieldnotes for the development and publication of open standards for the vectorization of archaeologic and architectonic topographic legacy data"
layout: article-slim
img: /images/abstracts/bogdani-02.png
images:
  ../images/2020/abstracts/bogdani-01.png|Fig. 1. PATh’s data portal. The SVP official documentation page (https://docs.paths-erc.eu/data/svp)
  ../images/2020/abstracts/bogdani-02.png|Fig. 2. A graphical example of the SVP
  ../images/2020/abstracts/bogdani-03.png|Fig. 3. Actual use of the vector data created using SVP in the web application of the Archaeological Atlas of Coptic Literature (Abu Mina, https://atlas.paths-erc.eu/places/116)
  ../images/2020/abstracts/bogdani-04.png|Fig. 4. SVP validation tool created to encourage a strict implementation of the standard (https://paths-erc.eu/svp-validate/)
geo:
  - 41.90376,12.51443
---


**Julian Bogdani**

[julian.bogdani@uniroma1.it](mailto:julian.bogdani@uniroma1.it)

[https://iris.uniroma1.it/browse?type=author&authority=rp62440](https://iris.uniroma1.it/browse?type=author&authority=rp62440)

> Julian Bogdani is researcher of Archaeology at Sapienza University of Rome. He is member of the ERC Advanced grant PAThs - An Archaeological Atlas of Coptic Literature, directed by Paola Buzi. He teaches Digital Humanities and Methods of Archaeological Research at Sapienza. He has developed many open-source applications specifically designed for archaeology and cultural heritage needs.

The paper is aimed at sharing with the broader community some methodological issues and practical solutions that have been faced and dealt with while working on the drafting of the Archaeological Atlas of Coptic Literature, in the context of PAThs ERC Advanced project directed by Paola Buzi and based in Sapienza University of Rome.

The premises where canonical: in order to design specific cartographic and topographic themes to be published in the Atlas ([https://atlas.paths-erc.eu](https://atlas.paths-erc.eu)) a significant amount of previously published maps of various scales had to be digitized and vectorized. This material was quite heterogeneous, under multiple aspects. Scale, graphical styling, topographic accuracy, degree of interpretation, reconstructive hypothesis varied greatly from one map to another. The maps of the buildings related to the Christian cult — basilicas, churches, chapels, etc. — were digitized and georeferenced. This first step of the workflow would require a paper on its own since multiple technical and substantial (i.e. archaeological) issues are involved. The digitization and vectorization process took, on the other hand, the shape of an actual legacy data recovery action aimed at porting to the digital domain paper-based sketches. The most important task was to overcome the risk of creating a CAD-based, muted vector theme, a sort of digital-analogical copy of the paper version. It was decided thus to enrich the vector features with semantics, through the drafting of a simple but powerful schema able to encode concisely but exhaustively all sort of information that a common archaeological and/or architectonic sketch is able to convey. Moreover, metadata on where the original drawing can be found and on the person who performed the vectorization have been encoded. The resulting protocol named PAThs Simple Vectorization Protocol, or simply SVP, has been released as a Free Cultural Work with the Creative Commons Attribution 4.0 International License.

This methodological approach considers the georeferencing and vectorization processes not as a purely mechanical or join-the-points one, but as a critical archaeologic reading and interpretation of the original drawing and its translation in digital format. The interpretation of the surveyor flowed into the paper-sketch and the one of the operator who deals with many versions of the same context must be clearly set apart in order to be able to easily distinguish the different contributions and possibly integrate more recent works, contributing greatly to the transparency of the scientific process.

When it comes to semantics, the protocol is chronology- and context-agnostic. This means that even if it has been developed to solve a very specific archaeological problem — i.e. the vectorization of sites and buildings related to the cult of the Christian religion in Late-antique and Medieval Egypt — it can be used profitably virtually in any cultural or chronological context. The SVP provides means to thoroughly describe extant or hypothesised structures, their state of preservation and the relative chronology (i.e. phases). The protocol aims to be an objective tool for vectorization, trying not to force over-interpretation when information is lacking, but it is designed also to provide useful tools for multi-layer hypothesis by maintaining the overall transparency of the entire data production and manipulation process.
