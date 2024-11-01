# iframe-demo
This repo demonstrate the implementation of embedding terrific iframe on localhost.

## local run
```bash
npm i && node index.js
```
Open your browser with the URL of https://localhost:3008


## remarks
1. You'll need to set https on your local, as on terrific.live there is an auto redirect from http to https and it breaks the frame ancestors headers set for localhost.
1. this demo works on Google Chrome and Safari. Other browsers might need adjustment for the local certification for supporting https