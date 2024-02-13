import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Login() {
  return (
    <main className="h-screen p-8 flex">
      <aside className="w-5/12 flex justify-center items-center rounded-3xl bg-gradient-to-br from-rose-300 to-orange-300">
        <h1>Banner</h1>
      </aside>
      <div className="w-7/12 flex justify-center items-center">
        <section className="grid grid-flow-row gap-4">
          <h1 className="text-orange-500">Entre com sua conta! 😃</h1>
          <form className="w-96 grid grid-flow-row gap-2">
            <Input
              name="email"
              label="Seu email"
              placeholder="Email@link.com"
            />
            <Input
              name="password"
              label="Sua senha"
              type="password"
              placeholder="Digite sua senha"
            />
            <a href="/livechat">
              <Button>Entrar</Button>
            </a>
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
