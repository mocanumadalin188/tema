				Tema Cloud

Mocanu Madalin Florentin

In implementarea temei am ales sa folosesc 2 API-uri :
https://pokeapi.co/docs/v2
- Pokemon API , care ne ajuta sa gasim pokemoni si toate detaliile despre ei.
Utilitatea acestui API este in jocurile POKEMON , care sunt la tot pasul.
Un exemplu de astfel de joc online este PokeMMO sau unul offline ar fi Pokemon FireRed.
https://api.chucknorris.io/
- Chuck Norris Jokes API
Utilitatea acestui API devine relevanta atunci cand doresti sa te amuzi legat de
glumele cu privire la Chuck Norris, care sunt de diferite categorii. De altfel, poti
alege diferite categorii pe baza carora sa fii delectat cu anumite glume.
Exemple de request/response:
GET 'https://pokeapi.co/api/v2/pokemon?limit=param' -> aici gasim toti pokemonii vechi,
pe care ii putem apoi cauta pentru a le afla detaliile.
GET 'https://pokeapi.co/api/v2/pokemon/pokemonName' -> aici cautam pokemonul dorit cu toate
detaliile despre acesta(evolutii, miscari, unde apare, versiunea de joc in care este)
GET 'https://api.chucknorris.io/jokes/categories' -> aici luam toate categoriile 
cu glume despre Chuck Norris.
GET 'https://api.chucknorris.io/jokes/random?category=categoryName' -> acest endpoint aduce
o gluma despre Chuck Norris incadrata in categoria selectata.
Flux de date:
Spre exemplu , utilizatorul doreste sa afle datele despre un anumit pokemon.Acesta 
se poate duce sa apeleze un GET sa gaseasca toti pokemonii , iar apoi , dupa ce l-a identificat
pe cel pe care doreste sa il caute , foloseste celalalt endpoint , iar datele ce vin in format JSON
vor fi prelucrate intr-un tabel.
La fel este si cu JokesAPI , dupa ce utilizatorul isi alege o categorie , acesta primeste o gluma
in format JSON pe care o prelucram intr-un tabel mai departe pentru human readability.
