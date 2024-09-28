interface Props {
  stockPercentage: number;
  slotNumber: number;
  status: 'Available' | 'Not available';
  variety: string;
  stock: number;
}

export default function Slot({
  stockPercentage,
  slotNumber,
  status,
  variety,
  stock,
}: Props) {
  const green = '#1c9058';
  const yellow = '#ffbd59';
  const red = '#ff2b2b';

  const level =
    stockPercentage >= 65 ? 'HIGH' : stockPercentage <= 30 ? 'LOW' : 'MEDIUM';
  let dynamicColor =
    level === 'HIGH' ? green : level === 'MEDIUM' ? yellow : red;

  return (
    <div className="w-48 space-y-2">
      <div className="relative h-64 border border-black">
        <div
          className="w-full absolute bottom-0 left-0"
          style={{
            height: `${stockPercentage}%`,
            backgroundColor: dynamicColor,
            borderTop: stockPercentage > 1 ? '1px solid black' : 0,
          }}
        />
      </div>

      <div className="">
        <h3 className="text-2xl font-medium">Slot {slotNumber}</h3>
        <p className="font-light text-t-light mt-1">
          STATUS:{' '}
          <span className="font-medium" style={{ color: green }}>
            {status}
          </span>
        </p>
        <p className="font-light text-t-light">
          VARIETY:{' '}
          <span className="font-medium" style={{ color: green }}>
            {variety}
          </span>
        </p>
        <p className="font-light text-t-light">
          STOCKS:{' '}
          <span className="font-medium" style={{ color: green }}>
            {`${stock} kg`}
          </span>
        </p>
        <p className="font-light text-t-light mt-1">
          LEVEL:{' '}
          <span className="font-medium" style={{ color: dynamicColor }}>
            {level}
          </span>
        </p>
      </div>
    </div>
  );
}
