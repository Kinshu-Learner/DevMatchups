import { FieldError, UseFormRegister, ControllerRenderProps, Control, UseControllerProps } from "react-hook-form";
import { z, ZodType } from "zod";


export const UserSchema: ZodType<FormData> = z
.object({
    teamName: z.string().min(1, { message: "Team name is required" }),
    hackathonName: z.string().min(1, { message: "Hackathon name is required" }),
    regURL: z.string().url({ message: "Please enter a valid URL" }),
    hackathonMode: z.string().min(1, { message: "Hackathon mode is required" }),
    memberCount: z.string().min(1, { message: "Member count must be at least 1" }),
    skills: z.string().min(1, { message: "Enter at least 1 skill" }),
    role: z.string().min(1, { message: "Role is required" }),
    experience: z.string().min(1, { message: "Experience is required" }),
    
    regDate: z.string(),
    location: z.string().min(1, { message: "Location is required" }),
    description: z.string().optional(),
});


export type FormData = {
  teamName: string;
  hackathonName: string;
  regURL: string;
  hackathonMode: string;
  memberCount: string;
  skills: string | null;
  role: string;
  experience: string;
  
  regDate: string;
  location: string;
  description?: string;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  label: string;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  helper?: boolean;
  valueAsNumber?: boolean;
  options?: readonly unknown[],
  isMulti?: boolean,
};

export type ValidFieldNames =
  | "teamName"
  | "hackathonName"
  | "regURL"
  | "hackathonMode"
  | "memberCount"
  | "skills"
  | "role"
  | "experience"
  | "regDate"
  | "location"
  | "description";
