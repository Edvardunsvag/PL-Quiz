import React from "react";

export default function Input({ handleChange, change, focusing }) {
  return (
    <>
      <div
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <div className="">
          <input
            className="p-2 rounded w-3/4 text-2xl"
            ref={focusing}
            placeholder="Ex. Arsenal"
            onChange={handleChange}
            value={change}
            type="text"
          />
        </div>
      </div>
    </>
  );
}
