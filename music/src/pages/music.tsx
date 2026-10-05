import { SeoHead } from "@/components/SeoHead";

export default function Music() {
  return (
    <>
      <SeoHead
        title="Music | Jason James Moore"
        description="Explore music projects and performances from Jason James Moore."
        path="/music"
        ogType="website"
        robots="noindex, follow"
      />
      <section className="px-6 py-20 [@media(min-width:795px)]:px-12 bg-gradient-to-b from-rose-100 via-indigo-100 to-white text-black">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <h1 className="text-5xl [@media(min-width:795px)]:text-6xl font-serif font-bold">
              Under Construction. Check back Soon!
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
