import "./App.css";
import React, { useEffect, useState } from "react";
import api from '../api/api'
import config from '../config.json'
import TermsOfUse from "../components/TermsOfUse";
import Agenda from "../components/Agenda";

const { initializeApp } = require("firebase/app");
const {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithRedirect
} = require("firebase/auth");

const provider = new GoogleAuthProvider();
const firebaseApp = initializeApp(config.appCredentials);
const auth = getAuth(firebaseApp);

function App() {
  const [user, setUser] = useState();
  const [termsOfUseAccepted, setTermsOfUseAccepted] = useState(false);

  useEffect(() => {

    onAuthStateChanged(auth, user => {

      if (user != null) {
        setUser({ ...user })
        checkTermsOfUser(user)
      } else {
        signInWithRedirect(auth, provider);
      }
    });

  }, [])

  function termsAccepted() {
    api.post("upcreate", { user: user?.email, kind: "TermsOfUse", params: { accepted: true } })
      .then((resp) => {
        setTermsOfUseAccepted(true)
      })
  }

  function checkTermsOfUser(user) {
    api.get("get_all", { params: { user: user?.email, kind: "TermsOfUse" } })
      .then((res) => {
        if(res.data.length > 0){
          setTermsOfUseAccepted(true)
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  return (
    <div className="App">
      {user && !termsOfUseAccepted ? 
        <TermsOfUse termsAccepted={termsAccepted} />
      : undefined}
      {user && termsOfUseAccepted?
        < Agenda user={user} />
      :undefined}
    </div>
  );
}

export default App;
