import React from "react";

const Summary = () => {
  return (
    <>
      <div id="about" className="flex min-h-0 flex-col py-4">
        <h2 className="text-xl font-bold">About</h2>
        <div className="text-pretty font-mono text-sm print:text-[12px]">
          <p className="py-2">
            I help clients secure, manage, and scale Google Workspace, Microsoft
            365, and Azure environments with confidence. Detail-oriented and
            client-focused, I solve complex IT challenges and build
            future-ready, secure cloud systems.
          </p>

          <p className="py-2">
            If you’re looking for someone who combines day-to-day
            troubleshooting with big-picture cloud strategy, and who genuinely
            cares about making your systems work for you, I’d love to be your
            trusted IT partner.
          </p>
        </div>
      </div>
    </>
  );
};

export default Summary;
