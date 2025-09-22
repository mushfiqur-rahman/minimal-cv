import React from "react";

const Summary = () => {
  return (
    <>
      <div id="about" className="flex min-h-0 flex-col py-4">
        <h2 className="text-xl font-bold">About</h2>
        <div className="text-pretty font-mono text-sm print:text-[12px]">
          <p className="py-2">
            I’m Mushfiqur Rahman, a passionate Web Developer and IT Support
            Engineer dedicated to helping businesses succeed online and behind
            the scenes. With years of experience managing Google Workspace,
            Microsoft 365, DNS configurations, and email migrations, I ensure
            that your IT infrastructure runs smoothly while keeping your team
            productive and secure.
          </p>

          <p className="py-2">
            On the web development side, I build modern, responsive, and
            SEO-optimized websites using Python Django, Next.js, Tailwind CSS,
            React, WordPress ensuring your online presence looks professional
            and performs flawlessly. I combine technical expertise with a
            strategic approach to deliver solutions that not only look great but
            also drive results.
          </p>
          <p className="py-2">
            Whether it’s creating a website that elevates your brand or
            optimizing your IT systems for seamless workflow, I provide tailored
            solutions that save time, reduce stress, and grow your business.
          </p>
          <p className="py-2">
            Let’s connect and turn your ideas into reality, both online and
            behind the scenes.
          </p>
        </div>
      </div>
    </>
  );
};

export default Summary;
