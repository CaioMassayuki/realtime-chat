import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useReducer } from "react";
import useLiveChatStore from "../../store/store";
import { redirect } from "react-router-dom";

enum RegisterFormActionOptions {
  CHANGE_NAME = "CHANGE_NAME",
  CHANGE_PASS = "CHANGE_PASS",
  CHANGE_CONFIRM = "CHANGE_CONFIRM",
}

type RegisterFormActions = {
  type: RegisterFormActionOptions;
  payload: string;
};

type RegisterFormState = {
  name: string;
  pass: string;
  confirm: { text: string; hasError: boolean };
};

const initialState: RegisterFormState = {
  name: "",
  pass: "",
  confirm: { text: "", hasError: false },
};

const registerFormReducer = (
  state: RegisterFormState,
  action: RegisterFormActions
) => {
  switch (action.type) {
    case RegisterFormActionOptions.CHANGE_NAME:
      return { ...state, name: action.payload };
    case RegisterFormActionOptions.CHANGE_PASS:
      if (state.confirm.text) {
        if (action.payload === state.confirm.text) {
          return {
            ...state,
            pass: action.payload,
            confirm: { ...state.confirm, hasError: false },
          };
        }
        return {
          ...state,
          pass: action.payload,
          confirm: { ...state.confirm, hasError: true },
        };
      }
      return { ...state, pass: action.payload };
    case RegisterFormActionOptions.CHANGE_CONFIRM:
      if (action.payload === state.pass) {
        return {
          ...state,
          confirm: { text: action.payload, hasError: false },
        };
      }
      return {
        ...state,
        confirm: { text: action.payload, hasError: true },
      };
  }
};

export default function Register() {
  const [state, dispatch] = useReducer(registerFormReducer, initialState);
  const addNewUser = useLiveChatStore((storeState) => storeState.users.addUser);

  const formFulfilled =
    state.name && state.pass && state.confirm.text && !state.confirm.hasError;

  const handleRegister = () => {
    addNewUser({ name: state.name, password: state.pass });
    redirect("/");
  };

  return (
    <main className="h-screen p-8 flex">
      <aside className="w-5/12 flex justify-center items-center rounded-3xl bg-gradient-to-br from-rose-300 to-orange-300">
        <h1>Banner</h1>
      </aside>
      <div className="w-7/12 flex flex-col justify-center items-center">
        <section className="grid grid-flow-row gap-4">
          <h1 className="text-orange-500">Cadastre para entrar 😁</h1>
          <form className="w-96 grid grid-flow-row gap-2">
            <Input
              name="name"
              label="Nome"
              value={state.name}
              placeholder="Digite seu nome..."
              onChange={(e) =>
                dispatch({
                  type: RegisterFormActionOptions.CHANGE_NAME,
                  payload: e.target.value,
                })
              }
            />
            <Input
              name="password"
              label="Senha"
              type="password"
              value={state.pass}
              placeholder="Digite uma senha"
              onChange={(e) =>
                dispatch({
                  type: RegisterFormActionOptions.CHANGE_PASS,
                  payload: e.target.value,
                })
              }
            />
            <Input
              name="password_c"
              label="Confirme sua senha"
              type="password"
              value={state.confirm.text}
              placeholder="Digite a mesma senha"
              error={state.confirm.hasError}
              onChange={(e) =>
                dispatch({
                  type: RegisterFormActionOptions.CHANGE_CONFIRM,
                  payload: e.target.value,
                })
              }
            />
            <Button
              disabled={!formFulfilled}
              onClick={(e) => {
                e.preventDefault();
                handleRegister();
              }}
            >
              Cadastrar
            </Button>
            <p className="mt-2 ml-auto">
              Já possui uma conta ?{" "}
              <Link to="/" className="text-orange-500 font-semibold">
                Entre aqui
              </Link>
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
