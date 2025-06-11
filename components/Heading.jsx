const Heading = ({ title }) => {
  return (
    <section className="mb-5 px-5 py-4">
      <h1 className="text-xl text-black font-bold tracking-tight">{title}</h1>
      <hr className="h-px my-3 w-40 bg-primary border-0 dark:bg-gray-700"></hr>
    </section>
  );
};

export default Heading;
