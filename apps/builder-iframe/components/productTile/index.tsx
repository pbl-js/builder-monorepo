import { BOB } from '@builder-npm';

const ProductTile: React.FC<{ text: string; price: number }> = ({
  text,
  price,
}) => {
  console.log('pizdunia', text);
  return (
    <div>
      <h1>{text}</h1>
      <p>{price}</p>
    </div>
  );
};

export default ProductTile;
