import React from "react";

export default function Home() {
  return (
    <div>
      {/* Simple Text link */}
      <Link to="/about">Go to Contact Page</Link>
      <Link to="/services">Go to Contact Page</Link>

      {/* Simple Button link */}
      <Link to="/about">
        <button class="btn">About</button>
      </Link>
    </div>
  );
}
