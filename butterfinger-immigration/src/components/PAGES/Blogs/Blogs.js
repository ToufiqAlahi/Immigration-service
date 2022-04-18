import React from "react";
import './Blogs.css'

const Blogs = () => {
    return (
        <div className="m-4">
            <p className=''> QnA Section <span className='text-lg'> Click the "plus" icon below</span> </p>
            <div className=''></div>
            <div className="">
                <div className="tab w-full overflow-hidden border-t">
                    <input className="absolute opacity-0 " id="tab-multi-one" type="checkbox" name="tabs" />
                    <label className="font-bold text-5xl text-fuchsia-800  block p-5 leading-normal cursor-pointer" htmlFor="tab-multi-one"> Difference between authorization and authentication ?</label>
                    <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                        <p className="p-5 "> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum corrupti blanditiis doloremque dolores et dicta expedita magni, quia iure autem. </p>
                    </div>
                </div>
                <div className="tab w-full overflow-hidden border-t">
                    <input className="absolute opacity-0" id="tab-multi-two" type="checkbox" name="tabs" />
                    <label className="  " htmlFor="tab-multi-two">Purpose of using firebase? What other options do we have to implement authentication? ?</label>
                    <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                        <p className="p-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem velit quasi quibusdam possimus quas illum eos veniam corporis similique quo! </p>
                    </div>
                </div>
                <div className="tab w-full overflow-hidden border-t">
                    <input className="absolute opacity-0" id="tab-multi-three" type="checkbox" name="tabs" />
                    <label className="  text-5xl text-fuchsia-800 font-bold block p-5 leading-normal cursor-pointer" htmlFor="tab-multi-three">Difference among Inline, Block, Inline-block  </label>
                    <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                        <p className="p-5 ">What other services does firebase provide other than authentication ?  <br /><br />

                            1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nostrum.
                            <br /><br />

                            2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ab fuga officiis recusandae iure? Ut? <br /><br />
                        </p>

                        <br />
                    </div>
                    <hr />
                </div>

            </div>
        </div>
    );
};

export default Blogs;
