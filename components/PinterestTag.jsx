/* eslint-disable @next/next/no-img-element */
import Script from "next/script";

const PinterestTag = () => {
  return (
    <>
      {/* Pinterest Tracking Script */}
      <Script
        id="pinterest-tag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(e){if(!window.pintrk){window.pintrk = function () {
          window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
          n=window.pintrk;n.queue=[],n.version="3.0";var
          t=document.createElement("script");t.async=!0;t.src=e;var
          r=document.getElementsByTagName("script")[0];
          r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
          pintrk('load', '2612762497443', {em: '<user_email_address>'});
          pintrk('page');`,
        }}
      />

      {/* NoScript Fallback */}
      <noscript>
        
        
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src="https://ct.pinterest.com/v3/?event=init&tid=2612762497443&pd[em]=<hashed_email_address>&noscript=1"
        />
      </noscript>
    </>
  );
};

export default PinterestTag;
