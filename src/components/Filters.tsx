import { Select } from "@fremtind/jkl-select-react";
import { Filters as TypeFilters } from "../App";
import { Organisasjonskode, ORGANISASJONSKODER } from "../data/model.ts";
type FiltersProps = {
  filters: TypeFilters;
  setFilters: React.Dispatch<React.SetStateAction<TypeFilters>>;
  view: "RANDOM" | "LIST";
  setView: React.Dispatch<React.SetStateAction<"RANDOM" | "LIST">>;
};

export const Filters: React.FC<FiltersProps> = ({
  filters,
  setFilters,
  view,
  setView,
}) => {
  return (
    <section className="flex justify-center gap-24 bg-background-container-high py-24 px-40 pb-40 w-fit mx-auto rounded-b-xl ">
      <Select
        name="view"
        value={view}
        /* @ts-expect-error dette er riktig */
        onChange={(e) => setView(e.target.value)}
        label="Visning"
        items={
          [
            {
              label: "Listevisning",
              value: "LIST",
            },
            {
              label: "Tilfeldig organisasjon",
              value: "RANDOM",
            },
          ] as { label: string; value: "RANDOM" | "LIST" }[]
        }
      />
      <Select
        name="view"
        value={filters.form}
        onChange={(e) =>
          setFilters({
            ...filters,
            form: (e.target.value as Organisasjonskode) || "alle",
          })
        }
        label="Selskapsform"
        items={[
          ...ORGANISASJONSKODER,
          {
            label: "Alle",
            value: "alle",
          },
        ]}
      />
    </section>
  );
};
