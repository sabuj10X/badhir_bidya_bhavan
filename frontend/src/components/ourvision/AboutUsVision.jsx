import React from "react";
import { Award, Target } from "lucide-react";
const AboutUsVision = () => {
  return (
    <div className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-violet-100 to-violet-50 rounded-2xl p-8 border border-violet-200 dark:border-violet-800 dark:bg-slate-800">
              <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mb-6 ">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 ">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed h-[200px] overflow-y-scroll">
                At Badhir BidyaBhaban, our vision is to create an inclusive and
                empowering environment for the hearing-impaired community. We
                aim to provide quality education, resources, and support that
                enable individuals to thrive and achieve their full potential.
                To realize this vision, we are committed to providing holistic
                educational programs through a specialized curriculum tailored
                to the unique learning needs of deaf and hard-of-hearing
                students, from early childhood education to vocational training.
                Our approach integrates sign language instruction, adaptive
                technologies, and personalized learning plans to ensure every
                student receives the best possible start. We believe in
                nurturing not just academic excellence but also critical
                thinking and life skills essential for independent living in
                India. Recognizing the importance of economic independence, we
                provide comprehensive skill development programs, including
                vocational courses in high-demand sectors, digital literacy
                training, and entrepreneurship workshops, with the goal of
                equipping individuals with practical skills that open doors to
                meaningful employment and self-sufficiency, contributing
                positively to the Indian workforce. Beyond the classroom, we
                foster a vibrant and supportive community by organizing cultural
                events, sports activities, and peer mentorship programs that
                encourage social interaction and confidence-building.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 border border-blue-200 dark:border-violet-800 dark:bg-slate-800">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed h-[200px] overflow-y-scroll">
                Our mission is to empower the hearing-impaired community by
                providing specialized, accessible education and comprehensive
                support services. We are dedicated to building a vibrant and
                inclusive community where every individual has equal
                opportunities to learn, grow, and contribute positively to
                society. We strive to unlock their full potential by providing a
                holistic learning experience that goes beyond the classroom,
                including academic excellence, vocational training, and life
                skills necessary for independent living. Our commitment extends
                to creating a nurturing environment where students receive
                personalized attention, and their families are provided with the
                necessary resources and counseling. We believe that by fostering
                a strong sense of community, through peer mentorship and
                cultural engagement, we can help individuals build the
                confidence and connections needed to thrive. Ultimately, our
                work is a step towards a more equitable and inclusive society,
                where the rights and abilities of the hearing-impaired are
                recognized, celebrated, and fully integrated into the fabric of
                our nation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsVision;
