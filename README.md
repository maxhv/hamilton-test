## Project info
Name: Max Khvishchuk

Project title: hamilton-test

Dependencies: described in package.json

How to install: use `yarn` command

Steps on how to build and run the application:
 - add your Marvel API public key to `src/api`
 - set `*` for available domains for your Marvel API account
 - use `yarn start` command locally

> Used react-create-app with v16.16.0 node version

## Application improvements:
- added retry if no response from server
- added loader while content is loading
- added common hook in `src/hooks/useApi` which use common logic for requests and updates pagination for both general and search requests
- requests for the same character prevent extra API calls
- search input is debounced, no extra search requests
- series are fetching in parallel using Promise.all

Demo:
https://www.loom.com/share/76e5406cd0a449489e3a43f2a98c5824

> I wasn`t focused on styling, responsiveness and styles decomposition. Realized architecture decomposition, fallbacks and perfomance optimisation instead.

## Can be improved:
- memoized already viewed pages
- spinner, fallbacks in Stories component
- styles decomposition and structure
- for full information can be used separate page using react-router with :id, added pages to architecture
