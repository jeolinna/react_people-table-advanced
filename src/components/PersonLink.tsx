import React from 'react';
import { Person } from '../types/Person';
import { Link, useLocation } from 'react-router-dom';

type Props = {
  person: Person | null;
  name?: string | null;
  sex?: string;
};

export const PersonLink: React.FC<Props> = ({ person, name }) => {
  const location = useLocation();

  if (!name) {
    return <>-</>;
  }

  if (person) {
    return (
      <Link
        to={`/people/${person.slug}${location.search}`}
        className={person.sex === 'f' ? 'has-text-danger' : ''}
      >
        {person.name}
      </Link>
    );
  }

  return <span>{name}</span>;
};
