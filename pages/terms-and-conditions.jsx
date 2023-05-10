import React from "react";

function TermsAndConditions() {
  return (
    <section className="bg-black w-full h-full p-4 flex flex-col items-center">
      {/* 1 */}
      <div className="w-4/5 text-center border-2 border-white p-4 my-8 rounded-lg">
        <h1 className="font-medium font-oswald text-3xl my-8">T&C Agreement</h1>
        <h3 className="text-xl">
          By agreeing to the terms and conditions by clicking on them, you have
          permitted us to contact you with marketing emails and newsletters. Our
          newsletter service aims to keep our customers and visitors updated
          about resources, blog articles, teaching resources, external
          resources, and websites. The subscription to our newsletter service is
          optional & its frequency at most is two per month.
        </h3>
      </div>
      {/* 2 */}
      <div className="w-4/5 text-center border-2 border-white p-4 my-8 rounded-lg">
        <h1 className="font-medium font-oswald text-3xl my-8">
          Limited Liability
        </h1>
        <h3 className="text-xl">
          The newsletter is subject to modification or termination at any
          moment, with or without prior notice from us. Should we exercise this
          right, neither you nor any other party shall be held accountable. Any
          future features that supplement or improve the current services on
          this site will be subject to these terms of use as well. We retain the
          right to remove users/visitors from our newsletter service at any time
          and without notice. Any subscriber whose data we believe to be false
          will also receive this treatment.
        </h3>
      </div>
      {/* 3 */}
      <div className="w-4/5 text-center border-2 border-white p-4 my-8 rounded-lg">
        <h1 className="font-medium font-oswald text-3xl my-8">
          Choosing to Abstain
        </h1>
        <h3 className="text-xl">
          After registering, you will see a window verifying your membership.
          You are always free to unsubscribe from the newsletter subscription
          list. If you wish to unsubscribe at any given time, please do so by
          using the link at the bottom of the subsequent newsletter you receive.
          Alternatively, please email contact@raptee.com to request to be
          removed from the subscription list. Please feel free to reach out to
          our team and read our Privacy Policy for any additional information.
        </h3>
      </div>
    </section>
  );
}

export default TermsAndConditions;
