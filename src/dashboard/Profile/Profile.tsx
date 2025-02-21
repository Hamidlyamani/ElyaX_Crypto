
import avatar from "@/assets/imgs/avatar.png"


export default function Profile() {
  return (<>

    <div className="card w-full md:w-[40%] bg-gray-10 dark:bg-sidebar rounded-xl p-6 mt-6 mx-auto">
      <div className="haeder">
        <div className="max-w-24 mx-auto">
          <img src={avatar} alt="" className="mx-auto" />
        </div>
      </div>
      <div className="content mt-8">
        <div>
          <div className="group gap-2 flex m-2 ">
            <div className="p-1 flex flex-col flex-1 ">
              <label htmlFor="first" className="font-L_regular text-b-medium dark:text-gray-50">First Name</label>
              <input type="text" name="first" className="p-3 mt-1 rounded-sm inline-0 focus:outline-none w-full text-b-medium dark:bg-gray-900" value='Jude ' />
            </div>
            <div className="p-1 flex flex-col flex-1 ">
              <label htmlFor="last" className="font-L_regular text-b-medium dark:text-gray-50">Last Name</label>
              <input type="text" name="last" className="p-3 mt-1 rounded-sm inline-0 focus:outline-none w-full text-b-medium dark:bg-gray-900" value='Bellingham ' />
            </div>
          </div>
          <div className="group gap-2 flex m-2 ">
            <div className="p-1 flex flex-col flex-1 ">
              <label htmlFor="Email" className="font-L_regular text-b-medium dark:text-gray-50">Email</label>
              <input type="email" name="Email" className="p-3 mt-1 rounded-sm inline-0 focus:outline-none w-full text-b-medium dark:bg-gray-900" value='JudeBellingham@gmail.com' />
            </div>
          </div>
          <div className="group gap-2 flex m-2 ">
            <div className="p-1 flex flex-col flex-1 ">
              <label htmlFor="Address" className="font-L_regular text-b-medium dark:text-gray-50">Address</label>
              <input type="text" name="Address" className="p-3 mt-1 rounded-sm inline-0 focus:outline-none w-full text-b-medium dark:bg-gray-900" value='17 Audnam, Amblecote, Stourbridge DY8 4AJ' />
            </div>
          </div>
          <div className="group gap-2 flex m-2 ">
            <div className="p-1 flex flex-col flex-1 ">
              <label htmlFor="Number" className="font-L_regular text-b-medium dark:text-gray-50">Contact Number</label>
              <input type="Number" name="Number" className="p-3 mt-1 rounded-sm inline-0 focus:outline-none w-full text-b-medium dark:bg-gray-900" value='1234567890' />
            </div>
          </div>
          <div className="group gap-2 flex m-2 ">
            <div className="p-1 flex flex-col flex-1 ">
              <label htmlFor="City" className="font-L_regular text-b-medium dark:text-gray-50">City</label>
              <input type="text" name="City" className="p-3 mt-1 rounded-sm inline-0 focus:outline-none w-full text-b-medium dark:bg-gray-900" value='Stourbridge' />
            </div>
            <div className="p-1 flex flex-col flex-1 ">
              <label htmlFor="State" className="font-L_regular text-b-medium dark:text-gray-50">State</label>
              <input type="text" name="State" className="p-3 mt-1 rounded-sm inline-0 focus:outline-none w-full text-b-medium dark:bg-gray-900" value='Stourbridge' />
            </div>
          </div>
          <div className="group gap-2 flex m-2 ">
            <div className="p-1 flex flex-col flex-1 ">
              <label htmlFor="Password" className="font-L_regular text-b-medium dark:text-gray-50">Password</label>
              <input type="text" name="Password" className="p-3 mt-1 rounded-sm inline-0 focus:outline-none w-full text-b-medium dark:bg-gray-900" value='Ju458741&#@32kg ' />
            </div>
          </div>
          <div className="group gap-2 flex m-2 mt-4">
            <p className="text-tag">
              *This is a demo version. All information is for display purposes only and cannot be modified
            </p>
          </div>
          <div className="group gap-2 flex m-2 my-4 ">
            <div className="p-1 flex justify-end flex-1 ">
              <button className="p-3 px-8 mx-2 rounded-sm inline-0 focus:outline-none w-fit text-b-medium dark:bg-gray-900">Cancel</button>
              <button className="p-3 px-8 mx-2 rounded-sm inline-0 focus:outline-none w-fit text-b-medium bg-green_light_1 text-black ">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

