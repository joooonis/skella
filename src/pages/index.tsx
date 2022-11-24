import useSWR from 'swr';
import Image from 'next/image';

export default function Home() {
  const { mutate, data, error } = useSWR('api/images');
  return (
    <div className="flex w-full max-w-lg flex-col items-center space-y-4 p-6">
      <div className="mb-2 bg-black">
        <img className="w-full" src="/title.png" />
      </div>
      {data?.images?.map((img: any) => (
        <div className="w-full">
          <img
            src={`https://imagedelivery.net/M9q4wVMn9ZCCxsqKW1CbSw/${img.img}/public`}
          />
        </div>
      ))}
    </div>
  );
}
