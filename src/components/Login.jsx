
const Login = () => {
  return (
    <div className="w-11/12 mx-auto mt-4 bg-[#FFFFFF] flex justify-center items-center">
    <div className="card bg-base-100 min-h-screen max-w-lg w-full shrink-0 shadow-2xl p-10">
      <h2 className="font-semibold text-center">Login to your Acount</h2>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
</div>

  );
};

export default Login;