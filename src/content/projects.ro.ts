import type { ProjectEntry, ProjectSlug } from "@/content/projects";

type ProjectTranslator = (project: ProjectEntry) => ProjectEntry;

const romanianProjectTranslators: Partial<
  Record<ProjectSlug, ProjectTranslator>
> = {
  chocolate: (project) => ({
    ...project,
    tagline:
      "Brand e-commerce premium, cu un flux complet de cumpărare și administrare.",
    summary:
      "O vitrină full-stack dedicată ciocolatei, realizată ca un produs de brand atent construit, nu ca un magazin generic. Include explorarea catalogului, favorite, coș, checkout, gestionarea plăților, operațiuni administrative și fluxuri de e-mail după cumpărare.",
    role: "Dezvoltare full-stack și identitate vizuală de produs",
    hook: "Un studiu de caz e-commerce în care identitatea brandului, parcursul clientului și operațiunile backend au aceeași importanță.",
    strengths: [
      "Cea mai recognoscibilă identitate de brand din portofoliu",
      "Un flux comercial real, care depășește operațiunile CRUD",
      "Administrarea produselor, inventarului și comenzilor",
      "Integrarea Stripe și a e-mailurilor tranzacționale",
    ],
    challenge:
      "Crearea unei experiențe e-commerce premium de la început până la sfârșit, susținând în același timp fluxuri operaționale reale precum verificarea stocului, actualizarea stării comenzilor, evenimentele de plată și administrarea catalogului.",
    solution:
      "Frontendul folosește layouturi editoriale, trasee orientate spre descoperirea produselor și un sistem vizual coerent cu brandul, iar backendul gestionează autentificarea, comenzile, unirea coșurilor, intențiile de plată, webhookurile și API-urile administrative. O intervenție țintită asupra livrării înlocuiește și referințele nefuncționale către imaginile inițiale cu alternative locale, specifice categoriei și optimizate.",
    outcome:
      "Rezultatul este studiul de caz principal al portofoliului: un produs care combină finisajul vizual, profunzimea logicii de business și o poveste clară pentru prezentarea dezvoltării unui sistem e-commerce complet într-un interviu.",
    features: [
      "Explorarea catalogului prin magazin, oferte, cadouri, căutare și favorite",
      "Coș pentru vizitatori și utilizatori autentificați, cu unire după autentificare",
      "Flux de checkout și confirmare a comenzii",
      "Instrumente administrative pentru produse, inventar și comenzi",
      "Notificări prin e-mail pentru client și administrator după plată",
    ],
    architecture: [
      "Domenii API REST pentru autentificare, produse, coș, comenzi, plăți și administrare",
      "Crearea comenzilor pe MySQL, cu verificarea stocului și proceduri de rollback",
      "Autentificare JWT cu rute protejate și rute rezervate administratorilor",
      "URL-urile demonstrative nefuncționale sunt asociate cu imagini locale comprimate și specifice categoriei, iar URL-urile personalizate valide rămân neschimbate",
      "Structura backendului acoperă fluxurile necesare pentru checkout, gestionarea comenzilor și operațiunile administrative",
    ],
    metrics: [
      { label: "Rute frontend", value: "20+" },
      { label: "Zone administrative", value: "3" },
      { label: "Conținut media produse", value: "cu 93,9% mai ușor" },
    ],
    impactBullets: [
      "Evidențiază diferența dintre o vitrină atent realizată și un sistem real de cumpărare.",
      "Demonstrează decizii UI ghidate de brand fără a sacrifica rigoarea backendului.",
      "Reduce conținutul media al categoriilor de la 76,09 MB la 4,62 MB și restabilește imaginile produselor inițiale.",
      "Construiește o poveste clară pentru interviu despre autentificare, plăți, inventar și instrumente administrative.",
    ],
    interviewAngles: [
      "Cum păstrează produsul o identitate vizuală premium coerentă în catalog, coș, checkout și zonele administrative.",
      "De ce unirea coșului vizitatorului, validarea stocului și rollbackul sunt importante într-un produs e-commerce real.",
      "Cum devine mai solid un proiect de portofoliu atunci când include plăți și operațiuni post-cumpărare, nu doar interfața magazinului.",
    ],
    repositories: project.repositories?.map((repository, index) => ({
      ...repository,
      label: index === 0 ? "Repository frontend" : "Repository backend",
    })),
    workflowHighlights: [
      {
        title: "Parcurs complet de cumpărare",
        text: "Produsul depășește o simplă vitrină și include descoperire, căutare, favorite, coș, checkout, plată, confirmare, cont și fluxuri administrative.",
        items: [
          "Trasee editoriale prin Shop, Offers, Gifts, Search, Favourites și conținut evidențiat pe pagina principală",
          "Pagini de detaliu cu prețuri, reduceri, galerie și imagini la hover, adăugare în coș și prezentarea recenziilor",
          "Checkout cu informații de livrare, alegerea metodei de transport, rezumatul comenzii și confirmare",
        ],
      },
      {
        title: "Logica pentru coș, checkout și comenzi",
        text: "Comportamentul e-commerce include detaliile așteptate de la o aplicație reală, nu doar de la o demonstrație de interfață.",
        items: [
          "Coșurile vizitatorilor folosesc identificatori de sesiune, cele autentificate folosesc identificatori de utilizator, iar produsele selectate sunt păstrate prin unirea coșurilor după autentificare",
          "Crearea comenzii verifică stocul, calculează subtotalul și livrarea, reduce inventarul, golește coșul și face rollback în caz de eroare",
          "Intențiile de plată Stripe și gestionarea webhookurilor actualizează comenzile la starea plătită",
        ],
      },
      {
        title: "Operațiuni după plată",
        text: "Sistemul include fluxuri administrative și post-plată care consolidează studiul de caz în interviurile tehnice.",
        items: [
          "E-mailurile de confirmare pentru client și notificările pentru administrator sau magazin sunt trimise prin Nodemailer",
          "Șabloanele HTML coordonate cu brandul includ logo-ul centrat în mesajul destinat clientului",
          "Ecranele administrative permit crearea și editarea produselor, actualizarea inventarului, listarea comenzilor și modificarea stării lor",
        ],
      },
    ],
    qualitySignals: [
      {
        title: "Acoperirea testelor backend",
        text: "Backendul include teste pentru servicii, controllere, middleware, integrarea rutelor și teste de integrare opționale conectate la o bază de date reală.",
        items: [
          "Vitest și Supertest acoperă comportamentul la nivel de unitate și rută",
          "Acoperirea actuală a codului sursă backend: 80,72% pentru instrucțiuni și linii, 86,32% pentru funcții",
          "Scripturile de test includ acoperire, integrare cu baza de date, acoperire generală și verificări pentru codul modificat",
        ],
      },
      {
        title: "Praguri de calitate și integrare continuă",
        text: "Monitorizarea acoperirii este tratată ca o funcționalitate a proiectului, nu ca un adaos ulterior.",
        items: [
          "Obiectivul general de acoperire a codului backend este de 80%",
          "Obiectivul pentru codul backend nou sau modificat este de 90%",
          "GitHub Actions aplică testele backend, generarea acoperirii și pragurile pentru codul modificat în pull requesturi",
        ],
      },
      {
        title: "Performanța vitrinei",
        text: "Catalogul live include o intervenție țintită asupra livrării imaginilor produselor stocate în baza de date.",
        items: [
          "Treizeci de imagini de categorie au fost redimensionate și comprimate de la 76,09 MB la 4,62 MB, o reducere de 93,9%",
          "Referințele demonstrative Cloudinary nefuncționale folosesc imagini locale potrivite categoriei, fără a necesita migrarea bazei de date",
          "Imaginile din catalog, detalii, coș și panoul coșului folosesc încărcare întârziată, decodare asincronă și indicii de prioritate",
        ],
      },
    ],
    media: project.media.map((asset, index) => ({
      ...asset,
      alt: `Captură ${index + 1} din Chocolate Craft House`,
    })),
    links: project.links.map((link) => ({
      ...link,
      label:
        link.kind === "live"
          ? "Deschide aplicația web"
          : link.kind === "case-study"
            ? "Studiu de caz"
            : link.label,
    })),
  }),
  "ai-comparator": (project) => ({
    ...project,
    tagline:
      "SPA fără autentificare pentru compararea modelelor de IA, cu căutare, filtre, favorite și analiză alăturată.",
    summary:
      "Un proiect React și Vite dezvoltat în jurul cerințelor proiectului final Boolean: explorarea modelelor de IA, căutarea și filtrarea lor, consultarea detaliilor, compararea alăturată a două modele și păstrarea unei colecții de favorite, fără a expune utilizatorului operațiuni CRUD.",
    role: "Flux de produs frontend cu integrare REST în backend",
    hook: "Un instrument de comparație bine delimitat, care transformă un exercițiu educațional într-un flux de produs clar pentru evaluarea modelelor de IA.",
    strengths: [
      "Parcurs clar de explorare fără autentificare",
      "Controale pentru căutare, filtrare după categorie și sortare",
      "Flux de comparație între două modele",
      "Favorite persistente disponibile în întreaga aplicație",
    ],
    challenge:
      "Crearea unei SPA complete pentru comparație, conectată la un backend REST generat, respectând cerința ca utilizatorii neautentificați să poată explora, compara și salva favorite, dar nu să creeze, modifice sau șteargă înregistrări.",
    solution:
      "Frontendul folosește pagini React Router pentru listă, detalii, comparație și favorite, reunite într-un GlobalProvider pentru starea comună. Hookul personalizat useModels centralizează încărcarea din API, căutarea cu întârziere reduce cererile inutile, sortarea memorată păstrează catalogul receptiv, iar ID-urile selectate sunt transmise prin ruta de comparație.",
    outcome:
      "Proiectul demonstrează un flux de produs complet, doar pentru citire, cu date reale din backend, gestionare explicabilă a stării, navigare bazată pe rute și o experiență de comparație ușor de testat într-un interviu.",
    features: [
      "Catalog cu căutare întârziată după titlu, filtrare după categorie și sortare alfabetică după titlu sau categorie",
      "Pagină de detaliu cu furnizor, modalitate, fereastră de context, interval de preț, indice de inteligență, puncte forte și descriere",
      "Comparație între două modele care citește ID-urile selectate din query string și afișează câmpurile alăturat",
      "Favorite accesibile din header și carduri, păstrate în localStorage",
      "Stări goale, de încărcare și de eroare pentru listă, detalii, favorite și comparație",
    ],
    architecture: [
      "React Router separă lista, detaliile, favoritele și comparația într-un DefaultLayout comun",
      "GlobalContext păstrează ID-urile modelelor favorite și le sincronizează cu localStorage",
      "Hookul useModels gestionează încărcarea listei, obținerea unui singur model, starea de încărcare și erorile API",
      "ModelList concentrează controalele locale pentru căutare, categorie, sortare și selecția pentru comparație",
      "Backendul generează endpointuri REST din tipul Model exportat în types.ts",
      "Resursa Model este păstrată ca date JSON și validată printr-o schemă Zod generată",
      "Interfața exclude intenționat crearea, modificarea și ștergerea pentru a respecta scopul utilizatorului neautentificat",
    ],
    metrics: [
      { label: "Ecrane", value: "4" },
      { label: "Resursă API", value: "Model" },
      { label: "Înregistrări inițiale", value: "10+" },
    ],
    impactBullets: [
      "Arată utilizarea practică a rutelor React, integrării API și coordonării stării fără supra-proiectare.",
      "Face vizibilă logica de comparație printr-un flux real între două modele, nu printr-un tabel static.",
      "Demonstrează respectarea cerințelor prin păstrarea interfeței în modul doar pentru citire pentru utilizatorii neautentificați.",
    ],
    interviewAngles: [
      "Cum transformă frontendul cerințele exercițiului în rute și fluxuri de utilizator.",
      "De ce ID-urile selectate sunt transmise în URL, făcând vizualizarea comparației distribuibilă și reîncărcabilă.",
      "Cum folosește backendul o definiție tipizată a resursei pentru a genera endpointuri REST și a valida datele persistente.",
    ],
    repositories: project.repositories?.map((repository, index) => ({
      ...repository,
      label: index === 0 ? "Repository frontend" : "Repository backend",
    })),
    workflowIntro: {
      eyebrow: "Fluxul de comparație",
      title: "Explorează, selectează, compară și salvează",
      text: "Punctul forte al AI Comparator este parcursul complet doar pentru citire, de la descoperirea în catalog la analiza alăturată pentru luarea unei decizii.",
    },
    workflowHighlights: [
      {
        title: "Catalogul modelelor",
        text: "Pagina listei oferă controalele așteptate de la un produs de comparație.",
        items: [
          "Căutarea interoghează titlurile prin query stringul backendului după o întârziere de 500 ms",
          "Categoriile sunt derivate din datele modelelor, astfel încât filtrul rămâne aliniat cu înregistrările disponibile",
          "Sortarea acceptă titlul și categoria în direcțiile A–Z și Z–A și este memorată cu useMemo",
        ],
      },
      {
        title: "Selecție și comparație",
        text: "Fluxul de comparație este intenționat simplu și ușor de înțeles.",
        items: [
          "Utilizatorii selectează exact două modele din catalog înainte de a deschide vizualizarea comparației",
          "Ruta citește ID-urile selectate din URL și încarcă ambele înregistrări detaliate",
          "Câmpurile comparabile includ furnizorul, anul lansării, modalitatea, fereastra de context, intervalul de preț, indicele de inteligență, punctele forte și categoria",
        ],
      },
      {
        title: "Favorite și analiza detaliilor",
        text: "Aplicația păstrează la îndemână acțiunile repetate de consultare fără a adăuga complexitatea unui cont.",
        items: [
          "Butoanele pentru favorite sunt disponibile în carduri și vizualizările detaliate prin GlobalContext",
          "ID-urile favorite rămân în localStorage, astfel încât selecțiile persistă după reîncărcarea paginii",
          "O rută dedicată păstrează modelele salvate accesibile din header",
          "Paginile de detaliu afișează resursa Model extinsă, nu doar câmpurile catalogului",
        ],
      },
    ],
    apiIntro: {
      eyebrow: "Suprafața backendului",
      title: "API REST generat pentru o resursă Model",
      text: "Backendul este serverul de resurse în stil Boolean furnizat în cadrul cursului, personalizat printr-un tip Model și date JSON inițiale.",
    },
    qualityIntro: {
      eyebrow: "Decizii de implementare",
      title: "Cerințe lizibile și stare explicabilă",
      text: "Proiectul este mai solid ca implementare clară a comportamentului cerut decât ca exercițiu bazat pe un framework complex.",
    },
    qualitySignals: [
      {
        title: "Respectarea cerințelor",
        text: "Frontendul păstrează experiența utilizatorului public în modul doar pentru citire.",
        items: [
          "SPA-ul nu expune controale pentru creare, modificare sau ștergere",
          "Cerințele minime principale sunt reprezentate prin rute și stări explicite ale interfeței",
          "Comparația rămâne limitată la două înregistrări pentru a păstra clară prima versiune",
        ],
      },
      {
        title: "Structura stării în frontend",
        text: "Reorganizarea recentă face fluxul datelor mai ușor de explicat și întreținut.",
        items: [
          "GlobalProvider învelește rutele, făcând favoritele disponibile în paginile de listă, detaliu și favorite",
          "useModels centralizează logica cererilor API pentru liste și detalii individuale",
          "ModelList combină încărcarea prin query din backend cu sortarea locală și selecția a două modele",
        ],
      },
      {
        title: "Modelarea datelor",
        text: "Resursa Model conține suficiente câmpuri pentru ca comparația să fie relevantă.",
        items: [
          "Câmpurile obligatorii sunt titlul și categoria, în acord cu contractul exercițiului",
          "Câmpurile opționale adaugă furnizor, an de lansare, modalitate, fereastră de context, interval de preț, imagine, indice de inteligență, puncte forte și descriere",
          "Datele JSON inițiale oferă înregistrări reale pentru explorare și comparație",
        ],
      },
      {
        title: "Feedback pentru utilizator",
        text: "Aplicația gestionează cele mai vizibile stări ale API-urilor și rutelor.",
        items: [
          "Paginile de listă, favorite, detalii și comparație afișează feedback de încărcare și eroare",
          "Panoul de comparație comunică atunci când sunt necesare două modele",
          "Pagina favoritelor gestionează starea colecției goale",
        ],
      },
    ],
    media: project.media.map((asset, index) => ({
      ...asset,
      alt:
        [
          "Catalogul modelelor din AI Comparator",
          "Pagina favoritelor din AI Comparator",
          "Comparația modelelor în AI Comparator",
          "Pagina de detaliu a unui model în AI Comparator",
        ][index] ?? asset.alt,
    })),
    links: project.links.map((link) => ({
      ...link,
      label: link.kind === "case-study" ? "Studiu de caz" : link.label,
    })),
  }),
  petnest: (project) => ({
    ...project,
    tagline:
      "Platformă de adopții dedicată animalelor salvate, cu moderare, dashboarduri și fluxuri de solicitare.",
    summary:
      "O platformă full-stack pentru adopția animalelor, cu frontend React în TypeScript și backend Express în TypeScript. Gestionează navigarea publică, autentificarea, crearea anunțurilor, favoritele, căutările salvate, cererile de adopție, datele analitice și moderarea administrativă.",
    role: "Dezvoltare full-stack cu TypeScript și Prisma",
    hook: "O platformă de adopții centrată pe încredere, care echilibrează descoperirea publică și moderarea operațională.",
    strengths: [
      "Cea mai complexă structură operațională de dashboard din portofoliu",
      "Separare tipizată între frontend și backend",
      "Moderare administrativă și raportări din partea utilizatorilor",
      "Fluxuri realiste de adopție și comunicare",
    ],
    challenge:
      "Proiectarea unui produs care susține atât descoperirea publică, cât și operațiunile de încredere ale organizațiilor, păstrând experiența clară pentru utilizatorii obișnuiți și administratori.",
    solution:
      "Aplicația separă navigarea publică de fluxurile autentificate din dashboard, introduce controale de moderare pentru anunțuri și adaugă instrumente precum date analitice, căutări salvate și urmărirea cererilor. Interogările publice ale catalogului rămân actualizate timp de cinci minute, iar imaginile anunțurilor folosesc livrarea optimizată prin Cloudinary și fișiere inițiale comprimate.",
    outcome:
      "PetNest completează portofoliul ca cea mai complexă aplicație TypeScript la nivel de sistem, demonstrând fluxuri de moderare, API-uri tipizate și profunzime de produs dincolo de e-commerce și educație.",
    features: [
      "Explorarea și filtrarea animalelor cu pagini de detaliu dedicate",
      "Dashboard autentificat pentru anunțuri, favorite, căutări și cereri",
      "Crearea și editarea anunțurilor de către operatori",
      "Dashboarduri administrative pentru anunțuri în așteptare, raportări și utilizatori",
      "Backend bazat pe Prisma, cu date inițiale și fluxuri pentru imagini",
    ],
    architecture: [
      "Frontend și backend TypeScript separate în aplicații dedicate",
      "Generarea clientului Prisma, migrațiile și scripturile de populare din rădăcina workspace-ului",
      "Ramificații de rute protejate pentru zonele de utilizator și administrare",
      "Transformările Cloudinary și fișierele inițiale comprimate reduc dimensiunea cardurilor și galeriilor fără a schimba schema bazei de date",
      "Flux de încărcare a imaginilor pregătit pentru conținut gestionat prin Cloudinary",
    ],
    metrics: [
      { label: "Rute dashboard", value: "9" },
      { label: "Zone administrative", value: "4" },
      { label: "Limbaj backend", value: "TypeScript" },
      { label: "Conținut demonstrativ", value: "cu 94% mai ușor" },
    ],
    impactBullets: [
      "Arată cum o aplicație de portofoliu poate reprezenta încrederea, moderarea și fluxuri complexe de utilizator.",
      "Consolidează credibilitatea utilizării TypeScript atât în frontend, cât și în backend.",
      "Reduce conținutul inițial de la aproximativ 18 MB la 1,1 MB și evită cererile repetate către catalogul public în timpul navigării.",
      "Demonstrează o experiență operațională amplă, care depășește paginile publice de prezentare.",
    ],
    interviewAngles: [
      "Cum modifică moderarea atât modelul backendului, cât și experiența dashboardului într-o platformă bazată pe încredere.",
      "De ce modulele tipizate, validarea și rutele dashboardului sunt mai importante în produsele operaționale decât în aplicațiile simple de prezentare.",
      "Cum se schimbă deciziile de livrare atunci când sunt implicate încărcări de fișiere, Prisma și date demonstrative inițiale.",
    ],
    repositories: project.repositories?.map((repository, index) => ({
      ...repository,
      label: index === 0 ? "Repository frontend" : "Repository backend",
    })),
    workflowIntro: {
      eyebrow: "Fluxul adopției",
      title: "Sistem de marketplace centrat pe încredere",
      text: "PetNest se evidențiază ca produs cu roluri multiple, în care adoptatorii, operatorii și administratorii au responsabilități diferite.",
    },
    workflowHighlights: [
      {
        title: "Descoperire publică și adopție",
        text: "Experiența publică susține navigarea, filtrarea, consultarea detaliilor și cererile private de adopție fără a expune datele sensibile de contact ale responsabilului.",
        items: [
          "Navigarea anunțurilor publicate permite filtrare după categorie și localitate, căutare, sortare, paginare și dimensiune configurabilă a paginii",
          "Paginile fiecărui animal includ galerie, metadate, indicatori de compatibilitate, povestea salvării, note medicale, informații despre operator, distribuire și fluxul cererii",
          "Câmpurile private de contact sunt excluse din răspunsurile publice, păstrând interesul pentru adopție în interiorul platformei",
        ],
      },
      {
        title: "Fluxuri dashboard pentru operatori",
        text: "Utilizatorii autentificați pot gestiona intenția de adopție și operațiunile anunțurilor dintr-o zonă personală reală.",
        items: [
          "Utilizatorii pot crea anunțuri cu date structurate despre animal, sănătate, localitate, compatibilitate, povestea salvării și date de contact",
          "Favoritele folosesc stocare relațională, protecție împotriva duplicatelor, actualizări optimiste ale interfeței, rollback sigur și vizualizări ale animalelor salvate",
          "Căutările salvate, cererile primite și trimise, setările profilului, anunțurile proprii și datele analitice oferă valoare operatorilor",
        ],
      },
      {
        title: "Încredere și siguranță administrativă",
        text: "Platforma include fluxuri de moderare și administrare care o apropie mai mult de un software de producție decât de o demonstrație CRUD.",
        items: [
          "Anunțurile trec prin stările ciornă, în așteptarea aprobării, aprobat și publicat, respins, adoptat și arhivat",
          "Administratorii pot aproba sau respinge anunțurile în așteptare, analiza raportările, consulta statisticile platformei și actualiza starea utilizatorilor",
          "Raportările acceptă stările deschisă, rezolvată și arhivată, cu urmărirea administratorului care a făcut verificarea",
        ],
      },
    ],
    apiIntro: {
      eyebrow: "Structura backendului",
      title: "Domeniile API ale platformei de adopții",
      text: "API-ul Express separă navigarea publică, fluxurile autentificate ale contului, moderarea, conținutul media și operațiunile administrative.",
    },
    qualityIntro: {
      eyebrow: "Decizii tehnice",
      title: "Arhitectură tipizată, securitate și model de date",
      text: "Structura tehnică este construită în jurul siguranței tipurilor, separării rolurilor, datelor normalizate, sesiunilor sigure și regulilor de business verificate.",
    },
    qualitySignals: [
      {
        title: "Arhitectura frontendului",
        text: "Clientul React în TypeScript este organizat în pagini publice, dashboarduri protejate, pagini administrative, componente reutilizabile și funcții auxiliare.",
        items: [
          "TanStack Query gestionează starea serverului pentru anunțuri, favorite, dashboarduri, cereri și zone administrative",
          "React Hook Form și Zod susțin validarea tipizată a formularelor pentru autentificare, profil, anunțuri și cereri",
          "Componentele reutilizabile includ PetCard, FavoriteButton, ProtectedRoute, QueryStateNotice, StatusBadge, SocialLinks, NavBar și Footer",
        ],
      },
      {
        title: "Performanța conținutului și catalogului",
        text: "O intervenție țintită asupra livrării reduce dimensiunea cardurilor, galeriilor și a citirilor publice repetate.",
        items: [
          "Opt imagini inițiale au fost comprimate de la aproximativ 18 MB la 1,1 MB, o reducere de circa 94%",
          "Imaginile Cloudinary ale anunțurilor folosesc URL-uri de livrare cu format, calitate și lățime adaptate automat",
          "Interogările publice pentru pagina principală, explorare, categorie și detaliu rămân actualizate timp de cinci minute pentru a evita apelurile repetate la baza de date",
        ],
      },
      {
        title: "Arhitectura backendului",
        text: "Backendul Express în TypeScript folosește limite modulare între domenii și Prisma ca nivel de acces la date.",
        items: [
          "Modulele de domeniu includ autentificare, utilizatori, categorii, animale, cereri de adopție, favorite, căutări salvate, raportări și administrare",
          "Middleware-ul comun gestionează autentificarea, validarea, erorile centralizate, limitarea cererilor, încărcările și aplicarea rolurilor",
          "Stocarea imaginilor este abstractizată pentru a susține Cloudinary, cu o alternativă locală în timpul dezvoltării",
        ],
      },
      {
        title: "Securitate și integritatea datelor",
        text: "Sistemul modelează aspectele unei platforme bazate pe încredere care ar produce probleme reale dacă ar fi tratate superficial.",
        items: [
          "Tokenurile de acces JWT sunt asociate cu cookie-uri de reîmprospătare HTTP-only, tokenuri de reîmprospătare stocate ca hash, revocare la logout și valori jti unice",
          "Modelele Prisma normalizează utilizatorii, tokenurile de verificare și reîmprospătare, categoriile, anunțurile, imaginile, favoritele, căutările, raportările, cererile și jurnalele de audit",
          "Indicii și constrângerile susțin tipare comune de acces, prevenirea favoritelor duplicate, vizibilitatea anunțurilor, limitele de proprietate și cozile de moderare",
        ],
      },
      {
        title: "Obiectivul testelor",
        text: "Testele se concentrează pe regulile de business și comportamentele sensibile la securitate, nu pe verificări superficiale ale paginilor.",
        items: [
          "Testele backend acoperă middleware-ul de autentificare, comportamentul tokenurilor, favoritele, vizibilitatea anunțurilor, moderarea, raportările, căutările salvate, cererile, imaginile, datele analitice și profilurile",
          "Regulile importante includ accesul proprietarului la câmpurile private, excluderea datelor publice sensibile, proprietatea căutărilor salvate, tranzițiile de stare ale cererilor și regulile de trimitere a anunțurilor",
          "Buildul și instrumentele includ verificări TypeScript, build de producție Vite, generare Prisma, migrații, scripturi pentru date inițiale și comenzi de dezvoltare ale workspace-ului",
        ],
      },
    ],
    media: project.media.map((asset, index) => ({
      ...asset,
      alt: `Captură ${index + 1} din PetNest`,
    })),
    links: project.links.map((link) => ({
      ...link,
      label:
        link.kind === "live"
          ? "Deschide aplicația web"
          : link.kind === "case-study"
            ? "Studiu de caz"
            : link.label,
    })),
  }),
  english4u: (project) => ({
    ...project,
    tagline:
      "Platformă de învățare autonomă a limbii engleze, cu parcursuri pentru cursanți și CMS administrativ.",
    summary:
      "Un LMS conceput pentru portofoliu, realizat cu frontend React și backend Express/MySQL. Reunește onboardingul, dashboardul cursantului, parcursuri de cursuri și lecții, quiz-uri, moduri de recapitulare, setările profilului și colecții administrative bazate pe roluri.",
    role: "Produs LMS full-stack",
    hook: "O platformă educațională concepută ca un produs digital real, nu ca o simplă demonstrație de lecții.",
    strengths: [
      "Zone de produs clare pentru cursanți și administratori",
      "Software proiectat special pentru portofoliu",
      "Acoperire amplă a rutelor pentru un comportament realist al aplicației",
      "Arhitectură full-stack clară pentru fluxurile cursanților și administratorilor",
    ],
    challenge:
      "Crearea unui produs educațional pregătit pentru interviuri, capabil să demonstreze atât gândirea de produs, cât și rigoarea implementării, fără a supraîncărca prima versiune cu funcționalități ipotetice.",
    solution:
      "Dezvoltarea se concentrează pe nucleul învățării: onboarding, dashboard, cursuri, lecții, quiz-uri, fluxuri de recapitulare și colecții create de administratori. Studiul de caz pune în valoare un scop clar, utilitatea pentru cursant și un parcurs realist de la structura MVP la finisarea pentru portofoliu.",
    outcome:
      "English4U rămâne un studiu de caz solid deoarece combină profunzimea produsului, varietatea rutelor și o structură full-stack clară pentru evaluarea tehnică.",
    features: [
      "Gestionarea rutelor pentru vizitatori, cursanți și administratori",
      "Catalog de cursuri, detalii despre cursuri și rute ale lecțiilor",
      "Fluxuri de quiz și recapitulare",
      "Dashboard, certificate, plan de studiu, setări și profil",
      "Colecții administrative pentru cursuri, niveluri, unități, lecții, quiz-uri și utilizatori",
    ],
    architecture: [
      "Structură React Router cu protecții pentru experiențele vizitatorilor, cursanților și administratorilor",
      "Backend Express cu API-uri de autentificare și conținut",
      "Limitele clare dintre cursanți, vizitatori și administratori păstrează produsul ușor de înțeles pe măsură ce numărul rutelor crește",
      "O structură de rute proiectată să rămână lizibilă pe măsură ce produsul educațional evoluează",
    ],
    metrics: [
      { label: "Rute cursant", value: "10+" },
      { label: "Colecții administrative", value: "6" },
      { label: "Tipul studiului de caz", value: "Full-stack" },
    ],
    impactBullets: [
      "Leagă gândirea de produs de o experiență realistă de învățare autonomă.",
      "Arată cum autentificarea, progresul, conținutul și structura administrativă funcționează împreună.",
      "Prezintă un produs educațional bine delimitat, cu valoare pentru utilizator și implementare ordonată.",
    ],
    interviewAngles: [
      "Cum separă structura rutelor experiențele vizitatorilor, cursanților și administratorilor fără a deveni dezordonată.",
      "De ce limitarea primei versiuni la nucleul învățării a făcut proiectul mai solid și credibil.",
      "Cum devine produsul pregătit pentru demo prin finisare, date inițiale și fluxuri gestionate de administratori.",
    ],
    repositories: project.repositories?.map((repository, index) => ({
      ...repository,
      label: index === 0 ? "Repository frontend" : "Repository backend",
    })),
    workflowIntro: {
      eyebrow: "Fluxul de învățare",
      title: "Sistem de la testul de nivel la monitorizarea progresului",
      text: "English4U își exprimă cel mai bine valoarea atunci când este prezentată ca un parcurs conectat al cursantului, nu ca o colecție de ecrane izolate.",
    },
    workflowHighlights: [
      {
        title: "Parcurs personalizat al cursantului",
        text: "Aplicația îl însoțește pe cursant de la crearea contului la testul inițial, nivelul recomandat, progresul în cursuri, quiz-uri, recapitulare și planificarea studiului.",
        items: [
          "Testul inițial recomandă parcursuri A1 sau A2 cu indicatori de încredere, feedback pentru zonele de îmbunătățit, istoric și comparația evoluției",
          "Dashboardul combină cursul actual, lecția următoare, seria de studiu, lecțiile finalizate, media quiz-urilor, activitatea săptămânală și sugestiile tutorelui",
          "Lecțiile, quiz-urile, referințele gramaticale, certificatele, profilul, setările și planul de studiu susțin parcursul principal",
        ],
      },
      {
        title: "Logica evaluării și recapitulării",
        text: "Fluxurile educaționale includ evaluare și generarea recapitulării gestionate de backend, nu doar exerciții statice în frontend.",
        items: [
          "Datele quiz-urilor nu expun răspunsurile corecte înainte de trimitere, iar punctajul este calculat pe server",
          "Încercările pot fi salvate în MySQL și pot actualiza media quiz-urilor, seria de studiu și progresul cursantului",
          "Modurile de recapitulare generează exerciții din greșeli, conținut de încălzire, gramatică, vocabular, test inițial, progres și încercări recente",
        ],
      },
      {
        title: "Administrare și gestionarea conținutului",
        text: "Proiectul include fluxuri protejate de back office care demonstrează o proiectare bazată pe roluri dincolo de interfața cursantului.",
        items: [
          "Colecțiile administrative includ cursuri, niveluri, unități, lecții, quiz-uri și utilizatori",
          "Fluxurile de creare, editare și ștergere folosesc selectoare relaționale pentru cursuri, unități și conținutul lecțiilor",
          "Structura quiz-urilor limitează fiecare quiz la trei întrebări, păstrând experiența administrativă intenționat clară și bine delimitată pentru demo",
        ],
      },
    ],
    apiIntro: {
      eyebrow: "Suprafața backendului",
      title: "Domenii API pentru învățare",
      text: "API-ul Express separă descoperirea publică, fluxurile autentificate ale cursantului și operațiunile de conținut rezervate administratorilor.",
    },
    qualityIntro: {
      eyebrow: "Decizii tehnice",
      title: "Arhitectură, autentificare și persistență",
      text: "Alegerile de implementare fac proiectul util în interviuri deoarece arată limite realiste între interfață, API, autentificare și date.",
    },
    qualitySignals: [
      {
        title: "Arhitectura frontendului",
        text: "Aplicația React este organizată în jurul paginilor de rută, rutelor protejate, componentelor reutilizabile de interfață și layout și accesului centralizat la API.",
        items: [
          "React Router separă rutele publice, cele autentificate ale cursanților, cele rezervate vizitatorilor și cele administrative",
          "Componentele rutelor sunt încărcate întârziat cu React.lazy și Suspense pentru a păstra aplicația modulară",
          "Apelurile API sunt centralizate în src/services/api.js, cu gestionarea consecventă a răspunsurilor",
        ],
      },
      {
        title: "Arhitectura backendului",
        text: "Backendul Express urmează un flux pe niveluri care păstrează separate controllerele, persistența și logica de domeniu.",
        items: [
          "Fluxul cererilor urmează ruta → controller → serviciu/repository/funcție auxiliară → baza de date sau conținut demonstrativ",
          "Modulele funcționale se află în src/modules, alături de configurația comună, poolul bazei de date, middleware, rute și utilitare",
          "Modulele dashboard și recapitulare combină datele testului inițial, progresul, încercările quiz-urilor, planurile de studiu, lecțiile și metadatele gramaticale",
        ],
      },
      {
        title: "Securitate și persistență",
        text: "Autentificarea și starea cursantului sunt responsabilități ale backendului, nu simple verificări ale rutelor în frontend.",
        items: [
          "Parolele sunt protejate cu bcryptjs, tokenurile JWT includ identitatea și rolul, iar autentificarea poate folosi cookie-uri HTTP-only sau bearer token",
          "Middleware-ul backendului atașează utilizatorul curent și protejează rutele cursanților și cele rezervate rolului de administrator",
          "MySQL păstrează utilizatorii, rolurile, testele inițiale, progresul lecțiilor, încercările quiz-urilor, seriile de studiu și planurile, iar colecțiile demonstrative păstrează portabil conținutul catalogului",
        ],
      },
    ],
    media: project.media.map((asset, index) => ({
      ...asset,
      alt: `Captură ${index + 1} din English4U`,
    })),
    links: project.links.map((link) => ({
      ...link,
      label: link.kind === "case-study" ? "Studiu de caz" : link.label,
    })),
  }),
  orchidcare: (project) => ({
    ...project,
    tagline:
      "Enciclopedie a orhideelor axată pe îngrijire, cu profiluri ușor de căutat, filtre, favorite și o colecție de specii rare.",
    summary:
      "O aplicație full-stack pentru îngrijirea orhideelor, realizată cu frontend React și Vite și un API Express cu PostgreSQL. Permite explorarea profilurilor de orhidee, căutarea și filtrarea după nevoile de îngrijire, consultarea paginilor detaliate, salvarea locală a favoritelor, descoperirea speciilor rare și citirea unui ghid pentru începători.",
    role: "Produs full-stack în TypeScript",
    hook: "Un produs practic pentru îngrijirea plantelor, în care datele ușor de căutat, informațiile de cultivare și o experiență calmă de navigare funcționează împreună.",
    strengths: [
      "Experiență de consultare clară și ordonată",
      "Client API și DTO-uri backend tipizate",
      "Căutare și filtre bazate pe nevoile de îngrijire",
      "Date inițiale PostgreSQL cu atribuirea imaginilor",
    ],
    challenge:
      "Crearea unui produs public pentru îngrijirea orhideelor, accesibil începătorilor, dar capabil să reprezinte date structurate precum lumina, udarea, umiditatea, temperatura, perioada de înflorire, raritatea și tipul de creștere.",
    solution:
      "Frontendul organizează descoperirea orhideelor prin rutele pentru pagina principală, explorare, detalii, favorite, colecția rară și ghidul de îngrijire. Backendul livrează date PostgreSQL normalizate printr-un API REST compact, cu filtre de căutare validate, paginare, căutare după slug, metadatele filtrelor, CORS, Helmet, jurnalizarea cererilor și răspunsuri controlate pentru erori.",
    outcome:
      "OrchidCare adaugă portofoliului un studiu de caz bine delimitat și bazat pe date: demonstrează un flux tipizat de la frontend la backend, interogări PostgreSQL, stare locală în client și o suprafață de produs proiectată în jurul deciziilor de îngrijire, nu al operațiunilor CRUD generice.",
    features: [
      "Explorarea profilurilor cu căutare, filtre și paginare",
      "Pagini detaliate cu origine, rădăcini, înflorire și rezumate de îngrijire",
      "Salvarea locală a orhideelor favorite, cu feedback pentru utilizator",
      "Colecție dedicată orhideelor rare",
      "Ghid de îngrijire conceput pentru începători",
    ],
    architecture: [
      "Frontend React Router cu rute pentru pagina principală, explorare, detalii, favorite, colecția rară și ghidul de îngrijire",
      "Client API tipizat pentru cereri JSON și configurarea URL-ului de bază",
      "API Express separat în rute, controllere, servicii, repository-uri și gestionarea erorilor",
      "PostgreSQL stochează orhideele și profilurile lor de îngrijire într-o relație unu-la-unu",
    ],
    metrics: [
      { label: "Rute frontend", value: "6" },
      { label: "Endpointuri API", value: "4" },
      { label: "Bază de date", value: "PostgreSQL" },
    ],
    impactBullets: [
      "Demonstrează proiectarea specifică îngrijirii plantelor, nu încă un dashboard generic.",
      "Arată cum filtrele frontendului se conectează la gestionarea validată a interogărilor în backend.",
      "Adaugă un proiect full-stack bazat pe PostgreSQL, cu un model de date explicat clar.",
    ],
    interviewAngles: [
      "Cum transformă aplicația nevoile de îngrijire a plantelor în date structurate și ușor de căutat.",
      "De ce API-ul expune atât datele listei, cât și metadatele filtrelor pentru a fluidiza experiența de navigare.",
      "Cum susțin favoritele locale MVP-ul, lăsând loc pentru viitoare conturi sincronizate.",
    ],
    repositories: project.repositories?.map((repository, index) => ({
      ...repository,
      label: index === 0 ? "Repository frontend" : "Repository backend",
    })),
    workflowIntro: {
      eyebrow: "Fluxul OrchidCare",
      title: "Decizii de îngrijire, de la căutare la detaliu",
      text: "OrchidCare este structurată pentru persoanele care doresc să identifice plante, să compare nevoile lor, să salveze favorite și să învețe noțiunile de bază fără a crea un cont.",
    },
    workflowHighlights: [
      {
        title: "Explorare și filtre",
        text: "Secțiunea principală a enciclopediei transformă datele despre îngrijirea orhideelor într-un instrument de decizie ușor de consultat, nu într-o galerie statică.",
        items: [
          "Se pot căuta nume și descrieri și filtra rezultatele după dificultate, lumină, apă, tip de creștere și perioada de înflorire",
          "Paginarea păstrează lista lizibilă, iar backendul rămâne sursa datelor actualizate despre orhidee",
          "Metadatele filtrelor provin din API, astfel încât opțiunile interfeței reflectă datele existente în PostgreSQL",
        ],
      },
      {
        title: "Pagini de detaliu orientate spre îngrijire",
        text: "Fluxul de detaliu este conceput pentru înțelegerea nevoilor practice ale plantei, nu doar pentru afișarea informațiilor botanice.",
        items: [
          "Fiecare pagină include originea, rădăcinile, note despre înflorire, rezumatul îngrijirii, raritatea, tipul de creștere și atribuirea imaginii",
          "Rutele bazate pe slug fac profilurile ușor de distribuit și de conectat la comportamentul de căutare al API-ului",
          "Ghidul completează profilurile cu subiecte pentru începători precum lumina, umiditatea, fertilizarea, replantarea și propagarea",
        ],
      },
      {
        title: "Colecție locală",
        text: "MVP-ul folosește o stare simplă în client pentru favorite, păstrând deschisă posibilitatea colecțiilor autentificate în viitor.",
        items: [
          "Hookul `useFavoriteOrchids` salvează orhideele selectate în localStorage, astfel încât favoritele rămân disponibile între vizite",
          "Feedbackul într-o fereastră modală confirmă salvarea și eliminarea fără a întrerupe navigarea",
          "O rută dedicată colecției rare reutilizează același flux API cu filtrul `isRare`",
        ],
      },
    ],
    apiIntro: {
      eyebrow: "Suprafața backendului",
      title: "API specializat pentru enciclopedia orhideelor",
      text: "API-ul Express păstrează intenționat MVP-ul public simplu, cu endpointuri dedicate stării serviciului, listelor, detaliilor după slug și metadatelor filtrelor.",
    },
    qualityIntro: {
      eyebrow: "Decizii tehnice",
      title: "Flux tipizat, validare și rigoare PostgreSQL",
      text: "Punctul forte al OrchidCare este legătura dintre filtrele de îngrijire din frontend, validarea din backend și un model de date normalizat.",
    },
    qualitySignals: [
      {
        title: "Contract tipizat între frontend și API",
        text: "Clientul React modelează direct structura răspunsurilor API, astfel încât cardurile, paginile de detaliu, filtrele și paginarea folosesc DTO-uri TypeScript explicite.",
        items: [
          "Tipurile DTO acoperă elementele listei, detaliile, metadatele filtrelor, paginarea și fiecare filtru de îngrijire disponibil",
          "Clientul API tipizat construiește URLSearchParams pentru căutare, dificultate, lumină, apă, umiditate, temperatură, tip de creștere, înflorire, raritate, pagină și dimensiunea paginii",
          "Rutele frontend corespund clar backendului: explorarea folosește lista și metadatele, detaliile folosesc slugul, iar colecția rară reutilizează filtrele listei",
        ],
      },
      {
        title: "Gestionarea validată a interogărilor API",
        text: "Controllerul verifică valorile interogărilor înainte ca acestea să ajungă la repository și returnează răspunsuri 400 sau 404 controlate pentru datele nevalide.",
        items: [
          "Filtrele enumerate sunt limitate la valorile prevăzute pentru dificultate, lumină, udare, tip de creștere și perioada de înflorire",
          "Umiditatea și temperatura sunt interpretate ca numere finite, iar pagina și dimensiunea ei trebuie să fie numere întregi pozitive",
          "Dimensiunea paginii este limitată la 40, slugurile trebuie să respecte formatul URL cu litere mici, iar detaliile lipsă returnează o eroare 404 structurată",
        ],
      },
      {
        title: "Schema PostgreSQL și siguranța interogărilor",
        text: "Nivelul bazei de date folosește tabele normalizate, constrângeri, indici și interogări `pg` parametrizate pentru modelul public al orhideelor.",
        items: [
          "Schema separă `orchids` de înregistrările unu-la-unu din `orchid_care_profiles`, cu ștergere în cascadă prin cheie externă",
          "Constrângerile protejează formatul slugului, tipul de creștere, dificultatea, lumina, udarea, intervalele de umiditate și temperatură, înflorirea și completitudinea metadatelor imaginilor",
          "Interogările repository-ului folosesc parametri pentru căutare și filtre, plus indici pentru slug, nume, gen, tip de creștere, dificultate, lumină, apă și înflorire",
        ],
      },
      {
        title: "Securitate în execuție și configurare repetabilă",
        text: "Aplicația Express include middleware orientat spre producție și scripturi locale pentru baza de date, ceea ce simplifică rularea și evaluarea proiectului.",
        items: [
          "Helmet, originea CORS configurată, parsarea JSON, jurnalizarea cererilor și gestionarea centralizată a paginilor lipsă și erorilor sunt conectate la nivelul aplicației",
          "`db/schema.sql` și `db/seed.sql` permit o configurare PostgreSQL repetabilă prin `npm run db:reset`",
          "Scripturile de build pentru frontend și backend rulează verificările TypeScript înainte de a produce fișierele pregătite pentru evaluare",
        ],
      },
    ],
    media: project.media.map((asset, index) => ({
      ...asset,
      alt:
        [
          "Pagina principală OrchidCare, cu introducere și funcționalități evidențiate",
          "Pagina de explorare OrchidCare, cu căutare, filtre de îngrijire și carduri de orhidee",
          "Pagina de favorite OrchidCare, cu orhideele salvate",
          "Ghidul de îngrijire OrchidCare, cu recomandări pentru începători despre udare",
          "Pagina de detaliu OrchidCare dedicată orhideei Queen of Sheba",
        ][index] ?? asset.alt,
    })),
    links: project.links.map((link) => ({
      ...link,
      label: link.kind === "case-study" ? "Studiu de caz" : link.label,
    })),
  }),
  brickdrop: (project) => ({
    ...project,
    tagline:
      "Joc rapid și captivant pentru browser, cu finisaje moderne și presiunea clasică a punctajului.",
    summary:
      "O implementare BrickDrop cu React și Vite, care include eliminarea liniilor, progresia nivelurilor, piesă-fantomă, selecție aleatorie prin sistem bag, pauză și stil responsive. Este cea mai imediată demonstrație interactivă din portofoliu.",
    role: "Dezvoltarea frontend a mecanicilor de joc",
    hook: "Un joc compact care arată cum logica solidă de frontend poate deveni imediat jucabilă.",
    strengths: [
      "Logică de joc autonomă",
      "Tranziții clare de stare și punctaj",
      "Potrivit pentru o demonstrație live imediată",
      "Contrast puternic față de proiectele de tip aplicație",
    ],
    challenge:
      "Recrearea unui joc familiar cu o experiență suficient de captivantă, păstrând în același timp codul lizibil și compact.",
    solution:
      "Tabla, mișcarea pieselor, fixarea, eliminarea liniilor și punctajul sunt gestionate direct în componenta aplicației. Implementarea folosește previzualizarea piesei-fantomă, dificultate progresivă pe niveluri și un sistem bag pentru o experiență mai echilibrată.",
    outcome:
      "BrickDrop oferă portofoliului o experiență live imediat verificabilă și demonstrează logică frontend compactă fără a necesita infrastructură backend.",
    features: [
      "Punctaj pentru liniile eliminate și progresia nivelurilor",
      "Previzualizarea piesei-fantomă",
      "Fluxuri de pauză și reluare",
      "Selecția aleatorie a pieselor prin sistem bag",
      "Zonă de joc responsive în browser",
    ],
    architecture: [
      "Aplicație React single-page cu stare de joc autonomă",
      "Funcții auxiliare pure pentru poziționare, rotație, îmbinare și eliminarea liniilor",
      "Build Vite disponibil pentru previzualizare statică",
    ],
    metrics: [
      { label: "Dimensiunea tablei", value: "20 x 10" },
      { label: "Set de tetromino-uri", value: "7" },
      { label: "Tip de distribuție", value: "Static live" },
    ],
    impactBullets: [
      "Adaugă interacțiune imediată portofoliului, dincolo de studiile de caz statice.",
      "Demonstrează abilități de dezvoltare frontend prin mecanici, temporizare și tranziții de stare.",
      "Creează un demo live simplu de testat pentru persoanele care evaluează proiectul.",
    ],
    interviewAngles: [
      "Cum este organizată logica jocului pentru a rămâne lizibilă și a oferi totuși o experiență finisată.",
      "De ce piesa-fantomă, aleatorizarea prin sistem bag și ritmul nivelurilor îmbunătățesc o clonă simplă.",
      "Ce se schimbă atunci când un proiect frontend este optimizat pentru joc direct, nu pentru fluxuri de business.",
    ],
    repositories: project.repositories?.map((repository) => ({
      ...repository,
      label: "Repository-ul jocului",
    })),
    repositoryRoots: project.repositoryRoots?.map((root) => ({
      ...root,
      label: "Proiect",
    })),
    workflowIntro: {
      eyebrow: "Fluxul jocului",
      title: "Sistem compact de puzzle în timp real",
      text: "BrickDrop este un joc frontend mic, dar complet, care combină ciclul de joc, coliziunile, controalele responsive, persistența și feedbackul atent realizat.",
    },
    workflowHighlights: [
      {
        title: "Logica principală a blocurilor în cădere",
        text: "Proiectul implementează mecanicile așteptate de la un joc funcțional de stivuire a blocurilor, fără a se opri la o tablă vizuală.",
        items: [
          "Jocul folosește o tablă standard 10 x 20 cu șapte tetromino-uri: I, O, T, S, Z, J și L",
          "Mișcarea, coliziunile, rotația, fixarea, eliminarea liniilor, pauza, reluarea, hard drop și soft drop sunt gestionate în ciclul jocului",
          "Punctajul acoperă eliminarea uneia, a două, trei sau patru linii, cu avansarea nivelului la fiecare 10 linii și creșterea vitezei",
        ],
      },
      {
        title: "Echitate și sprijin pentru jucător",
        text: "Alegerile mici de mecanică fac această clonă mai completă și plăcută.",
        items: [
          "În locul selecției complet aleatorii este folosit un sistem bag amestecat",
          "Partidele noi evită să înceapă cu piesele S sau Z, îmbunătățind experiența inițială",
          "Proiecția piesei-fantomă și previzualizarea piesei următoare ajută jucătorul să planifice, nu doar să reacționeze",
        ],
      },
      {
        title: "Interacțiune mobile-first",
        text: "Versiunea mobilă este tratată ca o experiență de joc distinctă, nu ca un layout desktop comprimat.",
        items: [
          "Layoutul mobil alocă 60% din partea superioară tablei și 40% din partea inferioară controalelor",
          "Butoanele skeuomorfice mari permit jocul cu degetele mari și susțin mișcarea continuă prin menținerea apăsată a comenzilor stânga sau dreapta",
          "Pauza și reluarea folosesc culori specifice stării, iar acțiunile nevalide sunt dezactivate în timpul pauzei, eliminării liniilor sau stărilor nejucabile",
        ],
      },
    ],
    apiIntro: {
      eyebrow: "Sisteme frontend",
      title: "Suprafețele arhitecturii jocului",
      text: "BrickDrop este un joc frontend static, astfel încât suprafețele tehnice importante sunt logica tablei, temporizarea, inputul, persistența și randarea responsive.",
    },
    apiDomains: [
      "Tabla de joc",
      "Sistem bag pentru tetromino-uri",
      "Previzualizarea piesei următoare",
      "Piesa-fantomă",
      "Verificarea coliziunilor",
      "Eliminarea liniilor",
      "Starea punctajului și nivelului",
      "Stocarea recordului",
      "Input de la tastatură pe desktop",
      "Controale touch pe mobil",
      "Ecran de bun venit",
      "Fereastră de final de joc",
    ],
    qualityIntro: {
      eyebrow: "Decizii tehnice",
      title: "Stare, temporizare, joc responsive și finisare",
      text: "Valoarea pentru interviuri vine din explicarea modului în care starea în timp real, timerele, inputul din browser și constrângerile layoutului mobil rămân ușor de înțeles.",
    },
    qualitySignals: [
      {
        title: "Gestionarea stării",
        text: "Implementarea păstrează puține dependențe, folosind starea și referințele React pentru joc în locul unei biblioteci externe.",
        items: [
          "Tabla, piesa activă, piesa următoare, starea, punctajul, nivelul, liniile, recordul și starea de eliminare sunt separate",
          "Referințele păstrează timerele, animațiile de eliminare, mișcarea continuă și bagul curent de piese",
          "localStorage păstrează recordul sub cheia BrickDrop_high_score între sesiunile browserului",
        ],
      },
      {
        title: "Ciclul jocului și temporizarea",
        text: "Temporizarea este tratată ca o parte centrală a experienței de joc.",
        items: [
          "Căderea automată folosește setInterval în funcție de nivelul curent și accelerează pe măsură ce nivelul crește",
          "Animația de eliminare folosește un timeout înainte de a elimina liniile și de a genera piesa următoare",
          "Pe mobil, mișcarea continuă începe cu un timeout, apoi se repetă la intervale mai rapide și se oprește la eliberare, anulare, pauză sau finalul jocului",
        ],
      },
      {
        title: "Coliziuni și actualizarea tablei",
        text: "Operațiunile principale asupra tablei au denumiri clare și ușor de explicat, simplificând evaluarea proiectului.",
        items: [
          "canPlace centralizează verificarea limitelor și coliziunilor",
          "mergePiece suprapune piesa activă peste tablă, iar clearLines elimină liniile complete și adaugă linii goale în partea superioară",
          "Rotația folosește o transformare a matricei cu încercări simple de corecție lângă pereți",
        ],
      },
      {
        title: "Finisarea produsului și dezvoltări viitoare",
        text: "Proiectul este suficient de finisat pentru a fi jucabil și păstrează îmbunătățiri viitoare bine definite.",
        items: [
          "Ecranele de bun venit și final de joc folosesc același limbaj vizual, cu forme ale pieselor, punctaj, nivel, linii și acțiuni pentru a juca din nou sau a ieși",
          "Sistemul arcade întunecat cu neon folosește panouri cu efect de sticlă, culori luminoase, flashuri la eliminarea liniilor și butoane mobile skeuomorfice",
          "Pașii următori includ teste pentru coliziuni, linii, rotație și selecția inițială, plus feedback haptic, sunete, clasament, suport PWA și corecții de rotație mai complexe",
        ],
      },
    ],
    media: project.media.map((asset, index) => ({
      ...asset,
      alt: `Captură ${index + 1} din BrickDrop`,
    })),
    links: project.links.map((link) => ({
      ...link,
      label:
        link.kind === "live"
          ? "Demo live"
          : link.kind === "case-study"
            ? "Studiu de caz"
            : link.label,
    })),
  }),
  "sea-battle": (project) => ({
    ...project,
    tagline:
      "Bătălie navală pentru un singur jucător, cu IA adaptivă, stil glassmorphism și atenție pentru accesibilitate.",
    summary:
      "O experiență modernă de bătălie navală pentru un singur jucător, realizată cu React, Vite, Framer Motion și Zustand. Include introducere, niveluri de dificultate, poziționarea navelor, efecte, istoric, pauză și o interfață de suport pentru un joc rafinat în browser.",
    role: "Frontend interactiv și sisteme de interfață",
    hook: "Un joc de browser ambițios vizual, care combină sisteme de interfață, animație și gameplay ghidat de IA.",
    strengths: [
      "Cel mai ambițios joc frontend din portofoliu din punct de vedere vizual",
      "IA adaptivă și orchestrare mai complexă a interfeței",
      "Suport pentru accesibilitate și modele de ferestre modale",
      "Documentație pregătită pentru distribuire pe Vercel",
    ],
    challenge:
      "Transformarea unui joc de masă simplu într-un produs captivant pentru browser, cu suficientă profunzime a interfeței, feedback și adaptabilitate responsive pentru a oferi o experiență premium.",
    solution:
      "Aplicația este împărțită în componente și hookuri specializate pentru IA, sunet, comportamentul dialogurilor, blocarea scrollului și fluxul complet al partidei. Această separare permite livrarea unei experiențe complexe fără a concentra totul într-o singură componentă.",
    outcome:
      "Sea Battle devine cel mai puternic studiu de caz vizual exclusiv frontend din portofoliu și un demo live bine finisat, distribuit gratuit pe Vercel.",
    features: [
      "Adversar IA pentru un singur jucător",
      "Introducere, setări și ferestre de pauză",
      "Poziționarea navelor și carduri pentru etapele tablei",
      "Panouri pentru istoric, stare și informații despre luptă",
      "Distribuire responsive potrivită pentru hosting static",
    ],
    architecture: [
      "Sistem de componente React susținut de hookuri personalizate pentru fluxul jocului și IA",
      "Framer Motion folosit pentru finisarea interfeței",
      "Aplicație Vite statică, cu documentație existentă pentru distribuirea pe Vercel",
    ],
    metrics: [
      { label: "Sisteme de joc bazate pe hookuri", value: "5+" },
      { label: "Componente de interfață", value: "15+" },
      { label: "Tip de distribuție", value: "Static live" },
    ],
    impactBullets: [
      "Extinde portofoliul dincolo de aplicațiile de produs către o proiectare mai bogată a interacțiunilor.",
      "Demonstrează un sistem de interfață mai evoluat, cu animație, stări modale și feedback de joc.",
      "Aduce un limbaj frontend mai expresiv în ansamblul portofoliului.",
    ],
    interviewAngles: [
      "Cum susțin hookurile și limitele dintre componente o experiență interactivă mai complexă.",
      "De ce studiile de caz frontend solide pot porni din sisteme de joc, nu doar din aplicații de produs.",
      "Cum distribuirea statică și finisarea interfeței transformă proiectul într-un demo live imediat pentru evaluarea portofoliului.",
    ],
    repositories: project.repositories?.map((repository) => ({
      ...repository,
      label: "Repository-ul jocului",
    })),
    repositoryRoots: project.repositoryRoots?.map((root) => ({
      ...root,
      label: "Proiect",
    })),
    workflowIntro: {
      eyebrow: "Fluxul jocului",
      title: "Ciclu complet și responsive de bătălie navală",
      text: "Sea Battle este un sistem frontend compact, dar complet: regulile, IA, starea, accesibilitatea, animația și layoutul mobil funcționează împreună.",
    },
    workflowHighlights: [
      {
        title: "Experiență completă de bătălie navală",
        text: "Jocul include întregul ciclu așteptat de la o implementare funcțională de bătălie navală pentru un singur jucător.",
        items: [
          "Grilele 10 x 10 ale jucătorului și adversarului folosesc flota standard: portavion, cuirasat, crucișător, submarin și distrugător",
          "Sunt incluse poziționarea manuală, rotația orizontală și verticală, așezarea aleatorie a flotei, turele de tragere, detectarea loviturilor, ratărilor, scufundărilor și victoriei, plus dezvăluirea flotei inamice",
          "Modurile IA Ușor, Mediu și Dificil evoluează de la un joc aleatoriu mai permisiv la o strategie mai eficientă de căutare și țintire",
        ],
      },
      {
        title: "Gameplay responsive și mobile-first",
        text: "Interfața rezolvă problema dificilă de a păstra două grile lizibile, pătrate și ușor de atins pe toate dispozitivele.",
        items: [
          "Configurarea pe telefon în modul portret este simplificată în jurul acțiunilor clare Aleatoriu, Șterge, Joacă și Rotește nava",
          "Telefonul în modul landscape folosește reguli dedicate pentru a păstra ambele table jucabile alăturat",
          "Variabilele CSS dependente de viewport mențin stabile dimensiunile tablei, iar eliminarea timerului live previne oscilațiile headerului pe mobil",
        ],
      },
      {
        title: "Model de interacțiune accesibil",
        text: "Grila este construită pentru a fi jucabilă și ușor de înțeles și dincolo de clicurile mouse-ului.",
        items: [
          "Celulele expun etichete ARIA descriptive cu coordonate și stare",
          "Navigarea din tastatură acceptă săgețile, confirmarea cu Enter sau Space și Escape pentru fluxurile modale",
          "Dialogurile gestionează focusul și blochează scrollul paginii, iar regiunile live anunță starea partidei",
        ],
      },
    ],
    apiIntro: {
      eyebrow: "Sisteme frontend",
      title: "Suprafețele arhitecturii jocului",
      text: "Proiectul este o aplicație frontend statică, astfel încât suprafețele importante sunt starea, IA, randarea, persistența și nivelurile de interacțiune ale browserului.",
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
      "Logica jucătorului IA",
      "Istoric local",
    ],
    qualityIntro: {
      eyebrow: "Decizii tehnice",
      title: "Stare, finisare, accesibilitate și testare",
      text: "Valoarea pentru interviuri vine din separarea regulilor, interfeței, IA, layoutului responsive, persistenței locale, animației și accesibilității.",
    },
    qualitySignals: [
      {
        title: "Separarea stării de logică",
        text: "Jocul este organizat astfel încât componentele interfeței să nu gestioneze direct fiecare regulă.",
        items: [
          "GameProvider și useGameContext conțin starea principală a partidei",
          "useSeaBattleGame gestionează ciclul partidei, tranzițiile de fază, așezarea flotei, turele, istoricul, setările și rezultatele",
          "Regulile tablei, poziționarea, alegerea mutărilor IA, formatarea statisticilor și istoricului, sunetul, dialogurile și blocarea scrollului sunt separate în hookuri și utilitare",
        ],
      },
      {
        title: "Animație și finisarea produsului",
        text: "Mișcarea susține feedbackul de joc și nu este doar decorativă.",
        items: [
          "Framer Motion gestionează tranzițiile ferestrelor, meniurilor, rezultatelor, footerului și interfeței",
          "Animațiile CSS comunică loviturile, ratările, navele scufundate, gândirea adversarului și momentele victoriei",
          "Setările permit controlul sunetului și efectelor ambientale fără a aglomera ecranul de luptă",
        ],
      },
      {
        title: "Persistență și rezultate",
        text: "Jocul reține progresul jucătorului și transformă rezultatul final într-un rezumat util.",
        items: [
          "Stocarea locală păstrează istoricul partidelor, preferințele pentru sunet și efectele de fundal, precum și starea introducerii",
          "Fereastra rezultatelor afișează victoria sau înfrângerea, precizia, mutările, loviturile, ratările, durata misiunii, cea mai bună serie, victoriile salvate, cea mai bună precizie și flota inamică",
          "Acțiunea Joacă din nou revine la selectarea dificultății, permițând alegerea conștientă a unei provocări diferite",
        ],
      },
      {
        title: "Obiectivul testelor",
        text: "Testele se concentrează pe regresiile regulilor principale care ar compromite experiența.",
        items: [
          "Testele Node acoperă poziționarea navelor, completarea flotei necesare, prevenirea tragerilor duplicate și condiția de victorie",
          "Maparea navigării din tastatură și comanda rapidă pentru rotație sunt acoperite ca reguli de interacțiune",
          "Validarea pentru producție este executată prin npm run build",
        ],
      },
    ],
    media: project.media.map((asset, index) => ({
      ...asset,
      alt: `Captură ${index + 1} din Sea Battle`,
    })),
    links: project.links.map((link) => ({
      ...link,
      label:
        link.kind === "live"
          ? "Demo live"
          : link.kind === "case-study"
            ? "Studiu de caz"
            : link.label,
    })),
  }),
  paytrack: (project) => ({
    ...project,
    tagline:
      "Manager de abonamente mobile-first pentru plăți recurente, notificări și o imagine clară asupra cheltuielilor.",
    summary:
      "O aplicație full-stack pentru monitorizarea abonamentelor, care ajută utilizatorii să înțeleagă costurile recurente, datele de reînnoire, etichetele metodelor de plată, istoricul plăților și activitatea notificărilor, fără a deveni un produs bancar complet.",
    role: "Produs full-stack pentru gestionarea abonamentelor",
    hook: "Un asistent calm pentru finanțele personale, care transformă plățile recurente uitate într-un flux clar și mobile-first.",
    strengths: [
      "Proiectare de produs mobile-first",
      "Gestionarea sigură a datelor asociate plăților",
      "Analiză în dashboard și notificări pentru reînnoiri",
      "Internaționalizare în șase limbi",
    ],
    challenge:
      "Crearea unui manager de abonamente bine delimitat și mai simplu decât o aplicație bancară, reprezentând totuși comportamente realiste ale plăților recurente, date autentificate ale utilizatorilor și notificări pentru reînnoiri.",
    solution:
      "Aplicația combină un frontend React/Vite cu un backend Express, Prisma și MySQL. Păstrează metodele de plată ca etichete sigure, folosește autentificare prin cookie-uri HTTP-only, validează cererile cu Zod și organizează produsul în jurul datelor din dashboard, gestionării abonamentelor, istoricului plăților, notificărilor și setărilor.",
    outcome:
      "PayTrack adaugă portofoliului un produs financiar mobile-first, demonstrând arhitectură full-stack, decizii sigure privind datele, analiză, internaționalizare, activități programate și fluxuri de plăți recurente.",
    features: [
      "Dashboard cu cheltuieli lunare, proiecție anuală, numărul abonamentelor active, reînnoiri apropiate și distribuție pe categorii",
      "Operațiuni CRUD pentru abonamente, cu date de reînnoire, frecvența facturării, categorie, stare, eticheta metodei de plată și note",
      "Istoric manual cu valoarea, data, moneda, metoda și notele plății",
      "Istoricul notificărilor, verificări programate ale reînnoirilor și preferințe pentru fiecare abonament",
      "Setări pentru numele afișat, limbă, moneda implicită, fus orar, mod întunecat și gestionarea metodelor de plată personalizate",
      "Resetarea parolei cu token cu expirare și suport pentru livrare prin e-mail",
    ],
    architecture: [
      "Frontendul React comunică exclusiv cu endpointuri REST JSON sub /api",
      "Backendul Express gestionează validarea, logica de business, autentificarea, activitățile notificărilor și accesul la date prin Prisma",
      "Schema Prisma modelează utilizatorii, categoriile, metodele de plată, abonamentele, plățile, jurnalele notificărilor, preferințele și tokenurile pentru resetarea parolei",
      "Pe mobil, navigarea inferioară afișează etichete complete, iar tableta și desktopul folosesc navigare laterală și rezumate mai ample",
      "Configurația de distribuire acceptă origini frontend explicite, cookie-uri cross-site și o gestionare CORS mai strictă",
    ],
    metrics: [
      { label: "Limbi", value: "6" },
      { label: "Domenii API", value: "7" },
      { label: "Ferestre de notificare", value: "2" },
    ],
    impactBullets: [
      "Demonstrează proiectarea full-stack în jurul unei probleme cotidiene legate de bani.",
      "Arată cum pot fi organizate în siguranță informațiile asociate plăților fără a stoca date complete ale cardurilor.",
      "Adaugă portofoliului profunzime responsive mobile-first și internaționalizare.",
    ],
    interviewAngles: [
      "Cum diferă monitorizarea abonamentelor de procesarea reală a plăților și de ce folosirea exclusivă a etichetelor este mai sigură.",
      "De ce fluxurile de arhivare și restaurare sunt preferabile unei ștergeri riscante cu un singur clic pentru istoricul financiar.",
      "Cum funcționează împreună analiza dashboardului, activitățile notificărilor și istoricul plăților într-un produs bine delimitat.",
    ],
    repositories: project.repositories?.map((repository, index) => ({
      ...repository,
      label: index === 0 ? "Repository frontend" : "Repository backend",
    })),
    workflowIntro: {
      eyebrow: "Fluxul abonamentelor",
      title: "Plăți recurente sub control",
      text: "PayTrack își exprimă cel mai bine valoarea ca produs mobile-first care transformă dezordinea abonamentelor în decizii clare despre plățile recurente.",
    },
    workflowHighlights: [
      {
        title: "Dashboard și prezentare generală",
        text: "Dashboardul răspunde rapid la întrebarea principală: cât cheltuiește utilizatorul și ce reînnoiri se apropie?",
        items: [
          "Cheltuielile lunare, proiecția anuală, abonamentele active, reînnoirile apropiate și distribuția cheltuielilor sunt afișate împreună",
          "Abonamentele sunt grupate pe categorii, făcând costurile repetate mai ușor de înțeles",
          "Layouturile responsive păstrează dashboardul util pe mobil, tabletă și desktop",
        ],
      },
      {
        title: "Ciclul de viață al abonamentului",
        text: "Gestionarea abonamentelor acoperă operațiuni reale și repetate, evitând scurtăturile distructive.",
        items: [
          "Utilizatorii pot crea, modifica, anula, arhiva și restaura abonamente cu stările activ, anulat și arhivat",
          "Arhivarea exclude abonamentele din totalurile active și notificări fără a distruge imediat istoricul",
          "Controalele de gestionare reunesc acțiunile importante într-un flux mai conștient",
          "Notificările cu șapte zile și o zi înainte pot fi ajustate pentru fiecare abonament",
        ],
      },
      {
        title: "Etichete și istoricul plăților",
        text: "Aplicația înregistrează contextul plăților fără a gestiona credențiale reale.",
        items: [
          "Metodele de plată sunt etichete simple, precum Visa **** 4242, PayPal sau cont bancar",
          "Funcția de marcare a unei plăți înregistrează valoarea, data, moneda, metoda și notele",
          "Istoricul afișează totalul plătit, numărul plăților, media, ultima dată a plății, următoarea reînnoire și filtrarea după an",
        ],
      },
    ],
    apiIntro: {
      eyebrow: "Suprafața backendului",
      title: "Domenii API pentru monitorizarea abonamentelor",
      text: "API-ul REST separă autentificarea, setările contului, abonamentele, analiza dashboardului, metodele de plată, categoriile și notificările.",
    },
    qualityIntro: {
      eyebrow: "Decizii tehnice",
      title: "Autentificare sigură, validare, notificări și i18n",
      text: "Proiectul este mai convingător atunci când este prezentat ca organizare sigură a plăților recurente, nu ca procesare a plăților.",
    },
    qualitySignals: [
      {
        title: "Autentificare și proprietatea datelor",
        text: "PayTrack protejează datele contului prin sesiuni gestionate de backend și interogări limitate la utilizator.",
        items: [
          "Autentificarea JWT este păstrată în cookie-uri HTTP-only, astfel încât JavaScriptul din frontend nu gestionează direct tokenurile sesiunii",
          "Parolele sunt stocate ca hash și niciodată în clar",
          "Utilizatorii pot accesa doar propriile abonamente, metode de plată, notificări și date de profil",
          "Tokenurile pentru resetarea parolei sunt păstrate pe server, expiră și sunt marcate ca utilizate după confirmare",
        ],
      },
      {
        title: "Validarea și siguranța datelor",
        text: "Aplicația păstrează utile informațiile asociate plăților fără a deveni un procesator de plăți.",
        items: [
          "Zod validează datele cererilor în backend înainte de executarea logicii de business",
          "Metodele de plată păstrează doar etichete, niciodată numere complete de card sau credențiale reale",
          "Ștergerea unei metode de plată necesită confirmare înainte de eliminarea etichetei salvate",
          "Acțiunile sensibile folosesc confirmări sau arhivare, nu eliminare permanentă imediată",
        ],
      },
      {
        title: "Sistemul de notificări și activități programate",
        text: "Activitățile programate și preferințele fac MVP-ul mai apropiat de un asistent real pentru abonamente.",
        items: [
          "node-cron execută verificări programate pentru reînnoirile apropiate",
          "Nodemailer permite trimiterea notificărilor prin e-mail atunci când SMTP este configurat",
          "Jurnalele păstrează un istoric verificabil al notificărilor de reînnoire trimise",
          "Preferințele fiecărui abonament permit dezactivarea anumitor ferestre de notificare",
        ],
      },
      {
        title: "Interfață responsive și internaționalizată",
        text: "Frontendul este proiectat pentru utilizare cotidiană, repetată, pe dispozitive și în limbi diferite.",
        items: [
          "Interfața pornește mobile-first, cu etichete complete în navigare, și se extinde în layouturile pentru tabletă și desktop",
          "i18next acceptă engleza, italiana, germana, franceza, româna și rusa",
          "Modul întunecat, moneda implicită, fusul orar și limba permit personalizarea aplicației",
          "Ultimele finisaje ale frontendului au îmbunătățit textele pentru accesibilitate, claritatea navigării și meniurile personalizate din setări",
        ],
      },
      {
        title: "Testare și distribuire mai robuste",
        text: "Actualizările recente PayTrack au adăugat verificări țintite în zonele cele mai expuse regresiilor.",
        items: [
          "Testele frontend cu node:test verifică formatul etichetelor metodelor de plată și denumirile complete ale navigării în diferite limbi",
          "Testele backend acoperă schemele de autentificare și abonament, comportamentul preferințelor pentru notificări și originile CORS permise",
          "Configurația mediului acceptă mai multe URL-uri frontend pentru distribuiri de previzualizare și producție",
        ],
      },
    ],
    media: project.media.map((asset, index) => ({
      ...asset,
      alt:
        [
          "Dashboardul desktop PayTrack",
          "Pagina desktop a abonamentelor PayTrack",
          "Setările desktop PayTrack",
          "Dashboardul desktop PayTrack în modul luminos",
          "Dashboardul mobil PayTrack",
          "Setările mobile PayTrack",
        ][index] ?? asset.alt,
    })),
    links: project.links.map((link) => ({
      ...link,
      label: link.kind === "case-study" ? "Studiu de caz" : link.label,
    })),
  }),
};

export function getRomanianProject(project: ProjectEntry) {
  return romanianProjectTranslators[project.slug]?.(project) ?? project;
}
