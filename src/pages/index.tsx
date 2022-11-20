import useSWR from 'swr';

export default function Home() {
  const { mutate, data, error } = useSWR('api/images');
  return (
    <div className="space-y-4 py-10 px-4">
      {data?.images?.map((img: any) => (
        <img
          src={`https://imagedelivery.net/M9q4wVMn9ZCCxsqKW1CbSw/${img.img}/public`}
        />
      ))}
    </div>
  );
}
