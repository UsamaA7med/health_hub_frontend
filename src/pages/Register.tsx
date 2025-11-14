import {
  registerSchema,
  TRegisterSchema,
} from '@/validations/registerValidation'
import { Button, Card, CardBody, Form, Input } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
  })
  const onSubmit: SubmitHandler<TRegisterSchema> = (data) => console.log(data)
  return (
    <div className="flex justify-center">
      <div className="w-1/3 min-w-[300px]">
        <Card>
          <CardBody>
            <div className="flex flex-col gap-5 p-5">
              <div className="flex flex-col gap-2">
                <p className="text-xl font-bold">Create Account</p>
                <p className="text-[#4B5563] text-sm">
                  Please sign up to book an appointment
                </p>
              </div>
              <Form className="gap-5" onSubmit={handleSubmit(onSubmit)}>
                <Input
                  label="Full Name"
                  {...register('fullName')}
                  isInvalid={!!errors.fullName}
                  errorMessage={errors.fullName?.message}
                  labelPlacement="outside-top"
                  radius="none"
                  variant="bordered"
                  className="rounded-none"
                />
                <Input
                  label="Email"
                  {...register('email')}
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message}
                  labelPlacement="outside-top"
                  radius="none"
                  variant="bordered"
                  className="rounded-none"
                />
                <Input
                  label="Password"
                  {...register('password')}
                  isInvalid={!!errors.password}
                  errorMessage={errors.password?.message}
                  labelPlacement="outside-top"
                  radius="none"
                  variant="bordered"
                  type="password"
                  className="rounded-none"
                />
                <Button
                  className="w-full  text-white "
                  color="primary"
                  type="submit"
                >
                  Create account
                </Button>
              </Form>
              <div className="flex gap-1 text-sm">
                <p>Already have an account?</p>
                <Link to="/login" className="text-primary underline">
                  Login
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Register
