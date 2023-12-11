// React Component
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { fetchImages } from "../../hooks/useImages";
import { useQuery } from "react-query";
import { useMemo, useRef } from 'react';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';

const Users = () => {
  const { data: listImagesUser, isLoading } = useQuery("images", fetchImages);
  useMemo(()=>{
    console.log("listImagesUser", listImagesUser)
  },[listImagesUser])
;

  const containerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (scrollOffset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="mb-20">
      <div className="check gap-x-20" ref={containerRef}>
        {!isLoading &&
          listImagesUser?.map((item) => (
            <div key={item.name} className="text-center carousel-body">
              <div className="grid place-items-center gap-x-4">
                <img
                  src={item.url}
                  alt={item.name}
                  className="rounded-full w-20 h-20 mb-2"
                />
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-between -mt-20">
        <button
          onClick={() => scroll(-100)}
          className="text-white bg-blue-600 flex items-center justify-center rounded-full"
        >
          <ArrowCircleLeftRoundedIcon/>
        </button>
        <button
          onClick={() => scroll(100)}
          className="text-white bg-blue-600 flex items-center justify-center rounded-full"
        >
          <ArrowCircleRightRoundedIcon/>
        </button>
      </div>
    </div>
  );
};

export default Users;
