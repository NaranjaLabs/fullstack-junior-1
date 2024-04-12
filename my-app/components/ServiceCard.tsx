import Image from 'next/image';
import React from 'react';

type Props = {
  imagePath: string,
  title: string,
  description: string,
  className: string,
}

function ServiceCard({ imagePath, title, description, className }: Props) {
  return (
    <div className={ `service-card flex flex-col justify-between ${className}`  }>
      <Image
        src={ imagePath }
        alt={ `${title} service card` }
        width={64}
        height={64}
      />
      <div className='flex flex-col justify-between'>
        <h4 className='font-medium text-2xl '>{title}</h4>
        <p className='text-lg font-normal text-light-color service-description'>{ description }</p>
      </div>
    </div>
  );
}

export default ServiceCard;