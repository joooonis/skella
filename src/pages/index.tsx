import useSWR from 'swr';
import Image from 'next/image';

export default function Home() {
  const { mutate, data, error } = useSWR('api/images');
  return (
    <div className="itmes-center flex w-full  flex-col p-6  tablet:p-24">
      <div className="mb-2 flex items-center justify-center bg-black tablet:mb-16">
        <img className="w-full tablet:w-80" src="/title.png" />
      </div>
      <div className="space-y-4 tablet:space-y-8">
        {data?.images?.map((img: any) => (
          <div className="mx-auto flex w-full max-w-2xl items-center justify-center ">
            <img
              src={`https://imagedelivery.net/M9q4wVMn9ZCCxsqKW1CbSw/${img.img}/public`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
