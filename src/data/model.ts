/**
 * Representerer de unike kodene for organisasjonsformer.
 */
export type Organisasjonskode =
  | "ENK" // Enkeltpersonforetak
  | "BEDR" // Underenhet til næringsdrivende og offentlig forvaltning
  | "AS" // Aksjeselskap
  | "FLI" // Forening/lag/innretning
  | "ANNA" // Annen juridisk person
  | "NUF" // Norskregistrert utenlandsk foretak
  | "AAFY" // Underenhet til ikke-næringsdrivende
  | "ESEK" // Eierseksjonssameie
  | "KS" // Kommandittselskap
  | "ANS" // Ansvarlig selskap med solidarisk ansvar
  | "VPFO" // Verdipapirfond
  | "BA" // Selskap med begrenset ansvar
  | "SA" // Samvirkeforetak
  | "ORGL"; // Organisasjonsledd

/**
 * Representerer de unike næringskodene (SN 2007) funnet i dataene.
 */

/**
 * Representerer en bedriftsadresse.
 */
export interface Forretningsadresse {
  kommune?: string; // Navn på kommunen (valgfritt)
  postnummer?: string; // Postnummer (valgfritt)
  adresse: string[]; // Adressefelt, kan inneholde flere linjer
  kommunenummer?: string; // Kommunenummer (valgfritt)
  poststed?: string; // Poststed (valgfritt)
}

/**
 * Representerer organisasjonsformen til en enhet.
 */
export interface Organisasjonsform {
  kode: Organisasjonskode; // Kort kode for organisasjonsform
  beskrivelse: string; // Full beskrivelse av organisasjonsformen
}

/**
 * Representerer en enkelt enhet (bedrift/foretak) registrert i registeret.
 */
export interface Enhet {
  forretningsadresse: Forretningsadresse;
  naeringBeskrivelse: string[]; // Liste med beskrivelser av næringskoder
  organisasjonsform: Organisasjonsform;
  naeringKode: string[]; // Liste med næringskoder (bruker union type)
  navn: string; // Navnet på enheten
  organisasjonsnummer: string; // Organisasjonsnummer
  registreringsdatoEnhetsregisteret: string; // Registreringsdato i formatet 'YYYY-MM-DD'
}

// Typen for hele datastrukturen er et array av Enhet.
export type Enhetsdata = Enhet[];

export interface OrganisasjonskodeObjekt {
  label: string;
  value: Organisasjonskode;
}

export const ORGANISASJONSKODER: OrganisasjonskodeObjekt[] = [
  {
    label: "Enkeltpersonforetak",
    value: "ENK",
  },
  {
    label: "Underenhet til næringsdrivende og offentlig forvaltning",
    value: "BEDR",
  },
  {
    label: "Aksjeselskap",
    value: "AS",
  },
  {
    label: "Forening/lag/innretning",
    value: "FLI",
  },
  {
    label: "Annen juridisk person",
    value: "ANNA",
  },
  {
    label: "Norskregistrert utenlandsk foretak",
    value: "NUF",
  },
  {
    label: "Underenhet til ikke-næringsdrivende",
    value: "AAFY",
  },
  {
    label: "Eierseksjonssameie",
    value: "ESEK",
  },
  {
    label: "Kommandittselskap",
    value: "KS",
  },
  {
    label: "Ansvarlig selskap med solidarisk ansvar",
    value: "ANS",
  },
  {
    label: "Verdipapirfond",
    value: "VPFO",
  },
  {
    label: "Selskap med begrenset ansvar",
    value: "BA",
  },
  {
    label: "Samvirkeforetak",
    value: "SA",
  },
  {
    label: "Organisasjonsledd",
    value: "ORGL",
  },
];
