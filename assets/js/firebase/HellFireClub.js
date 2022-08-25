import app from './app.js'
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToHellFireClub(subscription){
    const db = getFirestore(app)
    const hellFireClubCollection = collection(db, 'HellFireClub')

    const docRef = await addDoc(hellFireClubCollection, subscription)

    return docRef.id
}