import React from "react";

const Projects = () => {
  return (
    <>
      <section className="flex min-h-0 flex-col gap-y-3 print:gap-y-1 print-force-new-page scroll-mb-16 print:space-y-4 print:pt-12">
        <h2 className="text-xl font-bold" id="projects">
          Projects
        </h2>
        <div
          className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3"
          role="feed"
          aria-labelledby="projects"
        >
          <article className="h-full">
            <div
              className="rounded-lg bg-card text-card-foreground flex h-full flex-col overflow-hidden border p-3"
              role="article"
            >
              <div className="flex flex-col space-y-1.5">
                <div className="space-y-1">
                  <h3 className="font-semibold tracking-tight text-base">
                    <a
                      href="https://github.com/mushfiqur-rahman/ecommerce"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline"
                      aria-label="Ecommerce project (opens in new tab)"
                    >
                      Ecommerce
                      <span
                        className="size-1 rounded-full bg-green-500"
                        aria-label="Active project indicator"
                      ></span>
                    </a>
                    <div
                      className="hidden font-mono text-xs underline print:visible"
                      aria-hidden="true"
                    >
                      Ecommerce.dev
                    </div>
                  </h3>
                  <p
                    className="text-foreground text-pretty font-mono text-xs print:text-[10px]"
                    aria-label="Project description"
                  >
                    Browser extension for debugging web applications. Includes
                    taking screenshots, screen recording, E2E tests generation
                    and generating bug reports
                  </p>
                </div>
              </div>

              <div className="text-pretty font-mono text-sm text-muted-foreground mt-auto flex">
                <ul
                  className="mt-2 flex list-none flex-wrap gap-1 p-0"
                  aria-label="Technologies used"
                >
                  <li>
                    <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                      python django
                    </div>
                  </li>
                  <li>
                    <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                      JWT
                    </div>
                  </li>
                  <li>
                    <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                      Redis
                    </div>
                  </li>
                  <li>
                    <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                      MySQL
                    </div>
                  </li>
                  <li>
                    <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                      Celery
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </article>
          <article className="h-full">
            <div
              className="rounded-lg bg-card text-card-foreground flex h-full flex-col overflow-hidden border p-3"
              role="article"
            >
              <div className="flex flex-col space-y-1.5">
                <div className="space-y-1">
                  <h3 className="font-semibold tracking-tight text-base">
                    <a
                      href="https://djangoapp-ro69.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline"
                      aria-label="Blog project (opens in new tab)"
                    >
                      Blog
                      <span
                        className="size-1 rounded-full bg-green-500"
                        aria-label="Active project indicator"
                      ></span>
                    </a>
                    <div
                      className="hidden font-mono text-xs underline print:visible"
                      aria-hidden="true"
                    >
                      Blog
                    </div>
                  </h3>
                  <p
                    className="text-foreground text-pretty font-mono text-xs print:text-[10px]"
                    aria-label="Project description"
                  >
                    I built this application in Django and PostgreSQL. It has
                    pagination with infinite scroll, serach option, markdown
                    post format, Tag wise view etc I tested this project using
                    pytest and host it render.com as a free.
                  </p>
                </div>
              </div>

              <div className="text-pretty font-mono text-sm text-muted-foreground mt-auto flex">
                <ul
                  className="mt-2 flex list-none flex-wrap gap-1 p-0"
                  aria-label="Technologies used"
                >
                  <li>
                    <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                      Django
                    </div>
                  </li>
                  <li>
                    <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                      Bootstrap 5.3
                    </div>
                  </li>
                  <li>
                    <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                      HTMX
                    </div>
                  </li>
                  <li>
                    <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                      PostgreSQL
                    </div>
                  </li>
                  <li>
                    <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                      Pytest
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="h-full">
            <div
              className="rounded-lg bg-card text-card-foreground flex h-full flex-col overflow-hidden border p-3"
              role="article"
            >
              <div className="flex flex-col space-y-1.5">
                <div className="space-y-1">
                  <h3 className="font-semibold tracking-tight text-base">
                    <a
                      href="https://minimal-cv-theta.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline"
                      aria-label="Minimalist CV project (opens in new tab)"
                    >
                      Minimalist CV
                      <span
                        className="size-1 rounded-full bg-green-500"
                        aria-label="Active project indicator"
                      ></span>
                    </a>
                    <div
                      className="hidden font-mono text-xs underline print:visible"
                      aria-hidden="true"
                    >
                      minimal-cv
                    </div>
                  </h3>
                  <p
                    className="text-foreground text-pretty font-mono text-xs print:text-[10px]"
                    aria-label="Project description"
                  >
                    An open source minimalist, print friendly CV template with a
                    focus on readability and clean design. GitHub
                  </p>
                </div>
              </div>
              <div className="text-pretty font-mono text-sm text-muted-foreground mt-auto flex">
                <ul
                  className="mt-2 flex list-none flex-wrap gap-1 p-0"
                  aria-label="Technologies used"
                >
                  <li>
                    <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                      JavaScript
                    </div>
                  </li>
                  <li>
                    <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                      Next.js
                    </div>
                  </li>
                  <li>
                    <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                      Tailwind CSS
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Projects;
