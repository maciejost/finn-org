import { useState } from "react";
import { formatOrganisasjonsnummer } from "@fremtind/jkl-formatters-util";
import { Enhet } from "../data/model";

export const Org = ({ org }: { org: Enhet }) => {
  const [hasCopied, setHasCopied] = useState(false);

  return (
    <button
      className="py-24 px-8 border-border-separator border-2 rounded-xl w-[345px] bg-background-container-low"
      onClick={() => {
        navigator.clipboard.writeText(org.organisasjonsnummer);
        setHasCopied(true);

        setTimeout(() => {
          setHasCopied(false);
        }, 2000);
      }}
    >
      <li className="flex-col gap-8 flex">
        <p className="heading-4">{org.navn}</p>
        <p>
          {org.naeringBeskrivelse} ({org.naeringKode})
        </p>
        {hasCopied ? (
          <p>Kopiert til utklippstavlen</p>
        ) : (
          <p className="font-bold">
            {formatOrganisasjonsnummer(org.organisasjonsnummer)}
          </p>
        )}
      </li>
    </button>
  );
};
