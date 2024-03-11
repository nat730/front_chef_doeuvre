import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  paths: { label: string; url: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ paths }) => {
  return (
    <div>
      {paths.map((path, index) => (
        <span key={index}>
          <Link to={path.url}>{path.label}</Link>
          {index < paths.length - 1 && <span> &gt; </span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
