// Imported Icons from React-Icons
import {FaInstagramSquare, FaFacebook, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
      <div
          className={'footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center'}>

        {/*Job Search Resume*/}
        <div>
          <div className={'logoDiv'}>
            <h1 className={'logo text-[40px] text-white pb-[1.5rem]'}>
              <strong>Job</strong> Search
            </h1>
          </div>
          <p className={'text-white , pb-[13px] opacity-70 leading-7'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At esse neque qui? Amet exercitationem hic impedit
            labore natus perferendis quisquam repellendus unde voluptatibus?
          </p>
        </div>

        {/*company links*/}
        <div className={'grid ml-[3rem]'}>
          <span className={'divTitle text-[18px] font-semibold pb-[1.5rem] text-white'}>Company</span>
          <div className={'grid gap-3'}>
            <li className={'text-white opacity-[.7] hover:opacity-[1]'}>About Us</li>
            <li className={'text-white opacity-[.7] hover:opacity-[1]'}>Features</li>
            <li className={'text-white opacity-[.7] hover:opacity-[1]'}>News</li>
            <li className={'text-white opacity-[.7] hover:opacity-[1]'}>FAQ</li>
          </div>
        </div>
        {/*Resources links*/}
        <div className={'grid'}>
          <span className={'divTitle text-[18px] font-semibold pb-[1.5rem] text-white'}>Resources</span>
          <div className={'grid gap-3'}>
            <li className={'text-white opacity-[.7] hover:opacity-[1]'}>Account</li>
            <li className={'text-white opacity-[.7] hover:opacity-[1]'}>Support Center</li>
            <li className={'text-white opacity-[.7] hover:opacity-[1]'}>FeedBack</li>
            <li className={'text-white opacity-[.7] hover:opacity-[1]'}>Contact Us</li>
          </div>
        </div>
        {/*Support links*/}
        <div className={'grid'}>
          <span className={'divTitle text-[18px] font-semibold pb-[1.5rem] text-white'}>Support</span>
          <div className={'grid gap-3'}>
            <li className={'text-white opacity-[.7] hover:opacity-[1]'}>Events</li>
            <li className={'text-white opacity-[.7] hover:opacity-[1]'}>Promo</li>
            <li className={'text-white opacity-[.7] hover:opacity-[1]'}>Request Demo</li>
            <li className={'text-white opacity-[.7] hover:opacity-[1]'}>Careers</li>
          </div>
        </div>
        {/*Contact links*/}
        <div className={'grid'}>
          <span className={'divTitle text-[18px] font-semibold pb-[1.5rem] text-white'}>Contact Info</span>
          <div>
            <small className={'text-[14px] text-white'}>
              dnarino@gmail.com
            </small>
            <div className={'icons flex gap-4 py-[1rem]'}>
              <FaInstagramSquare className={'bg-white p-[8px] h-[35px] w-[35px] rounded-full text-blueColor opacity-[1] hover:opacity-[0.7]'}/>
              <FaFacebook className={'bg-white p-[8px] h-[35px] w-[35px] rounded-full text-blueColor opacity-[1] hover:opacity-[0.7]'}/>
              <FaLinkedin className={'bg-white p-[8px] h-[35px] w-[35px] rounded-full text-blueColor opacity-[1] hover:opacity-[0.7]'}/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer;