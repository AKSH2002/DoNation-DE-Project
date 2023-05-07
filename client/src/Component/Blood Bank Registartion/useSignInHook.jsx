import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
// import { authStore } from "../../store/authStore";

export let useSignInHook = () => {
  const history = useHistory();
//   const [bloodBankLogin] = authStore((state) => [state.bloodBankLogin]);
  const { mutate: SigninBloodBank } = useMutation(
    async (payload) => {
      const res = await fetch(`http://localhost:8000/blood-bank/signin`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      return res.json();
    },
    {
      onSuccess: (res) => {
        if (res.status === 200) {
          toast.success(res.message);
        //   bloodBankLogin({
        //     token: res.token,
        //     user: res.result,
        //   });
          history.push("/user-dashboard");
        } else {
          toast.error(res.message);
        }
      },
      onError: (err) => {
        toast.error(err.message);
      },
    }
  );

  return {
    SigninBloodBank,
  };
};
