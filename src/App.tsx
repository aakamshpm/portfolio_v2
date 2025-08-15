function App() {
  return (
    <div className="min-h-screen font-[Nunito] bg-black text-white flex justify-center">
      <div className="w-[600px] flex flex-col justify-start p-3">
        {/* Header  */}
        <div className="flex flex-col gap-2 mt-10">
          <img
            src="https://avatars.githubusercontent.com/u/107695722?v=4"
            alt=""
            className="rounded-full w-18"
          />
          <h2 className="text-2xl font-semibold">Aakamsh P M</h2>
          <p className="opacity-60 text-sm">
            SWE who does coding & gaming to escape reality.
          </p>
          <div className="opacity-60 text-base space-y-4 mt-3">
            <p>
              I'm a full-stack developer who builds complete web and mobile
              applications. I focus on writing clean, maintainable code using
              TypeScript and constantly work to bring my projects up to
              enterprise standards.
            </p>
            <p>
              I believe in creating systems that work well today and will
              continue serving users for years to come.
            </p>
          </div>
        </div>

        {/* Projects  */}
        <div className="flex flex-col mt-8 gap-2">
          <h2 className="text-xl font-semibold">Projects</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
