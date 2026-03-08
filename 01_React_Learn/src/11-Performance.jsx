import { useState } from 'react';
import { data } from './Data';
import PropTypes from 'prop-types';

// Main Components
function LowerState() {
  const [people] = useState(data);
  const [count, setCount] = useState(0);
  return (
    <div onClick={() => setCount(count + 1)}>
      <button>count : {count}</button>
      <List people={people} />
    </div>
  );
}
export default LowerState;

// Lists - map data
const List = ({ people }) => {
  console.log('Pass value');
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
List.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })),
};

// Item - show data
const Person = ({ name }) => {
  console.log('render', name);
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};
Person.propTypes = {
  name: PropTypes.string.isRequired,
};
