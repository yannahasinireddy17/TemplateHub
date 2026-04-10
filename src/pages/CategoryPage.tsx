import { useParams } from 'react-router-dom';
import { templates, categories } from '../data/templates';
import { FileText, Download, Layers } from 'lucide-react';

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();

  const categoryInfo = categories.find((c) => c.id === categoryId);
  const categoryTemplates = templates.filter((t) => t.categoryId === categoryId); 

  return (
    <div className="bg-[#191919] min-h-screen py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {categoryInfo ? (
          <div className="mb-12 border-b border-[#333] pb-8 text-center sm:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {categoryInfo.title}
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Browse our collection of {categoryInfo.title.toLowerCase()} templates.
            </p>
          </div>
        ) : (
          <div className="mb-12 border-b border-[#333] pb-8">
            <h1 className="text-4xl font-extrabold text-white mb-4">Category Not Found</h1>
          </div>
        )}

        {categoryTemplates.length > 0 && categoryInfo ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryTemplates.map((template) => (
              <div key={template.id} className="group rounded-2xl overflow-hidden flex flex-col cursor-pointer border border-[#333] hover:border-gray-600 transition-all hover:-translate-y-1 shadow-lg ring-1 ring-[#333] hover:ring-gray-500">
                {/* Top half */}
                <div className={`aspect-[3/2] flex flex-col items-center justify-center ${categoryInfo.color} p-6 relative`}>
                  <FileText className={`h-10 w-10 mb-4 opacity-90 ${categoryInfo.textColor}`} strokeWidth={1.5} />
                  <h3 className={`font-semibold text-lg text-center leading-tight opacity-90 px-4 ${categoryInfo.textColor}`}>
                    {template.title}
                  </h3>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>
                </div>

                {/* Bottom half */}
                <div className="bg-[#2a2a2a] p-5 flex flex-col justify-center flex-grow border-t border-[#333]">
                  <div className="mb-4">
                    <h4 className="text-white font-bold text-base mb-1.5 truncate">
                      {template.title}
                    </h4>
                    <p className="text-gray-400 text-sm truncate">
                      {template.subtitle}
                    </p>
                  </div>

                  <button className="w-full flex justify-center items-center gap-2 px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-[#191919] bg-white hover:bg-gray-200 transition focus:outline-none">
                    <Download className="w-4 h-4" /> Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-[#2a2a2a] rounded-2xl border border-[#333] border-dashed">
            <Layers className="mx-auto h-12 w-12 text-gray-500 mb-4" />
            <h3 className="text-lg font-medium text-white">No templates found</h3>
            <p className="mt-1 text-sm text-gray-400">We are working hard to add templates to this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
