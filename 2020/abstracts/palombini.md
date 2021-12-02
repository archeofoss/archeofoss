---
title: "The virtual countryman. A GRASS-GIS tool for ancient cultivation identification"
description: "The virtual countryman. A GRASS-GIS tool for ancient cultivation identification"
layout: article-slim
images:
  ../images/2020/abstracts/palombini-01.jpg|Fig. 1. User interface of the predictive tool (r.countryman)
geo:
  - 41.90072
  - 12.51251
---

**Augusto Palombini**

[augusto.palombini@cnr.it](mailto:augusto.palombini@cnr.it)

[https://www.linkedin.com/in/augusto-palombini-50b1216/](https://www.linkedin.com/in/augusto-palombini-50b1216/)

> Augusto Palombini, archaeologist, researcher at the Institute of Cultural Heritage Science of the Italian National Research Council, worked in archaeological missions in Italy and Africa. Author of scientific and dissemination works, as well as 3 historical novels. Founding member of the Italian Archaeologists Confederation. His research activity is currently focu sed on landscape archaeology, virtual museums, digital storytelling, computer science and multimedia solutions applied to Cultural Heritage and topographic surveying, particularly dealing with open source software (member of the Italian Scientific Committee on Free and Open Source Software in Archaeology).

As a relevant methodology literature has spread on 3D modeling of ancient buildings and monuments, it has not been the same about the reconstruction of landscape, intended as the whole vegetation cover and the geomorphology, both natural and anthropic (cultivated land).

The author works in a research group which proposed ways to check and reconstruct relevance and distribution of ecosystems, particularly dealing with cultivated areas in relation to demographic data. Such activity was primarily conceived to perform 3D landscape models leaving from GIS maps, through commercial soft ware (Visual Nature Studio, Vue+3dStudio Max, etc.).

Nowadays, the aim is to propose a complete pipeline, to obtain, from digital cartography and anthropic indexes related to social complexity, ecosystems and cultivated areas, creating maps to be used by modeling software to create 3D  representation of landscape: a complete open source working chain script-connected through GRASS GIS, Blender 3D, Unreal Engine and the web viewer ATON, as to create a landscape generator covering the whole path from ecosystem theory up to immersive visualization. 

Here, an early piece of such a chain  is presented: a GRASS_GIS script aimed at semi-automatic  predictive detection of cultivated areas. 

Taking into account the digital elevation map (DEM), and its derivative  features as slope, aspect, solar exposure, the tool creates an ideal cultivation cover map, also influenced by settlements, pathways, water streams , and giving all these aspects a relative weight in relation to social complexity (for instance, a higher weight of paths for statal organized systems and a weaker one for prehistoric ones, closer to the site-catchment  model). The tool has been tested, with interesting results, against maps of known archaeological situations.
