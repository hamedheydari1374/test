import { courseSlugs, courses } from '../data/site.js'
import CourseHero from '../components/course/CourseHero.jsx'
import PricingCards from '../components/course/PricingCards.jsx'
import StudentAvatars from '../components/course/StudentAvatars.jsx'
import CourseOutcomes from '../components/course/CourseOutcomes.jsx'
import { CourseGallery, Syllabus } from '../components/course/CourseCurriculum.jsx'
import SuccessStories from '../components/course/SuccessStories.jsx'
import CourseFaq from '../components/course/CourseFaq.jsx'
import AudioTestimonials from '../components/course/AudioTestimonials.jsx'
import PricingTable from '../components/course/PricingTable.jsx'
import CourseSchedule from '../components/course/CourseSchedule.jsx'
import ModalityCompare from '../components/course/ModalityCompare.jsx'
import OutcomeVideos from '../components/course/OutcomeVideos.jsx'
import FeaturesCompare from '../components/course/FeaturesCompare.jsx'
import ConsultationForm from '../components/course/ConsultationForm.jsx'
import BottomSignupBar from '../components/course/BottomSignupBar.jsx'
import RelatedArticles from '../components/course/RelatedArticles.jsx'
import CourseLongContent from '../components/course/CourseLongContent.jsx'
import Comments from '../components/course/Comments.jsx'

export default function CoursePage({ slug }) {
  const course = courses.find((item) => courseSlugs[item.title] === slug) ?? courses[0]

  return (
    <div className="bg-night-900">
      <CourseHero course={course} />
      <PricingCards />
      <StudentAvatars />
      <CourseOutcomes course={course} />
      <CourseGallery />
      <Syllabus />
      <SuccessStories />
      <CourseFaq />
      <AudioTestimonials />
      <PricingTable />
      <CourseSchedule />
      <ModalityCompare course={course} />
      <OutcomeVideos />
      <FeaturesCompare />
      <ConsultationForm />
      <BottomSignupBar course={course} />
      <RelatedArticles />
      <CourseLongContent course={course} />
      <Comments />
    </div>
  )
}
