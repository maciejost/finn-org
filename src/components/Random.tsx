import { useEffect, useState } from "react";
import { PrimaryButton, SecondaryButton } from "@fremtind/jkl-button-react";
import { formatFodselsnummer } from "@fremtind/jkl-formatters-util";
import { Enhetsdata } from "../data/model";

type RandomProps = {
  orgs: Enhetsdata;
};

export const Random: React.FC<RandomProps> = ({ orgs }) => {
  const [org, setOrg] = useState(orgs[Math.floor(Math.random() * orgs.length)]);

  useEffect(() => {
    const onSpace = (e: KeyboardEvent) => {
      if (e.key === " ") {
        navigator.clipboard.writeText(org.organisasjonsnummer);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }
    };
    const onEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        setOrg(orgs[Math.floor(Math.random() * orgs.length)]);
        setCopied(false);
      }
    };

    window.addEventListener("keyup", (e: KeyboardEvent) => {
      onEnter(e);
      onSpace(e);
    });
  }, [orgs, org]);

  useEffect(() => {
    setOrg(orgs[Math.floor(Math.random() * orgs.length)]);
  }, [orgs]);
  const [copied, setCopied] = useState(false);

  if (orgs.length === 0) return <p>Ingen orger</p>;

  return (
    <div className="bg-background-container-low text-center py-40 px-40 rounded-xl flex flex-col gap-24 items-center mt-[128px]">
      <h1 className="title">
        {org.navn} {org.organisasjonsform.kode} ({org.organisasjonsnummer})
      </h1>
      <p className="title-small">
        {org.naeringBeskrivelse} ({org.naeringKode})
      </p>

      <input
        className="p-24 text-center border-background-action border-2 rounded-xl heading-2 text-text-default w-[380px]"
        data-theme="light"
        readOnly
        value={
          copied
            ? "Kopiert til utklippstavlen"
            : formatFodselsnummer(org.organisasjonsnummer)
        }
        onKeyUp={(e) => {
          if (e.key === " ") {
            navigator.clipboard.writeText(org.organisasjonsnummer);
            setCopied(true);

            setTimeout(() => {
              setCopied(false);
            }, 2000);
          }
        }}
        onClick={() => {
          navigator.clipboard.writeText(org.organisasjonsnummer);
          setCopied(true);

          setTimeout(() => {
            setCopied(false);
          }, 2000);
        }}
      />
      <div className="flex gap-24">
        <PrimaryButton
          onClick={() => {
            setOrg(orgs[Math.floor(Math.random() * orgs.length)]);
            setCopied(false);
          }}
        >
          Ny org
        </PrimaryButton>
        <SecondaryButton
          onClick={() => {
            navigator.clipboard.writeText(org.organisasjonsnummer);
            setCopied(true);

            setTimeout(() => {
              setCopied(false);
            }, 2000);
          }}
        >
          Kopier til utklippstavlen
        </SecondaryButton>
      </div>
    </div>
  );
};
