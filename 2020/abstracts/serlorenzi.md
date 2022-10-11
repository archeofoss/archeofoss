---
title: "SITAR: a new OPEN DATA infrastructure for a public archaeology of Rome"
description: "SITAR: a new OPEN DATA infrastructure for a public archaeology of Rome"
layout: article-slim
images:
  ../images/2020/abstracts/serlorenzi-01.jpg|Fig. 1. REPOSITAR Infrastructure architectural diagram.
  ../images/2020/abstracts/serlorenzi-02.jpg|Fig. 2. The new Digital Library.
  ../images/2020/abstracts/serlorenzi-03.jpg|Fig. 3. Workflow for dowloading and reusing the vector geometries and relative attributes table in the most commons geographic formats.
  ../images/2020/abstracts/serlorenzi-04.jpg|Fig. 4. SITAR open data services.
geo:
  - 41.90118,12.49862
---

**Mirella Serlorenzi**

[mirella.serlorenzi@beniculturali.it](mailto:mirella.serlorenzi@beniculturali.it)

> Mirella Serlorenzi graduated and specialized in Medieval Archaeology at the Sapienza - University of Rome, and  trained in the great urban excavations in Rome (Crypta Balbi and Palatine Hill). From 2000 to 2006 she was Archaeologist Director at the Soprintendenza per i Beni Archeologici of Ostia and is currently Archaeologist at the Soprintendenza Speciale Archeologia Belle Arti e Paesaggio of Rome (SSABAP). She was Director of the Museum of the Early Middle Ages (2013-2105), since June 2015 she has been Director of the National Roman Museum - Crypta Balbi and since 2017 Director of the seat of the National Roman Museum - Palazzo Massimo. She is the scientific responsible and coordinator of important archaeological excavations in Rome, both in the Esquiline area (Piazza Vittorio Emanuele II, Piazza Dante) and in other areas of the historical centre such as the Athenaeum and the archaeological complex of Largo S. Susanna. She  actively participates in European projects, such as ARIADNE, the project “Atlas des techniques de construction dans le monde romain” of the Ecole Normale Supérieure and the project AREA (Archives of European Archaeology). He participated in the ministerial commissions, appointed by the Minister, for the realization of the Archaeological Information System of Italian cities and their territories, for preventive archaeology and in the technical table of MiBACT on Open data. Since 2007 he has created for SSCol the Archaeological Territorial Information System of Rome, of which he still directs and coordinates the working group. She edited the proceedings of the VII Edition ArcheoFOSS.

**Riccardo Montalbano**

[ricca.montalbano@uninettunouniversity.net](mailto:ricca.montalbano@uninettunouniversity.net)

> Riccardo Montalbano is an archaeologist specialized  in Ancient Topography, currently adjunct Professor of Ancient Topography, Landscape Analysis and GIS at the International Telematic University Uninettuno, GIS expert and senior topographer at the Soprintendenza Speciale di Roma (SITAR), advisor for the Great Marble Map of Rome (Ancient World Mapping Center – Sovrintendenza Capitolina ai Beni culturali), national fellow at the Accademia Nazionale dei Lincei and researcher at University of Pisa. His main interests are ancient urbanism, GIS and territorial analysis and open data in archaeological domain.

**Ascanio D'Andrea**

[ascaniodandrea@gmail.com](mailto:ascaniodandrea@gmail.com)

> Ascanio D’Andrea works for archaeological and conservation projects in Italy and in the Mediterranean area. He gained experience of a wide range of digital tools for documentation. As a member of the team of the Herculaneum Conservation Project, he had  responsibilities for the creation of tools (GIS, 2D and 3D surveys). He has contributed to GCI’s Bulla Regia Conservation Project. His experience has been used by several heritage organizations, including contributions to various ICCROM courses, GCI capacity building of site staff in Bulla Regia, MOSAIKON activities in Cyprus and Morocco, the UNESCO Officeand the Arab Regional Centre for World Heritage in Sultanate of Oman.

