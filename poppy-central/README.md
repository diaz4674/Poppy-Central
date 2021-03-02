# Poppy Central

A banking application to quickly generate banking PDF documents for clients to sign.

## Links
Live Site: 
https://poppy-central.netlify.app/

Back end repo:
https://github.com/diaz4674/poppy-backend

### Features
1. The ability to save project forms via Redux.
2. Extracts data from forms to input to banking PDF documents
3. Easily downloads documents for viewing as PDF to print.

## Tech Stack
+ [React](https://reactjs.org/) is used for UI.
+ [Redux](https://redux.js.org/) was utilized to save dummy data, and for storing new data such as projects. This helped in pushing the saved data to the documents to download.
+ [Material-UI](https://material-ui.com/) assisted in producing quick components and build out front end in a timely fashion.
+ [downloadjs](https://www.npmjs.com/package/downloadjs) is the library used to trigger a PDF file download from the backend.
+ [Axios](https://www.npmjs.com/package/axios) was able to help fetch server data, and send data to retrieve PDF data.
