# Swing-notes-api

# 📝 Swing Notes API

Ett backendprojekt i Node.js/Express med PostgreSQL som gör det möjligt att skapa, läsa, uppdatera och ta bort anteckningar. Användare kan registrera sig, logga in och få tillgång till sina egna anteckningar med hjälp av JWT-autentisering.

---

## 🚀 Funktioner

- Skapa användare och logga in
- Spara, hämta, uppdatera och radera anteckningar
- Sök bland anteckningar via titel (VG-funktion)
- Autentisering med JSON Web Token (JWT)
- Lösenord hashade med bcryptjs
- Data lagras i PostgreSQL
- Swagger-dokumentation

---

## 📁 Projektstruktur

src/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── config/
└── app.js
.env

---

## 🛠️ Installation & start

1. **Kloning & navigering**
   ```bash
   git clone <repo-url>
   cd swing-notes-api

   Installera beroenden

bash
Kopiera
Redigera
npm install

Skapa .env-fil

env
Kopiera
Redigera
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=swing_notes
DB_USER=postgres
DB_PASSWORD=ditt_lösenord
JWT_SECRET=hemlig_nyckel


Initiera databasen (skapa tabeller)
Starta servern så skapas tabeller automatiskt om du använder Sequelize sync():

bash
Kopiera
Redigera
npm start

🌐 API Endpoints
Metod	Endpoint	Beskrivning
POST	/api/user/signup	Skapa konto
POST	/api/user/login	Logga in
GET	/api/notes	Hämta anteckningar
POST	/api/notes	Skapa en anteckning
PUT	/api/notes/:id	Uppdatera en anteckning
DELETE	/api/notes/:id	Ta bort en anteckning
GET	/api/notes/search	Sök anteckningar (VG)

🔐 Alla /api/notes-endpoints kräver JWT-token i Authorization: Bearer <token>

🧪 Testa med Postman
Skapa konto → /api/user/signup

Logga in → /api/user/login

Använd token i Authorization som Bearer Token

Anropa anteckningsendpoints
