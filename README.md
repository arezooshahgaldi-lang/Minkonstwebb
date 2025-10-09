# >Min Konstverk
 Jag byggde den här webbplatsen  för att visa och sälja mina tavlor.
På startsidan finns mina tavlor med information om varje motiv samt lite information om mig själv, som också finns under länken About Me.

 Det finns möjlighet att köpa motiv direkt från huvudsidan, alltså under länken Galleri.
I navigeringen har jag gjort en enkel meny som jag planerar att förbättra i framtiden.
Jag har även skapat en miniräknare (mini counter) som visar antalet tavlor som användaren har lagt i varukorgen.

 I headern finns en inloggningsikon där användaren kan skriva in sin e-postadress.
På navigationssidorna finns dessutom en knapp för att gå tillbaka till startsidan.

## Tekniker som används
- **HTML**: Jag har använt semantiska taggar som`<header>, <nav>, <main>, <section>, <article>, <footer>` för att skapa en tydlig struktur.
- **CSS**: Layouten är byggd med Flexbox och Grid för att göra sidan responsiv och anpassad till olika skärmar.
- **JavaScript**: Jag har skrivit funktioner för att hantera kundvagn, hamburger-menyn, och popup-fönstret för inloggning med JavaScript.
Jag har också lagt till en knapp ”Gå till startsidan” för att skapa mer interaktivitet mellan sidorna.

- **ES6**: Jag har använt moderna ES6-funktioner som arrow functions och const/let.

Jag har skapat två separata JavaScript-filer för att hantera kundvagnen:
`cart.js`, som används för att hantera minikorgen eller kundvagne. Den sköter all funktionalitet för att lägga till och ta bort varor och den använder localStorage för att spara innehållet i kundvagnen.Eftersom localStorage inte kan spara objekt direkt använder jag JSON.stringify() för att omvandla objekt till text, och JSON.parse() för att göra om texten tillbaka till objekt.
I `cart.js`används en beräkningsfunktion för att visa antalet tavlor i headern, och en `HOF` '`reduce`' används för att räkna ut total mängd (quantity)."

 `shopping.js`Denna fil hanterar hur kundvagnen visas och uppdateras. I`shopping.js`har jag en `render funktion` som kontrolera kundvagnen med en if-satse även visar det när kundvagnen är tomt .Render gör alltså så att innehållet i kundvagnen alltid är korrekt och uppdaterat för användaren.I den`shopping.js` skapar jag HTML-koden och stilen för varje produkt *dynamiskt*.med hjälp av template literals (t.ex. ${it.image}) för att visa bilder och information direkt från produkten.
 Med samma teknik visar jag antal (${it.qty||1}) och pris per styck (${CART.formatSEK(it.price||0)}).
 På så sätt hämtas och visas produktinformationen automatiskt.


 `script1.js` Denna fil används för startsidan och innehåller funktioner för navigering, meny (menu-toggle) och inloggning.
 Jag skapade en MediaQuery som är sant när fönstret är minst 769px brett (”desktopläge”)En hjälpfunktion stänger den mobila menyn i desktop-läge och uppdaterar aria-expanded till true eller false beroende på om menyn är öppen eller stängd.

 Koden document.querySelectorAll('a[href^="#"]').forEach(...) hittar alla länkar där href börjar med # (ankarlänkar inom samma sida) och stoppar standardbeteendet (att sidan hoppar eller scrollar).

Till sist skapade jag en back-knapp som gör att användaren kan gå tillbaka till startsidan.
Jag skapade även en open-login-funktion som öppnar popup-fönstret när användaren klickar på inloggningslänken.

## Utmaningar och lösningar
En utmaning var att göra galleriet responsivt och snyggt på alla enheter. Det löste jag med media queries och justering av grid-layouten. En annan utmaning var att skapa popup-fönstret på ett säkert sätt, vilket jag löste genom att använda `window.open` med exakta dimensioner och att sätta `noopener`för säkerhet.

Jag lärde mig mycket om responsiv design och hur viktigt det är att testa på olika skärmstorlekar. Om jag skulle göra om projektet skulle jag kanske lägga mer tid på att optimera bilderna för bättre prestanda.

