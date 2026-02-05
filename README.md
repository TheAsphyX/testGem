Regole del Gioco della Vita di Conway

Il Gioco della Vita è un "gioco a zero giocatori", il che significa che la sua evoluzione è interamente determinata dal suo stato iniziale, senza richiedere ulteriori input umani. L'interazione con il Gioco della Vita avviene creando una configurazione iniziale di "celle" e osservando come questa si evolve nel tempo attraverso una serie di "generazioni".

La griglia di gioco è composta da una serie di celle, ognuna delle quali può essere in due stati: "viva" o "morta". Ogni generazione, lo stato di ciascuna cella viene aggiornato contemporaneamente in base alle condizioni delle sue otto celle vicine (orizzontalmente, verticalmente o diagonalmente).

Le quattro semplici regole di evoluzione sono le seguenti:

1.  **Sopravvivenza (Sottopopolazione):** Qualsiasi cella viva con meno di due vicini vivi muore, come se fosse per sottopopolazione.
2.  **Sopravvivenza (Densità Ottimale):** Qualsiasi cella viva con due o tre vicini vivi sopravvive alla generazione successiva.
3.  **Morte (Sovrappopolazione):** Qualsiasi cella viva con più di tre vicini vivi muore, come se fosse per sovrappopolazione.
4.  **Nascita (Riproduzione):** Qualsiasi cella morta con esattamente tre vicini vivi diventa una cella viva, come se fosse per riproduzione.

Queste regole vengono applicate ad ogni cella della griglia simultaneamente ad ogni passaggio (o "generazione") del gioco. L'aspetto affascinante del Gioco della Vita è come configurazioni iniziali semplici possano portare a comportamenti complessi e imprevedibili.

Alcuni modelli comuni e interessanti includono:

*   **Glider (Aliante):** Un piccolo pattern che si muove "camminando" attraverso la griglia, spostandosi in una direzione specifica dopo un certo numero di generazioni. È un esempio di "nave spaziale".
*   **Oscillatori:** Pattern che ritornano al loro stato originale dopo un numero finito di generazioni, creando un movimento ripetitivo. Esempi includono il "Blinker" o il "Toad".
*   **Still Lifes (Nature Morte):** Pattern che non cambiano affatto da una generazione all'altra, rimanendo statici. Esempi sono il "Block" o la "Bee-hive".
*   **Cannoni Glider:** Configurazioni complesse che generano un flusso continuo di glider.

La presente implementazione ti permette di:

*   **Avvia/Ferma:** Controllare l'andamento della simulazione.
*   **Passo:** Avanzare di una sola generazione alla volta.
*   **Cancella:** Resettare la griglia, rendendo tutte le celle morte.
*   **Casuale:** Generare una griglia iniziale con celle vive e morte posizionate casualmente.
*   **Clicca sulla Tela:** Attivare o disattivare lo stato di una singola cella cliccandoci sopra.
*   **Dimensioni Griglia/Cella:** Modificare la dimensione della griglia (numero di celle per lato) e la dimensione visuale di ogni cella.
*   **Avvio Automatico:** Alla prima apertura della pagina, la griglia viene popolata con un "Glider" che inizia immediatamente a muoversi.
