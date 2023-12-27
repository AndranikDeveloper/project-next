import React from 'react';

interface IItemProps {
  params: {
    id: number;
  };
}

const Item: React.FC<IItemProps> = ({ params }) => {
  return (
    <div>
      <>{params.id}</>
    </div>
  );
};

export default Item;
