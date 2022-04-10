import classes from "./newsletter-registration.module.css";
import { useContext, useRef } from "react";
import NotificationContext from "../../store/notification-context";

const NewsletterRegistration = () => {
  const emailRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  const registrationHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    notificationCtx.showNotification({
      title: "Signing up...",
      message: "Registering",
      status: "pending",
    });

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      // pretty bad code example, one of the worst in this course
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.message);
        }
      })
      .then(
        notificationCtx.showNotification({
          title: "Signed up",
          message: "Registered successfully",
          status: "success",
        })
      )
      .catch((err) => {
        notificationCtx.showNotification({
          title: "Error",
          message: err.message || "Something went wrong",
          status: "error",
        });
      });
  };

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterRegistration;
