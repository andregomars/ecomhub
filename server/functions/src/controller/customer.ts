import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const customers = functions.https.onRequest((request, response) => {
 response.send("Got customer list");
});

export const customer = functions.https.onRequest((request, response) => {
 response.send("Got a single customer");
});