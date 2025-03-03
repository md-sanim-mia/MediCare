const TestimonialCard = () => {
  return (
    <div className=" bg-[#efefef] p-6 rounded-2xl shadow-lg ">
      <div className="flex items-center space-x-2">
        <span className="text-green-400 text-2xl">❝</span>
        <div className="flex">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">
              ★
            </span>
          ))}
          <span className="text-gray-600 text-xl">★</span>
        </div>
      </div>
      <p className="mt-4 text-sm ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        consectetur dolore labore natus similique nemo dolorum accusantium
        adipisci maiores.
      </p>
      <div className="mt-4 flex items-center space-x-3">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="User"
          className="w-10 h-10 rounded-full border-2 border-gray-700"
        />
        <div>
          <h3 className="text-lg font-semibold">John Michel</h3>
          <p className="text-gray-400 text-sm">Web Developer</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
