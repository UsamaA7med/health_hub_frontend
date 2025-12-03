import { z } from 'zod'

export const completeProfileSchema = z.object({
  birthDate: z.string().min(1, 'Date is required'),
  gender: z.string().min(1, 'Gender is required'),
  lifeStyle: z.string().min(1, 'Life style is required'),
  phone: z.string().optional(),
  chronicConditions: z.array(z.string()).optional(),
  allergies: z.string().optional(),
  pastSurgeries: z.string().optional(),
  familyHistory: z.string().optional(),
})

export type TCompleteProfile = z.infer<typeof completeProfileSchema>
