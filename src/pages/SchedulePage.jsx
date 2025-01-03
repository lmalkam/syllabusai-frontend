import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ScheduleInput from "../components/ScheduleInput";

export default function SchedulePage() {
  return (
    <div className='w-full flex flex-col items-center gap-8'>
            <NavBar></NavBar>
            <ScheduleInput></ScheduleInput>
          <Footer/>
            
    
        </div>
  );
}
