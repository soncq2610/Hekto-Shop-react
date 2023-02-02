import * as yup from "yup";
import * as React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import BrandList from "../../components/BrandList";
import { Button, ButtonGroup } from "@chakra-ui/react";
import BrandImg from "../../images/brand.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { USER } from "../../constants/index";
import { useNavigate } from "react-router-dom";
import { Toast } from "react-toastify/dist/components";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { selectUserToken, login } from "../../redux/slice/authSlice";
import ScrollToTop from "../../components/ScrollToTop";
import { BreadCrumb } from "../../components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "lato", sans-serif;
  font-size: 1.7rem;
  color: #9096b2;
`;
const LoginForm = styled.div`
  width: 54.5rem;
  box-shadow: 0px 0px 25px 10px #f8f8fb;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 12rem;
  margin-bottom: 11rem;
  form {
    width: 80%;
  }
  .login {
    font-family: "Josefin Sans", sans-serif;
    font-size: 3.2rem;
    font-weight: bold;
    margin-top: 5rem;
    color: #000000;
  }
  .note {
    margin-bottom: 2.3rem;
  }
  .forgot {
    margin-bottom: 2rem;
    text-align: center;
  }
  .create-account {
    text-align: center;
    margin-bottom: 5rem;
  }
  .input-field {
    border: 1px solid #c2c5e1;
    margin-bottom: 2rem;
  }
  input {
    height: 5rem;
    width: 100%;
    padding-left: 20px;
    border: none;
    outline: none;
  }

  input::placeholder {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #9096b2;
    line-height: 19px;
  }

  #submidBTn {
    height: 5rem;
    border-radius: 3px;
    color: white;
    border: none;
    background-color: #fb2e86;
    width: 100%;
    margin-bottom: 2.5rem;
    font-family: "lato", sans-serif;
    font-size: 1.7rem;
    font-weight: 700;
  }
`;

export interface ILoginProps {}
export interface IFormInput {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  // name: yup.string().required("Your name can't be empty!!!"),
  email: yup
    .string()
    .email("Enter a valid mainl!")
    .required("Email can't be empty!"),
  password: yup.string().required("Password can't be empty!").min(6).max(12),
  // confirmPassword: yup.string().oneOf([yup.ref("password"), null])
});

export default function Login(props: ILoginProps) {
  const dispatch = useDispatch<any>();
  const token = useSelector(selectUserToken);
  const loginRef = React.useRef(null);

  //Hook form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });

  const navigate = useNavigate();
  React.useEffect(() => {
    if (token) {
      navigate("/");
    }
    window.scrollTo({ top: 300, behavior: "smooth" });
    // goToLoginForm();
  }, []);
  //API auth
  async function onSubmit(values: any) {
    if (USER.email === values.email && USER.password === values.password) {
      await dispatch(login());
      toast.success("Login Successful..!!");
      navigate("/");
    } else {
      toast.error("Login Failed!!");
    }
  }
  //croll to login form
  // const goToLoginForm = () => {
  //   if (loginRef.current !== null) {
  //     console.log("scroll now" + );
  //      window.scrollTo({ top: loginRef.current.offsetTop, behavior: "smooth" });
  //   }
  // };
  return (
    <>
      <BreadCrumb title="My Account" />
      <Wrapper>
        <LoginForm>
          <div className="login">Login</div>
          <div className="note">Please login using account detail bellow.</div>
          <form onSubmit={handleSubmit(onSubmit)} ref={loginRef}>
            <div className="input-field">
              <input
                placeholder="Email Address"
                {...register("email")}
                name="email"
              />
            </div>
            {errors.email && <p className="error">{errors.email.message}</p>}
            <div className="input-field">
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                name="password"
              />
            </div>
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
            <div className="forgot">Forgot your password?</div>
            <Button id="submidBTn" isLoading={isSubmitting} type="submit">
              Sign In
            </Button>
            <div className="create-account">
              Don’t have an Account?Create account
            </div>
          </form>
        </LoginForm>
        {/* <BrandImage>
        <img src={BrandImg} alt="" />
      </BrandImage> */}
        <BrandList />
      </Wrapper>
    </>
  );
}
