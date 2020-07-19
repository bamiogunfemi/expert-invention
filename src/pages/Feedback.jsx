import React from "react";


const Feedback = ({ userCredentials }) => {
  const { displayName } = userCredentials;
  return (
    <article >
      <div className="form-header">
        <h1>Thanks for filling the form {displayName}, We've received Your Feedback!</h1>
      </div>
    </article>
  )
}

export default Feedback;
