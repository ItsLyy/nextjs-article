import { handleSubmission } from "@/app/actions";
import InputArea from "@/components/ui/InputArea";
import InputText from "@/components/ui/InputText";
import SubmitButton from "@/components/ui/SubmitButton";

export default function CreateBlogPost() {
  return (
    <div className="flex justify-center items-center">
      <div className="border-zinc-300 shadow-sm bg-zinc-100 border-[1px] rounded-xl p-8 max-w-xl w-full">
        <div className="mb-4">
          <h2 className="font-medium text-lg">Create Post</h2>
          <p className="text-zinc-400 text-sm">
            Create a new post to share with the world
          </p>
        </div>
        <form className="space-y-4" action={handleSubmission}>
          <InputText
            id="title"
            label="Title"
            name="title"
            placeholder="e.g. How to Build Website with NextJS"
          />
          <InputArea id="content" label="Content" name="content" />
          <InputText
            id="img-url"
            label="Image URL"
            placeholder="e.g. https://unsplash.com/photos/..."
            name="image_url"
          />
          <div className="mt-8">
            <SubmitButton>Create Post</SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
}
