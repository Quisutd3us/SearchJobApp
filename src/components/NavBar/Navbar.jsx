
function Navbar() {
  return (
      // logo Section
      <div className={'navBar flex justify-between items-center p-[2rem]'}>
        <div className={'logoDiv'}>
          <h1 className={'logo text-[40px] text-blueColor'}>
            <strong>Job</strong> Search
          </h1>
        </div>
        {/*Menu Section*/}
        <div className={'menu flex gap-8'}>
          <li className={'menuList text-[#6f6f6f] hover:text-blueColor'}>Jobs</li>
          <li className={'menuList text-[#6f6f6f] hover:text-blueColor'}>Company</li>
          <li className={'menuList text-[#6f6f6f] hover:text-blueColor'}>About</li>
          <li className={'menuList text-[#6f6f6f] hover:text-blueColor'}>Contact</li>
          <li className={'menuList text-[#6f6f6f] hover:text-blueColor'}>Blog</li>
          <li className={'menuList text-[#6f6f6f] hover:text-blueColor'}>Login</li>
          <li className={'menuList text-[#6f6f6f] hover:text-blueColor'}>Register</li>
        </div>
      </div>
  );
}

export default Navbar;