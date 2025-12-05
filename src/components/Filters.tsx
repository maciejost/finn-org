import { Select } from "@fremtind/jkl-select-react";
import { Filters as TypeFilters } from "../App";

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
              label: "Tilfeldig person",
              value: "RANDOM",
            },
          ] as { label: string; value: "RANDOM" | "LIST" }[]
        }
      />
      <Select
        name="view"
        value={filters.gender}
        onChange={(e) =>
          setFilters({
            ...filters,
            /* @ts-expect-error dette er riktig */
            gender: e.target.value,
          })
        }
        label="Kjønn"
        items={[
          {
            label: "Alle",
            value: "alle",
          },
          {
            label: "Mann",
            value: "mann",
          },
          {
            label: "Kvinne",
            value: "kvinne",
          },
        ]}
      />
      <Select
        name="view"
        value={filters.status}
        onChange={(e) =>
          setFilters({
            ...filters,
            /* @ts-expect-error dette er riktig */
            status: e.target.value,
          })
        }
        label="Status"
        items={[
          {
            label: "Alle",
            value: "alle",
          },
          {
            label: "Levende",
            value: "levende",
          },
          {
            label: "Død",
            value: "doed",
          },
          {
            label: "Utflyttet",
            value: "utflyttet",
          },
          {
            label: "Midlertidig",
            value: "midlertidig",
          },
        ]}
      />
    </section>
  );
};
