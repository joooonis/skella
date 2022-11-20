import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

interface ImgForm {
  img: FileList;
}

export default function Home() {
  const { register, watch, handleSubmit } = useForm<ImgForm>();
  const [imgPreview, setImgPreview] = useState('');
  const img = watch('img');

  useEffect(() => {
    if (img && img.length > 0) {
      const file = img[0];
      setImgPreview(URL.createObjectURL(file));
    }
  }, [img]);

  const onValid = (form: ImgForm) => {
    console.log(form);
  };
  return (
    <form
      onSubmit={handleSubmit(onValid)}
      className="flex w-full flex-col items-center space-y-4 py-10 px-4"
    >
      {imgPreview ? (
        <img src={imgPreview} className=" w-60 rounded-md bg-amber-100" />
      ) : (
        <div className="h-60 w-60 rounded-md bg-amber-100" />
      )}

      <div className="flex items-center space-x-3">
        <label
          htmlFor="picture"
          className="cursor-pointer rounded-md border border-gray-300 py-2 px-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          upload
          <input
            {...register('img')}
            id="picture"
            type="file"
            className="hidden"
            accept="image/*"
          />
        </label>
        <button className="cursor-pointer rounded-md border border-gray-300 py-2 px-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
          send to server
        </button>
      </div>
    </form>
  );
}
