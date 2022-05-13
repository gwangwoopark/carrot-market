import { useForm } from "react-hook-form";

export default function Forms() {
  const { register, watch } = useForm();

  console.log(watch());
  return (
    <form>
      <input
        {...register("username")}
        type="text"
        required
        placeholder="Username"
        minLength={5}
      />
      <input {...register("email")} type="email" required placeholder="Email" />
      <input
        {...register("password")}
        type="password"
        required
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
