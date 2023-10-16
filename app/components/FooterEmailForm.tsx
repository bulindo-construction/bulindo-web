"use client";

import React from "react";

type PropType = {};

const FooterEmailForm: React.FC<PropType> = (props) => {
  const submitEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex flex-col flex-grow gap-4 focus:border"
      onSubmit={(e) => {
        submitEmail(e);
      }}
    >
      <input type="email" placeholder="Alamat email" className="p-2"></input>
      <textarea
        placeholder="Ada pertanyaan?"
        className="flex p-2 resize-none flex-grow-0 lg:flex-grow h-36"
      ></textarea>
      <input
        type="submit"
        className="px-8 py-2 bg-primary-1 text-white-1 self-end cursor-pointer tracking-wider"
        value="KIRIM"
      ></input>
    </form>
  );
};

export default FooterEmailForm;
