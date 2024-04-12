import Image from 'next/image';
import React from 'react';

type Props = {
  imagePath: string,
  title: string,
  description: string,
}

function ServiceCard({ imagePath, title, description }: Props) {
  return (
    <div className={ `service-card flex flex-col` }>
      <Image
        src={ imagePath }
        alt={ `${title} service card` }
        width={64}
        height={64}
      />
      <div>
        <h4>{title}</h4>
        <p>{ description }</p>
      </div>
    </div>
  );
}

export default ServiceCard;