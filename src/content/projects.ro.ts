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
};

export function getRomanianProject(project: ProjectEntry) {
  return romanianProjectTranslators[project.slug]?.(project) ?? project;
}
