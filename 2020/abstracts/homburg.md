---
title: "Little Minions and SPARQL Unicorns as tools for archaeology"
description: "Little Minions and SPARQL Unicorns as tools for archaeology"
layout: article-slim
images:
  ../images/2020/abstracts/homburg-01.jpg|Fig. 1. SPARQLing Unicorn QGIS Plugin Logo 
  ../images/2020/abstracts/homburg-02.jpg|Fig. 2. SPARQLing Unicorn QGIS Plugin Query Dialog 
  ../images/2020/abstracts/homburg-03.jpg|Fig. 3. SPARQLing Unicorn QGIS Plugin QGIS Map with caves containing prehistoric art from Wikidata 
  ../images/2020/abstracts/homburg-04.jpg|Fig. 4. SPARQLing Unicorn QGIS Plugin QGIS Map with Pleiades Places
geo:
  - 49.9654762,8.1723194
---

**Timo Homburg**

[qgisplugin@sparqlunicorn.link](mailto:qgisplugin@sparqlunicorn.link)

[https://scholar.google.de/citations?user=Ww8a7E0AAAAJ](https://scholar.google.de/citations?user=Ww8a7E0AAAAJ)

> Timo Homburg studied Computer Science with emphasis on Computational Linguistics, Semantic Web and Chinese studies and in the last years worked in the GIS field to integrate geospatial data with Semantic Web technologies. His PhD thesis deals with semantic geospatial data integration and the quality of geospatial data in this Semantic Web context. Another of his research interests   is the Digital Humanities where he published in the area of Digital Cuneiform studies.

**Florian Thiery**

> Florian Thiery is a geodesist by training and Research Software Engineer and founder of the Research Squirrel Engineers working group. He is a member of the Scientific Committee of the Computer Applications and Quantitative Methods in Archaeology (CAA) as well as of the CAA Special Interest Group (SIG) on Semantics and LOUD in Archaeology (SIG-DataDragon) and the CAA Little Minions Working Group. His research focuses on semantics and data modelling, especially Linked Open Data in archaeology. He studied in Mainz (M.Sc.) and worked at the Institute for Spatial Information and Surveying Technology in Linked Data projects like the Labeling System.

In our daily work, some small self-made scripts and home-grown small applications significantly help us to get work done. These little helpers – you can call them “little minions” – often reduce our workload or optimise our workflows. Therefore, the `Computer Applications and Quantitative Methods in Archaeology` (CAA) created a working group on `Little Minions` ([http://littleminions.link](http://littleminions.link)) focusing on development and customization of FLOS Software for archaeology.

Furthermore, the WWW gives researchers the possibility of sharing their research data and enables the community to participate in the scientific discourse to create previously unknown knowledge. But much of these shared data are not findable or accessible, thus resulting in modern ‘unknown data dragons’. Often these ‘data dragons’ lack connections to other datasets. To overcome these shortcomings, a set of techniques can be used: Semantic Web and Linked Open Data (LOD) ([https://doi.org/10.5281/zenodo.3345711](https://doi.org/10.5281/zenodo.3345711)). This is where the CAA SIG on Semantics and LOUD in Archaeology ([http://datadragon.link](http://datadragon.link)) comes into play and wants to promote the LOD ideas. One of their tasks is to collect LOD related data e.g. Nomisma, Kerameikos, Pleiades, AtlantGIS, Roman Open Data ([http://dragonator.datadragon.link](http://dragonator.datadragon.link)) to be used  in research software.

Moreover, there are very cool volunteer  community driven data collecting initiatives like Wikidata. The Wikidata community created a lot of tools to interact with the Wikimedia repositories. On the other hand there is a lack of user-friendly, easy to use and openly available archaeology-related tools for LOD as you can be seen in the collection of CAA Little Minions ([https://github.com/caa-minions/minions](https://github.com/caa-minions/minions)). The Digital Humanities Community may use Recogito or Annotorious, to overcome this bottleneck, but for the archaeological community, the SPARQL Unicorn idea and principles may help ([https://doi.org/10.5281/zenodo.3742185](https://doi.org/10.5281/zenodo.3742185)).

To summarize the three aforementioned aspects, there is a lack of FLOS GIS Tools for LOD and archaeology. The SPARQLing Unicorn QGIS plugin addresses the problem of the lack of availability of tools for Semantic Web geodata. It allows the execution of Linked Data queries in (Geo)SPARQL to select  triplestores and geo-enabled SPARQL endpoints and thus prepares the results of the queries in QGIS for the geocommunity. The plugin currently offers three functions: (a) simplified querying of Semantic Web data sources (b) enrichment of geodata and (c) enrichment and transformation of RDF data.

The first function allows assisted querying of several triple stores, also using columns of custom geo-datasets. Example queries and query templates are given. A concept search simplifies the creation of the SPARQL query, the results are saved as a QGIS vector layer. The Unicorn covers archaeological related triplestores e.g. Nomisma, Kerameikos, Pleiades, and Roman Open Data. The second function allows the enrichment of a given geodataset using Semantic Web resources from the Linked Open Data Cloud, especially Wikidata (e.g. the elevation level of towns along the Roman Limes). Geospatial data is always seen in a context of usage which usually requires additional data from different knowledge domains. Semantically interpreted Linked Data may represent such a resource for data enrichment. Finally, the provision of geospatial and archaeological data into the Semantic Web is of interest. Communities need appropriate tools to convert geospatial information e.g. from GeoJSON into RDF, so that this information might be represented in a proper way. This is also of interest to the Linked (Geo) Data community whose interest is to reproject and transform geospatial data into other reference systems. The Unicorn is able to do this as well.