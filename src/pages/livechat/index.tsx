import Chat from "../../components/Chat/Chat";
import ContactsList from "../../components/ContactsList/ContactsList";

export default function Livechat() {
  return (
    <div className="h-screen flex flex-col">
      <header className="text-white flex items-center p-2 bg-black border border-orange-400 w-full h-20">
        <h1>LIVECHAT</h1>
      </header>
      <div className="flex h-full p-4">
        {/* <aside className="p-4 border border-yellow-500 h-full w-72">
          <section className="flex flex-col items-center p-2">
            <h3>SIDEBAR</h3>
          </section>
        </aside> */}
        <main className="flex w-full ">
          <section className="w-2/12 p-4 border border-green-500">
            <ContactsList />
          </section>
          <section className="w-10/12 flex border border-blue-500">
            <Chat />
            {/* <div className="w-72 p-4 border border-black">SIDE INFO</div> */}
          </section>
        </main>
      </div>
    </div>
  );
}
