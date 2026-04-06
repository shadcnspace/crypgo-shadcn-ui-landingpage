import { useState } from "react";

const DocsNav = [
  { id: 1, navItem: "Package Versions", hash: "version" },
  { id: 2, navItem: "Package Structure", hash: "structure" },
  { id: 3, navItem: "Quick Start", hash: "start" },
  { id: 4, navItem: "Project Configuration", hash: "configuration" },
];

const PackageVersions = [
  { id: "1", packageName: "Astro", version: "4.x", emoji: "🚀" },
  { id: "2", packageName: "React", version: "19.x", emoji: "⚛️" },
  { id: "3", packageName: "Tailwindcss", version: "4+", emoji: "🎨" },
  { id: "4", packageName: "TypeScript", version: "5+", emoji: "📘" },
  { id: "5", packageName: "Framer Motion", version: "12.x", emoji: "✨" },
];

const DocNavigation = ({
  navItem,
  setNavItem,
}: {
  navItem: string;
  setNavItem: (v: string) => void;
}) => (
  <div className="flex flex-col gap-0.5 mt-4 items-start">
    {DocsNav.map((item) => (
      <a
        key={item.id}
        href={`#${item.hash}`}
        onClick={() => setNavItem(item.hash)}
        className={`py-2.5 hover:bg-primary/20 hover:text-primary xl:min-w-60 lg:min-w-52 min-w-full px-4 rounded-md text-base font-medium transition-colors ${
          item.hash === navItem ? "bg-primary text-background" : "text-muted/60"
        }`}
      >
        {item.navItem}
      </a>
    ))}
  </div>
);

