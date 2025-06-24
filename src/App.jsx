import CompanyLogo from "./components/CompanyLogo"
import FeaturesSec from "./components/FeaturesSec"
import Header from "./components/Header"
import Hero from "./components/Hero"
import MonitorSec from "./components/MonitorSec"
import PurposeSec from "./components/PurposeSec"
import ScheduleSec from "./components/ScheduleSec"

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Header />
        <Hero />
        <CompanyLogo />
        <PurposeSec />
        <FeaturesSec />
        <ScheduleSec />
        <MonitorSec />
      </div>
    </main>
  )
}

export default App
