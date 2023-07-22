
// Imported Images
import imgSimple from '../../Assets/simple.png'
import imgSkull from '../../Assets/skull.png'
import imgShield from '../../Assets/shield.png'

function Value() {
  return (
      <div className={'mb-[4rem] mt-[6rem]'}>
        <h1 className={'text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[60%] block'}>The value that holds us
          true and to Account</h1>
        <div className={'grid gap-[8rem] grid-cols-3 items-center'}>
          {/*singleGrid 1*/}
          <div className={'singleGrid rounded-[10px] hover:bg-lime-100 p-[1.5rem]'}>
            <div className={'flex items-center gap-3'}>
              <div className={'imgDiv p-[4px] rounded-[.8rem] bg-blue-100 h-[40px] w-[40px] flex items-center justify-center'}>
                <img src={imgSimple} alt={'SimpleImg'} className={'w-[70%]'}/>
              </div>
              <span className={'font-semibold text-textColor text-[18px] '}>Simplicity</span>
            </div>
            <p className={'text-[13px] text-textColor opacity-[0.7] py-[1rem] font-semibold'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis ex inventore molestias ratione totam!</p>
          </div>
          {/*singleGrid 2*/}
          <div className={'singleGrid rounded-[10px] hover:bg-[#DFE7FF] p-[1.5rem]'}>
            <div className={'flex items-center gap-3'}>
              <div className={'imgDiv p-[4px] rounded-[.8rem] bg-red-100 h-[40px] w-[40px] flex items-center justify-center'}>
                <img src={imgSkull} alt={'SimpleImg'} className={'w-[70%]'}/>
              </div>
              <span className={'font-semibold text-textColor text-[18px] '}>Skull Cyber security</span>
            </div>
            <p className={'text-[13px] text-textColor opacity-[0.7] py-[1rem] font-semibold'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis ex inventore molestias ratione totam!</p>
          </div>
          {/*singleGrid 3*/}
          <div className={'singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]'}>
            <div className={'flex items-center gap-3'}>
              <div className={'imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'}>
                <img src={imgShield} alt={'SimpleImg'} className={'w-[70%]'}/>
              </div>
              <span className={'font-semibold text-textColor text-[18px] '}>Shield Firewalls & IDS Systems</span>
            </div>
            <p className={'text-[13px] text-textColor opacity-[0.7] py-[1rem] font-semibold'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis ex inventore molestias ratione totam!</p>
          </div>

        </div>
      </div>
  );
}

export default Value;