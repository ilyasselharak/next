
const Login = (props) => {
    
  return (
   <>
      {props.user ? (
        <>
          <span>Signed in as : {props.user.email}</span>
          <button onClick={props.signOut}>Sign Out</button>
        </>
      ) : (
        <button onClick={props.signIn}>Sign In</button>
      )}
    </>
  )
}

export default Login