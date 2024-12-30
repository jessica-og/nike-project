
import { onAuthStateChanged } from "firebase/auth";



export const handleAuthRedirect = (auth, navigate) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/home");
    } else {
      navigate("/sign-in");
    }
  });
};



