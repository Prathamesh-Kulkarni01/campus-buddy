import {auth, provider} from '../firebase'

export function signInAPI(){
   
    
      
 
        auth.signInWithPopup(provider)
        .then((payload)=>{
            
        }).catch(err=>{
            
        })
   
}