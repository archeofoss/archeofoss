---
title: "Towards an ontology of the Museum of Archaeology of the University of Catania: from the legacy data digitization to the semantic web"
description: "Towards an ontology of the Museum of Archaeology of the University of Catania: from the legacy data digitization to the semantic web"
layout: article-slim
images:
  ../images/2020/abstracts/lanieri-01.jpg|Fig. 1. Museum of Archaeology of Catania University, the G. Libertini collection, selection of some finds from the Greek age (above) and fakes (below). 
  ../images/2020/abstracts/lanieri-02.jpg|Fig. 2. Museum of Archaeology of Catania University, Entity–relationship diagrams. 
  ../images/2020/abstracts/lanieri-03.jpg|Fig. 3. Museum of Archaeology of Catania University, digitization of chronological data.
geo:
  - 37.50356,15.08649
---

**Nicola Laneri**

[nlaneri@unict.it](mailto:nlaneri@unict.it)

> Nicola Laneri is professor of archeology and art history of the ancient Near East at the Department of Humanities and Scientific Manager of the Museum of Archeology of  the University of Catania; director of archaeological missions in Turkey and Azerbaijan, he supports the sharing of archaeological data in open format, as shown with the publication of the entire database of the research results obtained throught he Hirbemerdon Tepe Archaeological Project (2003-2016).

**Rodolfo Brancato**

[rodolfobrancato@unict.it](mailto:rodolfobrancato@unict.it)

> Rodolfo Brancato is a research fellow in Ancient Topography at the Department of Humanities of the University of Catania. His research focuses on Greek and Roman material culture and ancient Mediterranean landscapes reconstruction, through the application of multidisciplinary techniques and methodologies for recognition, documentation and analysis of archaeological contexts and the integration of legacy data for new research projects.

**Salvatore Cristofaro**

[salvatore.cristofaro@istc.cnr.it](mailto:salvatore.cristofaro@istc.cnr.it)

> Salvatore Cristofaro is a research fellow at the CNR Institute of Sciences and Technologies of Cognition, located in Catania. His research activity focuses on the study and development of formal methods for text representation and processing and Information Retrieval.

**Marianna Figuera**

[marianna.figuera@unict.it](marianna.figuera@unict.it)

> Marianna Figuera is a research fellow in Aegean Archaeology at the Department of Humanities of the University of Catania. Her research focuses on metallurgy in Minoan Crete and, in general, on the small finds’ perception, dealing with problems related to digitalized management of archaeological data, with particular reference to reliability, interpretation and uncertainty management.

**Marianna Nicolosi Asmundo**

[nicolosi@dmi.unict.it](mailto:nicolosi@dmi.unict.it)

>Marianna Nicolosi Asmundo is a researcher at the Department of Mathematics and Computer Science (DMI) of the University of Catania. She is a member of the GULP Committee - Researchers and Users Logic Programming Group and proposing member of the CINUM - Interdepartmental Center of Humanities. She teaches in the Master of Science, Bachelor of Mathematics and Science and Languages for Communication courses (Department of Humanities). Her research focuses on the automatic deduction, knowledge bases, ontologies and reasoning services for the semantic web.

**Daniele Francesco Santamaria**

[daniele.f.santamaria@gmail.com](daniele.f.santamaria@gmail.com)

> Daniele Francesco Santamaria is research fellow and lecturer at the Department of Mathematics and Computer Science of the University of Catania. His research deals with knowledge representation, automatic reasoning tools and web ontologies, in particular for cultural heritage and for intelligent agents.

**Daria Spampinato**

[daria.spampinato@cnr.it](mailto:daria.spampinato@cnr.it)

