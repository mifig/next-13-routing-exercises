'use client';
import React from 'react';
import { useRouter } from "next/navigation" 
import { ToastContext } from '../../../../components/ToastProvider';

function ContactPage() {
  const { createToast } =
  React.useContext(ToastContext);

  const router = useRouter()

  return (
    <main>
      <form 
        onSubmit={(event) => {
          event.preventDefault()
          router.push("/exercises/02-flash-messages")
          createToast("Message sent!", "success")
        }}
      >
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
