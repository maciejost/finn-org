# Finn Person

## Bakgrunn

Denne appen bygger på konseptet bak [folkeregister-person](https://github.com/maciejost/folkeregister-person), og skal fungere som en øvelse og fordypning i håndtering og filtrering av data, det å jobbe med eksterne pakker, og testing.

I filen `src/data/data.ts` er det ~400 personer fra folkeregisteret i følgende format:

```ts
type Person = {
	firstName: string
	lastName: string
	ssn: string
	status?: 'midlertidig' | 'doed' | 'utflyttet'
	gender?: 'mann' | 'kvinne'
}
```

Oppgaven består av å lage en app som presenterer oss med en tilfeldig person fra listen, med mulighet for enkel kopiering av fødselsnummeret, samt filtere for kjønn og status.

## Lokal utvikling

Prosjektet er satt opp som en enkel React + TypeScript app med vite. Tailwind og Jøkul-core er allerede satt opp, men du må selv installere og sette opp alle de resterende pakkene du kommer til å trenge for å få prosjektet i mål.

Prosjektet kan enkelt settes opp til å bli deployet til github-pages, slik at andre kan ta i bruk prosjektet når du er ferdig med det. Den enklere utgaven jeg lagde har gjort det å jobbe med navnelister mye enklere, så jeg har stor tro på at appen du lager her, med muligheter for flere filtere og en penere jøkul-drakt vil være en stor suksess blant teamene våre.

```bash
npm i               # Installere pakker

npm run dev         # Starte appen lokalt

npm run test:watch  # Kjør test-suitten lokalt

npm run test        # Kjør alle tester, og sjekk alle typescript-typer.
```

## Krav

Designet er ikke det viktigste i denne appen, og er noe vi kan se på sammen. Fokuser på å bruke jøkul-komponenter der det gir mening, for å slippe å stresse med å lage alt fra scratch, og ta inspirasjon av våre egne apper når det kommer til layout.

### Landingsside / Tilfeldig person

-   Landingsside som viser frem en tilfeldig person fra listen
-   En knapp for å kopiere fødselsnummeret, og en for å få en ny person
-   Jøkul-select for valg av status, med valgene: `Alle | Midlertidig | Død | Utflyttet`, der `Alle` er default
-   Jøkul-select for valg av kjønn med valgene: `Alle | Kvinne | Mann`, der `Alle` er default
-   Ved endring av filterene filtreres må neste trykk på valget om ny person gi et relevant treff
-   Ved å taste `Enter` hvor som helst på landingssiden kopieres fødselsnummeret
-   Ved å taste `Space` hvor som helst på landingssiden får vi en ny person

### Listevisning

-   En liste av alle tilgjengelige personer i en wrappende flex-container/grid
-   Samme filtere som i landingssiden, som oppdaterer listen fortløpende når endringer gjøres

### Tester

Vi tar en gjennomgang av hvordan teste en app godt sammen, men det er greit å ha i bakhodet hva som bør testes underveis. Ting som at filterne returner en person som matcher det vi spør etter er gode ting å teste.

## Relevante ressurser

-   [Eksempel på Select i bruk](https://github.com/fremtind/bm-testhub-frontend/blob/e15b2790de593ad31b99f539cfa6f14ccaaa308f/app/routes/localhost/route.tsx#L101-L117)
-   [Hvordan filtrere en array basert på en property på objektet ](https://howtodoinjava.com/typescript/array-filter/#3-filter-array-by-object-property)
-   [Eksempel på hvordan kopiere tekst til utklippstavlen](https://github.com/maciejost/folkeregister-person/blob/e46b8851d98a773e53f2f603381c250f3ec938e5/src/components/Random.tsx#L50-L56)
-   [Eksempel på handling av tastetrykk](https://dev.to/akumzy/managing-global-dom-events-in-react-with-hooks-3ckl)
