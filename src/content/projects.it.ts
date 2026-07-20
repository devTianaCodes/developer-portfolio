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
  })
};

export function getItalianProject(project: ProjectEntry) {
  return italianProjectTranslators[project.slug]?.(project) ?? project;
}
