1. Generar alias que permita crear un proyecto base con la siguiente estructura:
- index.html
- css/
    - style.scss
- js/
    - main.js
- assets/

-> alias base1='touch index.html ; mkdir css && touch css/style.scss ; mkdir js && touch js/main.js ; mkdir assets'
-> alias base2='touch index.html && mkdir css && touch css/style.scss && mkdir js && touch js/main.js && mkdir assets'
-> alias base3='touch index.html ; mkdir css && cd && css touch style.scss && cd .. ; mkdir js && cd js && touch main.js ; mkdir assets'

