---
title: "Human response to Late Holocene climate change in Northern Italy: integration of geomorphological and archaeological data through a FLOS-based workflow"
description: "Human response to Late Holocene climate change in Northern Italy: integration of geomorphological and archaeological data through a FLOS-based workflow"
layout: article-slim
images:
  - ../images/2020/abstracts/brandolini-01.jpg|Fig. 1. Project FLOS-based workflow.
  - ../images/2020/abstracts/brandolini-02.jpg|Fig. 2. The three covariates employed in the PPA. From the left MTI, SOIL, VAE.
  - ../images/2020/abstracts/brandolini-03.jpg|Fig. 3. Spatial distribution of the Roman Point Pattern (white dots) and the Medieval Point Pattern (black dots) within the study area (bounded region).
  - ../images/2020/abstracts/brandolini-04.jpg|Fig. 4. Homogeneous and inhomogeneous cross-K function measurements.
geo:
  - 54.97918,-1.61466
---


**Filippo Brandolini**

[fibrandolini@gmail.com](mailto:fibrandolini@gmail.com)

[https://www.researchgate.net/profile/Filippo_Brandolini](https://www.researchgate.net/profile/Filippo_Brandolini)

> Filippo Brandolini has a PhD in Environmental Sciences and he is a Marie Curie Fellow H2020-MSCA-IF-2019. Brandolini does research in landscape archaeology, geospatial analysis and fluvial geomorphology. Dr. Brandolini’s PhD was focused on interdisciplinary approaches in landscape studies, combining geosciences and archaeological sources with FOSS GIS software products.

**Francesco Carrer**
[francesco.carrer@ncl.ac.uk](mailto:francesco.carrer@ncl.ac.uk)

[https://www.researchgate.net/profile/Francesco_Carrer](https://www.researchgate.net/profile/Francesco_Carrer)

>Francesco Carrer’s main  research interests are in landscape archaeology and ethnoarchaeology, mountain archaeology, spatial analysis and computer modelling. Dr. Carrer is specifically interested in seasonal pastoralism, from an ethnographic and an archaeological perspective, and in the development of GIS applications for analysing long-term socio-ecological dynamics.

The transition from Roman into Medieval Period represented a crucial moment for the reorganisation of human settlement strategies in the Po Valley, mainly due to climatic changes and socio-political factors. Following a FLOS-based interdisciplinary approach, this research combines geopedological data and archaeological sources to assess the role of alluvial geomorphology for Late-Holocene settlement strategies (fig. 1).
In this research three different FOSS applications have been employed: QGIS, GRASS GIS and R through Rstudio. Point Pattern Analysis (PPA) (Bevan et al. 2013) was employed to provide a solid statistical assessment of human interaction with alluvial environments. Variability in Roman and Medieval settlement patterns is analysed against two related proxies for alluvial geomorphology and agricultural suitability: flood hazard and soil texture. Continuity between Roman and Medieval sites, which might have influenced the average relationship of the latter with the two environmental variables, has also been quantitatively assessed through Inhomogeneous cross-K function.

This study investigates how alluvial geomorphology and agricultural suitability influenced settlement patterns in the Roman and Medieval period, and whether pre-existing Roman occupation attracted Medieval sites. The easiest way to address the former was by assessing whether a selected inhomogeneous model described the spatial variability of a point process more accurately than a stationary model. Two “environmental” spatial covariates were produced for this purpose, MTI and SOIL. The third covariate, the distance from via Aemilia (VAE), served as a“socio-cultural” covariate (Fig. 2).

Point Pattern Analysis (PPA) for Roman and Medieval sites were performed in R using the package ‘spatstat’ (Baddeley, Rubak, and Turner 2015) and GRASS maps were managed through ‘rgrass7’(Fig. 3). PPA suggests that Roman site distribution in the area has no correlation with flood hazard (MTI), but shows a weak inverse correlation with soil texture (SOIL). An inverse correlation with MTI and a direct correlation with Soil have been identified for Medieval sites. This suggests that different land-use techniques enabled the Romans to exploit large areas of flood-prone areas successfully. On the other hand, alluvial geomorphology highly influenced settlement strategies during the Early Medieval period (Brandolini and Carrer 2020). 

To assess the independence of the two-point processes (Medieval and Roman settlement patterns), second-order properties were investigated using the inhomogeneous cross-K function that was calculated from the sites, as well as for 999 Monte-Carlo simulated bivariate point patterns. The Cross-K function highlighted significant proximity of Medieval sites to Roman sites for short distances, up to 1.2 Km (Fig. 4). This implies that even considering the different responses to alluvial geomorphological conditions in Roman and Medieval times, within a 1.2 Km radius, the Medieval sites are closer to Roman sites than expected.

To conclude, this project represents a useful example of how the integration of FLOS tools is extremely effective and enables a wide range of applications to investigate past landscape dynamics on different scales.
