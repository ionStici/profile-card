export default function Copyright() {
  const year = new Date().getFullYear();

  return (
    <div className="py-4 xs:py-5">
      <p className="text-sm xs:text-base text-center text-slate-400 dark:text-slate-500 transition duration-300">
        <span>&copy; {year} </span>
        <span className="sm:hidden mlg:inline">Ion Stici</span>
      </p>
    </div>
  );
}
