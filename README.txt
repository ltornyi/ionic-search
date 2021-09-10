npm install -g @ionic/cli

ionic start
use app wizard: no
framework: Angular
project name: ionic-search
template: blank

cd ionic-search

ionic serve

rm -fr src/app/home
ionic generate
  page
  name: search

clean up app-routing.module
