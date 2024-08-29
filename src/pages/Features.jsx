import React from 'react'
import { CgExternal } from "react-icons/cg";
import { CgQuote } from "react-icons/cg";
import { BiLike } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { TiAttachment } from "react-icons/ti";
import { FaAddressCard } from "react-icons/fa";
import { FiToggleRight } from "react-icons/fi";
import { HiCheck } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { WiTime4 } from "react-icons/wi";


const Features = () => {
  return (
  <>
 <div className="container">
  <h3 className=' text-[#fff] text-5xl font-bold w-[576px] h-[168px] mt-[100px] ml-[100px] hover:scale-105 transition'> <span className=' text-[#003285]'> Intelligent</span> cloud-based
 <span className=' text-[#003285]'>  note-taking </span>and collaboration tool</h3>
 <p className=' text-[#fff] ml-[100px]'> Experience the power of smart note-taking and transform the way you work today.</p>
 <input className=' w-[576px] h-[84px] ml-[100px] rounded-md mt-10 p-5' type="text" placeholder='Enter Your Email' />
 <div className=' w-[140px] h-[65px] bg-[#03AED2] hover:scale-105 rounded-md transition mt-[-75px] absolute ml-[520px] '>
 <h2 className=' absolute p-5 text-[#fff] font-bold'> signup</h2>
 <CgExternal className=' absolute mt-[20px] w-[30px] h-[30px] ml-[80px] text-[#fff]' />

 </div>
 <div>
  <img className=' absolute w-[343px] h-[483px] mt-[-380px] ml-[830px] rounded-sm hover:scale-105 transition' src=" https://smart-n-otes.vercel.app/images/Banner.png" alt="img" />
  
 </div>
 <div className=' flex justify-between items-center mt-[150px]'>
  <img src=" https://smart-n-otes.vercel.app/images/path-to-logo4.png" alt="img" />
  <img src=" https://smart-n-otes.vercel.app/images/path-to-logo3.png" alt="img" />
  <img src=" https://smart-n-otes.vercel.app/images/path-to-logo2.png" alt="img" />
  <img src=" https://smart-n-otes.vercel.app/images/path-to-logo4.png" alt="img" />
  
  <img src=" https://smart-n-otes.vercel.app/images/path-to-logo4.png" alt="img" />
  <img src=" https://smart-n-otes.vercel.app/images/path-to-logo3.png" alt="img" />
  <img src=" https://smart-n-otes.vercel.app/images/path-to-logo2.png" alt="img" />
  <img src=" https://smart-n-otes.vercel.app/images/path-to-logo4.png" alt="img" />
 </div>
  
  </div>  
  <div className="container">
  <div className=' flex justify-center items-center mt-5  hover:scale-105 transition '>
  <CgQuote className=' w-[40px] h-[40px] text-[#15F5BA] mr-[320px]'/>
  <h2 className=' w-[339px] h-[152px] text-[#fff] font-bold absolute mt-[170px] hover:scale-105 transition'> The real-time synchronization and AI-powered organization have made our workflow more efficient than ever.</h2>
  <h3 className=' text-[#fff] absolute mt-[230px] '> Sarah Johnson <span className=' text-[#747264] ml-12'> TechSavvv Solutions </span></h3>
  </div>
  <div>
    <h2 className=' text-4xl text-[#fff] flex justify-center items-center mt-[170px]'> Discover the Power of <span className=' text-[#6AD4DD] ml-10'> SmartNotes</span></h2>
    <p className=' w-[550px] h-[56px] text-[#fff] ml-[360px] mt-[40px]'> SmartNotes is packed with innovative features designed to revolutionize the way you take notes, collaborate with others, and stay organized.</p>
    <div className=' w-[550px] h-[218px] border border-solid ml-[60px] mt-10 relative hover:scale-110 transition'>
    <BiLike className=' absolute text-[#fff] w-[50px] h-[50px] ml-5 mt-5'/>
    <h2 className=' text-3xl text-[#fff] mt-[80px] ml-5'> Cross-Platform Accessibility
    </h2>
    <h3 className=' w-[511px] h-[72px] text-[#fff] ml-5 mt-6'> Whether you're on your desktop, tablet, or smartphone, SmartNotes is accessible across all devices. Work seamlessly on the go and never miss a beat.</h3>
    </div>

    <div className=' mt-[-258px] ml-[620px]'>
    <div className=' w-[560px] h-[218px] border border-solid ml-[30px] mt-10 relative hover:scale-110 transition'>
    <FaAddressCard  className=' absolute text-[#fff] w-[50px] h-[50px] ml-5 mt-5'/>
    <h2 className=' text-3xl text-[#fff] mt-[80px] ml-5'> Customizable Templates

    </h2>
    <h3 className=' w-[511px] h-[72px] text-[#fff] ml-5 mt-6'> Create custom templates for your recurring tasks or projects to save time and ensure consistency. Tailor SmartNotes to fit your unique workflow and preferences.

     </h3>
    </div>
    </div>
    <div className=' w-[271px] h-[322px] border border-solid relative ml-[60px] mt-10 hover:scale-105 transition'>
    <FaLock className=' absolute text-[#fff] w-[40px] h-[40px]  mt-5 ml-5'/>
    <h2 className=' w-[120px] h-[40px] text-[#fff] mt-[80px] ml-5'> Secure Cloud Storage</h2>
    <p className=' absolute text-[#fff] w-[221px] h-[141px] ml-5 mt-10'> Rest easy knowing that your notes are securely stored in the cloud. Access your information from any device, anytime, without worrying about losing important data.</p>
     
    </div>
    <div className=' flex justify-center items-center ml-[290px] mt-[-360px]'>
    <div className=' w-[271px] h-[322px] border border-solid relative mt-10 hover:scale-105 transition'>
    <FaSearch className=' absolute text-[#fff] w-[40px] h-[40px]  mt-5 ml-5'/>
    <h2 className=' w-[120px] h-[40px] text-[#fff] mt-[80px] ml-5'> Real-Time Collaboration</h2>
    <p className=' absolute text-[#fff] w-[221px] h-[141px] ml-5 mt-10'>Collaborate seamlessly with your team members or classmates in real-time on shared notes and projects. </p>
     
    </div>
    <div className=' w-[271px] h-[322px] border border-solid relative ml-[20px] mt-10 hover:scale-105 transition'>
    <LuRefreshCcw className=' absolute text-[#fff] w-[40px] h-[40px]  mt-5 ml-5'/>
    <h2 className=' w-[120px] h-[40px] text-[#fff] mt-[80px] ml-5'> AI-Powered Organization</h2>
    <p className=' absolute text-[#fff] w-[221px] h-[141px] ml-5 mt-10'> Our AI-powered organization feature categorizes and prioritizes your notes, making it easy to find what you need when you need it.</p>
     
    </div>
    <div className=' w-[271px] h-[322px] border border-solid relative ml-[20px] mt-10 hover:scale-105 transition'>
    <TiAttachment className=' absolute text-[#fff] w-[40px] h-[40px]  mt-5 ml-5'/>
    <h2 className=' w-[120px] h-[40px] text-[#fff] mt-[80px] ml-5'> Integrations</h2>
    <p className=' absolute text-[#fff] w-[221px] h-[141px] ml-5 mt-10'> Connect SmartNotes with your favorite productivity tools like Google Drive, Trello, and Slack. Streamline your workflow by syncing data across platforms and enhancing collaboration.</p>
     
    </div>
    </div>
    <div className=' flex justify-center items-center mt-[100px] hover:scale-105 transition'>
    <CgQuote className=' w-[40px] h-[40px] text-[#15F5BA] mt-[-120px] absolute mr-72'/>
   <h3 className=' text-[#fff] w-[300px] h-[96px]'> The real-time synchronization and AI-powered organization have made our workflow more efficient than ever.</h3>
   <p className=' text-[#fff]  absolute mt-[100px]'> Sarah Johnson <span className=' text-gray-600 ml-6'> TechSavvv Solutions</span></p>
    </div>
    <div className=' flex justify-center items-center mt-[100px] hover:scale-105 transition'>
      <img className=' w-[1000px] h-[652px]' src=" https://smart-n-otes.vercel.app/images/Video.png" alt="img" />
    </div>
    <div className=' flex justify-center items-center mt-[100px] hover:scale-105 transition'>
    <CgQuote className=' w-[40px] h-[40px] text-[#15F5BA] mt-[-120px] absolute mr-72'/>

    <h3 className=' text-[#fff] w-[300px] h-[96px]'> The real-time synchronization and AI-powered organization have made our workflow more efficient than ever.</h3>
    <p className=' text-[#fff]  absolute mt-[100px]'> Sarah Johnson <span className=' text-gray-600 ml-6'> TechSavvv Solutions</span></p>
    </div>
    
  </div>
  </div>
  <div className='w-full h-[900px] bg-black mt-[100px] '>
    <div className=' flex justify-center items-center'>
    <h2 className=' text-[#fff] text-3xl font-bold mt-[50px]'> Pricing & Plans</h2>
    </div>
    <div className=' mt-[50px] flex justify-center items-center'>
    <p className=' text-[#fff] w-[620px] h-[56px]'> With lots of unique blocks, you can easily build a page without coding. Build your next <span className=' ml-[280px]'> landing page.</span></p>
    </div>
    <div className=' flex justify-center items-center mt-[10px]'>
    <h3 className=' text-[#fff] '> Monthly</h3>
    <FiToggleRight className=' text-[#fff] m-5 w-[48px] h-[30px] ' />
     <h3 className=' text-[#fff]'> Yearly <span className=' text-[#229799]'> Save 25%</span></h3>
      
    </div>
 <div className=' flex justify-center items-center'>
 <div className=' w-[336px] h-[550px] border border-solid mt-10 ml-[30px] bg-[#fff] hover:bg-[#000] transition hover:scale-105'>
    <h2 className=' text-2xl text-[#15F5BA] p-5'> Individual Plan</h2>
    <h2 className=' text-3xl text-[#000] hover:text-[#CCD5AE] p-5'> $9.99 <span className=' text-[#000] hover:text-[#CCD5AE]'> / month</span></h2>
    <h3 className=' text-[#00712D] text-4xl p-5 mt-[-20px]'> <HiCheck /> <span className=' text-[#3795BD] text-[24px] mt-[-40px] ml-10 absolute'> Real-time collaboration</span></h3>
    <h3 className=' text-[#00712D] text-4xl p-5 mt-[-20px]'> <HiCheck /> <span className=' text-[#3795BD] text-[24px] mt-[-40px] ml-10 absolute'> Real-time collaboration</span></h3>
    <h3 className=' text-[#00712D] text-4xl p-5 mt-[-20px]'> <HiCheck /> <span className=' text-[#3795BD] text-[24px] mt-[-40px] ml-10 absolute'> Real-time collaboration</span></h3>
    <h3 className=' text-[#00712D] text-4xl p-5 mt-[-20px]'> <HiCheck /> <span className=' text-[#3795BD] text-[24px] mt-[-40px] ml-10 absolute'> Real-time collaboration</span></h3>
    <h3 className=' text-[#00712D] text-4xl p-5 mt-[-20px]'> <HiCheck /> <span className=' text-[#3795BD] text-[24px] mt-[-40px] ml-10 absolute'> Real-time collaboration</span></h3>
    <button className=' text-[#000] w-[270px] h-[40px] bg-[#229799] ml-7 rounded-md hover:scale-105 transition'> Start free trial</button>
    <p className=' text-gray-900 p-5 flex justify-center items-center'> No credit card required</p>

    
      </div>
      <div className=' w-[336px] h-[550px] border border-solid mt-10 ml-[30px] bg-[#fff] hover:bg-[#000] transition hover:scale-105'>
    <h2 className=' text-2xl text-[#15F5BA] p-5'> Individual Plan</h2>
    <h2 className=' text-3xl text-[#000] hover:text-[#CCD5AE] p-5'> $9.99 <span className=' text-[#000] hover:text-[#CCD5AE]'> / month</span></h2>
    <h3 className=' text-[#00712D] text-4xl p-5 mt-[-20px]'> <HiCheck /> <span className=' text-[#3795BD] text-[24px] mt-[-40px] ml-10 absolute'>Everything in the Individual Plan</span></h3>
    <h3 className=' text-[#00712D] text-4xl p-5 mt-[-20px]'> <HiCheck /> <span className=' text-[#3795BD] text-[24px] mt-[-40px] ml-10 absolute'> Unlimited cloud storage</span></h3>
    <h3 className=' text-[#00712D] text-4xl p-5 mt-[-20px]'> <HiCheck /> <span className=' text-[#3795BD] text-[24px] mt-[-40px] ml-10 absolute'> Advanced integrations</span></h3>
    <h3 className=' text-[#00712D] text-4xl p-5 mt-[-20px]'> <HiCheck /> <span className=' text-[#3795BD] text-[24px] mt-[-40px] ml-10 absolute'> Team management and permissions</span></h3>
    <h3 className=' text-[#00712D] text-4xl p-5 mt-[-20px]'> <HiCheck /> <span className=' text-[#3795BD] text-[24px] mt-[-40px] ml-10 absolute'> Shared templates and note libraries</span></h3>
    <button className=' text-[#000] w-[270px] h-[40px] bg-[#229799] ml-7 rounded-md hover:scale-105 transition'> Start free trial</button>
    <p className=' text-gray-900 p-5 flex justify-center items-center'> No credit card required</p>

    
      </div>
      <div className=' w-[336px] h-[550px] border border-solid mt-10 ml-[30px] bg-[#fff] hover:bg-[#000] transition hover:scale-105'>
    <h2 className=' text-2xl text-[#15F5BA] p-5'> Individual Plan</h2>
    <h2 className=' text-3xl text-[#000] hover:text-[#CCD5AE] p-5'> Custom </h2>
    <h3 className=' text-[#00712D] text-4xl p-5 mt-[-20px]'> <HiCheck /> <span className=' text-[#3795BD] text-[24px] mt-[-40px] ml-10 absolute'> Everything in the Team Plan</span></h3>
    <h3 className=' text-[#00712D] text-4xl p-5 mt-[-20px]'> <HiCheck /> <span className=' text-[#3795BD] text-[24px] mt-[-40px] ml-10 absolute'> Dedicated account manager</span></h3>
    <h3 className=' text-[#00712D] text-4xl p-5 mt-[-20px]'> <HiCheck /> <span className=' text-[#3795BD] text-[24px] mt-[-40px] ml-10 absolute'> Enterprise-grade security</span></h3>
    <h3 className=' text-[#00712D] text-4xl p-5 mt-[-20px]'> <HiCheck /> <span className=' text-[#3795BD] text-[24px] mt-[-40px] ml-10 absolute'> Customized onboarding</span></h3>
    <h3 className=' text-[#00712D] text-4xl p-5 mt-[-20px]'> <HiCheck /> <span className=' text-[#3795BD] text-[24px] mt-[-40px] ml-10 absolute'>  Advanced analytics</span></h3>
    <button className=' text-[#000] w-[270px] h-[40px] bg-[#229799] ml-7 rounded-md hover:scale-105 transition'>contact Support</button>
    <p className=' text-gray-900 p-5 flex justify-center items-center'> No credit card required</p>

    
      </div>
    </div>
    </div>
    <div className=' flex justify-center items-center mt-[100px]'>
 <CgQuote className=' w-[40px] h-[40px] text-[#15F5BA] mt-[-120px] absolute mr-72'/>
 <h3 className=' text-[#fff] w-[300px] h-[96px]'> The real-time synchronization and AI-powered organization have made our workflow more efficient than ever.</h3>
 <p className=' text-[#fff]  absolute mt-[100px]'> Sarah Johnson <span className=' text-gray-600 ml-6'> TechSavvv Solutions</span></p>
  </div>
  <div className=' flex justify-center items-center'>
 <h2 className=' text-4xl text-[#fff] mt-[100px]'> Frequently Asked <span className=' text-[#179BAE]'> Questions</span></h2>
 </div>
 <div className=' flex justify-center items-center mt-[30px]'>
 <h3 className=' w-[630px] h-[84px] text-[#fff]'> We've compiled a list of the most frequently asked questions about SmartNotes to help you get the information you need. If you have any other questions, feel free to reach out <span className=' ml-[200px]'> to our support team.</span></h3>

 </div>
 <div className=' border border-teal-400 rounded-lg bottom-4 overflow-hidden transition-all duration-300 text-teal-400 w-[600px] h-[62px] ml-[370px] '>
  <div className=' flex justify-between items-center p-5 cursor-pointer'>
    <h3 className=' text-[#fff]'> What is SmartNotes?</h3>
    <div className=' transform transition-transform duration-300'>
    <HiChevronRight className=' w-[20px] h-[20px]' />

    </div>

  </div>

 </div>

 <div className=' border border-teal-400 rounded-lg bottom-4 overflow-hidden transition-all duration-300 text-teal-400 w-[600px] h-[62px] ml-[370px] mt-5'>
  <div className=' flex justify-between items-center p-5 cursor-pointer'>
    <h3 className=' text-[#fff]'>How do I get started with SmartNotes?</h3>
    <div className=' transform transition-transform duration-300'>
    <HiChevronRight className=' w-[20px] h-[20px]' />

    </div>

  </div>

 </div>
 <div className=' border border-teal-400 rounded-lg bottom-4 overflow-hidden transition-all duration-300 text-teal-400 w-[600px] h-[62px] ml-[370px] mt-5'>
  <div className=' flex justify-between items-center p-5 cursor-pointer'>
    <h3 className=' text-[#fff]'> What are the key features of SmartNotes?</h3>
    <div className=' transform transition-transform duration-300'>
    <HiChevronRight className=' w-[20px] h-[20px]' />

    </div>

  </div>

 </div>
 <div className=' border border-teal-400 rounded-lg bottom-4 overflow-hidden transition-all duration-300 text-teal-400 w-[600px] h-[62px] ml-[370px] m-5'>
  <div className=' flex justify-between items-center p-5 cursor-pointer'>
    <h3 className=' text-[#fff]'> How much does SmartNotes cost?</h3>
    <div className=' transform transition-transform duration-300'>
    <HiChevronRight className=' w-[20px] h-[20px]' />

    </div>
npm 
  </div>

 </div>
 <div className=' border border-teal-400 rounded-lg bottom-4 overflow-hidden transition-all duration-300 text-teal-400 w-[600px] h-[62px] ml-[370px] m-5'>
  <div className=' flex justify-between items-center p-5 cursor-pointer'>
    <h3 className=' text-[#fff]'> Who is SmartNotes for?</h3>
    <div className=' transform transition-transform duration-300'>
    <HiChevronRight className=' w-[20px] h-[20px]' />

    </div>

  </div>

 </div>
 <div className=' flex justify-center items-center mt-[100px]'>
 <CgQuote className=' w-[40px] h-[40px] text-[#15F5BA] mt-[-120px] absolute mr-72'/>
 <h3 className=' text-[#fff] w-[300px] h-[96px]'> The real-time synchronization and AI-powered organization have made our workflow more efficient than ever.</h3>
 <p className=' text-[#fff]  absolute mt-[100px]'> Sarah Johnson <span className=' text-gray-600 ml-6'> TechSavvv Solutions</span></p>
 </div>
 <div className=' mt-[80px] ml-[200px]'>
  <h2 className=' text-5xl text-[#fff] w-[330px] h-[135px]'> Unlock the Full Potential of <span className=' text-[#179BAE]'> SmartNotes</span></h2>
  <p className=' w-[480px] h-[63px] text-[#fff] mt-10'> Ready to streamline your workflow and boost your productivity? Start your free trial of SmartNotes today and experience the power of smart note-taking.</p>
  <button className=' w-[222px] h-[68px] bg-[#5B99C2] relative mt-[40px] rounded-md hover:scale-105 transition'> Sign Up for free </button>
   <CgExternal className=' text-[#fff] w-[24px] h-[24px] mt-[-46px] ml-[180px] absolute'/>
   <div className=' mt-[-340px] ml-[607px] hover:scale-105 transition'>
   <img className=' w-[350px] h-[375px]' src=" https://smart-n-otes.vercel.app/images/Unlock.png" alt="img" />

   </div>
 </div>
 <div className=' bg-black w-full h-[600px] mt-[100px]'>
 <div className=' pt-[40px]'>
    
    <WiTime4 className=' w-[40px] h-[40px] bg-[#179BAE] rounded-md ml-[100px]' />
    <h2 className=' text-[#fff] mt-[-37px] font-bold text-2xl ml-[160px]'> SmartNotes</h2>
    <input className=' w-[300px] h-[50px] ml-[100px] rounded-md mt-10 p-5' type="text" placeholder='Enter Your Email' />
    <CgExternal className=' absolute mt-[-40px] w-[30px] h-[30px] ml-[350px] text-[#000]' />

    <div className=' flex justify-center items-center mt-[-120px] gap-[60px] ml-[660px]'>
      <h2 className=' text-[#fff] '> Product</h2>
      <h2 className=' text-[#fff] '> Product</h2>
      <h2 className=' text-[#fff] '> Product</h2>
      <h2 className=' text-[#fff] '> Product</h2>

    </div>

     </div>

 </div>
 
 
 
    

  </>
  )
}

export default Features