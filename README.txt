1. Start
npm install -g @ionic/cli

2. Create project
ionic start
use app wizard: no
framework: Angular
project name: ionic-search
template: blank

cd ionic-search

ionic serve

3. Customize
rm -fr src/app/home
ionic generate
  page
  name: search

clean up app-routing.module

This is commit "cleaned up initial app"

4. Refine search page

Create contact.model.ts and org.model.ts
Add display of these arrays to the search.page.html
Create search service and inject in search.page.ts

This is commit "hardcoded search with input field"




brew install cocoapods
install xcode from the app store
xcode-select --install

Set up your developer account in Xcode in preferences->Accounts

ionic capacitor add ios
