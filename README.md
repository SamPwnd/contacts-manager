
# Contacts Manager

Contacts Manager è un'applicazione web che consente agli utenti di gestire un elenco di contatti personali. Gli utenti possono aggiungere nuovi contatti, visualizzare, modificare ed eliminare i contatti esistenti. L'applicazione è stata sviluppata utilizzando React per il frontend e l’API REST JSONPlaceholder per simulare le interazioni con il backend.

## Avvio dell'applicazione

Per avviare l'applicazione, segui i passaggi seguenti:

1. Assicurati di avere Node.js installato sul tuo sistema. Puoi scaricarlo da [qui](https://nodejs.org/).

2. Clona il repository del progetto da GitHub:
```bash
git clone https://github.com/SamPwnd/contacts-manager.git
```
3. Naviga nella directory del progetto:
```bash
cd contacts-manager
```
4. Installa le dipendenze del progetto:
```bash
npm install
```
5. Avvia l'applicazione:
```bash
npm run dev
```
6. Apri il tuo browser e vai all'indirizzo `http://localhost:5173` per visualizzare l'applicazione.

## Tecnologie Utilizzate

- **React**: È stato utilizzato per la creazione dell'interfaccia utente dell'applicazione. React offre una gestione efficiente dello stato e un'esperienza di sviluppo più veloce grazie al suo approccio basato sui componenti.
- **React Router**: È stato utilizzato per la gestione delle rotte dell'applicazione e per rendere l'accesso alla pagina dei contatti disponibile solo agli utenti autenticati. React Router permette di definire rotte per diversi URL e di navigare tra di esse senza dover ricaricare la pagina.
- **Redux**: È stato utilizzato per la gestione dello stato di autenticazione.
- **Bootstrap**: È stato utilizzato per lo stile e la progettazione dell'interfaccia utente. Bootstrap fornisce una serie di componenti predefiniti e uno stile CSS predefinito che rende più semplice la creazione di un'interfaccia utente accattivante e responsiva.
- **Axios**: È stato utilizzato per effettuare richieste HTTP verso l'API REST. Axios semplifica la gestione delle richieste e delle risposte HTTP, fornendo un'API semplice e intuitiva.

## Struttura del Progetto

La struttura del progetto è organizzata nel seguente modo:
```
contacts-manager
├─ index.html
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ Api.jsx
│  ├─ App.jsx
│  ├─ App.scss
│  ├─ components
│  │  ├─ ContactsList.jsx
│  │  ├─ CreateContact.jsx
│  │  ├─ EditContact.jsx
│  │  ├─ Header.jsx
│  │  ├─ Login.jsx
│  │  └─ PrivateRoute.jsx
│  ├─ main.jsx
│  └─ store
│     ├─ store.jsx
│     └─ userSlice.jsx
└─ vite.config.js

```
- La cartella `public` contiene i file statici dell'applicazione, come le immagini.
- Il file `vite.config.js` contiene la configurazione per Vite, lo strumento di sviluppo utilizzato per la compilazione e l'esecuzione del progetto React.
-	Il file package.json contiene le informazioni sulle dipendenze del progetto e altre configurazioni importanti relative all'applicazione.
- La cartella `src` contiene il codice sorgente dell'applicazione React.
  - Il file `index.html` è il punto di ingresso dell'applicazione React.
  - Il file `App.jsx` è il componente principale dell'applicazione, che definisce le rotte e la struttura generale dell'interfaccia utente.
  - La cartella `components` contiene i componenti dell'applicazione.
  - Il file `Api.jsx` contiene le funzioni per interagire con l'API REST.
  - Il file `main.jsx` è il punto di ingresso dell'applicazione React.
  - La cartella `store` contiene i file relativi alla gestione dello stato di autenticazione utilizzando Redux.