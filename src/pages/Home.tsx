import { Search, FileText } from 'lucide-react'; 
import { categories, templates } from '../data/templates';

export default function Home() {
  return (
    <div className="bg-[#191919] min-h-screen font-sans pb-20">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <div className="mb-6">
          <span className="text-gray-400 text-xs font-bold tracking-[0.2em]">
            FREE · NO SIGNUP · INSTANT DOWNLOAD
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Every template you need, in one place
        </h1>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Social media, professional docs, business forms, and productivity tools — all free, all ready to download in seconds.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto flex items-center bg-[#2a2a2a] rounded-xl p-1.5 mb-10 ring-1 ring-gray-800 transition-all focus-within:ring-gray-500">
          <div className="flex-grow flex items-center pl-4">
            <Search className="h-5 w-5 text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Search 26 templates..."
              className="w-full bg-transparent text-white focus:outline-none py-3 placeholder-gray-500 text-base"
            />
          </div>
          <button className="bg-[#444] hover:bg-[#555] text-white px-8 py-3.5 rounded-lg font-medium transition-colors">
            Search
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button className="px-5 py-2.5 rounded-full border border-gray-700 hover:border-gray-400 text-sm font-medium text-white transition-colors bg-transparent">All</button>
          <button className="px-5 py-2.5 rounded-full border border-gray-700 hover:border-gray-400 text-sm font-medium text-white transition-colors bg-transparent">Social media</button>
          <button className="px-5 py-2.5 rounded-full border border-gray-700 hover:border-gray-400 text-sm font-medium text-white transition-colors bg-transparent">Professional</button>
          <button className="px-5 py-2.5 rounded-full border border-gray-700 hover:border-gray-400 text-sm font-medium text-white transition-colors bg-transparent">Business</button>
          <button className="px-5 py-2.5 rounded-full border border-gray-700 hover:border-gray-400 text-sm font-medium text-white transition-colors bg-transparent">Productivity</button>
        </div>
      </div>

      {/* Categories & Templates Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {categories.map((category) => {
          const categoryTemplates = templates.filter(t => t.categoryId === category.id);
          if (categoryTemplates.length === 0) return null;

          return (
            <div key={category.id} className="mb-20">
              <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-8">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categoryTemplates.map(template => (
                  <div key={template.id} className="group rounded-2xl overflow-hidden flex flex-col cursor-pointer border border-[#333] hover:border-gray-600 transition-all hover:-translate-y-1">
                    {/* Top half */}
                    <div className={`aspect-[3/2] flex flex-col items-center justify-center ${category.color} p-6 relative`}>
                      <FileText className={`h-10 w-10 mb-4 opacity-80 ${category.textColor}`} strokeWidth={1.5} />
                      <h3 className={`font-semibold text-lg text-center leading-tight opacity-90 px-4 ${category.textColor}`}>
                        {template.title}
                      </h3>
                      {/* Hover overlay hint */}
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>
                    </div>
                    
                    {/* Bottom half */}
                    <div className="bg-[#2a2a2a] p-5 flex flex-col justify-center flex-grow border-t border-[#333]">
                      <h4 className="text-white font-bold text-base mb-1.5 truncate">
                        {template.title}
                      </h4>
                      <p className="text-gray-400 text-sm truncate">
                        {template.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
