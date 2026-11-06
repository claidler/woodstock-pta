import { useState } from "react";
import { site } from "../config/site.js";

export default function Logo({ className }) {
  const [src, setSrc] = useState(site.logo);

  return (
    <img
      className={className}
      src={src}
      alt={site.shortName}
      onError={() => {
        if (src !== site.logoFallback) setSrc(site.logoFallback);
      }}
    />
  );
}
