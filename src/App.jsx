import { useState } from "react";

function App() {
  const [email, setEmail] = useState();
  const [success, setSuccess] = useState(false);

  return (
    <>
      <div className="max-w-[375px] bg-white desktop:max-w-[928px] desktop:rounded-[20px] desktop:p-[20px]">
        {success === false ? (
          <Form
            email={email}
            setEmail={setEmail}
            success={success}
            setSuccess={setSuccess}
          />
        ) : (
          <SuccessMessage email={email} setSuccess={setSuccess} />
        )}
      </div>

      <div className="mt-[45px] text-center text-[14px] text-[#fb7413]">
        Frontend Mentor, coded by Sung Jin Cho
      </div>
    </>
  );
}

function Form({ email, setEmail, setSuccess }) {
  const [wrongEmail, setwrongEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (email === "") return setwrongEmail("empty");
    if (!isEmail(email)) return setwrongEmail("invalid");

    setwrongEmail("");
    setSuccess(true);

    function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email,
      );
    }
  }

  return (
    <form
      className="desktop:flex desktop:gap-[40px]"
      id="form"
      onSubmit={handleSubmit}
    >
      <FormImage />
      <FormText email={email} setEmail={setEmail} wrongEmail={wrongEmail} />
    </form>
  );
}

function FormImage() {
  return (
    <picture className="desktop:order-2">
      <source
        srcSet="/images/illustration-sign-up-desktop.svg"
        media="(min-width: 60em)"
      ></source>
      <img
        src="/images/illustration-sign-up-mobile.svg"
        alt="An application on a tablet displaying a positive chart and number 94"
        className="rounded-bl-[15px]"
      ></img>
    </picture>
  );
}

function CheckImage({ big = false }) {
  return (
    <img
      className={big == false ? "h-[22px] w-[22px]" : "h-[64px] w-[64px]"}
      src="/images/icon-success.svg"
    ></img>
  );
}

function FormText({ email, setEmail, wrongEmail }) {
  return (
    <div className="px-[20px] py-[30px]">
      <h1 className="text-[40px] font-bold desktop:text-[60px]">
        Stay updated!
      </h1>
      <p className="mt-[15px]">
        Join 60,000+ product managers receiving monthly updates on:
      </p>

      <ul
        className="mt-[20px] flex flex-col justify-center gap-[10px] p-0"
        role="list"
      >
        <li className="listitems">
          <CheckImage />
          <p>Product discovery and building what matters</p>
        </li>
        <li className="listitems">
          <CheckImage />
          <p>Measuring to ensure updates are a success</p>
        </li>
        <li className="listitems">
          <CheckImage />
          <p>And much more!</p>
        </li>
      </ul>

      <div className="relative mb-[10px] mt-[40px] flex flex-col gap-[10px]">
        <label className="text-[14px] font-bold" htmlFor="email">
          Email address
        </label>
        <input
          className={`+ rounded-[10px] border border-solid border-neutral-grey px-[20px] py-[15px]
              ${
                wrongEmail != ""
                  ? "border-primary-tomato bg-util text-primary-tomato"
                  : ""
              }`}
          id="email"
          placeholder="email@company.com"
          aria-describedby="email-validation"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <img
          className={
            wrongEmail != ""
              ? "absolute right-[30px] top-[45px] h-[24px] w-[24px]"
              : "hidden"
          }
          src="/images/exclamation.svg"
        ></img>
        <small
          className={
            wrongEmail != ""
              ? "absolute right-0 text-[14px] font-bold text-primary-tomato"
              : "hidden"
          }
          id="email-validation"
          aria-live="assertive"
        >
          {wrongEmail === "empty"
            ? "Email cannot be blank"
            : wrongEmail === "invalid"
              ? "Valid email required"
              : ""}
        </small>
      </div>

      <button
        className="mx-0 my-[10px] w-full cursor-pointer rounded-[10px] border-none bg-neutral-darkslategrey px-[20px] py-[15px] font-bold text-white desktop:hover:bg-gradient-to-t desktop:hover:from-gradients-from desktop:hover:to-gradients-to desktop:hover:shadow-3xl"
        type="submit"
      >
        Subscribe to monthly newsletter
      </button>
    </div>
  );
}

function SuccessMessage({ email, setSuccess }) {
  const big = true;
  return (
    <div className="px-[20px] pb-[20px] pt-[150px] desktop:max-h-[450px] desktop:max-w-[450px] desktop:px-[40px] desktop:py-[20px]">
      <CheckImage big={big} />
      <h2 className="mt-[40px] text-[40px] font-bold leading-[40px] desktop:text-[50px] desktop:leading-[50px]">
        Thanks for subscribing!
      </h2>
      <p className="mt-[30px] text-[16px]">
        A confirmation email has been sent to{" "}
        <strong className="font-bold">{email}</strong>. Please open it and click
        the button inside to confirm your subscription.
      </p>
      <button
        onClick={() => setSuccess(false)}
        className="mx-0 my-[10px] mt-[300px] w-full cursor-pointer rounded-[10px] border-none bg-neutral-darkslategrey px-[20px] py-[15px] font-bold text-white desktop:mt-[30px] desktop:hover:bg-gradient-to-t desktop:hover:from-gradients-from desktop:hover:to-gradients-to desktop:hover:shadow-3xl"
      >
        Dismiss message
      </button>
    </div>
  );
}

export default App;
