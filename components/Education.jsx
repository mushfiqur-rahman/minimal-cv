import React from "react";

const Education = () => {
  return (
    <>
      <div className="py-4">
        <section class="flex min-h-0 flex-col gap-y-3">
          <h2 class="text-xl font-bold" id="education-section">
            Education
          </h2>
          <div
            class="space-y-4"
            role="feed"
            aria-labelledby="education-section"
          >
            <article role="article">
              <div class="rounded-lg bg-card text-card-foreground">
                <div class="flex flex-col space-y-1.5">
                  <div class="flex items-center justify-between gap-x-2 text-base">
                    <h3 class="font-semibold leading-none">
                      ILACS(National University)
                    </h3>
                    <div
                      class="text-sm tabular-nums"
                      aria-label="Period: 2012-2016"
                    >
                      2012-2016
                    </div>
                  </div>
                </div>
                <div
                  class="text-pretty font-mono text-sm mt-2 text-foreground/80 print:text-[12px]"
                  aria-labelledby="education-National-University"
                >
                  Bachelor of Science in Computer Science & Engineering
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export default Education;
