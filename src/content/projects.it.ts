import type { ProjectEntry, ProjectSlug } from "@/content/projects";

type ProjectTranslator = (project: ProjectEntry) => ProjectEntry;

const italianProjectTranslators: Partial<Record<ProjectSlug, ProjectTranslator>> = {
  chocolate: (project) => ({
    ...project,
    tagline: "Brand e-commerce premium con un flusso completo di acquisto e gestione amministrativa.",
    summary:
      "Una vetrina full stack dedicata al cioccolato, realizzata come prodotto di brand curato anziché come negozio generico. Comprende esplorazione del catalogo, preferiti, carrello, checkout, gestione dei pagamenti, operazioni amministrative e flussi e-mail successivi all’acquisto.",
    role: "Sviluppo full stack e identità visiva del prodotto",
    hook:
      "Un caso di studio e-commerce in cui identità del brand, percorso del cliente e operazioni backend hanno la stessa importanza.",
    strengths: [
      "L’identità di brand più riconoscibile del portfolio",
      "Un vero flusso commerciale che va oltre le operazioni CRUD",
      "Gestione amministrativa di prodotti, inventario e ordini",
      "Integrazione di Stripe e delle e-mail transazionali"
    ],
    challenge:
      "Realizzare un’esperienza e-commerce premium dall’inizio alla fine, supportando al tempo stesso flussi operativi reali come controllo delle scorte, aggiornamento dello stato degli ordini, eventi di pagamento e manutenzione amministrativa.",
    solution:
      "Il frontend utilizza layout editoriali, percorsi mirati per la scoperta dei prodotti e un sistema visivo coerente con il brand, mentre il backend gestisce autenticazione, ordini, unione dei carrelli, intenti di pagamento, webhook e API amministrative. Un intervento mirato sulla distribuzione sostituisce inoltre i riferimenti non funzionanti alle immagini iniziali con alternative specifiche per categoria e contenuti multimediali compressi.",
    outcome:
      "Il risultato è il caso di studio principale del portfolio: un prodotto che unisce cura visiva, profondità della logica aziendale e una narrazione chiara da presentare durante un colloquio sullo sviluppo di un sistema e-commerce completo.",
    features: [
      "Esplorazione del catalogo tra negozio, offerte, regali, ricerca e preferiti",
      "Carrello per ospiti e utenti autenticati con unione dopo l’accesso",
      "Percorso di checkout e conferma dell’ordine",
      "Strumenti amministrativi per prodotti, inventario e ordini",
      "Notifiche e-mail al cliente e all’amministratore dopo il pagamento"
    ],
    architecture: [
      "Domini API REST per autenticazione, prodotti, carrello, ordini, pagamenti e amministrazione",
      "Creazione degli ordini basata su MySQL, con controllo delle scorte e procedure di rollback",
      "Autenticazione JWT con rotte protette e riservate agli amministratori",
      "Gli URL dimostrativi non funzionanti vengono associati a immagini locali compresse e specifiche per categoria, mentre gli URL personalizzati validi restano invariati",
      "La struttura del backend copre i flussi necessari per checkout, gestione degli ordini e operazioni amministrative"
    ],
    metrics: [
      { label: "Rotte frontend", value: "20+" },
      { label: "Aree amministrative", value: "3" },
      { label: "Contenuti dei prodotti", value: "93,9% più leggeri" }
    ],
    impactBullets: [
      "Mostra la differenza tra una vetrina curata e un vero sistema di acquisto.",
      "Dimostra decisioni UI guidate dal brand senza rinunciare al rigore del backend.",
      "Riduce i contenuti multimediali delle categorie da 76,09 MB a 4,62 MB e ripristina le immagini dei prodotti iniziali.",
      "Crea una narrazione chiara per il colloquio su autenticazione, pagamenti, inventario e strumenti amministrativi."
    ],
    interviewAngles: [
      "Come il prodotto mantiene un’identità visiva premium coerente tra catalogo, carrello, checkout e aree amministrative.",
      "Perché l’unione del carrello ospite, la convalida delle scorte e il rollback sono importanti in un vero software e-commerce.",
      "Come un progetto da portfolio diventa più solido quando include pagamenti e operazioni successive all’acquisto, non soltanto l’interfaccia del negozio."
    ],
    repositories: project.repositories?.map((repository, index) => ({
      ...repository,
      label: index === 0 ? "Repository frontend" : "Repository backend"
    })),
    repositoryRoots: project.repositoryRoots?.map((root) => ({
      ...root,
      label: root.label
    })),
    workflowHighlights: [
      {
        title: "Percorso di acquisto completo",
        text: "Il prodotto va oltre una semplice vetrina e comprende scoperta, ricerca, preferiti, carrello, checkout, pagamento, conferma, account e flussi amministrativi.",
        items: [
          "Percorsi editoriali nel catalogo attraverso Shop, Offers, Gifts, Search, Favourites e contenuti in evidenza nella homepage",
          "Pagine di dettaglio con prezzi, gestione degli sconti, galleria e immagini al passaggio del mouse, aggiunta al carrello e presentazione delle recensioni",
          "Checkout con informazioni di consegna, scelta del metodo di spedizione, riepilogo dell’ordine e conferma"
        ]
      },
      {
        title: "Logica di carrello, checkout e ordini",
        text: "Il comportamento e-commerce include i dettagli che ci si aspetta da un’applicazione reale, non soltanto da una demo dell’interfaccia.",
        items: [
          "I carrelli ospite usano identificativi di sessione, quelli autenticati usano identificativi utente e gli articoli scelti vengono mantenuti tramite l’unione dopo l’accesso",
          "La creazione dell’ordine esegue controllo delle scorte, calcolo di subtotale e spedizione, riduzione dell’inventario, svuotamento del carrello e rollback in caso di errore",
          "Gli intenti di pagamento Stripe e la gestione dei webhook aggiornano gli ordini allo stato pagato"
        ]
      },
      {
        title: "Operazioni successive al pagamento",
        text: "Il sistema comprende flussi amministrativi e successivi al pagamento che rafforzano il caso di studio durante i colloqui tecnici.",
        items: [
          "Le e-mail di conferma al cliente e le notifiche all’amministratore o al negozio vengono inviate con Nodemailer",
          "I modelli e-mail HTML coordinati con il brand includono il logo centrato nel messaggio destinato al cliente",
          "Le schermate amministrative consentono creazione e modifica dei prodotti, aggiornamento dell’inventario, elenco degli ordini e modifica del loro stato"
        ]
      }
    ],
    qualitySignals: [
      {
        title: "Copertura dei test backend",
        text: "Il backend comprende test di servizi, controller, middleware, integrazione delle rotte e test di integrazione facoltativi collegati a un database reale.",
        items: [
          "Vitest e Supertest coprono il comportamento a livello di unità e di rotte",
          "Copertura attuale del codice sorgente backend: 80,72% di istruzioni e righe, 86,32% di funzioni",
          "Gli script di test includono copertura, integrazione con il database, copertura complessiva e verifiche sul codice modificato"
        ]
      },
      {
        title: "Soglie di qualità e integrazione continua",
        text: "Il controllo della copertura viene trattato come una funzionalità del progetto, non come un’aggiunta successiva.",
        items: [
          "L’obiettivo di copertura complessiva del codice backend è dell’80%",
          "L’obiettivo di copertura del codice backend nuovo o modificato è del 90%",
          "GitHub Actions applica test backend, generazione della copertura e soglie sul codice modificato nelle pull request"
        ]
      },
      {
        title: "Prestazioni della vetrina",
        text: "Il catalogo live comprende un intervento mirato sulla distribuzione delle immagini dei prodotti memorizzate nel database.",
        items: [
          "Trenta immagini di categoria sono state ridimensionate e compresse da 76,09 MB a 4,62 MB, con una riduzione del 93,9%",
          "I riferimenti dimostrativi non funzionanti di Cloudinary usano immagini locali coerenti con la categoria senza richiedere una migrazione del database",
          "Le immagini di catalogo, dettaglio, carrello e pannello del carrello usano caricamento differito, decodifica asincrona e indicazioni di priorità"
        ]
      }
    ],
    media: project.media.map((asset, index) => ({
      ...asset,
      alt: `Schermata ${index + 1} di Chocolate Craft House`
    })),
    links: project.links.map((link) => ({
      ...link,
      label:
        link.kind === "live"
          ? "Apri l’applicazione web"
          : link.kind === "case-study"
            ? "Caso di studio"
            : link.label
    }))
  }),
  petnest: (project) => ({
    ...project,
    tagline: "Piattaforma per le adozioni dedicata agli animali salvati, con moderazione, dashboard e flussi di richiesta.",
    summary:
      "Una piattaforma full stack per l’adozione di animali, con frontend React in TypeScript e backend Express in TypeScript. Gestisce navigazione pubblica, autenticazione, creazione degli annunci, preferiti, ricerche salvate, richieste di adozione, dati analitici e moderazione amministrativa.",
    role: "Sviluppo full stack con TypeScript e Prisma",
    hook:
      "Una piattaforma per le adozioni incentrata sulla fiducia, che bilancia la scoperta pubblica con la moderazione operativa.",
    strengths: [
      "La struttura di dashboard più ricca dal punto di vista operativo",
      "Separazione tipizzata tra frontend e backend",
      "Moderazione amministrativa e segnalazioni degli utenti",
      "Flussi realistici di adozione e comunicazione"
    ],
    challenge:
      "Progettare un prodotto che supporti sia la scoperta pubblica sia le operazioni affidabili delle associazioni, mantenendo l’esperienza comprensibile per utenti comuni e amministratori.",
    solution:
      "L’applicazione separa la navigazione pubblica dai flussi autenticati della dashboard, introduce controlli di moderazione per gli annunci e aggiunge strumenti di supporto come dati analitici, ricerche salvate e monitoraggio delle richieste. Le query pubbliche del catalogo rimangono aggiornate per cinque minuti, mentre i contenuti degli annunci usano la distribuzione ottimizzata di Cloudinary e immagini iniziali compresse.",
    outcome:
      "PetNest completa il portfolio come l’applicazione TypeScript più articolata a livello di sistema, dimostrando flussi di moderazione, API tipizzate e profondità di prodotto al di fuori dell’e-commerce e della formazione.",
    features: [
      "Esplorazione e filtraggio degli animali con pagine di dettaglio dedicate",
      "Dashboard autenticata per annunci, preferiti, ricerche e richieste",
      "Creazione e modifica degli annunci da parte degli operatori",
      "Dashboard amministrative per annunci in attesa, segnalazioni e utenti",
      "Backend basato su Prisma con dati iniziali e flussi per le immagini"
    ],
    architecture: [
      "Frontend e backend in TypeScript suddivisi in applicazioni dedicate",
      "Generazione del client Prisma, migrazioni e script per i dati iniziali dalla cartella principale del workspace",
      "Ramificazioni di rotte protette per aree utente e amministrative",
      "Le trasformazioni Cloudinary e i contenuti iniziali compressi riducono il peso delle schede e delle gallerie senza modificare lo schema del database",
      "Flusso di caricamento delle immagini predisposto per contenuti gestiti tramite Cloudinary"
    ],
    metrics: [
      { label: "Rotte della dashboard", value: "9" },
      { label: "Aree amministrative", value: "4" },
      { label: "Linguaggio del backend", value: "TypeScript" },
      { label: "Contenuti della demo", value: "94% più leggeri" }
    ],
    impactBullets: [
      "Mostra come un’applicazione da portfolio possa rappresentare fiducia, moderazione e flussi utente complessi.",
      "Rafforza la credibilità nell’uso di TypeScript sia nel frontend sia nel backend.",
      "Riduce i contenuti iniziali da circa 18 MB a 1,1 MB ed evita richieste ripetute al catalogo pubblico durante la navigazione.",
      "Dimostra un’esperienza operativa articolata che va oltre le pagine pubbliche di presentazione."
    ],
    interviewAngles: [
      "Come la moderazione modifica sia il modello backend sia l’esperienza della dashboard in una piattaforma basata sulla fiducia.",
      "Perché moduli tipizzati, convalida e rotte della dashboard sono più importanti nei prodotti operativi che nelle semplici applicazioni vetrina.",
      "Come cambiano le decisioni di distribuzione quando sono coinvolti caricamenti, Prisma e dati dimostrativi iniziali."
    ],
    repositories: project.repositories?.map((repository, index) => ({
      ...repository,
      label: index === 0 ? "Repository frontend" : "Repository backend"
    })),
    repositoryRoots: project.repositoryRoots?.map((root) => ({
      ...root,
      label: root.label
    })),
    workflowIntro: {
      eyebrow: "Flusso di adozione",
      title: "Sistema di marketplace incentrato sulla fiducia",
      text: "PetNest si distingue come prodotto multiruolo, nel quale adottanti, operatori e amministratori hanno responsabilità differenti."
    },
    workflowHighlights: [
      {
        title: "Scoperta pubblica e adozione",
        text: "L’esperienza pubblica supporta navigazione, filtri, consultazione dei dettagli e richieste di adozione private senza esporre i dati di contatto sensibili del responsabile.",
        items: [
          "La navigazione degli annunci pubblicati supporta categoria, località, ricerca, ordinamento, paginazione e dimensione configurabile della pagina",
          "Le pagine del singolo animale includono galleria, metadati, indicatori di compatibilità, storia del recupero, note sanitarie, informazioni sull’operatore, condivisione e flusso di richiesta",
          "I campi di contatto privati vengono esclusi dalle risposte pubbliche, mantenendo l’interesse per l’adozione all’interno della piattaforma"
        ]
      },
      {
        title: "Flussi della dashboard per gli operatori",
        text: "Gli utenti autenticati possono gestire l’intenzione di adozione e le operazioni sugli annunci da una vera area personale.",
        items: [
          "Gli utenti possono creare annunci con dati strutturati su animale, salute, località, compatibilità, storia del recupero e contatti",
          "I preferiti usano memorizzazione relazionale, protezione dai duplicati, aggiornamenti ottimistici dell’interfaccia, rollback sicuro e viste degli animali salvati",
          "Ricerche salvate, richieste ricevute e inviate, impostazioni del profilo, annunci personali e dati analitici offrono valore agli operatori"
        ]
      },
      {
        title: "Fiducia e sicurezza amministrativa",
        text: "La piattaforma comprende flussi di moderazione e gestione che la rendono più simile a un software di produzione che a una demo CRUD.",
        items: [
          "Gli annunci attraversano gli stati bozza, in attesa di approvazione, approvato e pubblicato, rifiutato, adottato e archiviato",
          "Gli amministratori possono approvare o rifiutare gli annunci in attesa, esaminare le segnalazioni, consultare le statistiche della piattaforma e aggiornare lo stato degli utenti",
          "Le segnalazioni supportano gli stati aperta, risolta e archiviata, con tracciamento dell’amministratore che ha eseguito la revisione"
        ]
      }
    ],
    apiIntro: {
      eyebrow: "Struttura del backend",
      title: "Domini API della piattaforma di adozione",
      text: "L’API Express separa navigazione pubblica, flussi autenticati dell’account, moderazione, contenuti multimediali e operazioni amministrative."
    },
    qualityIntro: {
      eyebrow: "Decisioni tecniche",
      title: "Architettura tipizzata, sicurezza e modello dei dati",
      text: "La struttura tecnica è costruita attorno a sicurezza dei tipi, separazione dei ruoli, dati normalizzati, sessioni sicure e regole aziendali verificate."
    },
    qualitySignals: [
      {
        title: "Architettura frontend",
        text: "Il client React in TypeScript è organizzato in pagine pubbliche, dashboard protette, pagine amministrative, componenti riutilizzabili e funzioni di supporto.",
        items: [
          "TanStack Query gestisce lo stato del server per annunci, preferiti, dashboard, richieste e aree amministrative",
          "React Hook Form e Zod supportano la convalida tipizzata dei moduli per autenticazione, profilo, annunci e richieste",
          "I componenti riutilizzabili includono PetCard, FavoriteButton, ProtectedRoute, QueryStateNotice, StatusBadge, SocialLinks, NavBar e Footer"
        ]
      },
      {
        title: "Prestazioni dei contenuti e del catalogo",
        text: "Un intervento mirato sulla distribuzione riduce il peso delle schede, delle gallerie e delle letture pubbliche ripetute.",
        items: [
          "Otto immagini iniziali sono state compresse da circa 18 MB a 1,1 MB, con una riduzione approssimativa del 94%",
          "Le immagini Cloudinary degli annunci usano URL di distribuzione con formato, qualità e larghezza specifica automatici",
          "Le query pubbliche di homepage, esplorazione, categoria e dettaglio rimangono aggiornate per cinque minuti per evitare chiamate ripetute al database durante la navigazione"
        ]
      },
      {
        title: "Architettura backend",
        text: "Il backend Express in TypeScript usa confini modulari tra i domini e Prisma come livello di accesso ai dati.",
        items: [
          "I moduli di dominio includono autenticazione, utenti, categorie, animali, richieste di adozione, preferiti, ricerche salvate, segnalazioni e amministrazione",
          "I middleware condivisi gestiscono autenticazione, convalida, errori centralizzati, limitazione delle richieste, caricamenti e applicazione dei ruoli",
          "La memorizzazione delle immagini è astratta per supportare Cloudinary, con un’alternativa locale durante lo sviluppo"
        ]
      },
      {
        title: "Sicurezza e integrità dei dati",
        text: "Il sistema modella gli aspetti di una piattaforma basata sulla fiducia che causerebbero problemi reali se gestiti superficialmente.",
        items: [
          "I token di accesso JWT sono associati a cookie di aggiornamento HTTP-only, token di aggiornamento sottoposti a hash, revoca al logout e valori jti univoci",
          "I modelli Prisma normalizzano utenti, token di verifica e aggiornamento, categorie, annunci, immagini, preferiti, ricerche, segnalazioni, richieste e registri di controllo",
          "Indici e vincoli supportano schemi di accesso comuni, prevenzione dei preferiti duplicati, visibilità degli annunci, confini di proprietà e code di moderazione"
        ]
      },
      {
        title: "Obiettivo dei test",
        text: "I test si concentrano sulle regole aziendali e sui comportamenti sensibili alla sicurezza, anziché su controlli superficiali delle pagine.",
        items: [
          "I test backend coprono middleware di autenticazione, comportamento dei token, preferiti, visibilità degli annunci, moderazione, segnalazioni, ricerche salvate, richieste, immagini, dati analitici e profili",
          "Le regole importanti includono accesso del proprietario ai campi privati, esclusione dei dati pubblici sensibili, proprietà delle ricerche salvate, transizioni di stato delle richieste e regole di invio degli annunci",
          "Build e strumenti comprendono controlli TypeScript, build di produzione Vite, generazione Prisma, migrazioni, script dei dati iniziali e comandi di sviluppo del workspace"
        ]
      }
    ],
    media: project.media.map((asset, index) => ({
      ...asset,
      alt: `Schermata ${index + 1} di PetNest`
    })),
    links: project.links.map((link) => ({
      ...link,
      label:
        link.kind === "live"
          ? "Apri l’applicazione web"
          : link.kind === "case-study"
            ? "Caso di studio"
            : link.label
    }))
  }),
  orchidcare: (project) => ({
    ...project,
    tagline:
      "Enciclopedia delle orchidee dedicata alla cura, con schede ricercabili, filtri, preferiti e una collezione di specie rare.",
    summary:
      "Un’applicazione full stack per la cura delle orchidee, realizzata con un frontend React e Vite e un’API Express e PostgreSQL. Consente di esplorare le schede delle orchidee, cercare e filtrare in base alle esigenze di cura, consultare pagine dettagliate, salvare preferiti in locale, scoprire specie rare e leggere una guida per principianti.",
    role: "Prodotto full stack in TypeScript",
    hook:
      "Un prodotto pratico per la cura delle piante, in cui dati ricercabili, informazioni di coltivazione e un’esperienza di navigazione rilassante lavorano insieme.",
    strengths: [
      "Esperienza di consultazione chiara e ordinata",
      "Client API e DTO del backend tipizzati",
      "Ricerca e filtri basati sulle esigenze di cura",
      "Dati iniziali PostgreSQL con attribuzione delle immagini"
    ],
    challenge:
      "Realizzare un prodotto pubblico per la cura delle orchidee, accessibile ai principianti ma capace di rappresentare dati strutturati come luce, annaffiatura, umidità, temperatura, periodo di fioritura, rarità e tipo di crescita.",
    solution:
      "Il frontend organizza la scoperta delle orchidee nelle rotte homepage, esplorazione, dettaglio, preferiti, collezione rara e guida alla cura. Il backend distribuisce dati PostgreSQL normalizzati tramite una piccola API REST con filtri di ricerca convalidati, paginazione, ricerca per slug, metadati dei filtri, CORS, Helmet, registrazione delle richieste e risposte di errore controllate.",
    outcome:
      "OrchidCare aggiunge al portfolio un caso di studio mirato e basato sui dati: mostra un flusso tipizzato dal frontend al backend, query PostgreSQL, stato locale del client e una superficie di prodotto progettata attorno alle decisioni di cura anziché a operazioni CRUD generiche.",
    features: [
      "Esplorazione delle schede con ricerca, filtri e paginazione",
      "Pagine dettagliate con origine, radici, fioritura e riepiloghi di cura",
      "Salvataggio locale delle orchidee preferite con feedback per l’utente",
      "Collezione dedicata alle orchidee rare",
      "Guida alla cura pensata per chi inizia"
    ],
    architecture: [
      "Frontend React Router con rotte per homepage, esplorazione, dettaglio, preferiti, collezione rara e guida alla cura",
      "Client API tipizzato per le richieste JSON e la configurazione dell’URL di base",
      "API Express suddivisa in rotte, controller, servizi, repository e gestori degli errori",
      "PostgreSQL memorizza le orchidee e i relativi profili di cura in relazione uno a uno"
    ],
    metrics: [
      { label: "Rotte frontend", value: "6" },
      { label: "Endpoint API", value: "4" },
      { label: "Database", value: "PostgreSQL" }
    ],
    impactBullets: [
      "Dimostra una progettazione specifica per la cura delle piante anziché un’altra dashboard generica.",
      "Mostra come i filtri del frontend si collegano alla gestione convalidata delle query nel backend.",
      "Aggiunge un progetto full stack basato su PostgreSQL con un modello dei dati spiegato chiaramente."
    ],
    interviewAngles: [
      "Come l’applicazione trasforma le esigenze di cura delle piante in dati strutturati e ricercabili.",
      "Perché l’API espone sia i dati dell’elenco sia i metadati dei filtri per rendere più fluida l’esperienza di navigazione.",
      "Come i preferiti locali supportano l’MVP, lasciando spazio a futuri account sincronizzati."
    ],
    repositories: project.repositories?.map((repository, index) => ({
      ...repository,
      label: index === 0 ? "Repository frontend" : "Repository backend"
    })),
    workflowIntro: {
      eyebrow: "Flusso di OrchidCare",
      title: "Decisioni di cura dalla ricerca al dettaglio",
      text: "OrchidCare è strutturata attorno a chi desidera identificare le piante, confrontarne le esigenze, salvare i preferiti e imparare le nozioni di base senza creare un account."
    },
    workflowHighlights: [
      {
        title: "Esplorazione e filtri",
        text: "La sezione principale dell’enciclopedia trasforma i dati sulla cura delle orchidee in uno strumento decisionale consultabile, anziché in una galleria statica.",
        items: [
          "È possibile cercare nomi e descrizioni e filtrare per difficoltà, luce, acqua, tipo di crescita e periodo di fioritura",
          "La paginazione mantiene leggibile l’elenco, mentre il backend resta la fonte dei dati aggiornati sulle orchidee",
          "I metadati dei filtri provengono dall’API, quindi le opzioni dell’interfaccia riflettono i dati realmente presenti in PostgreSQL"
        ]
      },
      {
        title: "Pagine di dettaglio dedicate alla cura",
        text: "Il flusso di dettaglio è pensato per comprendere le esigenze pratiche della pianta, non soltanto per mostrare informazioni botaniche.",
        items: [
          "Ogni pagina include origine, radici, note sulla fioritura, riepilogo della cura, rarità, tipo di crescita e attribuzione dell’immagine",
          "Le rotte basate su slug rendono le singole schede condivisibili e semplici da collegare al comportamento di ricerca dell’API",
          "La guida completa le singole schede con argomenti per principianti come luce, umidità, concimazione, rinvaso e propagazione"
        ]
      },
      {
        title: "Collezione locale",
        text: "L’MVP usa uno stato leggero nel client per i preferiti, mantenendo aperta la possibilità di collezioni autenticate in futuro.",
        items: [
          "L’hook `useFavoriteOrchids` salva le orchidee selezionate in localStorage, così i preferiti restano disponibili tra una visita e l’altra",
          "Il feedback in finestra modale conferma il salvataggio e la rimozione senza interrompere la navigazione",
          "Una rotta dedicata alla collezione rara riutilizza lo stesso flusso dell’API con il filtro `isRare`"
        ]
      }
    ],
    apiIntro: {
      eyebrow: "Superficie del backend",
      title: "API mirata per l’enciclopedia delle orchidee",
      text: "L’API Express mantiene volutamente essenziale l’MVP pubblico, con endpoint dedicati allo stato del servizio, agli elenchi, ai dettagli basati su slug e ai metadati dei filtri."
    },
    qualityIntro: {
      eyebrow: "Decisioni tecniche",
      title: "Flusso tipizzato, convalida e rigore PostgreSQL",
      text: "Il punto di forza di OrchidCare è l’incontro tra i filtri di cura del frontend, la convalida nel backend e un modello dei dati normalizzato."
    },
    qualitySignals: [
      {
        title: "Contratto tipizzato tra frontend e API",
        text: "Il client React modella direttamente la struttura delle risposte API, così schede, pagine di dettaglio, filtri e paginazione usano DTO TypeScript espliciti.",
        items: [
          "I tipi DTO coprono elementi dell’elenco, dettagli, metadati dei filtri, paginazione e ogni filtro di cura supportato",
          "Il client API tipizzato costruisce URLSearchParams per ricerca, difficoltà, luce, acqua, umidità, temperatura, tipo di crescita, fioritura, rarità, pagina e dimensione della pagina",
          "Le rotte frontend corrispondono chiaramente al backend: l’esplorazione usa elenco e metadati, i dettagli usano lo slug e la collezione rara riutilizza i filtri dell’elenco"
        ]
      },
      {
        title: "Gestione convalidata delle query API",
        text: "Il controller verifica i valori delle query prima che raggiungano il repository e restituisce risposte 400 o 404 controllate per gli input non validi.",
        items: [
          "I filtri enumerati sono limitati ai valori previsti per difficoltà, luce, annaffiatura, tipo di crescita e periodo di fioritura",
          "Umidità e temperatura vengono interpretate come numeri finiti, mentre pagina e dimensione devono essere interi positivi",
          "La dimensione della pagina è limitata a 40, gli slug devono rispettare il formato URL minuscolo previsto e i dettagli mancanti restituiscono un errore 404 strutturato"
        ]
      },
      {
        title: "Schema PostgreSQL e sicurezza delle query",
        text: "Il livello database usa tabelle normalizzate, vincoli, indici e query `pg` parametrizzate per il modello pubblico delle orchidee.",
        items: [
          "Lo schema separa `orchids` dai record uno a uno di `orchid_care_profiles`, con eliminazione a cascata tramite chiave esterna",
          "I vincoli proteggono formato dello slug, tipo di crescita, difficoltà, luce, annaffiatura, intervalli di umidità e temperatura, fioritura e completezza dei metadati delle immagini",
          "Le query del repository usano parametri per ricerca e filtri, oltre a indici su slug, nomi, genere, tipo di crescita, difficoltà, luce, acqua e fioritura"
        ]
      },
      {
        title: "Sicurezza in esecuzione e configurazione ripetibile",
        text: "L’app Express include middleware orientati alla produzione e script locali per il database, rendendo il progetto più semplice da eseguire e valutare.",
        items: [
          "Helmet, origine CORS configurata, parsing JSON, registrazione delle richieste e gestori centralizzati per pagine mancanti ed errori sono collegati a livello dell’applicazione",
          "`db/schema.sql` e `db/seed.sql` permettono una configurazione PostgreSQL ripetibile tramite `npm run db:reset`",
          "Gli script di build del frontend e del backend eseguono i controlli TypeScript prima di produrre contenuti pronti per la valutazione"
        ]
      }
    ],
    media: project.media.map((asset, index) => ({
      ...asset,
      alt: [
        "Homepage di OrchidCare con sezione introduttiva e funzionalità in evidenza",
        "Pagina di esplorazione di OrchidCare con ricerca, filtri di cura e schede delle orchidee",
        "Pagina dei preferiti di OrchidCare con le orchidee salvate",
        "Guida alla cura di OrchidCare con indicazioni per principianti sull’annaffiatura",
        "Pagina di dettaglio di OrchidCare dedicata alla Queen of Sheba Orchid"
      ][index] ?? asset.alt
    })),
    links: project.links.map((link) => ({
      ...link,
      label: link.kind === "case-study" ? "Caso di studio" : link.label
    }))
  })
};

export function getItalianProject(project: ProjectEntry) {
  return italianProjectTranslators[project.slug]?.(project) ?? project;
}
