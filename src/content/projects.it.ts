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
  })
};

export function getItalianProject(project: ProjectEntry) {
  return italianProjectTranslators[project.slug]?.(project) ?? project;
}