const Documentation = () => {
  const [navItem, setNavItem] = useState("version");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="bg-background md:pt-0 pt-12">
      <div className="container p-6 lg:pt-44 pt-16">
        <div className="grid grid-cols-12 gap-6">
          {/* Desktop sidebar */}
          <div className="lg:col-span-3 col-span-12 lg:block hidden">
            <div className="fixed pe-4">
              <DocNavigation navItem={navItem} setNavItem={setNavItem} />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 col-span-12">
            {/* Mobile nav toggle */}
            <button
              onClick={() => setMobileNavOpen(true)}
              className="lg:hidden block mb-4 text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>

            {/* Mobile nav overlay */}
            {mobileNavOpen && (
              <div
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setMobileNavOpen(false)}
              >
                <div
                  className="fixed top-0 right-0 h-full w-full max-w-xs bg-background shadow-lg p-6 z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-white">Docs Menu</h2>
                    <button onClick={() => setMobileNavOpen(false)} className="text-white">✕</button>
                  </div>
                  <DocNavigation
                    navItem={navItem}
                    setNavItem={(v) => { setNavItem(v); setMobileNavOpen(false); }}
                  />
                </div>
              </div>
            )}

            {/* Package Versions */}
            <div id="version" className="md:scroll-mt-[180px] scroll-mt-28">
              <h3 className="text-2xl mt-4 font-semibold mb-6 text-white">
                Package Versions (Astro)
              </h3>
              <div className="w-full flex justify-between lg:gap-0 gap-6 lg:flex-nowrap flex-wrap p-6 rounded-md border border-border">
                {PackageVersions.map((item) => (
                  <div
                    key={item.id}
                    className="lg:w-1/5 md:w-full text-center lg:border-b-0 border-b lg:border-e lg:last:border-e-0 last:border-b-0 border-border pb-4 lg:pb-0"
                  >
                    <div className="text-4xl mx-auto w-10 h-10 flex items-center justify-center">
                      {item.emoji}
                    </div>
                    <h5 className="text-2xl font-bold mt-3.5 text-white">{`v${item.version}`}</h5>
                    <p className="text-base font-medium text-muted">{item.packageName}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-2">
                <p className="text-base font-medium text-muted/60">
                  This Crypgo template has been converted to Astro with React islands.
                </p>
                <p className="text-base font-medium text-muted/60">
                  The theme is ready to use and fully customizable per your requirements.
                </p>
                <p className="text-base font-medium text-muted/60">
                  You should have knowledge of Astro, React, Tailwind, and TypeScript to modify this template.
                </p>
              </div>
            </div>

            {/* Package Structure */}
            <div id="structure" className="md:scroll-mt-[130px] scroll-mt-28 mt-10">
              <h3 className="text-2xl font-semibold mt-8 text-white">Package Structure</h3>
              <div className="rounded-md p-6 pt-3 border border-border mt-6 font-mono text-sm">
                <p className="text-muted mt-3 mb-1 font-medium font-sans text-base">Crypgo Astro Template</p>
                <pre className="text-muted/70 leading-7">{`
crypgo-astro/
|— public/
|   |— images/
|— src/
|   |— components/
|   |   |— auth/
|   |   |— documentation/
|   |   |— home/
|   |   |— layout/
|   |   |— ui/
|   |— data/
|   |   |— index.ts
|   |— layouts/
|   |   |— Layout.astro
|   |— pages/
|   |   |— index.astro
|   |   |— documentation/
|   |   |— signin/
|   |   |— signup/
|   |   |— 404.astro
|   |   |— api/
|   |       |— register.ts
|   |— styles/
|       |— global.css
|— astro.config.mjs
|— package.json
|— tsconfig.json
                `.trim()}</pre>
              </div>
            </div>

            {/* Quick Start */}
            <div id="start" className="md:scroll-mt-[180px] scroll-mt-28 pb-10">
              <h3 className="text-white text-2xl font-semibold mt-8">Quick Start</h3>
              <div className="p-6 rounded-md border mt-6 border-border">
                <h6 className="text-white text-lg font-medium">1. Requirements</h6>
                <p className="text-base font-medium text-muted/60">
                  Before proceeding, you need to have the latest stable{" "}
                  <a href="https://nodejs.org/" className="text-primary">node.js</a>
                </p>
                <h6 className="mt-4 mb-2 text-white font-medium text-base">Recommended environment:</h6>
                <ul className="list-disc text-muted/60 ps-6">
                  <li>node js 20+</li>
                  <li>npm 10+</li>
                </ul>
              </div>
              <div className="p-6 rounded-md border mt-6 border-border">
                <h6 className="text-white text-lg font-medium">2. Install</h6>
                <p className="text-base font-medium text-muted/60 mb-4">Open the project folder and install dependencies.</p>
                <div className="py-4 px-3 rounded-md bg-white/5 font-mono">
                  <p className="text-sm text-gray-400"><span className="text-yellow-500">cd</span> crypgo-astro</p>
                  <p className="text-sm text-gray-400 mt-2">npm install</p>
                </div>
              </div>
              <div className="p-6 rounded-md border mt-6 border-border">
                <h6 className="text-white text-lg font-medium">3. Start</h6>
                <p className="text-base font-medium text-muted/60 mb-4">Run the development server.</p>
                <div className="py-4 px-3 rounded-md bg-white/5 font-mono">
                  <p className="text-sm text-gray-400">npm run dev</p>
                </div>
                <p className="text-base font-medium text-muted/60 my-4">
                  Opens at <span className="text-white">http://localhost:4321</span>
                </p>
              </div>
              <div className="p-6 rounded-md border mt-6 border-border">
                <h6 className="text-white text-lg font-medium">4. Build / Deployment</h6>
                <p className="text-base font-medium text-muted/60 mb-4">Build for production:</p>
                <div className="py-4 px-3 rounded-md bg-white/5 font-mono">
                  <p className="text-sm text-gray-400">npm run build</p>
                </div>
              </div>
            </div>

            {/* Configuration */}
            <div id="configuration" className="pb-10 md:scroll-mt-[180px] scroll-mt-28">
              <h3 className="text-2xl font-semibold mt-4 text-white">Project Configuration</h3>
              <div className="mt-6 p-6 rounded-md border border-border">
                <h4 className="text-white text-lg font-medium mb-3">Colors</h4>
                <p className="text-muted/60 mb-4">
                  Colors are defined as CSS variables in <code className="text-primary">src/styles/global.css</code>.
                  Edit the <code className="text-primary">:root</code> block to change the theme.
                </p>
                <div className="py-4 px-3 rounded-md bg-white/5 font-mono text-sm text-gray-400">
                  {`:root {\n  --primary: oklch(84.972% 0.12016 146.073);\n  --secondary: oklch(75.768% 0.125 198.173);\n  --background: oklch(11.359% 0.03282 250.77);\n}`}
                </div>
              </div>
              <div className="mt-6 p-6 rounded-md border border-border">
                <h4 className="text-white text-lg font-medium mb-3">Typography</h4>
                <p className="text-muted/60 mb-4">
                  The default font is <strong className="text-white">DM Sans</strong>, loaded from Google Fonts in <code className="text-primary">src/layouts/Layout.astro</code>.
                </p>
              </div>
              <div className="mt-6 p-6 rounded-md border border-border">
                <h4 className="text-white text-lg font-medium mb-3">Logo</h4>
                <p className="text-muted/60">
                  Replace <code className="text-primary">public/images/logo/logo.svg</code> with your own logo file.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
