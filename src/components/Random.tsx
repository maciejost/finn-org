import { useEffect, useState } from "react";
import type { Person as PersonType } from "../data";
import { PrimaryButton, SecondaryButton } from "@fremtind/jkl-button-react";
import { readableStatus } from "../utils/readableStatus";
import { formatFodselsnummer } from "@fremtind/jkl-formatters-util";

type RandomProps = {
  people: PersonType[];
};

export const Random: React.FC<RandomProps> = ({ people }) => {
  const [person, setPerson] = useState(
    people[Math.floor(Math.random() * people.length)]
  );

  useEffect(() => {
    const onSpace = (e: KeyboardEvent) => {
      console.log(e.key);
      if (e.key === " ") {
        navigator.clipboard.writeText(person.ssn);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }
    };
    const onEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        setPerson(people[Math.floor(Math.random() * people.length)]);
        setCopied(false);
      }
    };

    window.addEventListener("keyup", (e: KeyboardEvent) => {
      onEnter(e);
      onSpace(e);
    });
  }, [person, people]);

  useEffect(() => {
    setPerson(people[Math.floor(Math.random() * people.length)]);
  }, [people]);
  const [copied, setCopied] = useState(false);

  if (people.length === 0) return <p>Ingen personer</p>;

  return (
    <div className="bg-background-container-low py-40 px-40 rounded-xl flex flex-col gap-24 items-center mt-[128px]">
      <h1 className="title">
        {person.firstName} {person.lastName}
      </h1>
      {(person.status || person.gender) && (
        <p className="title-small">
          {readableStatus(person.status)} {readableStatus(person.gender)}
        </p>
      )}
      <input
        className="p-24 text-center border-background-action border-2 rounded-xl heading-2 text-text-default w-[380px]"
        data-theme="light"
        readOnly
        value={
          copied
            ? "Kopiert til utklippstavlen"
            : formatFodselsnummer(person.ssn)
        }
        onKeyUp={(e) => {
          if (e.key === " ") {
            navigator.clipboard.writeText(person.ssn);
            setCopied(true);

            setTimeout(() => {
              setCopied(false);
            }, 2000);
          }
        }}
        onClick={() => {
          navigator.clipboard.writeText(person.ssn);
          setCopied(true);

          setTimeout(() => {
            setCopied(false);
          }, 2000);
        }}
      />
      <div className="flex gap-24">
        <PrimaryButton
          onClick={() => {
            setPerson(people[Math.floor(Math.random() * people.length)]);
            setCopied(false);
          }}
        >
          Ny person
        </PrimaryButton>
        <SecondaryButton
          onClick={() => {
            navigator.clipboard.writeText(person.ssn);
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
