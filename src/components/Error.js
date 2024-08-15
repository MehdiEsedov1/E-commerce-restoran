import React from "react";

export default function Error() {
  return (
    <div className="error-page-container">
      <dotlottie-player
        src="https://lottie.host/4034cd78-96d6-4ac2-8b07-4613cd91a172/B2sEEnlWZ0.json"
        background="transparent"
        speed="1"
        style={{
          width: "300px",
          height: "300px",
        }}
        loop
        autoplay
      ></dotlottie-player>
      <p>Page not found</p>
    </div>
  );
}
