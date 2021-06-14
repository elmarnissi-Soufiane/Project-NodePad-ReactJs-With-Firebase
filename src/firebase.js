
import * as firebase from 'firebase';

var firebaseConfig = {
apiKey: "AIzaSyCXFbMlzcJG83SvDf8XXElXnH49k8fKbC8",
authDomain: "note-app-a4052.firebaseapp.com",
databaseURL: "https://note-app-a4052.firebaseio.com",
projectId: "note-app-a4052",
storageBucket: "note-app-a4052.appspot.com",
messagingSenderId: "75617794957",
appId: "1:75617794957:web:ca3151b45311a1930bdbc4",
measurementId: "G-8FX8SVH8KT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const firebaseDB = firebase.database();

// exporter pour recupere sur les notres fichiers . 
export{
    firebaseDB
}