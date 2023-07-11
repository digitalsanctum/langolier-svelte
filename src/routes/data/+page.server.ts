import { fail } from "@sveltejs/kit"
// import {z, ZodType} from "zod"
// import { superValidate } from "sveltekit-superforms/server"


/*
const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const RegistrationSchema = z.object({
  profileImage: z
    .any()
    .refine((files) => files?.length === 0, "Image is required.") // if no file files?.length === 0, if file files?.length === 1
    .refine((files) => files?.[0]?.size >= MAX_FILE_SIZE, `Max file size is 5MB.`) // this should be greater than or equals (>=) not less that or equals (<=)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
});
 */

/*const schema = z.object({

})*/

///// Load //////////////////////////////////////////////////////////

/*export const load = async (event) => {
    const uploadForm = await superValidate(event, schema)
    return {
        uploadForm
    }
}*/

///// Form actions //////////////////////////////////////////////////


export const actions = {
    upload: async ({request}) => {
        console.log("got here");
        const data = await request.formData();
        const file = data.get('file-upload');

        const fileTypes = [".csv"];
        let includesFileType = false;
        for(let i = 0; i < fileTypes.length; i++) {
            if(file.endsWith(fileTypes[i])) {
                includesFileType = true;
                break;
            }
        }

        if (!includesFileType) return fail(400, { error: "File type not supported." });

        console.log(file);

        // TODO - store the file

        return {success: true};

    },
};
