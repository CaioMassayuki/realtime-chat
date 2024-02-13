import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Register() {
  return (
    <main className="h-screen p-8 flex">
      <aside className="w-5/12 flex justify-center items-center rounded-3xl bg-gradient-to-br from-rose-300 to-orange-300">
        <h1>Banner</h1>
      </aside>
      <div className="w-7/12 flex flex-col justify-center items-center">
        <section className="grid grid-flow-row gap-4">
          <h1 className="text-orange-500">Cadastre para entrar 😁</h1>
          <form
            className="w-96 grid grid-flow-row gap-2"
          >
            <Input name="name" label="Nome" placeholder="Digite seu nome..." />
            <Input name="email" label="Email" placeholder="Digite seu e-mail" />
            <Input
              name="password"
              label="Senha"
              type="password"
              placeholder="Digite uma senha"
            />
            <Input
              name="password_c"
              label="Confirme sua senha"
              type="password"
              placeholder="Digite a mesma senha"
            />
            <Button>Cadastrar</Button>
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
