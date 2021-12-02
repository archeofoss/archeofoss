---
title: "Leastcostpath: Modelling Pathways and Movement Potential Within a Landscape"
description: "Leastcostpath: Modelling Pathways and Movement Potential Within a Landscape"
layout: article-slim
images:
  ../images/2020/abstracts/lewis-01.jpg|Fig. 1. Leastcostpath logo
geo:
  - 52.20426
  - 0.1149 
---

**Joseph Lewis**

[josephlewis1992@gmail.com](mailto:josephlewis1992@gmail.com)

[https://josephlewis.github.io/](https://josephlewis.github.io/)

> Joseph Lewis, University of Cambridge PhD, is an Archaeology  student interested in the Application of GIS to Archaeological Mobility and Settlement Patterns with a focus on spatial uncertainty.

The movement of past peoples in the landscape has been studied extensively through the use of Geographic Information Systems (GIS) and Least Cost Path (LCP) analysis (Batten, 2007; Bell and Lock, 2000; Fiz and Orengo, 2008; Güimil-Fariña and Parcero-Oubiña, 2015; Howey, 2007; Kantner and Hobgood, 2003; Siart et al., 2008; Supernant, 2017; van Lanen et al., 2015; Verhagen et al., 2014; Verhagen and Jeneson, 2012). By using terrain in conjunction with other factors that may have influenced movement through a landscape, LCP models have been used to: identify long-distance routes (e.g. Batten, 2007; Palmisano, 2017); understand road networks (e.g. Bell et al., 2002; Fábrega Álvarez and Parcero Oubiña, 2007; Murrieta-Flores, 2012); and assess factors that were taken into account during route construction (e.g. (Bell and Lock, 2000; Fonte et al., 2017; Kantner and Hobgood, 2003; Verhagen and Jeneson, 2012). 

Despite developments in the application of using Least Cost Path analysis to answer archaeological questions (e.g. Llobera, 2015; Verhagen, 2013; White and Barber, 2012), the implementation of these methods remains largely inaccessible, requiring individuals to develop their own solutions. Furthermore, although the methodological issues of using Least Cost Path analysis have been documented (e.g. Herzog, 2010; Herzog, 2011; Herzog, 2013; Herzog, 2014), little has been done to provide open source solutions that incorporate these findings and make them accessible to users.

The R package leastcostpath¸ developed by the author, is open sourced software for the calculation of Least Cost Paths and their derivatives, as well as providing functionality to calculate slope-based cost surfaces that incorporate cost functions such as the popular Tobler’s Hiking Function. Furthermore, leastcostpath allows for the incorporation of other cost surfaces such as the attraction of features in the landscape, barriers to movement, and movement potential within the landscape. Lastly, the R package leverages the iterative nature of Least Cost Path analysis by separating each step of the cost surface process into separate functions with easily changeable parameters.
