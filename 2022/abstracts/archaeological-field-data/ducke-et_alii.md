---
title: "iDAI.field: Developing software for the documentation of archaeological fieldwork"
description: "iDAI.field: Developing software for the documentation of archaeological fieldwork"
layout: article-slim
img: ducke-et_alii.jpg
auths:
  - name: Benjamin Ducke
    geo: 52.4607023,13.2984561
    email: benjamin.ducke@dainst.de
    affiliation: 
  - name: Simon Hohl
    geo: 52.4607023,13.2984561
    email: simon.hohl@dainst.de
    affiliation: 
  - name: Thomas Kleinke
    geo: 52.4607023,13.2984561
    email: thomas.kleinke@dainst.de
    affiliation: 
  - name: Fabian Riebschläger
    geo: 52.4607023,13.2984561
    email: fabian.riebschlaeger@dainst.de
    twitter.com: friebsch
    affiliation: 
  - name: Juliane Watson
    geo: 52.4607023,13.2984561
    email: juliane.watson@dainst.de
    affiliation: 
---

**Panel: Practice and Paradigms of Open Source Technologies for Archaeological Field Data.**

- **Benjamin Ducke**
  - Deutsches Archäologisches Institut, Berlin, Germany
  - [benjamin.ducke@dainst.de](mailto:benjamin.ducke@dainst.de)
- **Simon Hohl**
  - Deutsches Archäologisches Institut, Berlin, Germany
  - [simon.hohl@dainst.de](mailto:simon.hohl@dainst.de)
- **Thomas Kleinke**
  - Deutsches Archäologisches Institut, Berlin, Germany
  - [thomas.kleinke@dainst.de](mailto:thomas.kleinke@dainst.de)
- **Fabian Riebschläger**
  - Deutsches Archäologisches Institut, Berlin, Germany
  - [fabian.riebschlaeger@dainst.de](mailto:fabian.riebschlaeger@dainst.de)
  - [@friebsch](https://twitter.com/friebsch)
- **Juliane Watson**
  - Deutsches Archäologisches Institut, Berlin, Germany
  - [juliane.watson@dainst.de](mailto:fabian.riebschlaeger@dainst.de)


The German Archaeological Institute (Deutsches Archäologisches Institut, DAI) conducts a variety of field research types, each with its own unique documentation requirements: Excavations, surveys and building recordings. The resulting differences are reflected in the workflows, the recording methods applied and the documentation produced. In addition, the DAI's international work has to comply with the guidelines of the respective heritage agencies in the host countries.

This results in a whole range of requirements that software for field data recording must fulfil:
-	It must provide a sufficiently flexible, adaptable data model.
-	At the same time, a standardized core data schema should allow for data comparison across geographical, temporal and thematic boundaries.
-	Multilingual data entry must be possible.
-	It must work both offline and online and allow robust methods of (delayed) data synchronisation.

It should also be possible to publish primary research data, together with the research results (narrative), with minimal additional effort, and in accordance with the requirements of the international research community and the funding providers.

An initial version of a unified field recording system for the DAI was based on the proprietary software Filemaker. This was used and modified by numerous projects at the DAI. However, systematic evaluation revealed severe problems in guaranteeing data quality and comparability as well as integration into existing workflows. Furthermore, the use of proprietary software, and its closed data formats, caused expensive problems with upgrades that broke backward compatibility.

For these reasons, the decision was made to design the new iDAI.field ([iDAI.field](https://github.com/dainst/idai-field)) from scratch, relying exclusively on open source software and current Web technologies. The focus of the redesign was on enabling complete documentation of archaeological fieldwork, mapping existing workflows to the new software, and improving them through the use of customised digital technologies. This distinguishes iDAI.field from generic platforms, such as GIS or CAD.

The individual roles of the software were split into separate components: a desktop application for on-site data entry, a server component for synchronisation via the Internet (or a local network) and a dynamic HTML report generator for publishing the primary data.

So far, the focus has been mainly on transferring already known, analogue documentation workflows into the digital application. In the future, it should also be evaluated whether and how the possibilities of using these digital technologies can improve those workflows in order to open up new knowledge discovery processes.



**License**

- Text: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Copyright: Benjamin Ducke, Simon Hohl, Thomas Kleinke, Fabian Riebschläger, Juliane Watson 2022
- Image: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Copyright: Camilla Colombi 2022
