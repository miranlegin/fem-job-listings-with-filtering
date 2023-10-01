import { useState } from 'react';

import FilterPanel from './FilterPanel';
import ListCards from './ListCards';

function FilterableCards({ cards }) {
  const [role, setRole] = useState(null);
  const [level, setLevel] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [tools, setTools] = useState([]);
  const [filterCounter, setFilterCounter] = useState(0);

  function filterJobs(role, level, languages, tools) {
    return cards.filter((job) => {
      if (role && job.role !== role) {
        return false;
      }

      if (level && job.level !== level) {
        return false;
      }

      if (
        languages.length > 0 &&
        !languages.every((lang) => job.languages.includes(lang))
      ) {
        return false;
      }

      if (
        tools.length > 0 &&
        !tools.every((tool) => job.tools.includes(tool))
      ) {
        return false;
      }

      return true;
    });
  }

  const filteredJobs = filterJobs(role, level, languages, tools);

  function incrementCounterHandler() {
    setFilterCounter((prevCounter) => prevCounter + 1);
  }

  function decrementCounterHandler() {
    setFilterCounter((prevCounter) => prevCounter - 1);
  }

  function addTagHandler(category, name) {
    let shouldIncrementCounter = false;

    switch (category) {
      case 'role':
        if (name !== role) {
          setRole(name);
          shouldIncrementCounter = true;
        }
        break;
      case 'level':
        if (name !== level) {
          setLevel(name);
          shouldIncrementCounter = true;
        }
        break;
      case 'languages':
        if (!languages.includes(name)) {
          setLanguages([...languages, name]);
          shouldIncrementCounter = true;
        }
        break;
      case 'tools':
        if (!tools.includes(name)) {
          setTools([...tools, name]);
          shouldIncrementCounter = true;
        }
        break;
      default:
        break;
    }

    if (shouldIncrementCounter) {
      incrementCounterHandler();
    }
  }

  function removeTagHandler(category, name) {
    let shouldDecrementCounter = false;

    if (category === 'role') {
      setRole();
      shouldDecrementCounter = true;
    }

    if (category === 'level') {
      setLevel();
      shouldDecrementCounter = true;
    }

    if (category === 'languages') {
      const newLanguages = languages.filter((item) => item !== name);
      setLanguages(newLanguages);
      shouldDecrementCounter = true;
    }

    if (category === 'tools') {
      const newTools = tools.filter((item) => item !== name);
      setTools(newTools);
      shouldDecrementCounter = true;
    }

    if (shouldDecrementCounter) {
      decrementCounterHandler();
    }
  }

  function resetTagsHandler() {
    setRole(null);
    setLevel(null);
    setLanguages([]);
    setTools([]);
    setFilterCounter(0);
  }

  return (
    <>
      {filterCounter > 0 && (
        <FilterPanel
          role={role}
          level={level}
          languages={languages}
          tools={tools}
          filteredJobs={filteredJobs}
          removeTagHandler={removeTagHandler}
          resetTagsHandler={resetTagsHandler}
        />
      )}
      <ListCards cards={filteredJobs} addTagHandler={addTagHandler} />
    </>
  );
}

export default FilterableCards;
