const GlassBlurContainer = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-50 bg-white backdrop-filter backdrop-blur-lg p-12 rounded-2xl w-[70%]">
      <h1 className="text-3xl font-bold text-center">
        Welcome to
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          {" "}
          My Website
        </span>
      </h1>
      <p className="text-lg text-center mt-4 text-gray-500">
        We&#39;re excited to have you here! Explore our website to discover
        amazing content. <br />
        Feel free to reach out if you have any questions or feedback!
      </p>
    </div>
  );
};

export default GlassBlurContainer;
