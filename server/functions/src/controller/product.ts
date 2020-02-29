import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const product = functions.https.onRequest(
    async (request, response) => {
        try {
            const snapshot = await admin.firestore().doc('product/1118').get();
            response.send(snapshot.data());
        } catch (error) {
            response.status(500).send(error);
        }
    });
