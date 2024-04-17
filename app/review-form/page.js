import Button from "../components/common/Button/Button";
import InputFields from "../components/common/FormElement/InputFields";
import StarRating from "../components/common/FormElement/StarRating";

export default function page() {
  return (
    <section>
      <div className="max-w-[1140px] mx-auto py-10 px-5">
        <form method="post" action="">
            <InputFields labelName="Name" placeholder="Enter Your Name" id="name" />
            <StarRating/>
            <Button>Submit</Button>
        </form>
        </div>
    </section>
  )
}
