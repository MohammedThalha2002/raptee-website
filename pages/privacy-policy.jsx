import React from "react";

function PrivacyPolicy() {
  return (
    <section className="bg-black w-full h-full p-4 flex flex-col items-center">
      {/* 1 */}
      <div className="w-4/5 text-center border-2 border-white p-4 my-8 rounded-lg">
        <h1 className="font-medium font-oswald text-3xl my-8">
          WHAT DO WE DO WITH YOUR INFORMATION?
        </h1>
        <h3 className="text-xl">
          When you purchase something from our store, as part of the buying and
          selling process, we collect the personal information you give us such
          as your name, address and email address. When you browse our store, we
          also automatically receive your computer&apos;s internet protocol (IP)
          address in order to provide us with information that helps us learn
          about your browser and operating system. Email marketing (if
          applicable): With your permission, we may send you emails about our
          store, new products and other updates.
        </h3>
      </div>
      {/* 2 */}
      <div className="w-4/5 text-center border-2 border-white p-4 my-8 rounded-lg">
        <h1 className="font-medium font-oswald text-3xl my-8">CONSENT</h1>
        <h3 className="text-xl font-bold my-2">How do you get my consent?</h3>
        <h3 className="text-xl">
          When you provide us with personal information to complete a
          transaction, verify your credit card, place an order, arrange for a
          delivery or return a purchase, we imply that you consent to our
          collecting it and using it for that specific reason only. If we ask
          for your personal information for a secondary reason, like marketing,
          we will either ask you directly for your expressed consent, or provide
          you with an opportunity to say no.
        </h3>
        <h3 className="text-xl font-bold my-2">
          How do I withdraw my consent?
        </h3>
        <h3 className="text-xl">
          If after you opt-in, you change your mind, you may withdraw your
          consent for us to contact you, for the continued collection, use or
          disclosure of your information, at anytime, by contacting us at
          contact@rapteemotors.com or mailing us at: No.51, SIDCO Industrial
          Estate, Thirumazhisai, Chennai - 600 124 SECTION 3 - DISCLOSURE We may
          disclose your personal information if we are required by law to do so
          or if you violate our Terms of Service.
        </h3>
      </div>
      {/* 4 */}
      <div className="w-4/5 text-center border-2 border-white p-4 my-8 rounded-lg">
        <h1 className="font-medium font-oswald text-3xl my-8">PAYMENT</h1>
        <h3 className="text-xl">
          We use Razorpay for processing payments. We/Razorpay do not store your
          card data on their servers. The data is encrypted through the Payment
          Card Industry Data Security Standard (PCI-DSS) when processing
          payment. Your purchase transaction data is only used as long as is
          necessary to complete your purchase transaction. After that is
          complete, your purchase transaction information is not saved. Our
          payment gateway adheres to the standards set by PCI-DSS as managed by
          the PCI Security Standards Council, which is a joint effort of brands
          like Visa, MasterCard, American Express and Discover. PCI-DSS
          requirements help ensure the secure handling of credit card
          information by our store and its service providers. For more insight,
          you may also want to read terms and conditions of razorpay on
          <span className="text-blue-400">
            <a
              href="https://razorpay.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              https://razorpay.com
            </a>
          </span>
        </h3>
      </div>
      {/* 3 */}
    </section>
  );
}

export default PrivacyPolicy;
