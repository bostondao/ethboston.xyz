"use client";

import React from "react";

export default function page() {
  // calculate screen height
  const screenHeight = window.innerHeight - 48;
  return (
    <div className="overflow pt-12">
      <iframe
        src="https://lu.ma/embed-checkout/evt-ACAGyr9rAg1TZNF"
        width="100%"
        height={screenHeight + `px`}
        style={{ border: "1px solid #bfcbda88", borderRadius: "4px" }}
        aria-hidden="false"
      ></iframe>
    </div>
  );
}
