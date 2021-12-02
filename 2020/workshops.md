---
title: "Workshops"
description: "Workshops for ArcheoFOSS 2020: Open software, hardware, processes, data and formats in archaeological research"
layout: article-slim
---


The last part of each day of the conference (16:00-19:00) will be dedicated to practical workshops focused on the topics of the conference. The attendance will be limited in number to ensure a better enjoyment of the events.


Short list of workshops:

1. [Bradypus: a practical guide to the creation and publication of a relational web-based database](#bradypus-a-practical-guide-to-the-creation-and-publication-of-a-relational-web-based-database)  

2. [Documentation of cultural heritage data with iDAI.field 2](#documentation-of-cultural-heritage-data-with-idaifield-2)  

3. [Hands on Extended Matrix: Blender 3D EMtools for virtual reconstruction](#hands-on-extended-matrix-blender-3d-emtools-for-virtual-reconstruction)  

4. [Hands on 3D survey collection (3DSC) for Blender: publish an archaeological site in a game engine as an optimized, open world environment](#hands-on-3d-survey-collection-3dsc-for-blender-publish-an-archaeological-site-in-a-game-engine-as-an-optimized-open-world-environment)  

5. [La documentazione archeologica fra digitalizzazione dei dati e dematerializzazione dei processi: soluzioni e strumenti per l’implementazione del Geoportale Nazionale per l’Archeologia e per l’interoperabilità con il Sistema Generale del Catalogo MiBACT](#la-documentazione-archeologica-fra-digitalizzazione-dei-dati-e-dematerializzazione-dei-processi-soluzioni-e-strumenti-per-limplementazione-del-geoportale-nazionale-per-larcheologia-e-per-linteroperabilità-con-il-sistema-generale-del-catalogo-mibact)  

6. [ATON: an open-source framework for creating liquid 3D web-apps for CH](#aton-an-open-source-framework-for-creating-liquid-3d-web-apps-for-ch)  

7. [From QGIS to QFIELD and vice versa](#from-qgis-to-qfield-and-vice-versa)  

## Bradypus: a practical guide to the creation and publication of a relational web-based database

{: .text-danger}
**Definitively scheduled for 15<sup>th</sup> of October 2020, 16:00-19:00 CEST**

**Author:** Julian Bogdani \| [julian.bogdani@uniroma1.it](mailto:julian.bogdani@uniroma1.it) \| Sapienza University of Rome

**Description**

The workshop is a very practical guide to the creation, publication and implementation of complex relational databases on the Web. Bradypus open-source (MIT) software will be used for the management of the database.
Basic knowledge of SQL is encouraged, as well as a rudimentary understanding of the relational model.
The workshop will go through the creation of the basic configuration files for a given schema, the downloading of the software from the public repository, the bootstrap of a web server and the (minimal) configuration of user interface.
At the end of the workshop, the attendants will be able to set up a simple-to very complex, multi-user relational database and publish it online.
A follow-up might be planed on request two weeks after the workshop as a public session of Q&A. On request, the databases of the attendants will be freely hosted on [https://db-edu.bradypus.net/](https://db-edu.bradypus.net/)

**Technical requirements**

- **Recommanded configuration**: [php 7.x](https://phptherightway.com/#getting_started) (with extensions: pdo, pdo-sqlite, php-mbstring, php-gd), [Sqlite](https://www.sqlite.org/index.html), an updated modern browser and internet connection
- **Optimal configuration**: [Apache 2.x](https://httpd.apache.org/), [php 7.x](https://phptherightway.com/#getting_started) (with extensions: pdo, pdo-sqlite, pdo-mysql, pdo-pgsql, php-mbstring, php-gd), [Sqlite](https://www.sqlite.org/index.html), [MySQL](https://www.mysql.com) (or [MariaDB](https://mariadb.org/) or [Percona](https://www.percona.com/)), [PostgreSQL](https://www.postgresql.org/), an updated modern browser, internet connection. “All-in-one” solutions such as [MAMP](https://www.mamp.info/en/downloads/) and [XAMPP](https://www.apachefriends.org/index.html) will install these other bits of software for you and tie them all together, but ease of setup comes with a trade-off of flexibility.

---

## Documentation of cultural heritage data with iDAI.field 2

{: .text-danger}
**Definitively scheduled for 16<sup>th</sup> of October 2020, 16:00-19:00 CEST**

**Authors:** 
- Juliane Watson \| [juliane.Watson@dainst.de](mailto:juliane.Watson@dainst.de) \| DAINST
- Sebastian Cuy \| [Sebastian.Cuy@dainst.de](mailto:Sebastian.Cuy@dainst.de) \| DAINST
- Fabian Riebschläger \| [Fabian.Riebschlaeger@dainst.de](mailto:Fabian.Riebschlaeger@dainst.de) \| DAINST


**Description**

iDAI.field 2 is an Open Source cross-platform tool for the documentation of archaeological field research. It enables researchers to deal with different needs of a variety of disciplines and methods like excavation, survey, architectural or object studies. The core data model can deal with most circumstances and can be adapted as needed, while also trying to maintain standardization where possible.

The very robust synchronization between clients supports distributed work, collaboration and data entry in the field or in places with no internet coverage. Spatial data, images and drawing as well as descriptive data can be stored, managed and interlinked. Type catalogues can be included and linked with findings. While the data is stored in a NoSQL database, the various export and import functionalities allow the integration of other fieldwork software like for example QGIS, iDIG and survey2gis into the toolchain as well as statistics software like R.

In the hands-on Workshop attendees will learn:

* Insights into current state, development and possible benefits of using iDAI.field 2
* The data model and data structure of iDAi.field 2
* How to set up their own project
* How to import data into the client
* To use Type Catalogues 
* Synchronization capabilities
* To work with the various interfaces

Additional information:
* There will be a follow-up session organized approximately 4-5 weeks after the workshop
* Agreement with the video recording of the workshop and its publication through  ArcheoFOSS communication channels will be necessary
* We will provide teaching materials coherent with the workshop-topics covered

**Technical requirements**

What the attendees should prepare:

- Computer with a current version of MacOS/Windows installed (Port 3000 should be free)
- If you are using a distribution of Linux, please contact us in advance (iDAI.field@dainst.de)
- Please download and install iDAI.field (field.dainst.org)
 If there are any issues, please contact iDAI.field@dainst.de

---

## Hands on Extended Matrix: Blender 3D EMtools for virtual reconstruction

{: .text-danger}
**Definitively scheduled for 15<sup>th</sup> of October 2020, 16:00-19:00 CEST**

**Author:** Emanuel Demetrescu \| CNR ISPC

**Description**

Are you interested in virtual reconstruction in archaeology? Would you like to deepen the open-source tools to manage 3D data related to an archaeological excavation (or a monument) and turn it into a reconstructive hypothesis?

Are you a 3D modeler, an archaeologist without modelling skills or simply curious to explore a new field of digital archaeology?
This workshop is what you are looking for.

During the two hours of the workshop, you will install the reference software (Blender 3D and EMtools) and learn the essential commands working on real datasets in order to produce a reconstructive hypothesis. The working method and the software presented fall within the Extended Matrix Framework (http://osiris.itabc.cnr.it/extendedmatrix/).

**Technical requirements**

- OS required: Linux, Windows or Mac
- Hardware: notebooks with at least 4-8 GB RAM, i5 processor and an OpenGL compatible graphic card
- Software to be installed: Blender 3D, EMtools add-ons and yED

---

## Hands on 3D survey collection (3DSC) for Blender: publish an archaeological site in a game engine as an optimized, open world environment.

{: .text-danger}
**Definitively scheduled for 16<sup>th</sup> of October 2020, 16:00-19:00 CEST**

**Author:** Emanuel Demetrescu \| CNR ISPC

**Description**

The 3D survey in Archaeology through Photogrammetric technologies has largely taken hold improving in qualitative and quantitative terms the information available for the graphic description of monumental sites and archaeological excavations. At the same time, the use of photogrammetric surveys for the creation of virtual scenarios within the creative Industries is already widely carried out outside the scientific world of Archaeology. On the contrary, the creation of interactive digital replicas (open worlds), i.e. the transformation of 3D archaeological data into assets ready for video-games, virtual museums and digital libraries, is only in its infancy and requires the development and diffusion of special tools for the management of 3D geographic data, the optimization of 3D databases and the improvement of the quality of geometries and textures. The contribution presents the development activity and functionality of the open source suite of 3D survey Collection (3DSC) tools for Blender 3D. The tool is able to transform huge 3D datasets such as surveys of extensive archaeological excavations into optimized models navigable in real time within Game Engines such as Unreal4, Unity3D, Godot, CryEngine etc.. Through a series of concrete examples will be explained the functionality of the tool for the development of 360 panoramas (panoramic tool), color information correction from the original images of the photographic companion (photogrammetry paint tool), color calibration (color correction tool), import/export of geo-referenced data (importer-exporter tool), geometric optimization of models through the creation of levels of detail levels for realtime (LOD generator - segmentation).

**Technical requirements**

- OS required: Linux, Windows or Mac
- Hardware: notebooks with at least 4-8 GB RAM, i5 processor and an OpenGL compatible graphic card
- Software to be installed: Blender 3D, 3DSC

---

## La documentazione archeologica fra digitalizzazione dei dati e dematerializzazione dei processi: soluzioni e strumenti per l’implementazione del Geoportale Nazionale per l’Archeologia e per l’interoperabilità con il Sistema Generale del Catalogo MiBACT

{: .text-danger}
**Definitively scheduled for 17<sup>th</sup> of October 2020, 16:00-19:00 CEST**

**Authors:** 
- Valeria Acconcia \| [valeria.acconcia@beniculturali.it](mailto:valeria.acconcia@beniculturali.it) \| MiBACT
- Barbara Barbaro \| [barbara.barbaro@beniculturali.it](mailto:barbara.barbaro@beniculturali.it) \| MiBACT
- Valeria Boi \| [valeria.boi@beniculturali.it](mailto:valeria.boi@beniculturali.it) \| MiBACT
- Lucia Ceci \| [l.ceci@idria.it](mailto:l.ceci@idria.it) \| MiBACT
- Annalisa Falcone \| [annalisa.falcone@beniculturali.it](mailto:annalisa.falcone@beniculturali.it) \| MiBACT
- Maria Grazia Fichera \| [mariagrazia.fichera@beniculturali.it](mailto:mariagrazia.fichera@beniculturali.it) \| MiBACT
- Ada Gabucci \| [ada.gabucci@gmail.com](mailto:ada.gabucci@gmail.com) \| MiBACT
- Maria Letizia Mancinelli \| [marialetizia.mancinelli@beniculturali.it](mailto:marialetizia.mancinelli@beniculturali.it) \| MiBACT
- Antonella Negri \| [antonella.negri@beniculturali.it](mailto:antonella.negri@beniculturali.it) \| MiBACT

**Description**

Nell’ambito delle attività istituzionali l’ICA ha avviato la realizzazione del Geoportale Nazionale per l’Archeologia, con l’obiettivo di dare vita a un punto di accesso per la documentazione - spesso inedita – relativa alle indagini di scavo, con particolare riguardo agli interventi svolti nell’ambito dei procedimenti di tutela del MiBACT. Le attività sono state svolte in stretta collaborazione con il Servizio II della Direzione Generale ABAP e con l’ICCD, consentendo di mettere a punto strumenti, alcuni dei quali già pienamente a regime, altri in fase di test e prossimi al rilascio, volti alla standardizzazione della documentazione archeologica e alla sua pubblicazione ad acceso aperto. La proposta di un workshop nasce dalla volontà di garantire ai nuovi strumenti la massima diffusione presso professionisti, società archeologiche e ricercatori coinvolti in prima persona nello svolgimento delle indagini archeologiche e nel riuso dei dati, permettendo un confronto su criticità e possibili ottimizzazioni.

Nel quadro della normalizzazione della documentazione, finalizzata a facilitarne il caricamento e la consultazione sul Geoportale, è stato predisposto un template GIS, pienamente interoperabile con gli standard di catalogo ICCD, che consente di raccogliere dati e documenti strutturati in maniera omogenea sia sul piano della rappresentazione topografica, sia su quello della descrizione degli aspetti storico/archeologici sia, infine, su quello tecnico (formati dei files, metadati).

Il template è stato inizialmente testato, nell’ambito di un progetto pilota che ha coinvolto le Soprintendenze ABAP di Piemonte, Toscana e Puglia, sulle procedure di archeologia preventiva, strutturando un modello derivato dallo standard MODI dell’ICCD, previsto dalle linee guida esistenti in materia (Circolare 1/2016 DGABAP). In seguito all’esito positivo della sperimentazione il modello è stato esteso anche alla documentazione degli altri interventi di scavo (assistenza in corso d’opera e scavi d’emergenza, ricognizioni territoriali, ricerche e studi bibliografici e archivistici), con una versione della quale è stata appena avviata la fase di test.

Altro aspetto centrale delle attività dell’ICA è rappresentato dalla semplificazione del flusso documentale legato allo svolgimento degli scavi in concessione, attraverso una serie di strumenti che hanno inciso su tutte le fasi del procedimento, dalla presentazione dell’istanza fino alla consegna della documentazione di fine scavo. I formati cartacei per la presentazione delle istanze sono stati sostituiti da moduli in formato .pdf editabile per l’istanza e per le dichiarazioni allegate, compilabili direttamente in formato digitale, che hanno inoltre il vantaggio di guidare l’utente in tutti gli step della procedura. Anche la consegna della documentazione è andata incontro a un profondo rinnovamento, con la dettagliata previsione degli elaborati e relativi formati da consegnare alle Soprintendenze e agli Uffici Centrali. 

Il workshop si soffermerà su questi aspetti specifici:
- Utilizzo del template GIS per l’inserimento dei dati delle ricerche archeologiche nel Geoportale, in particolare la versione dedicata alla strutturazione della relazione di valutazione dell’impatto archeologico connessa ai procedimenti di archeologia preventiva, con particolare attenzione agli aspetti topografici e all’interoperabilità con gli standard del catalogo
- Struttura e compilazione del form pdf per le istanze di concessione, 
- Struttura e compilazione del form xls per l’inventariazione dei reperti mobili
- Struttura del dataset per la consegna della documentazione, con particolare attenzione agli elaborati topografici, ai metadati e alle licenze

**Technical requirements**

Software/hardware
- QGIS 3.10.4
- Pacchetto Open Office
- Connessione internet

---

## ATON: an open-source framework for creating liquid 3D web-apps for CH

{: .text-danger}
**Definitively scheduled for 17<sup>th</sup> of October 2020, 16:00-19:00 CEST**

**Author:** Bruno Fanini \| CNR ISPC

**Description**

We witnessed large advancements within presentation and dissemination of interactive Web3D scenes on desktop and mobile browsers using web technologies and recent standards like WebXR. Web browsers are available on virtually all computing devices, thus users can consume Web3D experiences without being forced to install any third-party software, as long as an internet connection or local access point is available. With the rise of web standards combined with faster browsers and better hardware integration, it is now possible to create engaging web-applications targeting the Cultural Heritage field.

ATON is an open-source framework based on node.js to create Web3D apps (presenters, applied games, tools, immersive VR apps, etc…) interacting with CH objects and 3D scenes on the Web. It adopts a “develop once, deploy everywhere” approach, automatically adapting to mobile, desktop PCs, museum kiosks and immersive VR devices.

The framework is already been employed for interactive visualization of 3D terrain datasets in European infrastructures, presentation of 3D museum collections, applied games (3D puzzles) for CH re-contextualization, advanced semantic interrogation, advanced integration with mobile hardware (compass, microphone, etc…) and cross-device collaborative experiences.

ATON-based applications do not require any installation for final users, with its front-end automatically adapting to the user device (mobile, desktop/kiosk or immersive VR). Furthermore the framework offers an easy and scalable deployment ranging from low-cost access points for museums (e.g. single-board PCs) up to large research infrastructures.

Such modular framework offers a simple but powerful API to manipulate scene-graphs, easy customization of event handling for rich interactions and a scalable rendering system with responsive interfaces. Advanced functionalities like complex rendering of 3D objects and virtual environments, camera (POV) management, real-time collaborative features, visual/immersive analytics and integration with complex multimedia content are just a few examples of what can be achieved with this open-source (GPL v3) framework developed by CNR ISPC.
The workshop will focus on the steps to get started with ATON and deploy sample web-applications on local PCs, single-board computers or servers, including real-time collaborative (multi-user) features offered by the framework.

**Technical requirements**

The framework is compatible with all OS (linux, windows, Mac OS). PCs must be equipped with common graphics cards (possibly medium-high range) and web-browsers. The setup phases will require the simple installation of node.js (available on all OS).

---

## From QGIS to QFIELD and vice versa

{: .text-danger}
**Definitively scheduled for 17<sup>th</sup> of October 2020, 16:00-19:00 CEST**

**Authors:** Roberto Montagnetti, Giuseppe Guarino

**Description**

The aim of the workshop is to highlight the main benefits of using the Qfield app. An App which can be installed on an Android device for all archaeologists working in the field.
The main feature of this new application will allow the archaeologist to upload to his/her Smartphone or tablet the .qgis project of the excavation, based on the general information concerning the site that is already available to you. At this point, it is possible to implement the collection of data directly on site, maintaining constant updates to your system, thus allowing you to review the project throughout the excavation process.
The “pocket-GIS” with Qfield is finally a reality!
Working with Qfield in the field, allows us to significantly reduce registration and computerisation time of inputting data into the database system; eliminating all the digitisation of field registers and all related paperwork. The advantage of entrusting all the information to the main GIS platform of the project (master), which is stored inside the PC, means this leaves only the task of checking the collected data, along with the bonus of in-depth topographical and geospatial analysis.
In this proposal we will show a practical example of integrated use of Qgis and Qfield, which relates to an open area excavation.
The intervention methodology proposed in this contrubute has been constructed by the personal experience of the authors, this specifically refers to Open Area Excavation works in Commercial Archaeology projects.

**Technical requirements**

- QGIS 3.10; 3.12; 3.14.0
- QFIELD last release
- Android Device (Tablet or large Smartphone)
