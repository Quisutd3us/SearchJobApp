
// Imported Icons from React-Icons
import {BiTimeFive} from 'react-icons/bi'

// Imported Images

import logoLine from '../../Assets/line.png'
import logoAdobe from '../../Assets/adobe.png'
import logoChat from '../../Assets/chat.png'
import logoEA from '../../Assets/electronics-arts.png'
import logoHuawei from '../../Assets/huawei.png'
import logoSimple from '../../Assets/simple.png'
import logoSkull from '../../Assets/skull.png'
import logoVk from '../../Assets/vk.png'
import logoShield from '../../Assets/shield.png'
import logoPaper from '../../Assets/paper-plane.png'


// Function that generate and return a random Id's for Jobs
const idGen = () => {
  const random = Math.random().toString(36).substring(2)
  const dateNow = Date.now().toString(36)
  return random + dateNow
};
// Simulate DB
const DB = [
  {
    id: idGen(),
    image: logoLine,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio soluta tenetur voluptas!',
    company: 'Novac Limit Co.'
  },
  {
    id: idGen(),
    image: logoAdobe,
    title: 'Designer',
    time: 'Now',
    location: 'Colombia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio soluta tenetur voluptas!',
    company: 'All Design Co.'
  },
  {
    id: idGen(),
    image: logoChat,
    title: 'Backend',
    time: 'Now',
    location: 'EEUU',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio soluta tenetur voluptas!',
    company: 'Ai company.'
  },{
    id: idGen(),
    image: logoEA,
    title: 'Origin Dev',
    time: 'Now',
    location: 'London',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio soluta tenetur voluptas!',
    company: 'EA Sports.'
  },{
    id: idGen(),
    image: logoHuawei,
    title: 'Cisco CIIA',
    time: 'Now',
    location: 'London',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio soluta tenetur voluptas!',
    company: 'Huawei.'
  },{
    id: idGen(),
    image: logoSimple,
    title: 'FrontEnd Dev React',
    time: 'Now',
    location: 'Colombia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio soluta tenetur voluptas!',
    company: 'Simple Ltda.'
  },{
    id: idGen(),
    image: logoVk,
    title: 'FrontEnd Dev Vue-js ReactJs',
    time: 'Now',
    location: 'Colombia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio soluta tenetur voluptas!',
    company: 'Vk International.'
  },{
    id: idGen(),
    image: logoSkull,
    title: 'FullStack NodeJs MongoDb',
    time: 'Now',
    location: 'Panama',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio soluta tenetur voluptas!',
    company: 'Skull Developers.'
  },{
    id: idGen(),
    image: logoShield,
    title: 'FullStack Goland',
    time: 'Now',
    location: 'Colombia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio soluta tenetur voluptas!',
    company: 'Shield Solutions CyberSecurity.'
  },{
    id: idGen(),
    image: logoPaper,
    title: 'C++ Genius',
    time: 'Now',
    location: 'Colombia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio soluta tenetur voluptas!',
    company: 'Paper Solutions SAS.'
  },
]


function Jobs() {
  return (
      <div className={'jobContainer flex gap-10 justify-center items-center flex-wrap py-10'}>
        {
          DB.map(({id, image, title, time, location, description, company}) => {
            return (
                <div
                    key={id}
                    className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-xl shadow-grayIsh-400/700 hover:shadow-xl">
                  <span className={'flex justify-between items-center gap-4 '}>
                    <h1 className={'text-[16px] font-semibold text-textColor group-hover:text-white'}>{title}</h1>
                    <span className={'flex items-center text-[#ccc] gap-1'}>
                      <BiTimeFive/>{time}
                    </span>
                  </span>
                  <h6 className={'text-[#ccc]'}>{location}</h6>
                  <p className={'text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'}>{description}</p>
                  <div className="company flex items-center gap-2">
                    <img
                        className={'w-[10%]'}
                        src={image}
                        alt={'Company Line'}
                    />
                    <span className={'text-[14px] py-[1rem] block group-hover:text-white'}>{company}</span>
                  </div>
                  <button
                      className={'border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor'}>
                    Apply now
                  </button>
                </div>
            )
          })


        }
      </div>
  );
}

export default Jobs;