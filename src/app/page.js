export default function Catalogo() {
  const productos = [
    {
      titulo: "Refrigeradores/Vitrinas",
      descripcion: "Catálogo completo de equipos de refrigeración comercial e industrial",
      pdf: "/pdfs/3K CATALOGO.pdf",
      icono: "ri-fridge-fill"
    },
    {
      titulo: "Básculas DIBAL",
      descripcion: "Sistemas de pesaje para diferentes aplicaciones comerciales",
      pdf: "/pdfs/Lista de precios comercial 2025.pdf",
      icono: "ri-scales-fill"
    },
    {
      titulo: "Básculas Industriales/Indicadores",
      descripcion: "Equipos de indicación, etiquetado e impresión para comercios",
      pdf: "/pdfs/Lista de precios industrial 2025.pdf",
      icono: "ri-bar-chart-box-fill"
    },
    {
      titulo: "Básculas KRETZ",
      descripcion: "Sistemas de pesaje para diferentes aplicaciones comerciales",
      pdf: "/pdfs/kretz.pdf",
      icono: "ri-weight-fill"
    },
    {
      titulo: "Punto de venta",
      descripcion: "Sistema de punto de venta para su negocio",
      pdf: "/pdfs/SITEMA PUNTO DE VENTA.pdf",
      icono: "ri-store-2-fill"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-t from-primary-200 to-primary-foreground py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center">Catálogo de productos</h1>
        <p className="text-center text-gray-600 mt-2">
          Ve nuestros catálogos en PDF para conocer toda nuestra gama de productos.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productos.map((p, i) => {
            const viewerUrl = `https://docs.google.com/viewer?url=https://catalogonextjs.netlify.app${encodeURIComponent(p.pdf)}&embedded=true`;

            return (
              <div
                key={i}
                className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center border border-red-100 hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4"><i className={p.icono}></i></div>
                <h2 className="text-lg font-bold">{p.titulo}</h2>
                <p className="text-sm text-gray-500">{p.descripcion}</p>
                <a
                  href={viewerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition flex items-center gap-2"
                >
                  <i className={p.icono}></i>
                  Ver PDF
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
