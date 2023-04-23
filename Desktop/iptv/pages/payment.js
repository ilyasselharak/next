import React from 'react'

export default function payment (props) {
  return (
    <div>
      {props.user ? (
        <>
          <span>Signed in as : {props.user.email}</span>
          <button onClick={props.signOut}>Sign Out</button>
        </>
      ) : (
        <button onClick={props.signIn}>Sign In</button>
      )}
    </div>
  );
}
