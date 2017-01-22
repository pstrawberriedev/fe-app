# fe-app
Front-end JS App via Webpack Boilerplate

### The skinny

**Styles**  
Includes a CSS reset that includes ``box-sizing:border-box``. No grid/bootstrap; no autoprefixer.

**Scripts**  
Includes lodash, moment, gsap, and wetfish-basic (in place of jquery).

**Flow**  
- develop in ``/src``
- JS entry: ``/src/scripts/index.js``
- LESS entry: ``/src/styles/index.js``
- HTML ``/src/index.html`` is copied to ``/dist/index.html``
- Images ``/src/images`` is copied to ``/dist/images``
- ``npm start`` runs a webpack watch
- ``npm run build`` builds into ``/dist``

~ gfhl