**Carlo Cifarelli**

[carlo.cifarelli@gmail.com](mailto:carlo.cifarelli@gmail.com)

[https://www.linkedin.com/in/carlo-cifarelli-73a64a80/](https://www.linkedin.com/in/carlo-cifarelli-73a64a80/)

> Carlo Cifarelli graduated in Computer Science and Digital Communication at the University of Bari (2008). From 2008 to 2013 he worked as a CRM consultant for CONSIP, Banca D’Italia, Selex SeMa and Telecom Italia. Since 2013 he has been collaborating with the communication firm Nwdesigns for the implementation of commercial, ecommerce and management web applications. Since 2014 he has worked as a software engineer for YourPersonal Srl  about the YourPersonalJames. com project. In 2017 he joined the Department of Computer Engineering, Automatics and Management of the University of Sapienza in Rome, during the activities of Assessment of the IT platform that underlies the service of Good Electronic Meal for the company Qui!Group. In 2018 he collaborated with Ced Digital & Services (Caltagirone Editor) for the Google Digital News Innovation Fund. Since 2020, he works on the SITAR project as Software Engineer and System Administrator.

SITAR (Sistema Informativo Territoriale Archeologico di Roma - Archaeological Territorial Information System of Rome) has been launched in 2008 by the Soprintendenza Speciale per i Beni Archeologici di Roma in order to digitize and gather all the scientific data coming from the archaeological excavations and the geological research surveys carried out within the territory of Rome and Fiumicino ([https://beniculturali.academia.edu/ProgettoSITAR](https://beniculturali.academia.edu/ProgettoSITAR)).

Since the beginning, the main goal of the project was to provide to the community involved in the study and preservation of the archaeological and historical heritage of Rome with a useful support for the process of urban co-planning. For this reason, unlike other similar experiences at national and international level, the representation is no longer symbolic, but the archaeological data are processed in their “planimetric reality”, after an accurate georeferencing process carried out by professional archaeologists. Today, the system brings together several types of data, ranging from archival documentation to the single archaeological features found during the archaeological excavations. 
After 13 years from the development  of the first web application, from May 2018 a system re-engineering was started, aimed at merging the three original applications (WEBAIS, SIGEDO, AMBIENTE TUTELA) into a single system. 

The infrastructure is now hosted on the GARR cloud (based on the OS Open Stack) and has a modular architecture, so that each service is allocated on specific “container”, as shown in fig. 1. This choice stems from a twofold requirement: on the one hand, to optimize the response to individual requests, and on the other to ensure a specific maintenance of the single services.

Among the main innovations is the creation of a Digital Library, which allows the user to explore the SITAR documentary heritage (maps, drawings, scientific reports), filtering the results through specific parameters (fig. 2). The new Digital Library is served by the open source suite ELK: it uses ElasticSearch  as a search  engine, Logstash for the index creation and Kibana to generate an effective  view on the data. The documents are scanned through OCR and the system can retrieve the keywords used to search within every single document.
The final objective of the new engineering was to align SITAR with the FAIR DATA philosophy and therefore to guarantee an easy and well documented data acquisition. For this reason, SITAR data can now be acquired by any user 1. through download in the main OPEN FORMATS (GEOJSON, GML2, GML3, KML; GEOTIFF, GEOTIFF8, SVG, CSV: fig. 3), 2. through specific requests to the dedicated GEOSERVER instance or, at an upper level, thanks to the REST services (fig. 4) . The publication of the API allows the users to dynamically exploit the SITAR dataset, negotiating the protocol and the format according to its specific needs. 

Finally, it is worth noting that the postgres/postgis SITAR database – that currently stores 5.000 excavations, 25.000 archaeological features and 100.000 attachments – adopts CIDOC CRM Archaeo as semantic model and the data have been extracted and represented in RDF, using the XML language. 
