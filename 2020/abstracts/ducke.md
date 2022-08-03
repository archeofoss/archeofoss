---
title: "Developing long-term infrastructure for open archaeology research data: iDAI.world"
description: "Developing long-term infrastructure for open archaeology research data: iDAI.world"
layout: article-slim
geo:
  - 52.46069,13.30065
---


**Benjamin Ducke**

[benjamin.ducke@dainst.de](mailto:benjamin.ducke@dainst.de)

[https://independent.academia.edu/BenjaminDucke](https://independent.academia.edu/BenjaminDucke)

>Benjamin Ducke is based in Berlin, Germany, where he works for the German Archaeological Institute. As Head of Scientific Computing, he supports the design and development of open source software for the DAI’s online research data infrastructure (iDAI.world). He also provides consulting services and IT training  to DAI staff, project partners and international beneficiaries. His main area of technological and scientific expertise is that of spatial data processing and statistics, including geoinformation systems (GIS), spatial data infrastructures (SDI), remote sensing, image-based (SfM/MVS) 3D reconstruction, sensor data processing and archaeological predictive mapping.

This paper discusses the design and current state of development of iDAI.world ([https://idai.world](https://idai.world)), the open research data infrastructure of the German Archaeological Institute (DAI: Deutsches Archäologisches Institut). The ultimate development goal of iDAI.world is to provide a modular, Web-based FAIR implementation with exhaustive support for all main categories of archaeological research data.
A network of many different departments and research units, spread across several continents, the DAI is an archaeological microcosm in itself, reflecting the diversity of the discipline’s practice and research. And iDAI.world, in turn, represents this institution’s paradigmatic shift toward digital research and open data infrastructures. Currently available modules cover the following, principle types of research data:

- iDAI.objects (a.k.a. Arachne): object-centric, well-structured datasets of common research categories (sculptures, buildings, building parts, ...), with strong support for secure and fast image hosting ([https://arachne.dainst.org](https://arachne.dainst.org))
- iDAI.gazetteer: authoritative registry of ancient and modern places, with a hierarchical data model and support for multiple translations/transcriptions of place names ([https://gazetteer.dainst.org](https://gazetteer.dainst.org))
- iDAI.geoserver: geodata repository that supports seamless upload and management of common GIS data products, as well as data styling and thematic map production; based on GeoNode and Java GeoServer as middleware, and thus implementing OGC GIS protocols ([https://geoserver.dainst.org](https://geoserver.dainst.org))
- iDAI.field 2: a field data (excavations, surveys, etc.) client with offline and synchronisation capabilities, with a flexible data schema that can be adjusted and extended to suit specific project needs ([http://field.dainst.org](http://field.dainst.org))

In addition, iDAI.world includes modules for bibliographic research, standardized vocabularies, open access publications and other tools that assist researchers in producing and publishing consistent, interoperable research data.

With its early roots in the traditional server-client architecture of the late 1990s, iDAI.world, through the diversity of its components, reflects the evolution’s  dynamics of two decades of software development: in-house development vs outsourcing, project-focused and top-down vs needs-driven and agile development, have all been complex issues that played a role in shaping this digital infrastructure. Accordingly, many (sometimes expensive) lessons have been learned, regarding the sustainable and long-term development of open source research software.
The biggest obstacles are often not of a purely technological nature, but related to the effects that technological innovations and disruptions have on research traditions, as well as to the sheer complexity of modern software development.

In a research environment where ideas and opinions (“interpretations”), as well as access to primary sources of information (such as excavation licenses) have traditionally been regarded “academic currency”, and where progress and career  paths were long associated with personal merit rather than collaborative  scientific rigor, the ideals of reproducible research and the sheer scope and demands of open science meet considerable inertia.

On the other hand, writing software is easy (children can learn to program), but designing and implementing digital infrastructures that will (hopefully) one day prove at least as useful and lasting as printed publications, is a tremendous undertaking for which no simple “solutions” exist.

Consequently, some of the most valuable lessons learned within the context of iDAI.world will be shared in this paper, touching on technical as well as economic and social complexities.
