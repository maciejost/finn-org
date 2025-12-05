import { useState } from "react";
import { List } from "./components/List";
import { Random } from "./components/Random";
import { Filters } from "./components/Filters";
import orgs from "./data/data.json";
import { Enhetsdata, Organisasjonskode } from "./data/model";
export type Filters = {
  form: Organisasjonskode | "alle";
};

function App() {
  const [view, setView] = useState<"RANDOM" | "LIST">("LIST");
  const [filters, setFilters] = useState<Filters>({
    form: "alle",
  });

  const typedOrgs = orgs as Enhetsdata;

  const filteredOrgs: Enhetsdata = typedOrgs.filter((org) => {
    if (filters.form === "alle") {
      return true;
    }

    if (org.organisasjonsform.kode === filters.form) {
      return true;
    }

    return false;
  });

  return (
    <>
      <Filters
        filters={filters}
        setFilters={setFilters}
        view={view}
        setView={setView}
      />
      <main className="container max-w-[1500px] mx-auto flex items-center justify-center mt-40">
        {view === "RANDOM" && <Random orgs={filteredOrgs} />}
        {view === "LIST" && <List orgs={filteredOrgs} />}
      </main>
    </>
  );
}
export default App;
