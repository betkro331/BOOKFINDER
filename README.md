## BOOKFINDER-API

### Projektbeskrivning: 
Detta Github-repo innehåller projektet BookFinder, ett API som söker efter böcker utifrån kriterier som titel, författare, genre och utgivningsdatum 
samt ger information om böcker och betyg.

### Projektets filer:
I Projektet finns bland annat: \
api.js (som startar upp projektet) \
generate-data.js (som genererar data från fakers.js) \
generate-json.js (som genererar böcker)\
books.js (som innehåller schema, modell och CRUD-routes)

### Starta upp projektet: 
Öppna projektets api.js-fil via t ex VS Code eller Atom. Öppna sedan en tarminal i menyfältet eller genom att trycka ctrl ö (i Windows).
Kommandot som startar upp projektet är: npm run dev

### Databasen bookfinder med MongoDB-cloud som host:
Projektet använder MongoDB Atlas, som är en molntjänst för MongoDB-databaser. Databasens namn är: 'bookfinder'
MongoDB Compass är grafiskt användargränssnitt (GUI) för att hantera MongoDB-databaser och måste vara installerat på din dator för att kunna arbeta med MongoDB-databaser. Kopplingen mellan applikationen och databasen mongoDB sker via min privata URI-länk:
mongodb+srv://bettinakronbk:uuTQkIjIhqHBF3Ms@bookfinder.dxfmw9w.mongodb.net/test

### API-dokumentation:
Projektet har en tillhörande API-dokumentation som bland annat beskriver API:t, dess fördelar, struktur och funktion.
Dokumentationen är word-filen 'BookFinder API documentation' och finns bifogat i detta Github-repo.

### Postman - collections, tester och mock server:
Projektet har använt https://www.postman.com för att genomföra manuella och automatiska tester.
All data är organiserad i två Postman Collecctions: 
1. BOOKFINDER med innehållande tester (manuella och automatiska). Länk till collection:
2. BOOKFINDER MOCKED (med tillhörande Mock Server). Länk till collection: 
3. Bookfinder MS (Mock Servern). Länk till Environment/Mock server:
Länk till Postman Collection: #### GLÖM EJ LÄNKA!!!

### Testrapport:
Bifogat detta Github-repo finns word-filen 'Testrapport Bettina Kron'

### Exempeldata:
Exempeldata i API-servern är hämtad från faker.js.\
Exempeldata i Mockservern är hämtad från chatGPT.

### Projektet är gjort av:
Bettina Kron, PVT22 (2023-04-30)

