---
title: "SPARQLing ᚑᚌᚆᚐᚋ: Publication of Irish Ogham Stones as LOD"
description: "SPARQLing ᚑᚌᚆᚐᚋ: Publication of Irish Ogham Stones as LOD"
layout: article-slim
images:
  ../images/2020/abstracts/schmidt-01.jpg|Fig. 1. 2268px-UCC_Stone_4.jpg University College Cork Stone Corridor, Stone 4, CIIC 81 (CY BY 4.0 Florian Thiery) 
  ../images/2020/abstracts/schmidt-02.jpg|Fig. 2. Workflow_ogham_wikidata.png Workflow for the publication of Ogham Stones in Wikidata (CC BY 4.0 Research Squirrel Engineers)
  ../images/2020/abstracts/schmidt-03.jpg|Fig. 3. Wikidata_ogham.png Ogham resources in Wikidata (CC BY 4.0 Research Squirrel Engineers).
geo:
  - 49.9654762,8.1723194
---

**Sophie C. Schmidt**

[ft_scs@squirrel.link](mailto:ft_scs@squirrel.link)

[https://orcid.org/0000-0003-4696-2101](https://orcid.org/0000-0003-4696-2101)

> Sophie C. Schmidt, M.A., is a Prehistorian and Computational Archaeologist who focuses on geospatial and statistical analyses and open research practices. She worked as a research associate at the University of Bonn and the Cologne Digital Archaeology Lab (CoDArchLab), teaches courses and workshops on statistics in the programming language R and reproducible research and is interested in archaeogaming, analysing the representation of the past in digital games. She is also a member of the Research Squirrel Engineers working group as well as the international CAA and the German chapter.

**Florian Thiery**

[mail@fthiery.de](mail@fthiery.de)

[https://www.linkedin.com/in/florianthiery/](https://www.linkedin.com/in/florianthiery/)

> Florian Thiery is a geodesist by training and Research Software Engineer and founder of the Research Squirrel Engineers working group. He is a member of the Scientific Committee of the Computer Applications and Quantitative Methods in Archaeology (CAA) as well as of the CAA Special Interest Group (SIG) on Semantics and LOUD in Archaeology (SIG-DataDragon). His research focuses on semantics and data modelling, especially Linked Open Data in archaeology. He studied in Mainz (M.Sc.) and worked at the Institute for Spatial Information and Surveying Technology in Linked Data projects like ChronOntology and Labeling System.

In this paper we present a project by the working group ‘Research Squirrel Engineers’ ([http://squirrel.link](http://squirrel.link)) on the digitization and provision of Irish Ogham Stones in Wikidata as Linked Open Data (LOD). Ogham Stones are monoliths inscribed with the Ogham (ᚑᚌᚆᚐᚋ) script, erected in Ireland and the western part of Britain (Wales, Scotland, Cornwall, Devon, Isle of Man) between the 4th and 9th centuries. The standard work on Ogham inscriptions is the Corpus Inscriptionum Insularum Celticarum (Macálister 1945,1949). In it, Macálister establishes the widely used numbering scheme CIIC and describes two different types of words: formula words and nomenclature words. Examples of formula words are MAQI ᚋᚐᚊᚔ (son, e.g. CIIC 203, Q67978531) or MUCOI ᚋᚒᚉᚑᚔ (tribe/sept, e.g. CIIC 197, Q69388229). Examples of name components (nomenclature words) are CUNA ᚉᚒᚅᚐ (wolf/hound, e.g. CIIC 154, Q68002826) or CATTU ᚉᚐᚈᚈᚒ (battle, e.g. CIIC 58, Q70892430). Other names refer to possibly divine ancestors, e.g. the god Lugh (LUC ᚂᚒᚌ) appears in many names like LUGADDON ᚂᚒᚌᚌᚐᚇᚑᚅ (cf. CIIC 4, Q70899515). The combination of formula and nomenclature words leads to inscriptions that feature kinship or tribal relations. Examples are: X MAQI Y → X son of Y (e.g. Q69389090) or X MAQI MUCOI Y → X son of the tribe Y (e.g. Q69388229). These triples of information lend themselves well to a representation as a linked-graph-network. So do the results of the linguistic analysis of the stones: As the stones are often damaged, different ways of reading and reconstructing them abound. These differing interpretations can be placed next to each other and easily expanded within a graph database system. In addition, personal relationships and spatial topologies can be visualized and analyzed very well with graphs. The major challenge, though, is that all this data is available in books or non-open-access online databases. Therefore, the Squirrels established a workflow for digitising the analogue data and publish the ᚑᚌᚆᚐᚋ stones as LOD. The aim of our project is to enable the reproduction of analyses based on the analog CIIC catalog and enhance the database with Linked Open Data available online. By publication as LOD, the data becomes machine-readable, and available for any interested person, thereby also enabling citizen scientists all over the world. 

As we know, LOD has become the de facto “quasi-standard” for the storage of humanities data in a semantically modeled cloud. There are several possibilities to host this modelled and published LOD: (a) create your own ontology, formulate a triples creation process and host the triplestore with a SPARQL endpoint or (b) use well-known community based systems, e.g. Wikidata. Strategy A is based on an ontology ([https://t1p.de/lnb9](https://t1p.de/lnb9)) with the publication using a RDF4J triplestore ([https://digits.mainzed.org/squirrels](https://digits.mainzed.org/squirrels)). Strategy B uses the community approach: Wikidata. Wikidata allows for attribution, linking to other entities and the specification of provenance and sources. Wikidata data can be filtered, exported and further processed with different programs using SPARQL APIs, such as the SPARQL Unicorn (10.5281/zenodo.3742185).

This paper will give a deeper insight into the two semantic (LOD) modelling and publication strategies. We will discuss the pros and cons as well as the challenges of the strategies. This includes in particular the major challenge and possibility of citizen science vs. data sovereignty.