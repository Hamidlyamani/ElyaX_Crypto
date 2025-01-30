import logo1 from '@/assets/imgs/icon.png'

export const CoinPortfolio = () => {
  return (
      <div className='flex justify-between items-center  p-2  border-b-[1px] border-gray-700'>
          <div className='flex gap-4 items-center'>
          <div className="logo">
              <img src={logo1} alt="" />
          </div>
          <div className="name">
              <h6 className='font-L_medium text-b-large'>Bitcoin</h6>
              <span className='uppercase font-L_light text-b-medium text-gray-1000 '>BTC</span>
              </div>
          </div>
          <div className='flex flex-col justify-end'>
              <div className="price text-b-large font-L_medium text-center">37%</div>
              <div className="change bg-black text-green_light text-tag rounded-full p-0.5  px-1">+2.5%</div>
          </div>
    </div>
  )
}
