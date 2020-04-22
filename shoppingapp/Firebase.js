import Firebase from './FirebaseConfig';
export function addToFirestore (object){

    Firebase.firestore()
    .collection("Users")
    .add( 
     { uuid: object.uuid,
       name: object.name,
        email: object.email, 
        shippingAddress: object.shippingAddress,
        paymentMethod:object.paymentMethod}
  ).then((data) => addComplete(data))
  }

export function addToFirestore (collection, object) {
    Firebase.firestore()
    .collection(collection)
    .add({object}) 
    .then((snapshot)=>{
        object.id = snapshot.id;
        snapshot.set(object);
      })
  }
  // export const addToFirestore  =(type,object) => {
   
  
  
  //   object.forEach(item => {
  //     const objects = {
       
  //     };
  //    Firebase.firestore().collection(type).add(object);
  
  //   })
  // }

deleteFireStore= (type,key)=>{
    Firebase.firestore().collection(type).doc(key).delete()
}

// updateFirestore = (type,item,field,) => {
//     Firebase.firestore().collection(type).doc(item).update({
//        field: 13,
//         "favorites.color": "Red"
//     });
// }

export async function getFromFirestore(collection,Retrieved){
    var listType=[];
    var snapshot = await Firebase.firestore()
    .collection(collection)
    .get()
    snapshot.forEach((doc) => {
    const item = doc.data();
    item.id = doc.id;
    listType.push(item);
    })
    // console.log(Firebase.auth().currentUser.email);
    Retrieved(listType);
    }