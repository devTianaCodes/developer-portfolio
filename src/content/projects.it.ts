import type { ProjectEntry, ProjectSlug } from "@/content/projects";

type ProjectTranslator = (project: ProjectEntry) => ProjectEntry;

const italianProjectTranslators: Record<ProjectSlug, ProjectTranslator> = {
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
  english4u: (project) => ({
    ...project,
    tagline:
      "Piattaforma per l’apprendimento autonomo dell’inglese, con percorsi per studenti e CMS amministrativo.",
    summary:
      "Un LMS pensato per il portfolio, realizzato con frontend React e backend Express/MySQL. Riunisce onboarding, dashboard dello studente, percorsi di corsi e lezioni, quiz, modalità di ripasso, impostazioni del profilo e raccolte amministrative basate sui ruoli.",
    role: "Prodotto LMS full stack",
    hook:
      "Una piattaforma didattica concepita come un vero prodotto digitale, non come una semplice demo di lezioni.",
    strengths: [
      "Aree di prodotto chiare per studenti e amministratori",
      "Software progettato specificamente per il portfolio",
      "Ampia copertura delle rotte per un comportamento realistico dell’applicazione",
      "Architettura full stack chiara per i flussi di studenti e amministratori"
    ],
    challenge:
      "Creare un prodotto didattico pronto per i colloqui, capace di dimostrare sia la progettazione del prodotto sia il rigore nell’implementazione, senza sovraccaricare la prima versione con funzionalità ipotetiche.",
    solution:
      "Lo sviluppo si concentra sul nucleo dell’apprendimento: onboarding, dashboard, corsi, lezioni, quiz, flussi di ripasso e raccolte create dagli amministratori. Il caso di studio valorizza un ambito chiaro, l’utilità per lo studente e un percorso realistico dalla struttura MVP alla rifinitura per il portfolio.",
    outcome:
      "English4U resta un caso di studio solido perché combina profondità del prodotto, ricchezza delle rotte e una struttura full stack chiara per la valutazione tecnica.",
    features: [
      "Gestione delle rotte per ospiti, studenti e amministratori",
      "Catalogo dei corsi, dettagli dei corsi e rotte delle lezioni",
      "Flussi di quiz e ripasso",
      "Dashboard, certificati, piano di studio, impostazioni e profilo",
      "Raccolte amministrative per corsi, livelli, unità, lezioni, quiz e utenti"
    ],
    architecture: [
      "Struttura React Router con protezioni delle rotte per esperienze ospite, studente e amministratore",
      "Backend Express con API di autenticazione e contenuti",
      "Confini chiari tra studenti, ospiti e amministratori mantengono comprensibile il prodotto mentre aumentano le rotte",
      "Una superficie di rotte progettata per rimanere leggibile durante la crescita del prodotto didattico"
    ],
    metrics: [
      { label: "Rotte dello studente", value: "10+" },
      { label: "Raccolte amministrative", value: "6" },
      { label: "Modalità del caso di studio", value: "Full stack" }
    ],
    impactBullets: [
      "Collega la progettazione del prodotto a un’esperienza realistica di apprendimento autonomo.",
      "Mostra come autenticazione, progressi, contenuti e struttura amministrativa lavorano insieme.",
      "Presenta un prodotto didattico mirato, con valore per l’utente e un’implementazione ordinata."
    ],
    interviewAngles: [
      "Come la struttura delle rotte separa le esperienze di ospiti, studenti e amministratori senza diventare disordinata.",
      "Perché limitare la prima versione al nucleo dell’apprendimento ha reso il progetto più solido e credibile.",
      "Come il prodotto diventa pronto per la demo attraverso rifinitura, contenuti iniziali e flussi gestiti dagli amministratori."
    ],
    repositories: project.repositories?.map((repository, index) => ({
      ...repository,
      label: index === 0 ? "Repository frontend" : "Repository backend"
    })),
    workflowIntro: {
      eyebrow: "Flusso di apprendimento",
      title: "Sistema dal test di livello al monitoraggio dei progressi",
      text: "English4U esprime al meglio il proprio valore quando viene presentata come un percorso connesso dello studente, non come una raccolta di schermate isolate."
    },
    workflowHighlights: [
      {
        title: "Percorso personalizzato dello studente",
        text: "L’applicazione accompagna lo studente dalla creazione dell’account al test iniziale, al livello consigliato, ai progressi nei corsi, ai quiz, al ripasso e alla pianificazione dello studio.",
        items: [
          "Il test iniziale consiglia percorsi A1 o A2 con indicatori di affidabilità, feedback sulle aree da migliorare, cronologia e confronto dell’andamento",
          "La dashboard combina corso attuale, prossima lezione, continuità, lezioni completate, media dei quiz, attività settimanale e suggerimenti del tutor",
          "Lezioni, quiz, riferimenti grammaticali, certificati, profilo, impostazioni e piano di studio sostengono il percorso attorno al flusso principale"
        ]
      },
      {
        title: "Logica di valutazione e ripasso",
        text: "I flussi didattici includono valutazione e generazione del ripasso gestite dal backend, non soltanto esercizi statici nel frontend.",
        items: [
          "I dati dei quiz non espongono le risposte corrette prima dell’invio e il punteggio viene calcolato sul server",
          "I tentativi possono essere salvati in MySQL e aggiornare media dei quiz, continuità e progressi dello studente",
          "Le modalità di ripasso generano esercizi da errori, contenuti di riscaldamento, grammatica, vocabolario, test iniziale, progressi e tentativi recenti"
        ]
      },
      {
        title: "Amministrazione e gestione dei contenuti",
        text: "Il progetto comprende flussi protetti di back office che dimostrano una progettazione basata sui ruoli oltre l’interfaccia dello studente.",
        items: [
          "Le raccolte amministrative comprendono corsi, livelli, unità, lezioni, quiz e utenti",
          "I flussi di creazione, modifica ed eliminazione supportano selettori di relazione per corsi, unità e contenuti delle lezioni",
          "Lo studio dei quiz limita ogni quiz a tre domande, mantenendo l’esperienza amministrativa intenzionalmente circoscritta e chiara nella demo"
        ]
      }
    ],
    apiIntro: {
      eyebrow: "Superficie del backend",
      title: "Domini API per l’apprendimento",
      text: "L’API Express separa la scoperta pubblica, i flussi autenticati dello studente e le operazioni sui contenuti riservate agli amministratori."
    },
    qualityIntro: {
      eyebrow: "Decisioni tecniche",
      title: "Architettura, autenticazione e persistenza",
      text: "Le scelte di implementazione rendono il progetto utile nei colloqui perché mostrano confini realistici tra interfaccia, API, autenticazione e dati."
    },
    qualitySignals: [
      {
        title: "Architettura frontend",
        text: "L’app React è organizzata attorno a pagine di rotta, rotte protette, componenti riutilizzabili per interfaccia e layout e accesso centralizzato alle API.",
        items: [
          "React Router separa le rotte pubbliche, quelle autenticate degli studenti, quelle riservate agli ospiti e quelle amministrative",
          "I componenti delle rotte vengono caricati in modo differito con React.lazy e Suspense per mantenere modulare l’applicazione",
          "Le chiamate API sono centralizzate in src/services/api.js con una gestione coerente delle risposte"
        ]
      },
      {
        title: "Architettura backend",
        text: "Il backend Express segue un flusso a livelli che mantiene separati controller, persistenza e logica di dominio.",
        items: [
          "Il flusso delle richieste segue rotta → controller → servizio/repository/funzione di supporto → database o contenuti dimostrativi",
          "I moduli funzionali si trovano in src/modules, insieme a configurazione condivisa, pool del database, middleware, rotte e utilità",
          "I moduli dashboard e ripasso combinano dati di test iniziale, progressi, tentativi dei quiz, piani di studio, lezioni e metadati grammaticali"
        ]
      },
      {
        title: "Sicurezza e persistenza",
        text: "L’autenticazione e lo stato dello studente sono responsabilità del backend, non semplici controlli delle rotte nel frontend.",
        items: [
          "Le password vengono protette con bcryptjs, i JWT includono identità e ruolo e l’autenticazione può usare cookie HTTP-only o bearer token",
          "I middleware del backend associano l’utente corrente e proteggono le rotte degli studenti e quelle riservate al ruolo amministratore",
          "MySQL conserva utenti, ruoli, test iniziali, progressi nelle lezioni, tentativi dei quiz, continuità e piani di studio, mentre le raccolte dimostrative mantengono portabili i contenuti del catalogo"
        ]
      }
    ],
    media: project.media.map((asset, index) => ({
      ...asset,
      alt: `Schermata ${index + 1} di English4U`
    })),
    links: project.links.map((link) => ({
      ...link,
      label: link.kind === "case-study" ? "Caso di studio" : link.label
    }))
  }),
  "ai-comparator": (project) => ({
    ...project,
    tagline:
      "SPA senza autenticazione per confrontare modelli di IA, con ricerca, filtri, preferiti e analisi affiancata.",
    summary:
      "Un progetto React e Vite sviluppato attorno ai requisiti del progetto finale Boolean: esplorare i modelli di IA, cercarli e filtrarli, consultarne i dettagli, confrontarne due affiancati e conservare una raccolta di preferiti senza esporre operazioni CRUD all’utente.",
    role: "Flusso di prodotto frontend con integrazione REST nel backend",
    hook:
      "Uno strumento di confronto mirato che trasforma un’esercitazione didattica in un flusso di prodotto chiaro per valutare modelli di IA.",
    strengths: [
      "Percorso di esplorazione chiaro senza autenticazione",
      "Controlli di ricerca, filtro per categoria e ordinamento",
      "Flusso di confronto tra due modelli",
      "Preferiti persistenti disponibili in tutta l’applicazione"
    ],
    challenge:
      "Realizzare una SPA completa di confronto collegata a un backend REST generato, rispettando il vincolo secondo cui gli utenti non autenticati possono esplorare, confrontare e salvare preferiti, ma non creare, modificare o eliminare record.",
    solution:
      "Il frontend usa pagine React Router per elenco, dettagli, confronto e preferiti, racchiuse in un GlobalProvider per lo stato condiviso. Un hook personalizzato useModels centralizza il caricamento dalle API, la ricerca con ritardo riduce le richieste superflue, l’ordinamento memorizzato mantiene reattivo il catalogo e gli ID selezionati passano attraverso la rotta di confronto.",
    outcome:
      "Il progetto dimostra un flusso di prodotto completo in sola lettura, con dati reali dal backend, gestione dello stato spiegabile, navigazione basata sulle rotte e un’esperienza di confronto semplice da provare durante un colloquio.",
    features: [
      "Catalogo con ricerca ritardata per titolo, filtro per categoria e ordinamento alfabetico per titolo o categoria",
      "Pagina di dettaglio con fornitore, modalità, finestra di contesto, fascia di prezzo, indice di intelligenza, punti di forza e descrizione",
      "Confronto tra due modelli che carica gli ID selezionati dalla stringa di query e mostra i campi affiancati",
      "Preferiti accessibili dall’intestazione e dalle schede, conservati in localStorage",
      "Stati vuoti, di caricamento e di errore per elenco, dettagli, preferiti e confronto"
    ],
    architecture: [
      "React Router separa elenco, dettaglio, preferiti e confronto all’interno di un DefaultLayout condiviso",
      "GlobalContext conserva gli ID dei modelli preferiti e li sincronizza con localStorage",
      "L’hook useModels gestisce caricamento dell’elenco, recupero del singolo modello, stato di caricamento ed errori API",
      "ModelList concentra i controlli locali su ricerca, categoria, ordinamento e selezione per il confronto",
      "Il backend genera endpoint REST dal tipo Model esportato in types.ts",
      "La risorsa Model è conservata come dati JSON e convalidata tramite uno schema Zod generato",
      "L’interfaccia esclude intenzionalmente creazione, modifica ed eliminazione per rispettare l’ambito dell’utente non autenticato"
    ],
    metrics: [
      { label: "Schermate", value: "4" },
      { label: "Risorsa API", value: "Model" },
      { label: "Record iniziali", value: "10+" }
    ],
    impactBullets: [
      "Mostra uso pratico di rotte React, integrazione API e coordinamento dello stato senza sovra-ingegnerizzazione.",
      "Rende visibile la logica di confronto attraverso un vero flusso tra due modelli anziché una tabella statica.",
      "Dimostra rispetto dei vincoli mantenendo l’interfaccia in sola lettura per gli utenti non autenticati."
    ],
    interviewAngles: [
      "Come il frontend trasforma i requisiti dell’esercitazione in rotte e flussi utente.",
      "Perché gli ID selezionati vengono passati nell’URL, rendendo la vista di confronto condivisibile e ricaricabile.",
      "Come il backend usa una definizione tipizzata della risorsa per generare endpoint REST e convalidare i dati persistenti."
    ],
    repositories: project.repositories?.map((repository, index) => ({
      ...repository,
      label: index === 0 ? "Repository frontend" : "Repository backend"
    })),
    workflowIntro: {
      eyebrow: "Flusso di confronto",
      title: "Esplorare, selezionare, confrontare e salvare",
      text: "Il punto di forza di AI Comparator è il percorso completo in sola lettura, dalla scoperta nel catalogo al supporto decisionale affiancato."
    },
    workflowHighlights: [
      {
        title: "Catalogo dei modelli",
        text: "La pagina dell’elenco offre i controlli attesi da un prodotto di confronto.",
        items: [
          "La ricerca interroga i titoli tramite la stringa di query del backend dopo un ritardo di 500 ms",
          "Le categorie derivano dai dati dei modelli, così il filtro resta allineato ai record disponibili",
          "L’ordinamento supporta titolo e categoria nelle direzioni A–Z e Z–A ed è memorizzato con useMemo"
        ]
      },
      {
        title: "Selezione e confronto",
        text: "Il flusso di confronto è intenzionalmente semplice e facile da comprendere.",
        items: [
          "Gli utenti selezionano esattamente due modelli dal catalogo prima di aprire la vista di confronto",
          "La rotta legge gli ID selezionati dall’URL e recupera entrambi i record di dettaglio",
          "I campi confrontabili includono fornitore, anno di rilascio, modalità, finestra di contesto, fascia di prezzo, indice di intelligenza, punti di forza e categoria"
        ]
      },
      {
        title: "Preferiti e analisi dei dettagli",
        text: "L’applicazione mantiene vicine all’utente le azioni di consultazione ripetute senza aggiungere la complessità di un account.",
        items: [
          "I pulsanti dei preferiti sono disponibili nelle schede e nelle viste di dettaglio tramite GlobalContext",
          "Gli ID preferiti restano in localStorage, quindi le selezioni persistono dopo l’aggiornamento della pagina",
          "Una rotta dedicata mantiene i modelli salvati accessibili dall’intestazione",
          "Le pagine di dettaglio mostrano la risorsa Model estesa, non soltanto i campi del catalogo"
        ]
      }
    ],
    apiIntro: {
      eyebrow: "Superficie del backend",
      title: "API REST generata su una risorsa Model",
      text: "Il backend è il server di risorse in stile Boolean fornito con il corso, personalizzato tramite un tipo Model e dati JSON iniziali."
    },
    qualityIntro: {
      eyebrow: "Decisioni di implementazione",
      title: "Vincoli leggibili e stato spiegabile",
      text: "Il progetto è più solido come implementazione chiara del comportamento richiesto che come esercizio basato su un framework pesante."
    },
    qualitySignals: [
      {
        title: "Rispetto dei requisiti",
        text: "Il frontend mantiene in sola lettura l’esperienza dell’utente pubblico.",
        items: [
          "La SPA non espone controlli per creare, modificare o eliminare",
          "I requisiti minimi principali sono rappresentati da rotte e stati espliciti dell’interfaccia",
          "Il confronto resta limitato a due record per mantenere chiara la prima versione"
        ]
      },
      {
        title: "Struttura dello stato frontend",
        text: "La recente riorganizzazione rende il flusso dei dati più semplice da spiegare e mantenere.",
        items: [
          "GlobalProvider avvolge le rotte, rendendo i preferiti disponibili nelle pagine di elenco, dettaglio e preferiti",
          "useModels centralizza la logica delle richieste API per elenchi e singoli dettagli",
          "ModelList combina il caricamento tramite query del backend con ordinamento locale e selezione di due modelli"
        ]
      },
      {
        title: "Modellazione dei dati",
        text: "La risorsa Model comprende campi sufficienti a rendere significativo il confronto.",
        items: [
          "I campi obbligatori sono titolo e categoria, in linea con il contratto dell’esercitazione",
          "I campi facoltativi aggiungono fornitore, anno di rilascio, modalità, finestra di contesto, fascia di prezzo, immagine, indice di intelligenza, punti di forza e descrizione",
          "I dati JSON iniziali forniscono record reali da esplorare e confrontare"
        ]
      },
      {
        title: "Feedback per l’utente",
        text: "L’applicazione gestisce gli stati più visibili delle API e delle rotte.",
        items: [
          "Le pagine di elenco, preferiti, dettagli e confronto mostrano feedback di caricamento ed errore",
          "Il pannello di confronto comunica quando sono necessari due modelli",
          "La pagina dei preferiti gestisce lo stato di raccolta vuota"
        ]
      }
    ],
    media: project.media.map((asset, index) => ({
      ...asset,
      alt: [
        "Catalogo dei modelli di AI Comparator",
        "Pagina dei preferiti di AI Comparator",
        "Confronto tra modelli in AI Comparator",
        "Pagina di dettaglio di un modello in AI Comparator"
      ][index] ?? asset.alt
    })),
    links: project.links.map((link) => ({
      ...link,
      label: link.kind === "case-study" ? "Caso di studio" : link.label
    }))
  }),
  brickdrop: (project) => ({
    ...project,
    tagline:
      "Gioco per browser rapido e mirato, con rifinitura moderna e la classica pressione del punteggio.",
    summary:
      "Un’implementazione di BrickDrop con React e Vite, dotata di eliminazione delle righe, progressione dei livelli, pezzi fantasma, selezione casuale a sacchetto, pausa e stile responsive. È la dimostrazione interattiva più immediata del portfolio.",
    role: "Sviluppo frontend delle meccaniche di gioco",
    hook:
      "Un gioco compatto che dimostra come una solida logica frontend possa diventare immediatamente giocabile.",
    strengths: [
      "Logica di gioco autonoma",
      "Transizioni di stato e punteggio chiare",
      "Candidato ideale per una distribuzione live immediata",
      "Forte contrasto rispetto ai progetti in stile applicazione"
    ],
    challenge:
      "Ricreare un gioco familiare con una sensazione di gioco sufficientemente coinvolgente, mantenendo al tempo stesso il codice leggibile e compatto.",
    solution:
      "Tabellone, movimento dei pezzi, blocco, eliminazione delle righe e punteggio risiedono direttamente nel componente dell’applicazione. L’implementazione usa anteprime del pezzo fantasma, difficoltà crescente con i livelli e un sistema a sacchetto per rendere il gioco più curato.",
    outcome:
      "BrickDrop offre al portfolio un’esperienza live immediatamente verificabile e mostra una logica frontend compatta senza richiedere un’infrastruttura backend.",
    features: [
      "Punteggio per le righe eliminate e progressione dei livelli",
      "Anteprima del pezzo fantasma",
      "Flusso di pausa e riavvio",
      "Selezione casuale dei pezzi con sistema a sacchetto",
      "Area di gioco responsive nel browser"
    ],
    architecture: [
      "Applicazione React a pagina singola con stato di gioco autonomo",
      "Funzioni pure di supporto per posizionamento, rotazione, unione ed eliminazione delle righe",
      "Output di build Vite già disponibile per l’anteprima statica"
    ],
    metrics: [
      { label: "Dimensione del tabellone", value: "20 x 10" },
      { label: "Set di tetramini", value: "7" },
      { label: "Modalità di distribuzione", value: "Statico live" }
    ],
    impactBullets: [
      "Aggiunge interazione immediata al portfolio, oltre ai casi di studio statici.",
      "Mostra capacità di sviluppo frontend attraverso meccaniche, temporizzazione e transizioni di stato.",
      "Crea una demo live semplice da provare per chi valuta il progetto."
    ],
    interviewAngles: [
      "Come è organizzata la logica di gioco per restare leggibile e offrire comunque un’esperienza curata.",
      "Perché pezzo fantasma, casualità a sacchetto e ritmo dei livelli migliorano un clone semplice.",
      "Cosa cambia quando un progetto frontend viene ottimizzato per essere giocabile direttamente anziché per flussi aziendali."
    ],
    repositories: project.repositories?.map((repository) => ({
      ...repository,
      label: "Repository del gioco"
    })),
    workflowIntro: {
      eyebrow: "Flusso di gioco",
      title: "Sistema compatto di puzzle in tempo reale",
      text: "BrickDrop è un gioco frontend piccolo ma completo che combina ciclo di gioco, collisioni, controlli responsive, persistenza e feedback curato."
    },
    workflowHighlights: [
      {
        title: "Logica principale dei blocchi in caduta",
        text: "Il progetto implementa le meccaniche attese da un gioco giocabile di impilamento dei blocchi, senza fermarsi a un tabellone visivo.",
        items: [
          "Il gioco usa un tabellone standard 10 x 20 con sette tetramini: I, O, T, S, Z, J e L",
          "Movimento, collisioni, rotazione, blocco, eliminazione delle righe, pausa, ripresa, caduta rapida e caduta controllata sono gestiti nel ciclo di gioco",
          "Il punteggio supporta l’eliminazione di una, due, tre o quattro righe, con avanzamento di livello ogni 10 righe e velocità crescente"
        ]
      },
      {
        title: "Equità e supporto al giocatore",
        text: "Piccole scelte nelle meccaniche rendono il clone più completo e piacevole.",
        items: [
          "Al posto di una selezione completamente casuale viene usato un sistema a sacchetto mescolato",
          "Le nuove partite evitano di iniziare con i pezzi S o Z, migliorando la qualità percepita all’avvio",
          "La proiezione del pezzo fantasma e l’anteprima del prossimo pezzo aiutano a pianificare anziché soltanto reagire"
        ]
      },
      {
        title: "Interazione mobile-first",
        text: "Il mobile è trattato come un’esperienza di gioco specifica, non come un layout desktop compresso.",
        items: [
          "Il layout mobile dedica il 60% superiore dello schermo al tabellone e il 40% inferiore ai controlli",
          "Grandi pulsanti skeuomorfici permettono di giocare con i pollici e supportano il movimento continuo tenendo premuti destra o sinistra",
          "Pausa e ripresa usano colori specifici dello stato, mentre le azioni non valide vengono disabilitate durante pausa, eliminazione delle righe o stati non giocabili"
        ]
      }
    ],
    apiIntro: {
      eyebrow: "Sistemi frontend",
      title: "Superfici dell’architettura di gioco",
      text: "BrickDrop è un gioco frontend statico, quindi le superfici tecniche importanti sono logica del tabellone, temporizzazione, input, persistenza e rendering responsive."
    },
    apiDomains: [
      "Tabellone di gioco",
      "Sacchetto dei tetramini",
      "Anteprima del prossimo pezzo",
      "Pezzo fantasma",
      "Controlli delle collisioni",
      "Eliminazione delle righe",
      "Stato di punteggio e livello",
      "Memorizzazione del record",
      "Input da tastiera su desktop",
      "Controlli touch su mobile",
      "Schermata di benvenuto",
      "Finestra di fine partita"
    ],
    qualityIntro: {
      eyebrow: "Decisioni tecniche",
      title: "Stato, temporizzazione, gioco responsive e rifinitura",
      text: "Il valore nei colloqui deriva dalla capacità di spiegare come mantenere comprensibili stato in tempo reale, timer, input del browser e vincoli del layout mobile."
    },
    qualitySignals: [
      {
        title: "Gestione dello stato",
        text: "L’implementazione mantiene poche dipendenze usando stato e riferimenti React per il gioco anziché una libreria esterna.",
        items: [
          "Tabellone, pezzo attivo, prossimo pezzo, stato, punteggio, livello, righe, record e stato di eliminazione sono separati",
          "I riferimenti conservano timer, animazioni di eliminazione, movimento continuo e sacchetto corrente dei pezzi",
          "localStorage conserva il record con la chiave BrickDrop_high_score tra le sessioni del browser"
        ]
      },
      {
        title: "Ciclo di gioco e temporizzazione",
        text: "La temporizzazione è trattata come una parte centrale della sensazione di gioco.",
        items: [
          "La caduta automatica usa setInterval in base al livello attuale e accelera con l’aumento del livello",
          "L’animazione di eliminazione usa un timeout prima di rimuovere le righe e generare il pezzo successivo",
          "Su mobile il movimento continuo inizia con un timeout, poi ripete a intervalli più rapidi e viene interrotto al rilascio, all’annullamento, in pausa o a fine partita"
        ]
      },
      {
        title: "Collisioni e aggiornamento del tabellone",
        text: "Le operazioni principali sul tabellone hanno nomi chiari e spiegabili, facilitando la revisione del progetto.",
        items: [
          "canPlace centralizza i controlli dei limiti e delle collisioni",
          "mergePiece sovrappone il pezzo attivo al tabellone e clearLines rimuove le righe complete aggiungendo righe vuote in alto",
          "La rotazione usa una trasformazione della matrice con semplici tentativi di correzione vicino alle pareti"
        ]
      },
      {
        title: "Rifinitura del prodotto e sviluppi futuri",
        text: "Il progetto è abbastanza curato da risultare giocabile e conserva miglioramenti futuri ben definiti.",
        items: [
          "Le schermate di benvenuto e fine partita condividono lo stesso linguaggio visivo, con forme dei pezzi, punteggio, livello, righe e azioni per giocare ancora o uscire",
          "Il sistema arcade scuro al neon usa pannelli effetto vetro, colori luminosi, lampi all’eliminazione delle righe e pulsanti mobile skeuomorfici",
          "I prossimi passi includono test per collisioni, righe, rotazione e selezione iniziale, oltre a feedback aptico, suoni, classifica, supporto PWA e correzioni di rotazione più ricche"
        ]
      }
    ],
    media: project.media.map((asset, index) => ({
      ...asset,
      alt: `Schermata ${index + 1} di BrickDrop`
    })),
    links: project.links.map((link) => ({
      ...link,
      label:
        link.kind === "live"
          ? "Demo live"
          : link.kind === "case-study"
            ? "Caso di studio"
            : link.label
    }))
  }),
  "sea-battle": (project) => ({
    ...project,
    tagline:
      "Battaglia navale per giocatore singolo con IA adattiva, stile glassmorphism e attenzione all’accessibilità.",
    summary:
      "Una moderna esperienza di Battaglia navale per giocatore singolo, realizzata con React, Vite, Framer Motion e Zustand. Comprende introduzione, livelli di difficoltà, posizionamento delle navi, effetti, cronologia, pausa e un’interfaccia di supporto per un gioco curato nel browser.",
    role: "Frontend interattivo e sistemi dell’interfaccia",
    hook:
      "Un gioco per browser visivamente ambizioso che combina sistemi dell’interfaccia, movimento e gioco guidato dall’IA.",
    strengths: [
      "Il gioco frontend più ambizioso dal punto di vista stilistico",
      "IA adattiva e orchestrazione più ricca dell’interfaccia",
      "Supporto all’accessibilità e modelli di finestre modali",
      "Documentazione già pronta per la distribuzione su Vercel"
    ],
    challenge:
      "Trasformare un semplice gioco da tavolo in un prodotto immersivo per browser, con sufficiente profondità dell’interfaccia, feedback e capacità responsive da risultare premium.",
    solution:
      "L’applicazione è suddivisa in componenti e hook mirati per IA, suono, comportamento delle finestre di dialogo, blocco dello scorrimento e flusso complessivo della partita. Questa separazione consente di distribuire un’esperienza articolata senza concentrare tutto in un unico componente.",
    outcome:
      "Sea Battle diventa il caso di studio visivo frontend puro più forte del portfolio e una demo live pulita distribuita gratuitamente su Vercel.",
    features: [
      "Avversario IA per giocatore singolo",
      "Introduzione, impostazioni e finestre di pausa",
      "Posizionamento delle navi e schede delle fasi del tabellone",
      "Pannelli di cronologia, stato e informazioni sulla battaglia",
      "Distribuzione responsive adatta all’hosting statico"
    ],
    architecture: [
      "Sistema di componenti React supportato da hook personalizzati per flusso di gioco e IA",
      "Framer Motion usato per rifinire l’interfaccia",
      "Applicazione Vite statica con documentazione esistente per la distribuzione su Vercel"
    ],
    metrics: [
      { label: "Sistemi di gioco basati su hook", value: "5+" },
      { label: "Componenti dell’interfaccia", value: "15+" },
      { label: "Modalità di distribuzione", value: "Statico live" }
    ],
    impactBullets: [
      "Espande il portfolio oltre le applicazioni di prodotto verso una progettazione più ricca delle interazioni.",
      "Mostra un sistema dell’interfaccia più evoluto, con movimento, stati modali e feedback di gioco.",
      "Porta un linguaggio frontend più espressivo nell’insieme del portfolio."
    ],
    interviewAngles: [
      "Come hook e confini tra componenti supportano un’esperienza interattiva più articolata.",
      "Perché validi casi di studio frontend possono nascere dai sistemi di gioco, non soltanto dalle applicazioni di prodotto.",
      "Come distribuzione statica e rifinitura dell’interfaccia rendono il progetto una demo live immediata per la valutazione del portfolio."
    ],
    repositories: project.repositories?.map((repository) => ({
      ...repository,
      label: "Repository del gioco"
    })),
    workflowIntro: {
      eyebrow: "Flusso di gioco",
      title: "Ciclo completo e responsive di Battaglia navale",
      text: "Sea Battle è un sistema frontend compatto ma completo: regole, IA, stato, accessibilità, animazione e layout mobile lavorano insieme."
    },
    workflowHighlights: [
      {
        title: "Esperienza completa di Battaglia navale",
        text: "Il gioco comprende l’intero ciclo atteso da un’implementazione giocabile di Battaglia navale per giocatore singolo.",
        items: [
          "Le griglie 10 x 10 del giocatore e dell’avversario usano la flotta standard: portaerei, corazzata, incrociatore, sottomarino e cacciatorpediniere",
          "Sono inclusi posizionamento manuale, rotazione orizzontale e verticale, disposizione casuale della flotta, turni di tiro, rilevamento di colpi, errori, affondamenti e vittoria e rivelazione della flotta nemica",
          "Le modalità IA Facile, Media e Difficile passano da un gioco casuale più indulgente a una strategia di ricerca e bersaglio più efficiente"
        ]
      },
      {
        title: "Gioco responsive e mobile-first",
        text: "L’interfaccia affronta il difficile problema di mantenere due griglie leggibili, quadrate e facilmente toccabili su tutti i dispositivi.",
        items: [
          "La configurazione su telefono in verticale è semplificata attorno alle azioni chiare Casuale, Cancella, Gioca e Ruota nave",
          "Il telefono in orizzontale usa regole dedicate per mantenere entrambi i tabelloni giocabili affiancati",
          "Variabili CSS sensibili al viewport mantengono stabili le dimensioni del tabellone, mentre la rimozione del timer live evita oscillazioni dell’intestazione su mobile"
        ]
      },
      {
        title: "Modello di interazione accessibile",
        text: "La griglia è costruita per essere giocabile e comprensibile anche oltre i clic del mouse.",
        items: [
          "Le celle espongono etichette ARIA descrittive con coordinate e stato",
          "La navigazione da tastiera supporta le frecce, la conferma con Invio o Spazio ed Esc per i flussi modali",
          "Le finestre di dialogo gestiscono il focus e bloccano lo scorrimento della pagina, mentre le regioni live annunciano lo stato della partita"
        ]
      }
    ],
    apiIntro: {
      eyebrow: "Sistemi frontend",
      title: "Superfici dell’architettura di gioco",
      text: "Il progetto è un’applicazione frontend statica, quindi le superfici importanti sono stato, IA, rendering, persistenza e livelli di interazione del browser."
    },
    apiDomains: [
      "GameShell",
      "GameBoard",
      "BoardCell",
      "StatusBar",
      "BattleActionBar",
      "ShipPlacementPanel",
      "ResultsModal",
      "GameProvider",
      "useSeaBattleGame",
      "useGameContext",
      "Logica del giocatore IA",
      "Cronologia locale"
    ],
    qualityIntro: {
      eyebrow: "Decisioni tecniche",
      title: "Stato, rifinitura, accessibilità e test",
      text: "Il valore nei colloqui deriva dalla separazione tra regole, interfaccia, IA, layout responsive, persistenza locale, animazione e accessibilità."
    },
    qualitySignals: [
      {
        title: "Separazione tra stato e logica",
        text: "Il gioco è organizzato affinché i componenti dell’interfaccia non gestiscano direttamente ogni regola.",
        items: [
          "GameProvider e useGameContext racchiudono lo stato principale della partita",
          "useSeaBattleGame gestisce ciclo della partita, transizioni di fase, disposizione della flotta, turni, cronologia, impostazioni e risultati",
          "Regole del tabellone, posizionamento, selezione delle mosse dell’IA, formattazione di statistiche e cronologia, suono, dialoghi e blocco dello scorrimento sono separati in hook e utilità"
        ]
      },
      {
        title: "Animazione e rifinitura del prodotto",
        text: "Il movimento sostiene il feedback di gioco e non è soltanto decorativo.",
        items: [
          "Framer Motion gestisce le transizioni di finestre, menu, risultati, piè di pagina e interfaccia",
          "Le animazioni CSS comunicano colpi, errori, navi affondate, riflessione dell’avversario e momenti di vittoria",
          "Le impostazioni consentono di controllare suono ed effetti ambientali senza affollare la schermata di battaglia"
        ]
      },
      {
        title: "Persistenza e risultati",
        text: "Il gioco ricorda i progressi del giocatore e trasforma il risultato finale in un riepilogo utile.",
        items: [
          "La memorizzazione locale conserva cronologia delle partite, preferenze di suono ed effetti di sfondo e stato dell’introduzione",
          "La finestra dei risultati mostra vittoria o sconfitta, precisione, mosse, colpi, errori, durata della missione, serie migliore, vittorie archiviate, precisione migliore e flotta nemica",
          "Gioca ancora riporta alla selezione della difficoltà, permettendo di scegliere consapevolmente una sfida diversa"
        ]
      },
      {
        title: "Obiettivo dei test",
        text: "I test si concentrano sulle regressioni delle regole principali che comprometterebbero l’esperienza.",
        items: [
          "I test con Node coprono posizionamento delle navi, completamento della flotta richiesta, prevenzione dei tiri duplicati e condizione di vittoria",
          "La mappatura della navigazione da tastiera e la scorciatoia di rotazione sono coperte come regole di interazione",
          "La convalida della produzione viene eseguita tramite npm run build"
        ]
      }
    ],
    media: project.media.map((asset, index) => ({
      ...asset,
      alt: `Schermata ${index + 1} di Sea Battle`
    })),
    links: project.links.map((link) => ({
      ...link,
      label:
        link.kind === "live"
          ? "Demo live"
          : link.kind === "case-study"
            ? "Caso di studio"
            : link.label
    }))
  }),
  paytrack: (project) => ({
    ...project,
    tagline:
      "Gestore mobile-first degli abbonamenti per pagamenti ricorrenti, promemoria e maggiore chiarezza sulle spese.",
    summary:
      "Un’applicazione full stack per monitorare gli abbonamenti, che aiuta a comprendere costi ricorrenti, date di rinnovo, etichette dei metodi di pagamento, cronologia dei pagamenti e attività dei promemoria, senza trasformarsi in un prodotto bancario completo.",
    role: "Prodotto full stack per la gestione degli abbonamenti",
    hook:
      "Un assistente tranquillo per le finanze personali che trasforma i pagamenti ricorrenti dimenticati in un flusso chiaro e mobile-first.",
    strengths: [
      "Progettazione del prodotto mobile-first",
      "Gestione sicura dei dati collegati ai pagamenti",
      "Analisi nella dashboard e promemoria dei rinnovi",
      "Internazionalizzazione in sei lingue"
    ],
    challenge:
      "Creare un gestore di abbonamenti mirato e più semplice di un’app bancaria, rappresentando comunque comportamenti realistici dei pagamenti ricorrenti, dati autenticati degli utenti e promemoria dei rinnovi.",
    solution:
      "L’applicazione combina un frontend React/Vite con un backend Express, Prisma e MySQL. Mantiene i metodi di pagamento come etichette sicure, usa l’autenticazione tramite cookie HTTP-only, convalida le richieste con Zod e organizza il prodotto attorno a dati della dashboard, gestione degli abbonamenti, cronologie dei pagamenti, promemoria e impostazioni.",
    outcome:
      "PayTrack aggiunge al portfolio un prodotto mobile-first legato alle finanze, mostrando architettura full stack, decisioni sicure sui dati, analisi, internazionalizzazione, attività pianificate e flussi di pagamento ricorrente.",
    features: [
      "Dashboard con spesa mensile, proiezione annuale, numero di abbonamenti attivi, rinnovi imminenti e distribuzione per categoria",
      "Operazioni CRUD sugli abbonamenti con date di rinnovo, frequenza di fatturazione, categoria, stato, etichetta del metodo di pagamento e note",
      "Cronologia manuale con importo, data, valuta, metodo e note del pagamento",
      "Cronologia dei promemoria, controlli pianificati dei rinnovi e preferenze per ciascun abbonamento",
      "Impostazioni per nome visualizzato, lingua, valuta predefinita, fuso orario, modalità scura e controlli personalizzati dei metodi di pagamento",
      "Reimpostazione della password con token a scadenza e supporto per l’invio tramite e-mail"
    ],
    architecture: [
      "Il frontend React comunica esclusivamente con endpoint REST JSON sotto /api",
      "Il backend Express gestisce convalida, logica aziendale, autenticazione, attività dei promemoria e accesso ai dati tramite Prisma",
      "Lo schema Prisma modella utenti, categorie, metodi di pagamento, abbonamenti, pagamenti, registri dei promemoria, preferenze e token per reimpostare la password",
      "Su mobile la navigazione inferiore mostra etichette complete, mentre tablet e desktop adottano una navigazione laterale e riepiloghi più ampi",
      "La configurazione di distribuzione supporta origini frontend esplicite, cookie tra siti e una gestione CORS più rigorosa"
    ],
    metrics: [
      { label: "Lingue", value: "6" },
      { label: "Domini API", value: "7" },
      { label: "Finestre dei promemoria", value: "2" }
    ],
    impactBullets: [
      "Mostra una progettazione full stack attorno a un problema quotidiano legato al denaro.",
      "Dimostra come organizzare in sicurezza informazioni collegate ai pagamenti senza memorizzare dati completi delle carte.",
      "Aggiunge al portfolio profondità responsive mobile-first e internazionalizzazione."
    ],
    interviewAngles: [
      "In che modo il monitoraggio degli abbonamenti differisce dall’elaborazione reale dei pagamenti e perché usare soltanto etichette è più sicuro.",
      "Perché i flussi di archiviazione e ripristino sono preferibili a un’eliminazione rischiosa con un solo clic per la cronologia finanziaria.",
      "Come analisi della dashboard, attività dei promemoria e cronologie dei pagamenti lavorano insieme in un prodotto mirato."
    ],
    repositories: project.repositories?.map((repository, index) => ({
      ...repository,
      label: index === 0 ? "Repository frontend" : "Repository backend"
    })),
    workflowIntro: {
      eyebrow: "Flusso degli abbonamenti",
      title: "Pagamenti ricorrenti sotto controllo",
      text: "PayTrack esprime al meglio il proprio valore come prodotto mobile-first che trasforma il disordine degli abbonamenti in decisioni chiare sui pagamenti ricorrenti."
    },
    workflowHighlights: [
      {
        title: "Dashboard e panoramica",
        text: "La dashboard risponde rapidamente alla domanda principale: quanto si sta spendendo e quali rinnovi sono imminenti?",
        items: [
          "Spesa mensile, proiezione annuale, abbonamenti attivi, rinnovi imminenti e distribuzione delle spese vengono mostrati insieme",
          "Gli abbonamenti sono raggruppati per categoria, rendendo più comprensibili i costi ripetuti",
          "I layout responsive mantengono utile la dashboard su mobile, tablet e desktop"
        ]
      },
      {
        title: "Ciclo di vita dell’abbonamento",
        text: "La gestione degli abbonamenti copre operazioni reali e ripetute, evitando scorciatoie distruttive.",
        items: [
          "Gli utenti possono creare, modificare, annullare, archiviare e ripristinare abbonamenti negli stati attivo, annullato e archiviato",
          "L’archiviazione esclude gli abbonamenti dai totali attivi e dai promemoria senza distruggere immediatamente la cronologia",
          "I controlli di gestione riuniscono le azioni importanti in un flusso più consapevole",
          "I promemoria a sette giorni e a un giorno possono essere regolati per ciascun abbonamento"
        ]
      },
      {
        title: "Etichette e cronologia dei pagamenti",
        text: "L’applicazione registra il contesto dei pagamenti senza gestire credenziali reali.",
        items: [
          "I metodi di pagamento sono semplici etichette, come Visa **** 4242, PayPal o conto bancario",
          "La funzione per segnare un pagamento registra importo, data, valuta, metodo e note",
          "Le cronologie mostrano totale pagato, numero di pagamenti, media, ultima data di pagamento, prossimo rinnovo e filtro per anno"
        ]
      }
    ],
    apiIntro: {
      eyebrow: "Superficie del backend",
      title: "Domini API per il monitoraggio degli abbonamenti",
      text: "L’API REST separa autenticazione, impostazioni dell’account, abbonamenti, analisi della dashboard, metodi di pagamento, categorie e promemoria."
    },
    qualityIntro: {
      eyebrow: "Decisioni tecniche",
      title: "Autenticazione sicura, convalida, promemoria e i18n",
      text: "Il progetto è più efficace se presentato come organizzazione sicura dei pagamenti ricorrenti, non come elaborazione dei pagamenti."
    },
    qualitySignals: [
      {
        title: "Autenticazione e proprietà",
        text: "PayTrack protegge i dati dell’account tramite sessioni gestite dal backend e query limitate all’utente.",
        items: [
          "L’autenticazione JWT è conservata in cookie HTTP-only, quindi JavaScript nel frontend non gestisce direttamente i token di sessione",
          "Le password vengono sottoposte a hash e non sono mai salvate in chiaro",
          "Gli utenti possono accedere soltanto ai propri abbonamenti, metodi di pagamento, promemoria e dati del profilo",
          "I token per reimpostare la password sono conservati sul server, scadono e vengono contrassegnati come usati dopo la conferma"
        ]
      },
      {
        title: "Convalida e sicurezza dei dati",
        text: "L’applicazione mantiene utili le informazioni collegate ai pagamenti senza diventare un elaboratore di pagamenti.",
        items: [
          "Zod convalida i dati delle richieste nel backend prima dell’esecuzione della logica aziendale",
          "I metodi di pagamento conservano soltanto etichette, mai numeri completi di carte o credenziali reali",
          "L’eliminazione di un metodo di pagamento richiede una conferma prima di rimuovere l’etichetta salvata",
          "Le azioni delicate usano conferme o archiviazione anziché una rimozione permanente immediata"
        ]
      },
      {
        title: "Sistema di promemoria e funzionalità",
        text: "Le attività pianificate e le preferenze rendono l’MVP più simile a un vero assistente per gli abbonamenti.",
        items: [
          "node-cron esegue controlli pianificati sui rinnovi imminenti",
          "Nodemailer supporta l’invio dei promemoria tramite e-mail quando SMTP è configurato",
          "I registri mantengono una cronologia verificabile delle notifiche di rinnovo inviate",
          "Le preferenze per ciascun abbonamento consentono di disattivare finestre specifiche dei promemoria"
        ]
      },
      {
        title: "Interfaccia responsive e internazionalizzata",
        text: "Il frontend è pensato per un uso quotidiano e ripetuto su dispositivi e lingue differenti.",
        items: [
          "L’interfaccia nasce mobile-first con etichette di navigazione complete e si espande nei layout tablet e desktop",
          "i18next supporta inglese, italiano, tedesco, francese, romeno e russo",
          "Modalità scura, valuta predefinita, fuso orario e lingua permettono di personalizzare l’applicazione",
          "Le ultime rifiniture del frontend hanno migliorato testi per l’accessibilità, chiarezza della navigazione e menu personalizzati nelle impostazioni"
        ]
      },
      {
        title: "Test e distribuzione più robusta",
        text: "Gli aggiornamenti recenti di PayTrack hanno aggiunto controlli mirati nelle aree più esposte a regressioni.",
        items: [
          "I test frontend con node:test verificano il formato delle etichette dei metodi di pagamento e le parole complete della navigazione nelle varie lingue",
          "I test backend coprono schemi di autenticazione e abbonamento, comportamento delle preferenze dei promemoria e origini CORS consentite",
          "La configurazione dell’ambiente supporta più URL frontend per distribuzioni di anteprima e produzione"
        ]
      }
    ],
    media: project.media.map((asset, index) => ({
      ...asset,
      alt: [
        "Dashboard desktop di PayTrack",
        "Pagina desktop degli abbonamenti di PayTrack",
        "Impostazioni desktop di PayTrack",
        "Dashboard desktop di PayTrack in modalità chiara",
        "Dashboard mobile di PayTrack",
        "Impostazioni mobile di PayTrack"
      ][index] ?? asset.alt
    })),
    links: project.links.map((link) => ({
      ...link,
      label: link.kind === "case-study" ? "Caso di studio" : link.label
    }))
  }),
  orchidcare: (project) => ({
    ...project,
    tagline:
      "Enciclopedia delle orchidee dedicata alla cura, con schede ricercabili, filtri climatici, preferiti e scoperta guidata.",
    summary:
      "Un’applicazione full stack per la cura delle orchidee, realizzata con un frontend React e Vite e un’API Express e PostgreSQL. Consente di esplorare le schede con filtri di cura e climatici sincronizzati nell’URL, consultare indicatori rapidi, ritrovare le orchidee viste di recente, salvare i preferiti in locale e aprire pagine di dettaglio condivisibili con temperature in Celsius o Fahrenheit.",
    role: "Prodotto full stack in TypeScript",
    hook:
      "Un prodotto pratico per la cura delle piante, in cui dati ricercabili, informazioni di coltivazione e un’esperienza di navigazione rilassante lavorano insieme.",
    strengths: [
      "Esperienza di consultazione chiara e ordinata",
      "Client API e DTO del backend tipizzati",
      "Filtri climatici conservati nell’URL",
      "Preferiti persistenti e cronologia delle orchidee visualizzate",
      "Dati iniziali PostgreSQL con attribuzione delle immagini"
    ],
    challenge:
      "Realizzare un prodotto pubblico per la cura delle orchidee, accessibile ai principianti ma capace di rappresentare dati strutturati come luce, annaffiatura, umidità, temperatura, periodo di fioritura, rarità e tipo di crescita.",
    solution:
      "Il frontend organizza la scoperta delle orchidee nelle rotte homepage, esplorazione, dettaglio, preferiti, collezione rara e guida alla cura. Il backend distribuisce dati PostgreSQL normalizzati tramite una piccola API REST con filtri di ricerca convalidati, paginazione, ricerca per slug, metadati dei filtri, CORS, Helmet, registrazione delle richieste e risposte di errore controllate.",
    outcome:
      "OrchidCare aggiunge al portfolio un caso di studio mirato e basato sui dati: unisce un flusso tipizzato dal frontend al backend e query PostgreSQL con filtri condivisibili, strumenti di scoperta persistenti e un prodotto progettato attorno a reali decisioni di cura anziché a operazioni CRUD generiche.",
    features: [
      "Esplorazione delle schede con ricerca, filtri di cura e climatici e paginazione",
      "Conservazione dei filtri attivi nell’URL per ricerche ripetibili e condivisibili",
      "Indicatori rapidi di cura e azione casuale per scoprire un’orchidea",
      "Cronologia delle orchidee visualizzate e conteggio dei preferiti nella navigazione",
      "Pagine di cura condivisibili con riepilogo immediato e selettore Celsius/Fahrenheit",
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
          "È possibile cercare nomi e descrizioni e filtrare per difficoltà, luce, acqua, tipo di crescita, periodo di fioritura, umidità e temperatura ambiente",
          "I filtri attivi e la paginazione sono riportati nell’URL, così lo stato della ricerca resiste al refresh e può essere condiviso direttamente",
          "I metadati dei filtri provengono dall’API, quindi le opzioni dell’interfaccia riflettono i dati realmente presenti in PostgreSQL"
        ]
      },
      {
        title: "Pagine di dettaglio dedicate alla cura",
        text: "Il flusso di dettaglio è pensato per comprendere le esigenze pratiche della pianta, non soltanto per mostrare informazioni botaniche.",
        items: [
          "Ogni pagina combina un riepilogo immediato della cura con origine, radici, note sulla fioritura, rarità, tipo di crescita e attribuzione dell’immagine",
          "Le rotte basate su slug possono essere copiate dall’interfaccia, mentre il selettore Celsius/Fahrenheit adatta le temperature alle preferenze dell’utente",
          "La guida completa le singole schede con argomenti per principianti come luce, umidità, concimazione, rinvaso e propagazione"
        ]
      },
      {
        title: "Collezione locale",
        text: "L’MVP usa uno stato leggero nel client per i preferiti, mantenendo aperta la possibilità di collezioni autenticate in futuro.",
        items: [
          "L’hook `useFavoriteOrchids` salva le orchidee selezionate in localStorage e mantiene il totale aggiornato nella navigazione",
          "Le schede viste di recente creano un percorso rapido di ritorno, mentre il feedback modale conferma le modifiche ai preferiti senza interrompere la navigazione",
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
  return italianProjectTranslators[project.slug](project);
}
