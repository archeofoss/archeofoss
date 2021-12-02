---
title: "3D Survey Collection, un software per la produzione di repliche digitali. Il caso studio del foro romano di Nora (Sardegna, CA)"
description: "3D Survey Collection, un software per la produzione di repliche digitali. Il caso studio del foro romano di Nora (Sardegna, CA)"
layout: article-slim

geo:
  - 45.40676
  - 11.87744
---
**Simone Berto**

[simone.berto.1@phd.unipd.it](mailto:simone.berto.1@phd.unipd.it)

Simone Berto è dottorando presso il Dipartimento di Beni Culturali: archeologia, storia dell’arte, del cinema e della musica dell’Università degli Studi di Padova. I suoi interessi di ricerca riguardano il rilievo archeologico da campo, il survey fotogrammetrico (a grande e piccola scala), la modellazione 3D per i Beni Culturali e il Museo Virtuale. Nelle missioni archeologiche condotte da parte dell’Università di Padova presso il sito del teatro romano di Aquileia (UD) e il sito di Nora (CA) è coinvolto come specialista del rilievo.

**Emanuel Demetrescu**

[emanuel.demetrescu@cnr.it](mailto:emanuel.demetrescu@cnr.it)

> Emanuel Demetrescu, PhD, è ricercatore presso l’Istituto di Scienze del Patrimonio - Consiglio Nazionale delle Ricerche. È sviluppatore python, pilota UAV, specialista in Archeologia Digitale, Archeologia delle Costruzioni, modellazione 3D source-based (ricostruzioni virtuali) e reality-based (creazione di repliche digitali). Le sue principali ricerche riguardano la creazione di collegamenti teorici e metodologici tra la documentazione scientifica nei Beni Culturali e le industrie creative (librerie digitali 3D, musei virtuali, giochi Open World ed esperienze di VR).

L’integrazione del tradizionale rilievo archeologico da campo con la fotogrammetria è un approccio metodologico che, in generale nell’ambito dei Beni Culturali, si è andato via via consolidando soprattutto nell’ultimo decennio. In questo periodo, il continuo e crescente sviluppo tecnologico, la disponibilità di nuove soluzioni software per la fotogrammetria e l’incremento delle performance degli strumenti dedicati all’acquisizione e l’analisi dei dati hanno senza dubbio contribuito alla diffusione di questo approccio combinato. Tuttavia, nonostante l’estrema potenzialità informativa derivata dall’integrazione di questi dati, la scelta dell’ambiente di lavoro all’interno del quale gestire queste informazioni appare ancora al giorno d’oggi una questione aperta, spesso direttamente connessa allo scopo del progetto in cui il dato fotogrammetrico viene impiegato.

In questo contributo si vuole descrivere la metodologia applicata all’interno del software open-source Blender al fine di gestire un intero dataset fotogrammetrico, relativo ad un areale di circa 3000 mq, utilizzato come reference principale per la ricostruzione 3D del complesso forense di epoca romana del sito di Nora (Sardegna, CA).

Tramite una serie di tool utili all’importazione, la georeferenziazione, la gestione, l’editing, la visualizzazione in multirisoluzione e l’esportazione di un rilievo fotogrammetrico, l’addon 3D Survey Collection (3DSC) ha agevolato l’interazione con l’intera mesh fotogrammetrica del foro. La gestione di tale geometria tramite 3DSC ha permesso di pianificare, prima, e realizzare, poi, la ricostruzione dell’intero complesso architettonico rimanendo all’interno dello stesso ambiente di lavoro. Questo specifico addon è stato sviluppato all’interno del Virtual Heritage Lab del CNR ISPC di Roma proprio con l’intento di limitare la segmentazione su più piattaforme software del flusso di lavoro delle ricostruzioni 3D Reality Based, ossia quel metodo ricostruttivo che assume il rilievo tridimensionale come dato di partenza da cui avviare il processo di ricostruzione. L’applicazione di questo approccio metodologico, unito all’uso dell’applicativo 3DSC all’interno di Blender, ha permesso di controllare ogni step del percorso ricostruttivo del foro romano di Nora garantendo un confronto continuo tra il modello tridimensionale e il rilievo fotogrammetrico. L’attuale release di 3DSC è una versione massicciamente riscritta e con nuovi moduli previsti, che la rendono una novità sostanziale a livello software e di workflow rispetto a quella presentata in occasione di ArcheoFOSS 2019.
