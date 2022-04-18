import React from "react";
import './Blogs.css'

const Blogs = () => {
    return (
        <div className="m-4">
            <p className=' qna-head'> QnA Section <span className='qna-span'> Click the "plus" icon below</span> </p>
            <div className=''></div>
            <div className="">
                <div className="tab w-full overflow-hidden border-t">
                    <input className="absolute opacity-0 " id="tab-multi-one" type="checkbox" name="tabs" />
                    <label className=" question p-5 " htmlFor="tab-multi-one"> Difference between authorization and authentication ?</label>
                    <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                        <p className="p-5 ans"> Authentication confines if the users are who they claim to be; on the other hand, Authorization defines what the users can and cannot get access into. In the authentication process, users or persons are verified. While in the Authorization process, users or persons are validated. After Authorization, authentication is usually done. Authentication transmits info through an ID Token, and Authorization sends information through an Access Token.</p>
                    </div>
                </div>
                <div className="tab w-full overflow-hidden border-t">
                    <input className="absolute opacity-0" id="tab-multi-two" type="checkbox" name="tabs" />
                    <label className="  question p-5  " htmlFor="tab-multi-two">Purpose of using firebase? What other options do we have to implement authentication? ?</label>
                    <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                        <p className="p-5 ans ">Firebase is very user-friendly and secure to use. It is considered dependable and widespread. It allows us to use a real-time database, authentication, authorization, and project hosting. Without firebase, setting up an android environment and generating a Web client ID and SHA1 key for Sign-up authentication can be used. <strong>Back4App, Parse, Kuzzle, and Couchbase</strong> would be some alternatives to firebase.  </p>
                    </div>
                </div>
                <div className="tab w-full overflow-hidden border-t">
                    <input className="absolute opacity-0" id="tab-multi-three" type="checkbox" name="tabs" />
                    <label className="  question p-5 " htmlFor="tab-multi-three">What other services does firebase provide other than authentication ?</label>
                    <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                        <p className="p-5 ans">
                            1. Firebase Cloud Firestore.<br /><br />
                            2. Firebase Cloud Storage<br /><br />
                            3. Firebase Remote Config<br /><br />
                            4. Firebase Database<br /><br />
                            5. Firebase Cloud Messaging.<br /><br />
                            6. Google Analytics.<br /><br />
                            7. Hosting.<br /><br />
                            <br /><br /> </p>

                        <br />
                    </div>
                    <hr />
                </div>

            </div>
        </div>
    );
};

export default Blogs;
