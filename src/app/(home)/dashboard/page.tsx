import { auth } from "../../../../auth";

export default async function HomePage() {
  const session = await auth();
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold mb-6">
        Bem-vindo de volta, {session?.user?.name} 👋
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold mb-2 text-blue-500">Usuários</h3>
          <p className="text-gray-600">Gestão de contas e permissões.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold mb-2 text-blue-500">
            Relatórios
          </h3>
          <p className="text-gray-600">Visualize métricas e análises.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold mb-2 text-blue-500">
            Configurações
          </h3>
          <p className="text-gray-600">
            Personalize o sistema conforme suas necessidades.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow">
          Criar Novo Projeto
        </button>
      </div>
    </main>
  );
}
