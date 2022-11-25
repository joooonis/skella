import useSWR from 'swr';
import Image from 'next/image';

export default function Home() {
  const { mutate, data, error } = useSWR('api/images');
  return (
    <div className="itmes-center flex w-full  flex-col space-y-4 p-6 tablet:space-y-8 tablet:p-24">
      <div className="mb-2 flex items-center justify-center bg-black">
        <img className="w-full tablet:w-1/2" src="/title.png" />
      </div>
      {data?.images?.map((img: any) => (
        <div className="flex w-full items-center justify-center">
          <img
            src={`https://imagedelivery.net/M9q4wVMn9ZCCxsqKW1CbSw/${img.img}/public`}
          />
        </div>
      ))}
    </div>
  );
}
