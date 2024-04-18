import Button from "../components/common/Button/Button";
import InputFields from "../components/common/FormElement/InputFields";
import Radio from "../components/common/FormElement/Radio";
import StarRating from "../components/common/FormElement/StarRating";
import Textarea from "../components/common/FormElement/Textarea";

export default function page({params}) {
  const radioData=["Yes","No"]
  return (
    <section>
     
      <div className="max-w-[1140px] mx-auto py-10 px-5">
      <p>{params.slag}</p>
        <form method="post" action="">
            <InputFields labelName="Name" placeholder="Enter Your Name" id="name" />
            <div className="flex gap-4 md:flex-row flex-col flex-wrap">
            <StarRating labelName="Did you find the restaurant's atmosphere and cleanliness satisfactory? " className="mt-3 mb-3 text-base" mainClassName="w-[49%]" />
            <StarRating labelName="How quickly and efficiently was your service provided?" className="mt-3 mb-3 text-base" mainClassName="w-[49%]"/>
            <StarRating labelName="Was the menu diverse enough to match your tastes and preferences?" className="mt-3 mb-3 text-base" mainClassName="w-[49%]"/>
            <StarRating labelName="How did you like the taste and quality of the food you ordered?" className="mt-3 mb-3 text-base" mainClassName="w-[49%]"/>
            </div>
            <Radio mainClassName="mt-6 mb-3" labelName="Do you think our prices are fair considering the food and service quality?" radioData={radioData}/>
            <Textarea labelName="Can you tell us about any specific dish or part of your experience that was particularly good or bad?"/>
            <Button>Send</Button>
        </form>
        </div>
    </section>
  )
}