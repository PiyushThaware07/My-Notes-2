import HeroForm from "./components/forms/HeroForm";

export default function Page() {
  return (
    <div className='h-full w-full bg-[#1faf9f] py-20'>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full h-full">
        <div className="mx-auto w-[80%] lg:ps-20">
          <h1 className='text-4xl font-semibold '>Everything you are. In one, simple link in bio.</h1>
          <p className='text-sm font-semibold my-5 text-[#1e293b]'>Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p>
          <HeroForm/>
        </div>
      </div>
    </div>
  )
}
