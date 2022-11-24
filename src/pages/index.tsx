import useSWR from 'swr';
import Image from 'next/image';

export default function Home() {
  const { mutate, data, error } = useSWR('api/images');
  return (
    <div className="m-auto flex w-full max-w-lg flex-col items-center space-y-4 bg-black py-10 px-4">
      <div className="w-30 aspect-square animate-spin-slow">
        <img src="/main.png" />
      </div>
      <img src="/title.png" />

      {data?.images?.map((img: any) => (
        <div>
          <img
            src={`https://imagedelivery.net/M9q4wVMn9ZCCxsqKW1CbSw/${img.img}/public`}
          />
        </div>
      ))}
    </div>
  );
}
