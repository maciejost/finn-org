import { Person } from "./Person";
import type { Person as PersonType } from "../data";
type ListProps = {
  people: PersonType[];
};

export const List: React.FC<ListProps> = ({ people }) => {
  return (
    <div>
      <ul className="flex flex-wrap gap-40 justify-center">
        {people.map((person, index) => (
          <Person key={index} person={person} />
        ))}
      </ul>
    </div>
  );
};
