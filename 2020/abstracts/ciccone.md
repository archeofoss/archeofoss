---
title: "An open source workflow for processing thermal images acquired by drone"
description: "An open source workflow for processing thermal images acquired by drone"
layout: article-slim
images:
  ../images/2020/abstracts/ciccone-01.jpg|Fig. 1. Schema del workflow open source per l'elaborazione di immagini termiche, 
  ../images/2020/abstracts/ciccone-02.jpg|Fig. 2. Esempio di immagine RGB utilizzata. 
  ../images/2020/abstracts/ciccone-03.jpg|Fig. 3. Esempio di immagine IR utilizzata. 
  ../images/2020/abstracts/ciccone-04.jpg|Fig. 4. Ortofoto in 4 bande (R, G, B, IR).
  ../images/2020/abstracts/ciccone-05.jpg|Fig. 5. Ortofoto nella singola banda IR.
geo:
  - 41.85203
  - 12.62899
---

**Gabriele Ciccone**

[cicconegabriele@gmail.com](mailto:cicconegabriele@gmail.com)

[https://uniroma2.academia.edu/GabrieleCiccone](https://uniroma2.academia.edu/GabrieleCiccone)

>Dottorando del corso di Storia e Scienze filosofico-sociali dell’Università di Roma Tor Vergata e laureato in Archeologia medievale, Gabriele Ciccone si è specializzato in tecnologie applicate conseguendo il Master in Tecnologie Open Source per i Beni Culturali presso il Centro di Geotecnologie dell’università di Siena. Ha partecipato a numerose campagne di scavo e di prospezione geofisica in Toscana, Sicilia e in Messico Ha svolto stage presso il VHLAB-CNR e ha lavorato presso la Noho Ltd. di Dublino, dove si è perfezionato come modellatore 3D per la fruizione e valorizzazione dei beni culturali. Socio dell’associazione Una Quantum Inc, è docente per i corsi di Modellazione 3D per i BB.CC. con Blender.

Nell’ambito del progetto di dottorato “Flying off-site: nuove metodologie di indagine per l’analisi dei paesaggi storici” (XXXV ciclo, Dottorato in Storia e Scienze filosofiche-sociali, Università Tor Vergata), parte della ricerca è stata dedicata all’individuazione di un workflow efficiente per l’elaborazione di rilievi 3D e ortofoto ricavati dai sensori termici. 
Nella prima fase sono state programmate riprese termiche della stessa area con voli effettuati in diversi momenti della giornata, al fine di valutare le variazioni termiche dovute ai differenti orari di ripresa. In questa fase, a causa della bassa risoluzione delle immagini termiche, sono stati effettuati voli aventi strisciate sovrapposte con un overlap di 90% tra gli scatti, lateralmente e longitudinalmente. La seconda fase, dedicata all’elaborazione delle immagini, è stata svolta con differenti software sia proprietari che open source, al fine di valutarne le potenzialità in termini di precisione del dato e di velocità dell’elaborazione: è apparso subito evidente come l’orario di ripresa determinasse la buona riuscita o meno della fase di allineamento delle immagini, in tutti i software fotogrammetrici proprietari e open source testati. 

Le elaborazioni hanno evidenziato una situazione differente tra i set di immagini scattate in condizioni di buona luminosità, rispetto ai set ricavati dalle riprese effettuate dopo il tramonto e prima dell’alba. Se nel primo caso, infatti, tutti i software hanno correttamente individuato i punti in comune tra le immagini in fase di allineamento, riuscendo ad elaborare sia le ricostruzioni 3D che le successive ortofoto, nel secondo la scarsa luminosità delle immagini non ne ha permesso un corretto allineamento, impedendo l’avanzamento delle elaborazioni con tutti i software proprietari e open source testati.

In linea con la letteratura scientifica in materia di fotografia termica al di fuori del mondo archeologico, è stato elaborato un workflow che permettesse di unire le immagini RGB e IR (termiche), in formato JPG, in singole immagini in quattro bande ( R, G, B, IR) in formato TIFF, al fine di riuscire ad elaborare le immagini TIFF con i software di fotogrammetria per la ricostruzione del rilievo 3D e la successiva elaborazione dell’ortofoto, da cui infine estrarre la banda relativa all’immagine termica. Inizialmente, con gli esempi ricavati da altri ambiti di applicazione delle immagini termiche, il workflow è stato elaborato facendo ricorso a software proprietari: è stato utilizzato Matlab (software chiuso ma distribuito gratuitamente per la ricerca universitaria) per le fasi di conversione in grayscale e ridimensionamento delle immagini IR (da 640x480 a 3840x2880), per il taglio delle immagini RGB (da 4056x3040 a 3840x2880), e infine per l’unione nelle singole immagini TIFF a 4 bande; in seguito le immagini sono state processate con Metashape, dalla ricostruzione 3D fino all’estrazione della singola ortofoto termica. Raggiunto l’obiettivo, il passaggio successivo è consistito nell’elaborare un medesimo processo di lavoro adoperando soltanto software open source, sia per valutare un’effettiva possibilità di workflow esclusivamente open, che per verificare pregi e difetti rispetto ai software proprietari. Sono stati testati differenti software sostitutivi di Matlab (GNU Octave, Scilab, SageMath, R) arrivando infine a preferire Octave in quanto il più simile a livello di sintassi; ciò ha permesso di non dover rielaborare né stravolgere le funzioni già utilizzate per Matlab. Successivamente è stato sperimentato il software OpenDroneMap (attraverso l’interfaccia WebODM), sia tramite i nodi di calcolo interni che con quelli di MicMac, per arrivare all’elaborazione dell’ortofoto. Tuttavia, per l’estrazione dell’ortofoto IR, non essendoci tale funzione in ODM, sono state testate differenti possibilità, tra le quali le migliori sono risultate essere QGis o il freeware Multispec.
