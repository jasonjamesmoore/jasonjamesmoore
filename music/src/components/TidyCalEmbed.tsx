import { useCallback, useEffect, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    TidyCal?: {
      init: (element: HTMLElement) => void;
    };
  }
}

type TidyCalEmbedProps = {
  path: string;
};

export function TidyCalEmbed({ path }: TidyCalEmbedProps) {
  const embedRef = useRef<HTMLDivElement | null>(null);
  const initializedForPathRef = useRef<string | null>(null);

  const initialize = useCallback(() => {
    const embedElement = embedRef.current;

    if (!embedElement || initializedForPathRef.current === path) {
      return;
    }

    if (!window.TidyCal?.init) {
      return;
    }

    // TidyCal's current embed script exposes window.TidyCal.init(element).
    // We call it explicitly because Next.js client-side navigation can mount
    // this placeholder after the script's initial one-time DOM scan has run.
    // This API was verified from the current script payload, but appears
    // undocumented and may change in future TidyCal updates.
    window.TidyCal.init(embedElement);
    initializedForPathRef.current = path;
  }, [path]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <>
      <div ref={embedRef} className="tidycal-embed" data-path={path} />
      <Script
        src="https://asset-tidycal.b-cdn.net/js/embed.js"
        strategy="afterInteractive"
        onLoad={initialize}
      />
    </>
  );
}
