import { IItem, IItemsData } from '@/types/items-types';
import './style.css';
import Image from 'next/image';
import Link from 'next/link';

async function getData(): Promise<IItem[]> {
  const resp = await fetch(
    'https://jsonplaceholder.typicode.com/photos?_limit=100'
  );
  return resp.json();
}

const Items = async () => {
  const itemsData = await getData();
  return (
    <div className='items'>
      <div className='items-content'>
        {itemsData.map(({ id, title, url }) => (
          <Link href={`/items/${id}`} key={id} className='item'>
            <div className='item-title'>{title}</div>
            <Image src={url} width={70} height={70} alt='item-photo' />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Items;