> Daria Spampinato, researcher at the CNR Institute of Sciences and Technologies of Cognition, located in Catania, is a computer science expert with many years of experience in DH having taken part in various projects for of enhancement and promotion of cultural heritage through the exploitation of technology and digital, including the digital collection of the epigraphs of the Castello Ursino Civic Museum of Catania, through the project EpiCUM (http://epicum.istc.cnr.it) and the BellinInRete project, concerning the semantic organization of the archival and documentary heritage of the Bellini Civic Museum of Catania (http://www.bellininrete.istc.cnr.it). She carries out research as computer science expert in the fields of Computational Humanities, Text encoding, Digital epigraphy, Digital Libraries, Semantic Web and Linked Open Data; she is a member of the Board of the Association for Humanities and Digital Cultures since 2014.

This paper deals with the data management of museum collections using the specific case-study of the Libertini Collection kept at the Museum of Archaeology of the University of Catania. Since the  aim of the project  is to define forms of long-term preservation of digital data associated with sites and objects of cultural interest, we used the Linked Open Data paradigm and, more specifically, the Web Ontology Language, the standard language for representing web ontologies, which are digital tools designed for the definition, description, integration and sharing of resources of various domains of knowledge. Such an approach adds a high level of expressiveness for the possibility of using automatic reasoning tools, which allows one to  obtain a more complete and comprehensive as well as more complex and efficient form of digital research.

The digitization of the archaeological collection of the Museum of Archaeology of the University of Catania explores innovative models of data entry in order to encourage not only new research by specialists, but also the discovery and interpretation of cultural heritage by a wider audience, including university students who have been directly involved in the process of data entry. All the finds will be made available and reusable online in an open (CC BY-NC-SA 2.5 IT - Creative Commons) and connected format following the spirit of a public, shared and participatory archeology. Moreover, the core of the Museum are the 325 finds belonging to the collection that was donated by G. Libertini to the University of Catania in 1953 (Fig. 1). The collection consists of finds from the Greek and Roman periods (i.e. fine and common wares,  epigraphs, terracotta figurines, coins, etc.) mostly unearthed in the archaeological sites of Catania and Centuripe areas. Among these are some noteworthy fakes (i.e., 78 objects forged in the first half of the twentieth century) which for the outstanding level of craftsmanship and the use of authentic molds deceived many archaeologists and art historians.

The decision to publish online the content of the G. Libertini Collection is not only related with  the quality of the finds, but also to the consistency of the supporting documentation (i.e., catalogs, transmission letters, photos, etc.). The project aims not only at reconstructing the history of the collection, but also at transforming it into a digital dimension through the processing, recovery and republication of the available legacy data. The project will allow one to identify the context of scattered items and to relate the copy of the item with the original,  by means of an appropriate mapping of the ontology with  the RDF Pleiades vocabulary, according to the LOD paradigm.

The first step saw the identification of the entities and their organization intoa system that adopts the ICCD standards, with a view to a forthcoming integration with the SIGECWeb (Fig. 2). For the development of an effective and expressive ontological model, the preliminary phase is the normalization of the data acquired through museum resources and their organization into homogeneous and structured collections with adequately refined level of granularity (Fig. 3). Specific terminological vocabularies of reference will be determined. The areuseful for normalizing data by means ofthe identification of suitable and consolidated existing vocabularies and the definition of new terminological entities. We will then rely on already existing ontologies on inherent domains such as OntoCeramic [1] and EpiONT [2], defined according to the CIDOC standard for the integration of data in cultural and archaeological contexts.

[1] Brancato, R., M. Nicolosi-Asmundo, G. Pagano, D.F. Santamaria, S. Ucchino, “Towards an Ontology for Investigating on Archaeological Sicilian Landscapes, Proceedings of the ODOCH 2019”, CEUR Workshop Proceedings 2375: 85-90. 2019.
[2] Cantone, D., S. Cristofaro, M. Nicolosi-Asmundo, F. Prado, D.F. Santamaria, D. Spampinato, “An EPIDOC Ontological Perspective: the Epigraphs of the Castello Ursino Civic Museum of Catania via CIDOC CRM”, Archeologia e Calcolatori 30: 139-157, 2019.
