
export default function Story({img, username}) {

  return (
    <div className="">
          <img src={img} alt=""
              className="h-14 w-14 rounded-full p-[1.7px] border-2 border-red-500 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out" />
      <p className="w-14 text-xs truncate text-center">{username}</p>
    </div>
  )
}