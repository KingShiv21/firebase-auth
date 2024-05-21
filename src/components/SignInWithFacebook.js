import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";

function SignInWithFacebook() {
  function facebookLogin() {

    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      if (result.user) {
        console.log("user", result.user);

        toast.success("User logged in Successfully", {
          position: "top-center",
        });
      }


    });

  }
  return (
    <div>
      <p className="continue-p">--Or continue with--</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={facebookLogin}
      >
        facebook
      </div>
    </div>
  );
}
export default SignInWithFacebook;
