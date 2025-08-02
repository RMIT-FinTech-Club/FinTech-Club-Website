function PodcastLibrary() {
  return (
<section>
      <div className="w-screen h-screen bg-gradient-over-image bg-no-repeat bg-center flex items-center justify-center">
        <div className="flex flex-col items-center justify-center max-w-md p-6 rounded-lg text-white text-center space-y-4">
            <h1 className="text-4xl font-bold text-[9vh] text-[#DCB968] drop-shadow-[0_8px_8px_rgba(0,0,0,0.5)] p-6">Fintechtainment</h1>
          <p className="leading-tight font-bold gap-10 text-base line-clamp-6 w-[85vh] text-left p-6 margin-botton-6 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="bg-white text-bluePrimary px-4 py-2 rounded-md hover:bg-yellowCream ">
            Back to Media
          </button>
        </div>
      </div>
      
    </section>

    
  )
  }

export default PodcastLibrary;