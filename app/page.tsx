
export default function Home() {
  return (
    <div className="bg-indigo-600 h-screen flex justify-center items-center">
      <div className="bg-white w-96 p-6 rounded-2xl shadow-lg   ">
        <h1 className="text-3xl font-bold text-center"   >Login</h1>
        <div className="mt-3">
          <label htmlFor="username" className="block text-base mb-2 ">Username</label>
          <input type="text" id="username"  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-400" placeholder="Enter Username"/>
        </div>
        <div className="mt-3">
          <label htmlFor="password" className="block text-base mb-2 ">Password</label>
          <input type="password" id="password"  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-400" placeholder="Enter Password"/>
        </div>
        <div className="flex justify-end mt-3">
          <a href="/" className="text-indigo-600 font-semibold text-sm hover:underline hover:decoration-indigo-600 ">Forget Password?</a>
        </div>
        <div className="mt-6 flex justify-center">
          <button className="bg-indigo-600 shadow-lg rounded-md  w-full py-1 px-2 text-center text-white border-indigo-600 border-2 hover:bg-white hover:text-indigo-600">Login</button>
        </div>
        <div className="flex justify-center mt-3">
          <p className="text-center text-gray-400 "> Don't have an account  
            <a href="/signup" className="text-indigo-600 font-semibold text-sm hover:underline hover:decoration-indigo-600 ">   Sign Up</a> </p>
        </div>
      </div>
    </div>
    


  );
}
