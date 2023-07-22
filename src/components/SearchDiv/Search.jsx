
// Imported Icons from React-Icons
import {AiOutlineSearch, AiOutlineCloseCircle} from 'react-icons/ai'
import {BsBuildings} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'

function Search() {
  return (
      <div className={'searchDiv flex flex-col gap-10 bg-grayIsh rounded-[10px] p-[3rem]'}>
        {/*search From*/}
        <form action={''}>
          <div className="firstDiv max-w-fit flex sm:flex-col xl:flex-row justify-between items-center rounded-[8px] gap-3 bg-white p-5 shadow-lg shadow-grayIsh-800">
            {/*input Search by Job*/}
            <div className="flex gap-2 items-center  justify-between">
              <AiOutlineSearch className={'text-[25px] icon'}/>
              <input
                  type={'text'}
                  className={'bg-transparent text-blueColor focus:outline-none  max-w-fit '}
                  placeholder={'Search your Job Here...'}/>
              <AiOutlineCloseCircle className={'text-[30px] icon text-[#a5a6a6] hover:text-textColor icon'}/>
            </div>
            {/*input Search by Company*/}
            <div className="flex gap-2 items-center  justify-between">
              <BsBuildings className={'text-[25px] icon'}/>
              <input
                  type={'text'}
                  className={'bg-transparent text-blueColor focus:outline-none  max-w-fit'}
                  placeholder={'Search by Company...'}/>
              <AiOutlineCloseCircle className={'text-[30px] icon text-[#a5a6a6] hover:text-textColor icon'}/>
            </div>
            {/*input Search by Location*/}
            <div className="flex gap-2 items-center  justify-between">
              <CiLocationOn className={'text-[25px] icon'}/>
              <input
                  type={'text'}
                  className={'bg-transparent text-blueColor focus:outline-none  max-w-fit'}
                  placeholder={'Search by Location..'}/>
              <AiOutlineCloseCircle className={'text-[30px] icon text-[#a5a6a6] hover:text-textColor icon'}/>
            </div>
            <button
            className={'bg-blueColor h-full p-5 px-5 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'}
            >Search</button>
          </div>
        </form>

        {/*Sort by section*/}
        <div className={'secDiv flex items-center gap-20 justify-center'}>
          {/*Sort by Options*/}
          <div className={'singleSearch flex items-center gap-2'}>
            <label htmlFor={'relevance'} className={'text-[#808080] font-semibold'}>Sort by</label>
            <select name={''} id={'relevance'} className={'bg-white rounded-[3px] px-4 py-1 focus:outline-none'}>
              <option value={''}>Relevance</option>
              <option value={''}>Inclusive</option>
              <option value={''}>Starts With</option>
              <option value={''}>Contains</option>
            </select>
          </div>
          {/*Sort by Type*/}
          <div className={'singleSearch flex items-center gap-2'}>
            <label htmlFor={'type'} className={'text-[#808080] font-semibold'}>Type : </label>
            <select name={''} id={'type'} className={'bg-white rounded-[3px] px-4 py-1 focus:outline-none'}>
              <option value={''}>Full-Time</option>
              <option value={''}>Remote</option>
              <option value={''}>Contract</option>
              <option value={''}>Part-Time</option>
              <option value={''}>Freelancer</option>
            </select>
          </div>
          {/*Sort by Options*/}
          <div className={'singleSearch flex items-center gap-2'}>
            <label htmlFor={'level'} className={'text-[#808080] font-semibold'}>Level</label>
            <select name={''} id={'level'} className={'bg-white rounded-[3px] px-4 py-1 focus:outline-none'}>
              <option value={''}>Senior</option>
              <option value={''}>Mid-Level</option>
              <option value={''}>Beginner</option>
              <option value={''}>Advocate</option>
            </select>
          </div>

          <span className={'text-[#a1a1a1] cursor-pointer'}>Clear All</span>

        </div>

      </div>
  );
}

export default Search;