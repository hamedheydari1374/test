import { longContent } from '../../data/course.js'

export default function CourseLongContent({ course }) {
  return (
    <section className="bg-night-800 py-14" aria-labelledby="long-content-title">
      <div className="mx-auto max-w-4xl px-4">
        <h2 id="long-content-title" className="text-xl font-black leading-9 text-white sm:text-2xl sm:leading-[2.6rem]">
          درباره {course.title} و بازار کار آن
        </h2>
        <div className="mt-6 space-y-5 text-[13.5px] leading-8 text-white/60">
          {longContent.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
