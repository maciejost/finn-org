import { Enhetsdata } from "../data/model";
import { Org } from "./Org";

type ListProps = {
  orgs: Enhetsdata;
};

export const List: React.FC<ListProps> = ({ orgs }) => {
  return (
    <div>
      <ul className="flex flex-wrap gap-40 justify-center">
        {orgs.map((org, index) => (
          <Org key={index} org={org} />
        ))}
      </ul>
    </div>
  );
};
