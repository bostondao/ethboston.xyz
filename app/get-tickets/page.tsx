"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
  // calculate screen height
  const [screenHeight, setScreenHeight] = useState(0);
  useEffect(() => {
    setScreenHeight(window.innerHeight - 48);
  }, []);
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
