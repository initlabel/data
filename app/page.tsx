import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InitLabel — Full Screen View",
  description:
    "Access the InitLabel platform in a full-screen, distraction-free view.",
  alternates: {
    canonical: "/",
  },
};

const IFRAME_URL = "https://initlabel.iceiy.com/";

export default function HomePage() {
  return (
    <>
      {/* Structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "InitLabel Full Screen View",
            description:
              "Full-screen viewer for the InitLabel platform hosted at initlabel.iceiy.com",
            url: "https://initlabel.com/",
            mainEntity: {
              "@type": "WebSite",
              name: "InitLabel",
              url: "https://initlabel.iceiy.com/",
            },
          }),
        }}
      />
      <main className="iframe-shell">
        <iframe
          src={IFRAME_URL}
          title="InitLabel — Full Screen Content"
          className="iframe-fullscreen"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="eager"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        {/* Fallback for browsers/accessibility */}
        <noscript>
          <div className="noscript-fallback">
            <h1>InitLabel</h1>
            <p>
              JavaScript is disabled. Please visit{" "}
              <a href={IFRAME_URL} rel="noopener noreferrer">
                {IFRAME_URL}
              </a>{" "}
              directly.
            </p>
          </div>
        </noscript>
      </main>
    </>
  );
}
