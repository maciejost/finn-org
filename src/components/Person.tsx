import { useState } from "react";
import type { Person as PersonType } from "../data";
import { readableStatus } from "../utils/readableStatus";
import { formatFodselsnummer } from "@fremtind/jkl-formatters-util";

export const Person = ({ person }: { person: PersonType }) => {
  const [hasCopied, setHasCopied] = useState(false);

  return (
    <button
      className="p-40 border-border-separator border-2 rounded-xl w-[300px] bg-background-container-low"
      onClick={() => {
        navigator.clipboard.writeText(person.ssn);
        setHasCopied(true);

        setTimeout(() => {
          setHasCopied(false);
        }, 2000);
      }}
    >
      <li className="flex-col gap-8 flex">
        <p className="heading-4">
          {person.firstName} {person.lastName}
        </p>
        <p>
          {readableStatus(person.status)} {readableStatus(person.gender)}
        </p>
        {hasCopied ? (
          <p>Kopiert til utklippstavlen</p>
        ) : (
          <p className="font-bold">{formatFodselsnummer(person.ssn)}</p>
        )}
      </li>
    </button>
  );
};
