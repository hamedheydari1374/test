export default function About() {
  return (
    <section id="about" className="bg-white py-16" aria-labelledby="about-title">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <span className="text-5xl font-black leading-none text-gold-400">”</span>
        <h2 id="about-title" className="mt-4 text-xl font-black leading-9 text-ink sm:text-2xl sm:leading-[2.75rem]">
          ما در فن‌آموزان به شما یک آموزش برای اشتغال ارائه می‌دهیم نه صرفاً یک دوره آموزشی
        </h2>

        <div className="mt-8 space-y-5 text-[14px] leading-8 text-muted">
          <p>
            آموزشگاه فن‌آموزان با هدف تربیت نیروی ماهر برای ورود سریع و مطمئن به بازار کار، مجموعه‌ای متنوع از دوره‌های
            فنی و تخصصی را در قالب دپارتمان‌های مختلف برگزار می‌کند. این دوره‌ها کاملاً عملی و پروژه‌محور طراحی شده‌اند
            تا کارآموزان مهارت‌های لازم برای شروع یک شغل حرفه‌ای را کسب کنند.
          </p>
          <p>
            آموزش‌ها در کارگاه‌های مجهز و توسط مدرسین با تجربه عملی بالا برگزار می‌شوند. در پایان هر دوره، گواهینامه
            معتبر بین‌المللی از سازمان فنی و حرفه‌ای کشور به کارآموزان اعطا می‌شود که قابلیت استفاده در ایران و سایر
            کشورها را دارد.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {['دپارتمان برق و الکترونیک', 'دپارتمان اتومکانیک', 'دپارتمان تأسیسات', 'دپارتمان فناوری اطلاعات', 'دپارتمان هنر'].map(
            (item) => (
              <span key={item} className="rounded-full bg-gold-50 px-4 py-2 text-[12.5px] font-semibold text-gold-800">
                {item}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
