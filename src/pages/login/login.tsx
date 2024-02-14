import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useReducer } from "react";
import useLiveChatStore from "../../store/store";

enum LoginFormActionOptions {
  CHANGE_NAME = "CHANGE_NAME",
  CHANGE_PASS = "CHANGE_PASS",
  WRONG_ACCESS = "WRONG_ACCESS",
}

type LoginFormActions = {
  type: LoginFormActionOptions;
  payload: any;
};

type LoginFormState = {
  name: string;
  pass: string;
  wrongAccess: boolean;
};

const initialState: LoginFormState = {
  name: "",
  pass: "",
  wrongAccess: false,
};

const loginFormReducer = (state: LoginFormState, action: LoginFormActions) => {
  switch (action.type) {
    case LoginFormActionOptions.CHANGE_NAME:
      return { ...state, name: action.payload };
    case LoginFormActionOptions.CHANGE_PASS:
      return { ...state, pass: action.payload };
    case LoginFormActionOptions.WRONG_ACCESS:
      return { ...state, wrongAccess: action.payload };
  }
};

export default function Login() {
  const [loginForm, loginFormDispatch] = useReducer(
    loginFormReducer,
    initialState
  );
  const checkCredential = useLiveChatStore(
    (state) => state.users.checkCredentials
  );
  const startSession = useLiveChatStore(
    (state) => state.liveChatSesssion.startSession
  );
  const navigate = useNavigate();

  const handleEnterSubmit = () => {
    const user = checkCredential(loginForm.name, loginForm.pass);
    if (user) {
      startSession(user);
      navigate("/chat");
    } else {
      loginFormDispatch({
        type: LoginFormActionOptions.WRONG_ACCESS,
        payload: true,
      });
    }
  };

  const formFulfilled = Boolean(loginForm.name && loginForm.pass);

  return (
    <main className="h-screen p-8 flex">
      <aside className="w-5/12 flex justify-center items-center rounded-3xl bg-gradient-to-br from-rose-300 to-orange-300">
        <h1>Banner</h1>
      </aside>
      <div className="w-7/12 flex justify-center items-center">
        <section className="grid grid-flow-row gap-4">
          <h1 className="text-orange-500">Entre com sua conta! 😃</h1>
          <form className="w-96 grid grid-flow-row gap-2">
            {loginForm.wrongAccess ? (
              <p className="text-red-500 font-semibold">
                Usuário ou senha incorretos!
              </p>
            ) : null}
            <Input
              name="name"
              label="Seu usuário"
              placeholder="Digite seu usuário"
              value={loginForm.name}
              onChange={(e) =>
                loginFormDispatch({
                  type: LoginFormActionOptions.CHANGE_NAME,
                  payload: e.target.value,
                })
              }
            />
            <Input
              name="password"
              label="Sua senha"
              type="password"
              placeholder="Digite sua senha"
              value={loginForm.pass}
              onChange={(e) =>
                loginFormDispatch({
                  type: LoginFormActionOptions.CHANGE_PASS,
                  payload: e.target.value,
                })
              }
            />
            <Button
              disabled={!formFulfilled}
              onClick={(e) => {
                e.preventDefault();
                handleEnterSubmit();
              }}
            >
              Entrar
            </Button>
          </form>
          <p className="text-center">
            Ainda não tem uma conta?{" "}
            <Link to="/register" className="text-orange-500 font-semibold">
              Cadastre-se aqui
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
